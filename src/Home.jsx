import React from 'react';
import {Input} from "@nextui-org/react";
import Search from './search.png';

const Home = () => {
    return (
        <div className = "h-screen bg-black flex justify-center items-center">
            <div className = "w-[50%] md:w-[20%]">
                <Input isClearable startContent = {<img src={Search} alt="Search Button" className = "w-[15%] md:w-[5%]"/>} placeholder = "What would you like to learn?"/>
            </div>
        </div>
    );
};

export default Home;