import React from "react";
import AccountSecurityAlert from "@/components/AccountSecurityAlert";
import Basics from "@/components/Basics";
import BrowsersAndDevices from "@/components/BrowsersAndDevices";

const SecuritySettingsTab: React.FC = () => {
    return (
        <>
            <AccountSecurityAlert/>
            <Basics/>
            <BrowsersAndDevices/>
        </>
    )
}

export default SecuritySettingsTab;