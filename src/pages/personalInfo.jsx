import React from "react";
import "../index.css";
import ImageSection from "../components/imageSection";
import Heading from "../components/headings";
import InputField from "../components/inputField";


let heading1 = "Register Individual Account!"
let paragraph1 ="For the purpose of industry regulation, your details are required."
let input1 = {type: "text", label: "Your Fullname", placeholder: "Invictus Innocent", isRequired: true}
let input2 = {type: "email", label: "Email Address", placeholder: "Enter email address", isRequired: true}
let input3 = {type: "password", label: "Password", placeholder: "Enter password", isRequired: true}

const PersonalInfo = () => {
    return (
        <div className="home flex items-center justify-center h-screen w-full px-24 bg-blue-300">
            <div className="h-[90%] w-[70%] flex">
                <div className="w-[45%] h-full">
                    <ImageSection />
                </div>
                <div className="w-[55%] h-full py-2 pl-20 pr-10 gap-0 flex flex-col bg-white">
                    <div className="w-[70%]">
                        <div className="">
                            <Heading heading={ heading1 } paragraph={ paragraph1 } />
                        </div>
                        <div className="mb-4">
                            <InputField prop={ input1 } />
                        </div>
                        <div className="mb-4">
                            <InputField prop={ input2 } />
                        </div>
                        <div className="">
                            <InputField prop={ input3 } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo