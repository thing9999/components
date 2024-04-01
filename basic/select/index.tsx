import { SetStateAction, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface SelectPropsOptions {
  value: string | number;
  label: string;
}

export interface SelectProps {
  options: SelectPropsOptions[];
  onChange?: (arg0: string) => void;
  value?: string | number;
  placeHolder?: string;
  isWithSearch?: boolean;
  setSearchValue?: React.Dispatch<SetStateAction<string>> | undefined;
  searchOptions: SelectPropsOptions[];
  searchValue: string;
}

export const Select = ({
  options,
  placeHolder,
  onChange,
  setSearchValue,
  searchValue,
  isWithSearch,
}: SelectProps) => {
  const [selectedOption, setSelectedOptions] = useState<string>("");
  const [selectedLabel, setSelectedLabel] = useState<string>("");
  const [pannelToggle, setPannelToggle] = useState<boolean>(false);

  useEffect(() => {
    if (setSearchValue) {
      setSearchValue("");
    }
  }, [pannelToggle]);

  return (
    <>
      <div className="select-box field-box">
        <div className="input-box">
          {isWithSearch && (
            <input
              className={`drop-sub-menu ${pannelToggle ? "show" : ""}`}
              type="text"
              value={searchValue}
              onChange={(e) => {
                if (setSearchValue) {
                  setSearchValue(e.target.value);
                }
              }}
            />
          )}
          <div
            className="drop-down"
            onClick={(e) => {
              console.log(e.currentTarget);

              setPannelToggle(!pannelToggle);
            }}
          >
            <div className={`selected ${pannelToggle ? "change" : ""}`}>
              <a href="#">
                {selectedLabel ? selectedLabel : placeHolder}&nbsp;
              </a>
            </div>
            <div className="options" style={{ zIndex: 1 }}>
              <ul
                className={`drop-sub-menu ${pannelToggle ? "show" : ""}`}
                key={1}
              >
                {options.map((option: SelectPropsOptions, idx) => {
                  return (
                    <>
                      <li
                        key={idx}
                        className={
                          selectedOption === option.value ? "active" : ""
                        }
                      >
                        <a
                          onClick={(e) => {
                            setSelectedOptions(option.value as string);
                            setSelectedLabel(option.label as string);
                            if (onChange) {
                              onChange(option.value as string);
                            }
                          }}
                        >
                          {option.label as string}
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {createPortal(
        <div
          style={{
            position: "fixed",
            display: pannelToggle ? "block" : "none",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
          onClick={() => setPannelToggle(false)}
        ></div>,
        document.querySelector("#root") as Element
      )}
    </>
  );
};
