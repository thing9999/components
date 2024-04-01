import { CSSProperties, FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  searchButton?: boolean;
  wrapStyle?: CSSProperties;
}

export const InputText: FC<InputProps> = ({
  searchButton,
  wrapStyle,
  ...rest
}) => {
  return (
    <>
      <div className="search-field" style={wrapStyle}>
        <input type={"text"} {...rest} />
        {searchButton ? (
          <div className="search-count">
            <button type="button" className="search-btn"></button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
