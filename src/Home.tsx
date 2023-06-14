import React from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()
    const simple = () => navigate("/simple")
    const huge = () => navigate("/huge")

    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center">

            <h1 className="mt-8 text-7xl md:h-28 h-60 font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Welcome to Figura!</h1>
            <p className="sm:w-[60%] w-[90%] sm:text-2xl text-md">This application is responsible for building the react-figura library.</p>
            <p className="sm:w-[60%] w-[90%] sm:text-2xl text-md">To learn more check out the <Link to={"https://github.com/mbb10324/figura#readme"} target="_blank" rel="noopener noreferrer" className="underline text-blue-900">docs
            </Link>
            </p>

            <div className="flex h-32 justify-between lg:w-[30%] md:w-[40%] sm:w-[50%] w-[90%] sm:mt-0 mt-12">

                <button className="w-36 h-12 ml-4 mt-8 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-size-200 
                bg-pos-0 hover:hover:bg-pos-100 hover:shadow-md hover:shadow-black/50 hover:scale-105 outline-none rounded-md p-2 transition-all 
                duration-500 ease-in-out" onClick={simple}>Simple Form</button>


                <button className="w-36 h-12 mr-4 mt-8 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-size-200 
                bg-pos-0 hover:hover:bg-pos-100 hover:shadow-md hover:shadow-black/50 hover:scale-105 outline-none rounded-md p-2 transition-all 
                duration-500 ease-in-out" onClick={huge}>Huge Form</button>

            </div>

        </div>
    )
}