export const Login = () => {
    return (
        <div className="flex h-screen">
            <div className="m-auto text-center">
                <p className="text-lg text-[#B5290B] mb-4">login</p>
                <div className="flex flex-col items-center gap-4 text-xs text-white w-screen max-w-md">
                    <input required type="text" name="key" id="key" placeholder="key" className="p-2.5 w-full ring-none outline-none border border-[#B5290B]/75 placeholder-gray-400 bg-[#000]" />
                    <button type="submit" className="p-2.5 w-full ring-none outline-none border border-[#B5290B]/75 placeholder-gray-400 bg-[#000]">submit</button>
                </div>
            </div>
        </div>
    )
}