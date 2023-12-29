"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import CopyButton from "../CopyButton";
import { generateLink, isValidUrl } from "@/libs/api.libs";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";

const Generator = () => {
    const [longLink, setLongLink] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const handleInputURL = (event: ChangeEvent<HTMLInputElement>) => {
        setLongLink(event.target.value);
        setError("");
    };
    const handleGenerate = async (event: FormEvent) => {
        
        event.preventDefault();

        if (!isValidUrl(longLink)) return setError("URL is not valid");
        setError("");
        setLoading(true)
        const dataMessage: any = {
            url: longLink,
        };
        const newLink = await generateLink(dataMessage);
        if (newLink) setLoading(false)
        if (newLink.status == 200) {
            router.push(
                "/generated/" + newLink.data.alias,
            );
        }
    };

    return (
        loading ?
        <Loading/>
        :
        <>
            <label
                htmlFor="input-link"
                className="text-sm font-semibold tracking-wider"
            >
                Long URL
            </label>
            <input
                id="input-link"
                type="url"
                placeholder="https://example.com"
                pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"
                className={
                    "focus:ring-2 transition-all border-orange-200 bg-zinc-800 rounded-md p-2 text-lg focus:outline-none outline-none " +
                    (error != "" ? "ring-red-300" : " ring-orange-300")
                }
                onChange={handleInputURL}
            />

            {error != "" && (
                <p className="text-sm font-semibold tracking-wider text-red-400">
                    {error}
                </p>
            )}
            <button
                className="bg-orange-300 rounded-md p-2 font-bold tracking-wider uppercase text-black active:scale-95 hover:bg-orange-100 transition-all"
                onClick={handleGenerate}
            >
                Generate
            </button>
        </>
    );
};

export default Generator;
