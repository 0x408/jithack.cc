import { Footer } from "../../components/Footer";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { useGlobalState } from "../../states/globalState";

export const Panel = () => {
    const [ checked ] = useGlobalState("gsModeChecked");

    const [ randomColor ] = useGlobalState("randomColor");

    return (
        <div className="flex">
            <Sidebar />
            
            <div className="p-4 ml-64 block w-full space-y-2">
                <Header page="home" />

                <div className="border-b border-[#222]"></div>

                <div className="flex gap-2">
                    <div className="block w-full space-y-2">
                        <div className={`p-2 border ${checked ? `border-[${randomColor}]` : "border-[#B5290B]/75"}`}>
                            <p className="text-base text-white">message of the day</p>
                            <p className="text-gray-400">Leonoell is gay</p>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            <div className={`p-2 border ${checked ? `border-[${randomColor}]` : "border-[#B5290B]/75"}`}>
                                <p className="text-base text-white">status</p>
                                <p className="text-gray-400"><span className="text-purple-500">in development</span></p>
                            </div>
                            <div className={`p-2 border ${checked ? `border-[${randomColor}]` : "border-[#B5290B]/75"}`}>
                                <p className="text-base text-white">users</p>
                                <p className="text-gray-400">1</p>
                            </div>
                            <div className={`p-2 border ${checked ? `border-[${randomColor}]` : "border-[#B5290B]/75"}`}>
                                <p className="text-base text-white">latest user</p>
                                <p className="text-gray-400">Leonoell</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 space-y-2">
                        <div className={`p-2 border ${checked ? `border-[${randomColor}]` : "border-[#B5290B]/75"}`}>
                            <p className="text-base text-white mb-1">quick actions</p>
                            <div className="flex flex-col gap-2">
                                <button type="submit" className={`px-2.5 ring-none outline-none border ${checked ? `border-[${randomColor}]` : "border-[#B5290B]/75"} text-white placeholder-gray-400 bg-[#000]`}>
                                    rules
                                </button>
                                <button type="submit" className={`px-2.5 ring-none outline-none border ${checked ? `border-[${randomColor}]` : "border-[#B5290B]/75"} text-white placeholder-gray-400 bg-[#000]`}>
                                    tos
                                </button>
                                <button type="submit" className={`px-2.5 ring-none outline-none border ${checked ? `border-[${randomColor}]` : "border-[#B5290B]/75"} text-white placeholder-gray-400 bg-[#000]`}>
                                    join our discord server
                                </button>
                            </div>
                        </div>
                        <div className={`p-2 border ${checked ? `border-[${randomColor}]` : "border-[#B5290B]/75"}`}>
                            <div>
                                <iframe width="100%" height="300" src="https://www.youtube.com/embed/05lBjTboLrs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}