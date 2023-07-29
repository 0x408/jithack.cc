import { useGlobalState } from "../states/globalState";

export const Footer = () => {
    const [ checked ] = useGlobalState("gsModeChecked");
    
    const [ randomColor ] = useGlobalState("randomColor");

    return (
        <div className="fixed bottom-4">
            <div className={`p-2 border ${checked ? `border-[${randomColor}]` : "border-[#B5290B]/75"}`}>
                <p className="text-gray-400 text-center text-sm">website made with 💖 by ophx</p>
            </div>
        </div>
    )
}