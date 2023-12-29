import Footer from "@/components/Footer";
import { Copy } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="max-w-sm w-full  m-auto shadow-md rounded-xl p-6 bg-zinc-900 flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2 justify-start">
                    <h3 className="text-xl font-semibold bg-purple-300 text-black w-max px-2">
                        Meowbit
                    </h3>
                    <p className="text-sm">URL Shortener</p>
                </div>

                <label
                    htmlFor="input-link"
                    className="text-sm font-semibold tracking-wider"
                >
                    Long URL
                </label>
                <input
                    id="input-link"
                    className="border-2 transition-all border-orange-200 bg-zinc-800 rounded-md p-2 text-lg"
                />
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
                        value={process.env.HOST}
                    />
                    <button className="p-1 flex flex-row items-center gap-2 bg-orange-300 hover:bg-orange-50 rounded-md m-1 text-black">
                        <Copy className="w-5 h-auto" weight="bold"/>
                        <span className="font-semibold">Copy</span>

                    </button>
                </div>

                <button className="bg-orange-300 shadow-md rounded-md p-2 font-bold tracking-wider uppercase text-black active:scale-95 hover:bg-orange-100 transition-all">
                    Generate
                </button>
            </div>
            <Footer/>
        </main>
    );
}
