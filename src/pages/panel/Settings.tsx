import { Footer } from "../../components/Footer";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { useState } from "react";

export const Settings = () => {

    const [checked, setChecked] = useState([]);
    const handleGsCheck = (e: any) => {
        if (e.target.checked) {
            console.log("enabled gamesense mode!")
        } else {
            console.log("disabled gamesense mode...");
        }
    }

    return (
        <div className="flex">
            <Sidebar />
            
            <div className="p-4 ml-64 block w-full space-y-2">
                <Header page="settings" />

                <div className="border-b border-[#222]"></div>

                <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 border border-[#B5290B]/75">
                        <p className="text-base text-white mb-1">website</p>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="gamesense_mode" id="gamesense_mode" onChange={handleGsCheck} className="peer relative appearance-none shrink-0 w-4 h-4 border-2 border-transparent checked:border-[#B5290B] rounded-sm mt-1 bg-white outline-none ring-none checked:bg-[#B5290B] checked:border-0" />
                            <label htmlFor="gamesense_mode" className="text-white select-none">gamesense mode (beta)</label>
                        </div>
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

                <Footer />
            </div>
        </div>
    )
}