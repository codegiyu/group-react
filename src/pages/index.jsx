import React from "react";
import '../index.css'
import SignIn from "../components/signIn";
import ImageSection from "../components/imageSection";
import Heading from "../components/headings";
import Pentagon from "../components/pentagon";

let heading1 = "Join Us!"
let paragraph1 ="To begin this journey, tell us what type of account you'd be opening."

const Home = () => {
    return (
        <div className="home flex items-center justify-center h-screen w-full px-24 bg-blue-300">
            <div className="h-[90%] w-[70%] flex bg-pink-300">
                <div className="w-[45%] h-full">
                    <ImageSection />
                </div>
                <div className="w-[55%] h-full py-2 pl-20 pr-10 gap-0 flex flex-col bg-white">
                    <SignIn />
                    <div className="w-[75%]">
                        <Heading heading={ heading1 } paragraph={ paragraph1 } />
                        <Pentagon 
                            headerOne={"Individual"}
                            summaryOne={"Personal account to manage all you activities."}
                            headerTwo={"Business"}
                            summaryTwo={"Own or belong to a company, this is for you."}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home