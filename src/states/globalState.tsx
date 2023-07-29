import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
    gsModeChecked: localStorage.getItem("gsmode") === "true",
});

export { useGlobalState, setGlobalState };