import { SetStateAction, useState } from "react";

interface RadioProps<T> {
  radioCurrent: T;
  radioKey: T;
  setRadioCurrent: React.Dispatch<SetStateAction<T>>;
}

export const Radio = <T extends unknown>({
  radioCurrent,
  radioKey,
  setRadioCurrent,
}: RadioProps<T>) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      {/* <input
        type="radio"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      ></input> */}
      <div
        className={`radio-label ${
          radioCurrent === radioKey ? "radio-checked" : ""
        }`}
        onClick={() => {
          setChecked(true);
          setRadioCurrent(radioKey);
        }}
      ></div>
    </>
  );
};
