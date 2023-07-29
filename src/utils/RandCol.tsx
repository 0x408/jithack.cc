import { setGlobalState } from "../states/globalState";
import { useEffect } from "react";

export const RandCol = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            setGlobalState("randomColor", `#${Math.floor(Math.random() * 16777215).toString(16)}`);
        }, 300);
        return () => clearInterval(interval); 
    }, []);
}