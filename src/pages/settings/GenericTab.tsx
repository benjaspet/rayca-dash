import React from "react";

interface IGenericTabProps {
    name: string;
}

const GenericTab: React.FC<IGenericTabProps> = ({ name }) => {
    return (
        <div className={"my-5 md:mx-4 dark:bg-mainDash transition-colors duration-500 ease-in-out"}>
            <div className={"mb-5 transition-colors duration-500 ease-in-out"}>
                <h3 className={"text-lg font-semibold text-gray-900 dark:text-white"}>
                    {name}
                </h3>
                <p className={"text-sm text-gray-400 font-medium dark:text-gray-400"}>
                    This is the {name} tab.
                </p>
            </div>
        </div>
    );
}

export default GenericTab;