import React from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()
    const simple = () => navigate("/simple")
    const huge = () => navigate("/huge")

    return (
        <div className="home-container">

            <h1>Welcome to Figura!</h1>
            <p>This application is responsible for building the react-figura library.</p>
            <p>To learn more check out the <Link to={"https://github.com/mbb10324/figura#readme"} target="_blank" rel="noopener noreferrer" className="underline text-blue-900">docs</Link></p>

            <div className="home-button-container">
                <button onClick={simple}>Simple Form</button>
                <button onClick={huge}>Huge Form</button>
            </div>

        </div>
    )
}