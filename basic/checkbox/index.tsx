import { useState } from "react";

interface CheckBoxProps {
  onChange: () => void;
}

export const CheckBox = ({ onChange }: CheckBoxProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <input type="checkbox" checked={checked} />
      <div
        onClick={() => {
          setChecked(!checked);
          console.log(checked);
        }}
        className={`input-shape ${checked ? "input-shpae-checked" : ""}`}
      ></div>
    </>
  );
};
