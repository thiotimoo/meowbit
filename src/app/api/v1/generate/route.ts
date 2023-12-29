import prismaClient from "@/libs/prisma"
import { exists } from "fs"

function generateRandomAlias(length: number) {
    const characters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    let alias = ''
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        alias += characters.charAt(randomIndex)
    }
    return alias;
}

async function generateUniqueAlias(length: number) {
    let alias = generateRandomAlias(length)
    let existingLink = await prismaClient.link.findUnique({
        where: {alias}
    });
    while (existingLink) {
        alias = generateRandomAlias(length)
        existingLink = await prismaClient.link.findUnique({
            where: {alias}
        })
    }
    return alias
}

export async function POST(request: Request) {
    const { ...body } = await request.json();
    body.alias = await generateUniqueAlias(6);
    const data = {...body  };
    console.log(data)
    const newLink = await prismaClient.link.create({data});
    console.log(newLink)
    if (!newLink) return Response.json({ status: 500, message: "FAILED" });
    return Response.json({status: 200, message: "SUCCESS", data: newLink});
}