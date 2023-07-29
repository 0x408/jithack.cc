import { Footer } from "../../components/Footer";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { toast } from "react-toastify";
import { setGlobalState, useGlobalState } from "../../states/globalState";

export const Settings = () => {
    const [ checked ] = useGlobalState("gsModeChecked");
    const handleGsCheck = (e: any) => {
        if (e.target.checked) {
            setGlobalState("gsModeChecked", e.target.checked);
            localStorage.setItem("gsmode", `${e.target.checked}`);
            toast.success("gamesense mode enabled");
        } else {
            setGlobalState("gsModeChecked", e.target.checked);
            localStorage.removeItem("gsmode");
            toast.success("gamesense mode disabled");
        }
    }

    const [ randomColor ] = useGlobalState("randomColor");

    return (
        <div className="flex">
            <Sidebar />
            
            <div className="p-4 ml-64 block w-full space-y-2">
                <Header page="settings" />

                <div className="border-b border-[#222]"></div>

                <div className="grid grid-cols-2 gap-2">
                    <div className={`p-2 border ${checked ? `border-[${randomColor}]` : "border-[#B5290B]/75"}`}>
                        <p className="text-base text-white mb-1">website</p>
                        <div className="flex items-center gap-2">
                            <input checked={checked} type="checkbox" name="gamesense_mode" id="gamesense_mode" onChange={handleGsCheck} className={`peer relative appearance-none shrink-0 w-4 h-4 border-2 border-transparent ${checked ? `checked:border-[${randomColor}] checked:bg-[${randomColor}]` : "checked:border-[#B5290B] checked:bg-[#B5290B]"} rounded-sm mt-1 bg-white outline-none ring-none checked:border-0`} />
                            <label htmlFor="gamesense_mode" className="text-white select-none">gamesense mode (rainbow theme)</label>
                        </div>
                    </div>
                    <div className={`p-2 border ${checked ? `border-[${randomColor}]` : "border-[#B5290B]/75"}`}>
                        <p className="text-base text-white mb-1">discord</p>
                        <button type="submit" className={`px-2.5 ring-none outline-none border ${checked ? `border-[${randomColor}]` : "border-[#B5290B]/75"} text-white placeholder-gray-400 bg-[#000]`}>link account</button>
                        <p className={`text-sm ${checked ? `text-[${randomColor}]` : "text-[#B5290B]"} mt-1`}>currently linked: @Leonoell</p>
                    </div>
                    <div className={`p-2 border ${checked ? `border-[${randomColor}]` : "border-[#B5290B]/75"}`}>
                        <p className="text-base text-white mb-1">active subs</p>
                        <p className="text-sm text-green-500">roblox - v1.0.0 (420 days left)</p>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}