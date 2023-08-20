import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { useGlobalState } from "../../../states/globalState";

export const ConfigList = () => {
    const [ checked ] = useGlobalState("gsModeChecked");

    const [ randomColor ] = useGlobalState("randomColor");

    return (
        <div className="flex">
            <Sidebar />
            
            <div className="p-4 ml-64 block w-full space-y-2">
                <Header page="configs" />

                <div className="border-b border-[#222]"></div>

                <div className="grid grid-row-1 gap-2">
                    <div className={`p-2 border ${checked ? `border-[${randomColor}]` : "border-[#B5290B]/75"}`}>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <p className="text-white text-xl">config title</p>
                                <p className="text-gray-400">author: <span className={`${checked ? `text-[${randomColor}]` : "text-[#B5290B]"}`}>username</span></p>
                                <p className="text-sm text-gray-400">
                                    tag 1,
                                    tag 2,
                                    tag 3
                                </p>
                                <p className="text-sm text-gray-400">downloads: 0</p>
                            </div>
                            <div></div>
                            <div>
                                <button type="submit" className={`px-2.5 ring-none outline-none border ${checked ? `border-[${randomColor}]` : "border-[#B5290B]/75"} text-white placeholder-gray-400 bg-[#000]`}>
                                    view
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}