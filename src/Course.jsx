import React from 'react';
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

const Course = () => {
    return (
        <div className = "w-screen h-screen bg-black flex">
            <div className = "flex w-full flex-col mt-10">
                <Tabs aria-label="Options" className = "mx-auto">
                    <Tab key="videos" title="Videos">
                        <Card className = "w-[50%] mx-auto">
                            <CardBody>
                                Hey, here are your videos:
                            </CardBody>
                        </Card>  
                    </Tab>
                    <Tab key="summary" title="Course Summary">
                        <Card className = "w-[50%] mx-auto">
                            <CardBody>
                                Hey, here's the summary:
                            </CardBody>
                        </Card>  
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};

export default Course;