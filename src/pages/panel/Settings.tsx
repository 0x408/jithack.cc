import { Footer } from "../../components/Footer";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

export const Settings = () => {
    return (
        <div className="flex">
            <Sidebar />
            
            <div className="p-4 ml-64 block w-full space-y-2">
                <Header page="settings" />

                <div className="border-b border-[#222]"></div>

                <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 border border-[#B5290B]/75">
                        <p className="text-base text-white mb-1">profile</p>
                        <p className="text-gray-400">placeholder</p>
                    </div>
                    <div className="p-2 border border-[#B5290B]/75">
                        <p className="text-base text-white mb-1">discord</p>
                        <button type="submit" className="px-2.5 ring-none outline-none border border-[#B5290B]/75 text-white placeholder-gray-400 bg-[#000]">link account</button>
                        <p className="text-sm text-[#B5290B] mt-1">currently linked: none</p>
                    </div>
                    <div className="p-2 border border-[#B5290B]/75">
                        <p className="text-base text-white mb-1">active subs</p>
                        <p className="text-sm text-green-500">cheat (beta) (420 days left)</p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button type="submit" className="p-2.5 ring-none outline-none border border-[#B5290B]/75 text-white placeholder-gray-400 bg-[#000]">submit</button>
                </div>

                <Footer />
            </div>
        </div>
    )
}