import { Footer } from "../../components/Footer";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { useGlobalState } from "../../states/globalState";
import { useState } from "react";

export const MyProfile = () => {
    const [ checked ] = useGlobalState("gsModeChecked");

    const [ randomColor ] = useGlobalState("randomColor");

    const [ showIp, setShowIp ] = useState(false);

    return (
        <div className="flex">
            <Sidebar />
            
            <div className="p-4 ml-64 block w-full space-y-2">
                <Header page="my profile" />

                <div className="border-b border-[#222]"></div>

                <div className="grid grid-row-1 gap-2">
                    <div className={`p-2 border ${checked ? `border-[${randomColor}]` : "border-[#B5290B]/75"}`}>
                        <div className="flex items-center gap-2">
                            <div>
                                <img src="https://cdn.discordapp.com/avatars/860729435673985044/a_ba28e3b22dd4b557d63eb6fabbb548ef.webp?size=80" className="h-20 w-20" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-white text-xl">Leonoell</p>
                                <i className={`${checked ? `text-[${randomColor}]` : "text-[#B5290B]"}`}>uid 1</i>
                                <p className="text-gray-400">last injected: today at 8:25 pm</p>
                            </div>
                        </div>
                    </div>
                    <div className={`p-2 border ${checked ? `border-[${randomColor}]` : "border-[#B5290B]/75"}`}>
                        <p className="text-base text-white mb-1">user logs</p>
                        <table className="w-full text-sm text-left">
                            <thead className="text-gray-400">
                                <tr>
                                    <th>action</th>
                                    <th>time</th>
                                </tr>
                            </thead>
                            <tbody className="text-white">
                                <tr>
                                    <td>
                                        logged in with ip
                                        {showIp
                                        ?
                                        <i className="ml-2 bg-[#111]/50 px-2">
                                            1.3.3.7
                                        </i>
                                        :
                                        <span onClick={() => setShowIp(true)} className="bg-[#111] text-[#111] px-2 ml-2 cursor-pointer select-none">
                                            1.3.3.7
                                        </span>}
                                    </td>
                                    <td>today at 10:42 pm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}