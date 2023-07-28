export const Home = () => {
    return (
        <div className="flex h-screen">
            <div className="m-auto text-center">
                <p className="text-lg text-[#B5290B] mb-4">jithack.cc</p>
                <div className="flex items-center gap-4 text-xs text-white">
                    <span>[</span>
                    <a href="/login" className="hover:underline hover:text-[#B5290B]">login</a>
                    <span>|</span>
                    <a href="/" className="hover:underline hover:text-[#B5290B]">discord</a>
                    <span>]</span>
                </div>
            </div>
        </div>
    )
}