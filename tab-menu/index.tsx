import { SetStateAction, useEffect, useState } from "react";

interface TabButtonProps {
  label: string;
  idx: number;
  selectedTab: number;
  setSelectedTab: React.Dispatch<SetStateAction<number>>;
}

interface TabMenuList {
  tabs: { label: string }[];
  setSelected: React.Dispatch<SetStateAction<number>>;
}

const TabButton = ({
  label,
  setSelectedTab,
  idx,
  selectedTab,
}: TabButtonProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottom:
          idx === selectedTab ? "3px solid #000000" : "1px solid #4b4b4b",
        color: idx === selectedTab ? "#000000" : "#4b4b4b",
        height: "52px",
        width: "200px",
        fontSize: "20px",
        cursor: "pointer",
      }}
      onClick={() => {
        setSelectedTab(idx);
      }}
    >
      {label}
    </div>
  );
};

export const TabMenu = ({ tabs, setSelected }: TabMenuList) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  useEffect(() => {
    setSelected(selectedTab);
  }, [selectedTab]);

  return (
    <div style={{ display: "flex" }}>
      {tabs.map((t, idx) => {
        return (
          <TabButton
            key={idx}
            label={t.label}
            idx={idx}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
          />
        );
      })}
    </div>
  );
};
