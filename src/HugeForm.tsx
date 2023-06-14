import FiguraConfirmPassword from "./lib/FiguraInputComponents/FiguraConfirmPassword";
import FiguraTimeMilitary from "./lib/FiguraInputComponents/FiguraTimeMilitary";
import FiguraSubmitBtn from "./lib/FiguraSupportingComponents/FiguraSubmitBtn";
import FiguraButtonGroup from "./lib/FiguraInputComponents/FiguraButtonGroup";
import FiguraResetBtn from "./lib/FiguraSupportingComponents/FiguraResetBtn";
import FiguraDateLocal from "./lib/FiguraInputComponents/FiguraDateLocal";
import FiguraButton from "./lib/FiguraSupportingComponents/FiguraButton";
import FiguraPassword from "./lib/FiguraInputComponents/FiguraPassword";
import FiguraTextArea from "./lib/FiguraInputComponents/FiguraTextArea";
import FiguraCheckBox from "./lib/FiguraInputComponents/FiguraCheckBox";
import FiguraLabel from "./lib/FiguraSupportingComponents/FiguraLabel";
import FiguraTitle from "./lib/FiguraSupportingComponents/FiguraTitle";
import FiguraNumber from "./lib/FiguraInputComponents/FiguraNumber";
import FiguraSelect from "./lib/FiguraInputComponents/FiguraSelect";
import FiguraHidden from "./lib/FiguraInputComponents/FiguraHidden";
import FiguraPhone from "./lib/FiguraInputComponents/FiguraPhone";
import FiguraEmail from "./lib/FiguraInputComponents/FiguraEmail";
import FiguraMonth from "./lib/FiguraInputComponents/FiguraMonth";
import FiguraRadio from "./lib/FiguraInputComponents/FiguraRadio";
import FiguraRange from "./lib/FiguraInputComponents/FiguraRange";
import FiguraColor from "./lib/FiguraInputComponents/FiguraColor";
import FiguraDate from "./lib/FiguraInputComponents/FiguraDate";
import FiguraFile from "./lib/FiguraInputComponents/FiguraFile";
import FiguraTime from "./lib/FiguraInputComponents/FiguraTime";
import FiguraWeek from "./lib/FiguraInputComponents/FiguraWeek";
import FiguraText from "./lib/FiguraInputComponents/FiguraText";
import FiguraUrl from "./lib/FiguraInputComponents/FiguraUrl";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Figura from "./lib/Figura";
import "./index.css";

export default function HugeForm() {
    const [inputData, setInputData] = useState<any>([]);

    function someApiCall(data) {
        var result = Object.keys(data).map((key) => [key + " = ", data[key]]);
        setInputData(result);
        console.log(data);
    };

    return (
        <div className="flex flex-col justify-center items-center overflow-hidden">
            <Figura figuraID={"signup"} onSubmit={someApiCall}>

                <FiguraTitle>Title</FiguraTitle>

                <FiguraText>
                    <FiguraLabel>Text:</FiguraLabel>
                </FiguraText>

                <FiguraEmail>
                    <FiguraLabel>Email:</FiguraLabel>
                </FiguraEmail>

                <FiguraPhone>
                    <FiguraLabel>Phone:</FiguraLabel>
                </FiguraPhone>

                <FiguraPassword>
                    <FiguraLabel>Password:</FiguraLabel>
                </FiguraPassword>

                <FiguraConfirmPassword>
                    <FiguraLabel>Confirm Password:</FiguraLabel>
                </FiguraConfirmPassword>

                <FiguraDate>
                    <FiguraLabel>Date:</FiguraLabel>
                </FiguraDate>

                <FiguraDateLocal>
                    <FiguraLabel>Date Time Local:</FiguraLabel>
                </FiguraDateLocal>

                <FiguraFile>
                    <FiguraLabel>File:</FiguraLabel>
                </FiguraFile>

                <FiguraMonth>
                    <FiguraLabel>Month:</FiguraLabel>
                </FiguraMonth>

                <FiguraNumber>
                    <FiguraLabel>Number:</FiguraLabel>
                </FiguraNumber>

                <FiguraSelect>
                    <FiguraLabel>Select:</FiguraLabel>
                    <option value="">Choose an option...</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </FiguraSelect>

                <FiguraTextArea>
                    <FiguraLabel>Text Area:</FiguraLabel>
                </FiguraTextArea>

                <FiguraTime>
                    <FiguraLabel>Time:</FiguraLabel>
                </FiguraTime>

                <FiguraTimeMilitary>
                    <FiguraLabel>Time Military:</FiguraLabel>
                </FiguraTimeMilitary>

                <FiguraUrl>
                    <FiguraLabel>Url:</FiguraLabel>
                </FiguraUrl>

                <FiguraWeek>
                    <FiguraLabel>Week:</FiguraLabel>
                </FiguraWeek>

                <FiguraButtonGroup>
                    <FiguraLabel>What sex are you?</FiguraLabel>
                    <FiguraButton>Male</FiguraButton>
                    <FiguraButton>Female</FiguraButton>
                    <FiguraButton>Other</FiguraButton>
                </FiguraButtonGroup>

                <FiguraCheckBox>
                    <FiguraLabel>This is a checkbox</FiguraLabel>
                </FiguraCheckBox>

                <FiguraRadio>
                    <FiguraLabel>This is a radio button</FiguraLabel>
                </FiguraRadio>

                <FiguraRange>
                    <FiguraLabel>Range picker</FiguraLabel>
                </FiguraRange>

                <FiguraColor>
                    <FiguraLabel>Color picker</FiguraLabel>
                </FiguraColor>

                <FiguraHidden />

                <FiguraSubmitBtn>Sign Up</FiguraSubmitBtn>
                <FiguraResetBtn>Reset</FiguraResetBtn>

            </Figura>

            <div className="lg:fixed relative w-72 h-[40rem] top-10 right-[5vw] rounded-md">
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

            <Link to={"/simple"}>
                <div className="sm:w-28 w-10 sm:h-28 h-10 lg:left-[20vw] sm:left-[8vw] left-[15vw] sm:top-48 top-5 fixed bg-gradient-to-t from-cyan-500 via-blue-500 
                to-cyan-500 bg-size-200  bg-pos-0 hover:hover:bg-pos-100 rounded-full flex justify-center 
                items-center cursor-pointer hover:shadow-md hover:shadow-black/50 hover:scale-105 
                transition-all duration-500 ease-in-out">
                    <span className="-mt-1 overflow-hidden sm:text-2xl text-xs font-black">simple</span>
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