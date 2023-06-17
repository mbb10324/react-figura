import FiguraConfirmPassword from "../lib/FiguraInputComponents/FiguraConfirmPassword";
import FiguraTimeMilitary from "../lib/FiguraInputComponents/FiguraTimeMilitary";
import FiguraSubmitBtn from "../lib/FiguraSupportingComponents/FiguraSubmitBtn";
import FiguraButtonGroup from "../lib/FiguraInputComponents/FiguraButtonGroup";
import FiguraResetBtn from "../lib/FiguraSupportingComponents/FiguraResetBtn";
import FiguraDateLocal from "../lib/FiguraInputComponents/FiguraDateLocal";
import FiguraButton from "../lib/FiguraSupportingComponents/FiguraButton";
import FiguraPassword from "../lib/FiguraInputComponents/FiguraPassword";
import FiguraTextArea from "../lib/FiguraInputComponents/FiguraTextArea";
import FiguraCheckBox from "../lib/FiguraInputComponents/FiguraCheckBox";
import FiguraLabel from "../lib/FiguraSupportingComponents/FiguraLabel";
import FiguraTitle from "../lib/FiguraSupportingComponents/FiguraTitle";
import FiguraNumber from "../lib/FiguraInputComponents/FiguraNumber";
import FiguraSelect from "../lib/FiguraInputComponents/FiguraSelect";
import FiguraHidden from "../lib/FiguraInputComponents/FiguraHidden";
import FiguraPhone from "../lib/FiguraInputComponents/FiguraPhone";
import FiguraEmail from "../lib/FiguraInputComponents/FiguraEmail";
import FiguraMonth from "../lib/FiguraInputComponents/FiguraMonth";
import FiguraRadio from "../lib/FiguraInputComponents/FiguraRadio";
import FiguraRange from "../lib/FiguraInputComponents/FiguraRange";
import FiguraColor from "../lib/FiguraInputComponents/FiguraColor";
import FiguraDate from "../lib/FiguraInputComponents/FiguraDate";
import FiguraFile from "../lib/FiguraInputComponents/FiguraFile";
import FiguraTime from "../lib/FiguraInputComponents/FiguraTime";
import FiguraWeek from "../lib/FiguraInputComponents/FiguraWeek";
import FiguraText from "../lib/FiguraInputComponents/FiguraText";
import FiguraUrl from "../lib/FiguraInputComponents/FiguraUrl";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Figura from "../lib/Figura";
import "../lib/styles.css";

export default function HugeForm() {
    const [inputData, setInputData] = useState([]);

    function someApiCall(data) {
        var result = Object.keys(data).map((key) => [key + " = ", data[key]]);
        setInputData(result);
        console.log(data);
    };

    return (
        <div className="example-container">
            <Figura figuraID="hugeform" onSubmit={someApiCall}>

                <FiguraTitle>Title</FiguraTitle>

                <FiguraText name="text">
                    <FiguraLabel>Text:</FiguraLabel>
                </FiguraText>

                <FiguraEmail name="email">
                    <FiguraLabel>Email:</FiguraLabel>
                </FiguraEmail>

                <FiguraPhone name="phone">
                    <FiguraLabel>Phone:</FiguraLabel>
                </FiguraPhone>

                <FiguraPassword name="password">
                    <FiguraLabel>Password:</FiguraLabel>
                </FiguraPassword>

                <FiguraConfirmPassword name="confirm">
                    <FiguraLabel>Confirm Password:</FiguraLabel>
                </FiguraConfirmPassword>

                <FiguraDate name="date">
                    <FiguraLabel>Date:</FiguraLabel>
                </FiguraDate>

                <FiguraDateLocal name="datetime">
                    <FiguraLabel>Date Time Local:</FiguraLabel>
                </FiguraDateLocal>

                <FiguraFile name="file">
                    <FiguraLabel>File:</FiguraLabel>
                </FiguraFile>

                <FiguraMonth name="month">
                    <FiguraLabel>Month:</FiguraLabel>
                </FiguraMonth>

                <FiguraNumber name="number">
                    <FiguraLabel>Number:</FiguraLabel>
                </FiguraNumber>

                <FiguraSelect name="select">
                    <FiguraLabel>Select:</FiguraLabel>
                    <option value="">Choose an option...</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </FiguraSelect>

                <FiguraTextArea name="textarea">
                    <FiguraLabel>Text Area:</FiguraLabel>
                </FiguraTextArea>

                <FiguraTime name="time">
                    <FiguraLabel>Time:</FiguraLabel>
                </FiguraTime>

                <FiguraTimeMilitary name="military">
                    <FiguraLabel>Time Military:</FiguraLabel>
                </FiguraTimeMilitary>

                <FiguraUrl name="url">
                    <FiguraLabel>Url:</FiguraLabel>
                </FiguraUrl>

                <FiguraWeek name="week">
                    <FiguraLabel>Week:</FiguraLabel>
                </FiguraWeek>

                <span style={{ fontSize: "1.5vw" }}>How are you feeling today?</span>
                <FiguraButtonGroup name="group">
                    <FiguraButton>Okay</FiguraButton>
                    <FiguraButton>Good</FiguraButton>
                    <FiguraButton>Bad</FiguraButton>
                </FiguraButtonGroup>

                <FiguraCheckBox name="check">
                    <FiguraLabel>This is a checkbox</FiguraLabel>
                </FiguraCheckBox>

                <FiguraRadio name="radio">
                    <FiguraLabel>This is a radio button</FiguraLabel>
                </FiguraRadio>

                <FiguraRange name="range">
                    <FiguraLabel>Range picker</FiguraLabel>
                </FiguraRange>

                <FiguraColor name="color">
                    <FiguraLabel>Color picker</FiguraLabel>
                </FiguraColor>

                <FiguraSubmitBtn>Sign Up</FiguraSubmitBtn>
                <FiguraResetBtn>Reset</FiguraResetBtn>

                <FiguraHidden name="hidden" />

            </Figura>

            <div className="example-data-output">
                <h2>Data Output:</h2>
                {inputData &&
                    <>
                        {inputData.map((data, index) => {
                            return (
                                <p key={index}>{data}</p>
                            )
                        })}
                    </>
                }
            </div>

            <Link to={"/"}>
                <div className="example-button top-button">
                    <span>home</span>
                </div>
            </Link>

            <Link to={"/simple"}>
                <div className="example-button mid-button">
                    <span>simple</span>
                </div>
            </Link>

            <Link to={"https://github.com/mbb10324/figura#readme"} target="_blank" rel="noopener noreferrer">
                <div className="example-button bot-button">
                    <span>docs</span>
                </div>
            </Link>
        </div>
    );
};