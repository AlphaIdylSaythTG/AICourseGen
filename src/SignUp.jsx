import React from 'react';
import { Input } from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
import Account from './account.png';
import Password from './password.png';
import Email from './email.png';

const SignUp = () => {
    return (
        <div className="w-screen h-screen flex justify-center bg-black">
            <div className="mt-[20%] w-[50%] md:w-[20%]">
                <Input
                    isClearable
                    startContent={<img src={Email} alt="Email Address" className="w-[15%] md:w-[5%]"/>}
                    label = "Email Address"
                    className="mx-auto" // Add this class to horizontally center the input
                />
                <Input
                    isClearable
                    startContent={<img src={Account} alt="Account" className="w-[15%] md:w-[5%]"/>}
                    label="Username"
                    className="mx-auto mt-[5%]" // Add this class to horizontally center the input
                />
                <Input
                    isClearable
                    startContent={<img src={Password} alt="Password" className="w-[15%] md:w-[5%]"/>}
                    label="Password"
                    className="mx-auto mt-[5%]" // Add this class to horizontally center the input
                />
                <Input
                    isClearable
                    startContent={<img src={Password} alt="Confirm Password" className="w-[15%] md:w-[5%]"/>}
                    label="Confirm Password"
                    className="mx-auto mt-[5%]" // Add this class to horizontally center the input
                />
                <div className = "flex justify-center">
                    <Button className = "mt-[20%]" color = "primary" variant = "shadow">
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;