import React from "react";
import '../index.css';
import Pentagon from "./pentagon";
import Secure from './secure';
import Heading from "./headings";
import Input from "./input";
import ImageSection from "./imageSection";
// import S from './secure';

import SignIn from "./signIn";

let heading1 = "Join Us!"
let paragraph1 ="To begin this journey, tell us what type of account you'd be opening."
let header1 = "Individual"
let summary1 = "Personal account to manage all you activities."
let header2 = "Business"
let summary2 = "Own or belong to a company, this is for you."

const AllComponents = () => {
    return (
        <div className="App flex items-center justify-center min-h-screen w-full py-6 px-24 bg-purple-400">
            <div className="h-[90%] w-[30%] py-6 flex flex-col gap-12 bg-white">
                <Input />
                <Secure />
                <SignIn />
                <Heading heading={ heading1 } paragraph={ paragraph1 } />
                <Pentagon 
                    headerOne={ header1 }
                    headerTwo={ header2 } 
                    summaryOne={ summary1 }
                    summaryTwo={ summary2 }
                />
                <ImageSection />

            </div>
        </div>
    )
}

export default AllComponents