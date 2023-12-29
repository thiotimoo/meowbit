import React from "react";

const Header = () => {
    return (
        <div className="flex flex-wrap items-center gap-2 justify-start">
            <h3 className="text-xl font-semibold bg-purple-300 text-black w-max px-2">
                Meowbit
            </h3>
            <p className="text-sm">URL Shortener</p>
        </div>
    );
};

export default Header;
