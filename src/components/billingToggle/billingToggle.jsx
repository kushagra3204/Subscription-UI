import { useState } from "react";
import "./billingToggle.css"

const BillingToggle = ({handleIsYearly}) => {

    const [isMonthly,setIsMonthly] = useState(true);

    function handleToggle(value) {
        setIsMonthly(value);
        handleIsYearly(!value);
    }

    return (
        <div className="toggle-main">
            <div className={`toggle-div ${isMonthly && 'toggle-selection'}`} onClick={() => handleToggle(true)}>
                Monthly
            </div>
            <div className={`toggle-div ${!isMonthly && 'toggle-selection'}`} onClick={() => handleToggle(false)}>
                Annual
            </div>
        </div>
    );
}

export default BillingToggle;