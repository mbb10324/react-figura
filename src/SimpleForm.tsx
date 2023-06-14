import FiguraConfirmPassword from "./lib/FiguraInputComponents/FiguraConfirmPassword";
import FiguraSubmitBtn from "./lib/FiguraSupportingComponents/FiguraSubmitBtn";
import FiguraResetBtn from "./lib/FiguraSupportingComponents/FiguraResetBtn";
import FiguraPassword from "./lib/FiguraInputComponents/FiguraPassword";
import FiguraLabel from "./lib/FiguraSupportingComponents/FiguraLabel";
import FiguraTitle from "./lib/FiguraSupportingComponents/FiguraTitle";
import FiguraHidden from "./lib/FiguraInputComponents/FiguraHidden";
import FiguraEmail from "./lib/FiguraInputComponents/FiguraEmail";
import FiguraText from "./lib/FiguraInputComponents/FiguraText";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Figura from "./lib/Figura";
import "./index.css";

export default function SimpleForm() {
    const [inputData, setInputData] = useState<any>([]);

    function someApiCall(data) {
        var result = Object.keys(data).map((key) => [key + " = ", data[key]]);
        setInputData(result);
        console.log(data);
    };

    return (
        <div className="flex flex-col justify-center items-center overflow-hidden">
            <Figura figuraID={"signup"} onSubmit={someApiCall}>

                <FiguraTitle>Sign Up Form</FiguraTitle>

                <FiguraText>
                    <FiguraLabel>Name:</FiguraLabel>
                </FiguraText>

                <FiguraEmail>
                    <FiguraLabel>Email:</FiguraLabel>
                </FiguraEmail>

                <FiguraPassword>
                    <FiguraLabel>Password:</FiguraLabel>
                </FiguraPassword>

                <FiguraConfirmPassword>
                    <FiguraLabel>Confirm Password:</FiguraLabel>
                </FiguraConfirmPassword>

                <FiguraSubmitBtn>Sign Up</FiguraSubmitBtn>
                <FiguraResetBtn>Reset</FiguraResetBtn>

                <FiguraHidden />

            </Figura>

            <div className="md:fixed relative w-72 h-[34rem] top-10 right-[5vw] rounded-md">
                <p className="ml-2 text-2xl text-center mb-4">Data Output:</p>
                {inputData &&
                    <>
                        {inputData.map((data, index) => {
                            return (
                                <p className=" animate-fade" key={index}>{data}</p>
                            )
                        })}
                    </>
                }
            </div>

            <Link to={"/"}>
                <div className="sm:w-28 w-10 sm:h-28 h-10 lg:left-[20vw] sm:left-[8vw] left-[3vw] sm:top-10 top-5 fixed bg-gradient-to-t from-cyan-500 via-blue-500 
                to-cyan-500 bg-size-200  bg-pos-0 hover:hover:bg-pos-100 rounded-full flex justify-center 
                items-center cursor-pointer hover:shadow-md hover:shadow-black/50 hover:scale-105 
                transition-all duration-500 ease-in-out">
                    <span className="-mt-1 overflow-hidden sm:text-2xl text-xs font-black">home</span>
                </div>
            </Link>

            <Link to={"/huge"}>
                <div className="sm:w-28 w-10 sm:h-28 h-10 lg:left-[20vw] sm:left-[8vw] left-[15vw] sm:top-48 top-5 fixed bg-gradient-to-t from-cyan-500 via-blue-500 
                to-cyan-500 bg-size-200  bg-pos-0 hover:hover:bg-pos-100 rounded-full flex justify-center 
                items-center cursor-pointer hover:shadow-md hover:shadow-black/50 hover:scale-105 
                transition-all duration-500 ease-in-out">
                    <span className="-mt-1 overflow-hidden sm:text-2xl text-xs font-black">huge</span>
                </div>
            </Link>

            <Link to={"https://github.com/mbb10324/figura#readme"} target="_blank" rel="noopener noreferrer">
                <div className="sm:w-28 w-10 sm:h-28 h-10 lg:left-[20vw] sm:left-[8vw] right-[3vw] sm:top-[21.5rem] top-5 fixed bg-gradient-to-t from-cyan-500 via-blue-500 
                to-cyan-500 bg-size-200  bg-pos-0 hover:hover:bg-pos-100 rounded-full flex justify-center 
                items-center cursor-pointer hover:shadow-md hover:shadow-black/50 hover:scale-105 
                transition-all duration-500 ease-in-out">
                    <span className="-mt-1 overflow-hidden sm:text-2xl text-xs font-black">docs</span>
                </div>
            </Link>
        </div>
    );
};

//gridexample
//formStyle="grid grid-cols-2 gap-4 w-96 m-4 mt-20 p-2 overflow-hidden"
//titleStyle="col-span-2 text-center h-10 text-3xl overflow-hidden"
//submitbtn
//wrapper="col-span-2 mb-1" buttonStyle="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-size-200 bg-pos-0 hover:hover:bg-pos-100 outline-none rounded-md p-2 transition-all duration-500 ease-in-out"
//resetbtn
//wrapper="col-span-2 mb-1" buttonStyle="w-full bg-gray-300 hover:bg-gray-400 outline-none rounded-md p-2 transition-all duration-500 ease-in-out"