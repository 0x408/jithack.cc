import { useGlobalState } from "../states/gsModeCheckbox";

type HeaderProps = {
    page: string,
}

export const Header = (props: HeaderProps) => {
    const [ checked ] = useGlobalState("gsModeChecked");

    return (
        <div className="flex justify-between">
            <p className="text-gray-400">panel / {props.page}</p>
            <p className="text-gray-400">welcome, <span className={`${checked ? "text-purple-500" : "text-[#B5290B]"}`}>Leonoell</span>!</p>
        </div>
    )
}