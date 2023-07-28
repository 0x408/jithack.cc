import { Footer } from "../../components/Footer";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

export const Panel = () => {
    return (
        <div className="flex">
            <Sidebar />
            
            <div className="p-4 ml-64 block w-full space-y-2">
                <Header page="home" />

                <div className="border-b border-[#222]"></div>

                <div className="grid grid-cols-3 gap-2">
                    <div className="p-2 border border-[#B5290B]/75">
                        <p className="text-base text-white">status</p>
                        <p className="text-gray-400"><span className="text-green-500">working</span></p>
                    </div>
                    <div className="p-2 border border-[#B5290B]/75">
                        <p className="text-base text-white">users</p>
                        <p className="text-gray-400">...</p>
                    </div>
                    <div className="p-2 border border-[#B5290B]/75">
                        <p className="text-base text-white">latest user</p>
                        <p className="text-gray-400">...</p>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}