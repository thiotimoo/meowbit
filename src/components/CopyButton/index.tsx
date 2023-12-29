"use client";
import { Check, Copy } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";
interface Props { 
    text?: string;
}
const CopyButton: React.FC<Props> = ({ text }) => {
    let copiedTimeout: ReturnType<typeof setTimeout> = setTimeout(() => {});
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(text || "");
        setCopied(true);
        clearTimeout(copiedTimeout);

        copiedTimeout = setTimeout(() => setCopied(false), 2000);
    };
    return (
        <button
            className={
                "p-1 px-2 flex flex-row items-center gap-2 bg-orange-300 hover:bg-orange-50 rounded-md m-1 text-black transition-all active:scale-90 " +
                (copied ? "bg-green-300" : "bg-orange-300")
            }
            onClick={handleCopy}
        >
            {copied ? (
                <>
                    <Check className="w-5 h-auto" weight="bold" />
                    <span className="font-semibold">Copied</span>
                </>
            ) : (
                <>
                    <Copy className="w-5 h-auto" weight="bold" />
                    <span className="font-semibold">Copy</span>
                </>
            )}
        </button>
    );
};

export default CopyButton;
