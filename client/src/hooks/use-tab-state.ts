import { useState } from "react";

export function useTabState(defaultTab: string) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  const isTabActive = (tabId: string) => activeTab === tabId;
  
  return {
    activeTab,
    setActiveTab,
    isTabActive
  };
}
