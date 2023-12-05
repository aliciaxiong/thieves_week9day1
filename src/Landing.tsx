import highschool from "./images/highschool.jpg"

const Landing = () => {
    return (
        <>
            <body>
                <h1> Welcome To the Neighborhood </h1>
                <h2> School Directory </h2>
                <div>
                    <img src={highschool} alt="landing photo"/>
                </div>
            </body>
        </>
    )
}

export default Landing;