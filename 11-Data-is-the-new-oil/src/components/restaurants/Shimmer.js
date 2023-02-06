const Shimmer = () => {
    return (
        <>
            {
                Array(16).fill("").map((item, index) => {
                    return(
                        <div key={index} className="border-2 border-neutral-200 hover:shadow-lg hover:shadow-zinc-300 duration-300 p-2">
                            <p><img src="" alt="" className="bg-gray-200 w-full p-10" /></p>
                            <div className="pt-1">
                                <h2 className="bg-gray-200 h-5 mt-1">&nbsp;</h2>
                                <p className="bg-gray-200 h-5 mb-2">&nbsp;</p>
                                <p className="bg-gray-200 h-5 mb-2">&nbsp;</p>
                            </div>
                        </div>
                    );
                })
            }            
        </>
    );
}

export default Shimmer;