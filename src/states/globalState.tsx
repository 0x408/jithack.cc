import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
    gsModeChecked: localStorage.getItem("gsmode") === "true",
    randomColor: "#FFFFFF",
});

export { useGlobalState, setGlobalState };