import { Prisma } from "@prisma/client";
import prismaClient from "@/libs/prisma";

export type LinkCreateBody = Prisma.Args<
    typeof prismaClient.link,
    "create"
>["data"];
export const generateLink = async (linkData: LinkCreateBody) => {
    const response = await fetch("/api/v1/generate", {
        method: "POST",
        body: JSON.stringify(linkData),
    });

    const newLink = await response.json();
    return newLink;
};

export const increaseClicks = async (alias: string) => {
    prisma?.link.update({ where: { alias }, data: {clicks: { increment: 1 }} });
};

export const isValidUrl = (url: string) => {
    try {
        const newUrl = new URL(url);
        return newUrl.protocol === "http:" || newUrl.protocol === "https:";
    } catch (err) {
        return false;
    }
};
