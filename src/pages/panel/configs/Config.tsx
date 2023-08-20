import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { useGlobalState } from "../../../states/globalState";
import { useParams } from "react-router-dom";

export const Config = () => {
    const [ checked ] = useGlobalState("gsModeChecked");

    const [ randomColor ] = useGlobalState("randomColor");

    const params = useParams();

    return (
        <div className="flex">
            <Sidebar />
            
            <div className="p-4 ml-64 block w-full space-y-2">
                <Header page="configs / config title" />

                <div className="border-b border-[#222]"></div>

                <div className="flex gap-4 w-full">
                    <div className={`p-2 border w-full ${checked ? `border-[${randomColor}]` : "border-[#B5290B]/75"}`}>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <p className="text-white text-xl">{params.cfgTitle}</p>
                                <p className="text-gray-400 mb-4">author: <span className={`${checked ? `text-[${randomColor}]` : "text-[#B5290B]"}`}>username</span></p>

                                <p className="text-white">description:</p>
                                <p className="text-gray-400 whitespace-pre-line">config description</p>

                                <p className="text-white">tags:</p>
                                <p className="text-gray-400">tag 1, tag 2, tag 3</p>
                            </div>
                        </div>
                    </div>
                    <div className={`p-2 border w-full ${checked ? `border-[${randomColor}]` : "border-[#B5290B]/75"}`}>
                        <p className="text-white text-xl">changelog</p>
                    </div>
                </div>

                <p className="text-white text-xl">user reviews</p>

                <Footer />
            </div>
        </div>
    )
}