import { useGlobalState } from "../states/globalState";

type HeaderProps = {
    page: string,
}

export const Header = (props: HeaderProps) => {
    const [ checked ] = useGlobalState("gsModeChecked");

    const [ randomColor ] = useGlobalState("randomColor");

    return (
        <div className="flex justify-between">
            <p className="text-gray-400">panel / {props.page}</p>
            <p className="text-gray-400">welcome, <span className={`${checked ? `text-[${randomColor}]` : "text-[#B5290B]"}`}>Leonoell</span>!</p>
        </div>
    )
}