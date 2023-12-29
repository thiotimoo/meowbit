"use client"
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

const ReturnButton = () => {
    const router = useRouter();
    const handleReturn = (event: FormEvent) => {
        event.preventDefault();
        router.push('/');
    };
    
    return (
        <button
            className="bg-transparent ring-2 ring-neutral-500 text-white rounded-md p-2 font-bold tracking-wider uppercase active:scale-95 hover:bg-neutral-700 transition-all"
            onClick={handleReturn}
        >
            Return to the main menu
        </button>
    );
};

export default ReturnButton;
