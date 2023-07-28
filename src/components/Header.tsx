type HeaderProps = {
    page: string,
}

export const Header = (props: HeaderProps) => {
    return (
        <div className="flex justify-between">
            <p className="text-gray-400">panel / {props.page}</p>
            <p className="text-gray-400">welcome, <span className="text-[#B5290B]">Leonoell</span>!</p>
        </div>
    )
}