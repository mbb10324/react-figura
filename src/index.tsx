import FiguraSubmitBtn from './lib/FiguraSupportingComponents/FiguraSubmitBtn';
import FiguraBigError from './lib/FiguraSupportingComponents/FiguraBigError';
import FiguraCheckBox from './lib/FiguraInputComponents/FiguraCheckBox';
import FiguraPassword from './lib/FiguraInputComponents/FiguraPassword';
import FiguraPhone from './lib/FiguraInputComponents/FiguraPhone';
import FiguraEmail from './lib/FiguraInputComponents/FiguraEmail';
import FiguraLabel from './lib/FiguraSupportingComponents/FiguraLabel';
import FiguraTitle from './lib/FiguraSupportingComponents/FiguraTitle';
import FiguraName from './lib/FiguraInputComponents/FiguraName';
import Figura from './lib/Figura';
import "./index.css";
import FiguraSelect from './lib/FiguraInputComponents/FiguraSelect';
import FiguraTime from './lib/FiguraInputComponents/FiguraTime';
import FiguraNotes from './lib/FiguraInputComponents/FiguraNotes';
import ReactDOM from 'react-dom/client';
import React from 'react';

export default function App() {

    console.log('state update')

    return (
        <div className="w-full h-full bg-[#141414] text-[#FFF7EE] flex justify-center">
            <Figura figuraID={"signUp"}>
                <FiguraTitle>Sign Up Form</FiguraTitle>
                <FiguraBigError>Please fill out all the fields correctly</FiguraBigError>
                <FiguraName>
                    <FiguraLabel>First Name:</FiguraLabel>
                </FiguraName>
                <div className='flex flex-col mb-1'>
                    <label htmlFor='test'>Test:</label>
                    <input type='week' name='test' id='test' className='text-black'></input>
                </div>
                <FiguraEmail>
                    <FiguraLabel>Email:</FiguraLabel>
                </FiguraEmail>
                <FiguraPassword>
                    <FiguraLabel>Password:</FiguraLabel>
                </FiguraPassword>
                <FiguraPhone>
                    <FiguraLabel>Phone:</FiguraLabel>
                </FiguraPhone>
                <FiguraTime>
                    <FiguraLabel>Time:</FiguraLabel>
                </FiguraTime>
                <FiguraNotes>
                    <FiguraLabel>Notes:</FiguraLabel>
                </FiguraNotes>
                <FiguraSelect>
                    <FiguraLabel>Scale:</FiguraLabel>
                    <option value=''>Choose an Option...</option>
                    <option value='Easy'>Easy</option>
                    <option value='Moderate'>Moderate</option>
                    <option value='Hard'>Hard</option>
                </FiguraSelect>
                <FiguraCheckBox>
                    <FiguraLabel>Accept Terms and Conditions</FiguraLabel>
                </FiguraCheckBox>
                <FiguraSubmitBtn>Sign Up</FiguraSubmitBtn>
            </Figura>
        </div>
    );
};

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);