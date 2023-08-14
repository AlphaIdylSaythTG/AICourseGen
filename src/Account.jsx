import React, {useState} from 'react';
import { Input } from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";

const PieceOfInfo = ({fieldName, initialValue, changedColor}) => {
    const [val, setVal] = useState(initialValue);
    const [confirmVal, setConfirmVal] = useState("");

    let color = val === initialValue ? "default" : changedColor;

    return (
        <>
            <div className = "w-full flex items-center mt-[2%]" >
                <p className = "text-white font-semibold mr-[2%]"> {fieldName}</p>
                <Input color = {color} className = "w-[20%]" value = { val } isClearable onClear = {() => {setVal("")}} onValueChange = {setVal} placeholder = {"Set your " + fieldName.toLowerCase() }/>
            </div>
            {val != initialValue && <div className = "w-full flex items-center mt-[2%]">
                <p className = "text-white font-semibold mr-[2%]">Confirm {fieldName}</p>
                <Input color = {color} className = "w-[20%]" value = { confirmVal } isClearable onClear = {() => {setConfirmVal("")}} onValueChange = {setConfirmVal} placeholder = { "Confirm your new " + fieldName.toLowerCase() }/>
            </div>}
        </>
    );
};

const Account = () => {
    const [username, setUsername] = useState("Example User");
    const [password, setPassword] = useState("Password");

    return (
        <div className="w-screen h-screen bg-black text-white">
            <div className = "flex justify-center text-center">
                <p className = "mt-[2%] text-3xl font-bold">Account Info</p>
            </div>
            <div className = "ml-[5%] text-black">
                <PieceOfInfo fieldName = "Username" initialValue = "Example User" changedColor = "primary"/> 
                <PieceOfInfo fieldName = "Password" initialValue = "Password" changedColor = "secondary"/>
            </div>
            <Button className = "mt-[5%] ml-[5%]" color = "primary" variant = "shadow">
                Confirm Account Changes
            </Button>
        </div>
    );
};

export default Account;