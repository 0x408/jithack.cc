import { Footer } from "../../components/Footer";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

export const Subs = () => {
    return (
        <div className="flex">
            <Sidebar />
            
            <div className="p-4 ml-64 block w-full space-y-2">
                <Header page="subs" />

                <div className="border-b border-[#222]"></div>

                <div className="grid grid-cols-3 gap-2">
                    <div className="p-2 border border-[#B5290B]/75">
                        <p className="text-base text-white mb-1">roblox - $?.?? USD</p>
                        <button type="submit" className="px-2.5 ring-none outline-none border border-[#B5290B]/75 text-white placeholder-gray-400 bg-[#000]">purchase</button>
                    </div>
                    <div className="p-2 border border-[#B5290B]/75">
                        <p className="text-base text-white mb-1">roblox - $?.?? USD</p>
                        <button type="submit" className="px-2.5 ring-none outline-none border border-[#B5290B]/75 text-white placeholder-gray-400 bg-[#000]">purchase</button>
                    </div>
                    <div className="p-2 border border-[#B5290B]/75">
                        <p className="text-base text-white mb-1">roblox - $?.?? USD</p>
                        <button type="submit" className="px-2.5 ring-none outline-none border border-[#B5290B]/75 text-white placeholder-gray-400 bg-[#000]">purchase</button>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}