import BillingToggle from "./components/billingToggle/billingToggle";
import SubscriptionCard from "./components/subscriptionCard/subscriptionCard";
import "./App.css";
import SubscriptionData from "./assets/subscriptionData";
import { useState } from "react";

const App = () => {

  const [isYearly,setIsYearly] = useState(false);

  function handleIsYearly(flag) {
    setIsYearly(flag);
  }

  return (
    <div className="main-div">
      <BillingToggle handleIsYearly={handleIsYearly} />
        <div className="subscription-cards-div">
          {SubscriptionData.map((subscription) => {
            return (
              <SubscriptionCard
                key={subscription.id}
                subscription = {subscription}
                isFree = {subscription.isFree}
                isPopular = {subscription.isPopular}
                isYearly = {isYearly}
                hasCredits = {subscription.hasCredits}
              />
            );
          })}
        </div>
    </div>
  );
}

export default App;
