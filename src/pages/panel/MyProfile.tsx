import { Footer } from "../../components/Footer";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

export const MyProfile = () => {
    return (
        <div className="flex">
            <Sidebar />
            
            <div className="p-4 ml-64 block w-full space-y-2">
                <Header page="my profile" />

                <div className="border-b border-[#222]"></div>

                <div className="p-2 border border-[#B5290B]/75">
                    <div className="flex items-center gap-2">
                        <div>
                            <img src="https://cdn.discordapp.com/avatars/860729435673985044/a_ba28e3b22dd4b557d63eb6fabbb548ef.webp?size=80" className="h-20 w-20" />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-white text-xl">ophx</p>
                            <i className="text-[#B5290B]">uid 1</i>
                            <p className="text-gray-400">last injected: today at 8:25 pm</p>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}