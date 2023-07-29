import { Footer } from "../../../components/Footer";
import { Sidebar } from "../../../components/Sidebar";
import { Header } from "../../../components/Header";
import { useGlobalState } from "../../../states/globalState";

export const Admin = () => {
    const [ checked ] = useGlobalState("gsModeChecked");

    const [ randomColor ] = useGlobalState("randomColor");

    return (
        <div className="flex">
            <Sidebar />
            
            <div className="p-4 ml-64 block w-full space-y-2">
                <Header page="admin panel" />

                <div className="border-b border-[#222]"></div>

                <div className="grid grid-rows-1 gap-2">
                    <div className={`p-2 border ${checked ? `border-[${randomColor}]` : "border-[#B5290B]/75"}`}>
                        <p className="text-base text-white mb-1">users</p>
                        <table className="w-full text-sm text-left">
                            <thead className="text-gray-400">
                                <tr>
                                    <th>uid</th>
                                    <th>username</th>
                                    <th>discord username</th>
                                    <th>discord id</th>
                                    <th>created at</th>
                                    <th>last injected</th>
                                    <th>admin</th>
                                    <th>actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-white">
                                <tr>
                                    <td>0</td>
                                    <td>Leonoell</td>
                                    <td>Leonoell</td>
                                    <td>860729435673985044</td>
                                    <td>today at 10:42 pm</td>
                                    <td>today at 10:42 pm</td>
                                    <td>true</td>
                                    <td>...</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={`p-2 border ${checked ? `border-[${randomColor}]` : "border-[#B5290B]/75"}`}>
                        <p className="text-base text-white mb-1">keys</p>
                        <table className="w-full text-sm text-left">
                            <thead className="text-gray-400">
                                <tr>
                                    <th>key</th>
                                    <th>created by</th>
                                    <th>created at</th>
                                </tr>
                            </thead>
                            <tbody className="text-white">
                                <tr>
                                    <td>jithack-5cfb-4e74-b232-4c13a43487c7</td>
                                    <td>Leonoell</td>
                                    <td>today at 10:42 pm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button type="submit" className={`p-2.5 ring-none outline-none border ${checked ? `border-[${randomColor}]` : "border-[#B5290B]/75"} text-white placeholder-gray-400 bg-[#000]`}>generate key</button>
                </div>

                <Footer />
            </div>
        </div>
    )
}