
import { FC, useEffect } from "react";
import prisma from "@/libs/prisma";
import { notFound, permanentRedirect } from "next/navigation";
interface Props {
    params: {
        alias: string;
    };
}
const RedirectPage: FC<Props> = async ({ params }) => {
    const { alias } = params;
    const decodedAlias = decodeURI(alias);
    const redirectUrl = await prisma.link.findUnique({
        where: { alias: decodedAlias },
    });
    if (!redirectUrl) return notFound();
    // Redirect to an external URL
    if (redirectUrl != null) permanentRedirect(redirectUrl.url, );
};

export default RedirectPage;
