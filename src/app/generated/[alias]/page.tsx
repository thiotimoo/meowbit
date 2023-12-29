import Card from "@/components/Card";
import CopyButton from "@/components/CopyButton";
import ReturnButton from "@/components/ReturnButton";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
interface Props {
    params: {
        alias: string;
    };
}
const page: React.FC<Props> = ({ params }) => {
    const { alias } = params;
    const decodedAlias = decodeURI(alias);
    const shortUrl = process.env.HOST + "/" + decodedAlias;
    return (
        <Card>
            <label
                htmlFor="input-short"
                className="text-sm font-semibold tracking-wider"
            >
                Short URL
            </label>
            <div className="bg-orange-300 bg-opacity-10 flex flex-row rounded-md items-center">
                <input
                    id="input-short"
                    className="p-2 text-lg w-full flex-1 bg-transparent focus:outline-none border-0"
                    readOnly
                    value={shortUrl}
                />
                <CopyButton text={shortUrl} />
            </div>
            <ReturnButton />
        </Card>
    );
};

export default page;
