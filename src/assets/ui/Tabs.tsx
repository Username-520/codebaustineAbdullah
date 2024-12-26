import React, { useState } from "react";
import Webdevelopment from "./TabsContent/ui/Webdevelopment";
import MobileAppDevelopment from "./TabsContent/ui/MobileAppDevelopment";

const Tabs = () => {
  const [activeTab, setAciveTab] = useState(0);
    const tabContent = [<MobileAppDevelopment/>,<Webdevelopment />];
    const tabs = ["Mobile App Development", "Web Development", "BlockChain Development"] // 0,1,2
    const handleActiveTab = (e) => {
        setAciveTab(e);
    }
  return (
    <>
          <div className="flex items-center justify-center gap-6 container-wrapper-row">
              {tabs.map((tab, index) => 
                  <div key={index}>
                      <button className="border-black rounded-lg"
                          onClick={()=>handleActiveTab(index)}>
                    {tab}
                  </button>
                </div>
              )}
        
      </div>
      <div className="flex container-wrapper">{tabContent[]}</div>
    </>
  );
};

export default Tabs;
