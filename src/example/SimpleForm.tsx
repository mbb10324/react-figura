import FiguraConfirmPassword from "../lib/FiguraInputComponents/FiguraConfirmPassword";
import FiguraSubmitBtn from "../lib/FiguraSupportingComponents/FiguraSubmitBtn";
import FiguraResetBtn from "../lib/FiguraSupportingComponents/FiguraResetBtn";
import FiguraPassword from "../lib/FiguraInputComponents/FiguraPassword";
import FiguraLabel from "../lib/FiguraSupportingComponents/FiguraLabel";
import FiguraTitle from "../lib/FiguraSupportingComponents/FiguraTitle";
import FiguraHidden from "../lib/FiguraInputComponents/FiguraHidden";
import FiguraEmail from "../lib/FiguraInputComponents/FiguraEmail";
import FiguraText from "../lib/FiguraInputComponents/FiguraText";
import { Link } from "react-router-dom";
import Figura from "../lib/Figura";
import { useState } from "react";

export default function SimpleForm() {
	const [inputData, setInputData] = useState<any>([]);

	function someApiCall(data: any) {
		var result = Object.keys(data).map((key) => [key + " = ", data[key]]);
		setInputData(result);
		console.log(data);
	}

	return (
		<div className="example-container">
			<Figura formID="signup" onSubmit={someApiCall}>
				<FiguraTitle>Sign Up Form</FiguraTitle>

				<FiguraText name="yourname">
					<FiguraLabel>Name:</FiguraLabel>
				</FiguraText>

				<FiguraEmail name="email">
					<FiguraLabel>Email:</FiguraLabel>
				</FiguraEmail>

				<FiguraPassword name="password">
					<FiguraLabel>Password:</FiguraLabel>
				</FiguraPassword>

				{/* <FiguraConfirmPassword name="passwordconfirm">
                    <FiguraLabel>Confirm:</FiguraLabel>
                </FiguraConfirmPassword> */}

				<FiguraSubmitBtn>Sign Up</FiguraSubmitBtn>
				<FiguraResetBtn>Reset</FiguraResetBtn>

				<FiguraHidden />
			</Figura>

			<div className="example-data-output">
				<h2>Data Output:</h2>
				{inputData && (
					<>
						{inputData.map((data: string, index: string) => {
							return <p key={index}>{data}</p>;
						})}
					</>
				)}
			</div>

			<Link to={"/"}>
				<div className="example-button top-button">
					<span>home</span>
				</div>
			</Link>

			<Link to={"/huge"}>
				<div className="example-button mid-button">
					<span>huge</span>
				</div>
			</Link>

			<Link to={"https://github.com/mbb10324/figura#readme"} target="_blank" rel="noopener noreferrer">
				<div className="example-button bot-button">
					<span>docs</span>
				</div>
			</Link>
		</div>
	);
}

//gridexample
//formStyle="grid grid-cols-2 gap-4 w-96 m-4 mt-20 p-2 overflow-hidden"
//titleStyle="col-span-2 text-center h-10 text-3xl overflow-hidden"
//submitbtn
//wrapper="col-span-2 mb-1" buttonStyle="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-size-200 bg-pos-0 hover:hover:bg-pos-100 outline-none rounded-md p-2 transition-all duration-500 ease-in-out"
//resetbtn
//wrapper="col-span-2 mb-1" buttonStyle="w-full bg-gray-300 hover:bg-gray-400 outline-none rounded-md p-2 transition-all duration-500 ease-in-out"
