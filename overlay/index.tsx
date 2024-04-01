import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface OverLayProps {
  background?: string;
  opacity?: number;
  isShow?: boolean;
  onClick: () => void;
  children?: ReactNode;
  $style?: CSSStyleSheet;
}

export const OverLay = ({
  background,
  opacity,
  isShow,
  onClick,
  children,
}: OverLayProps) => {
  return (
    <>
      {isShow &&
        createPortal(
          <div
            onClick={onClick}
            style={{
              zIndex: "103",
              cursor: "pointer",
              position: "fixed",
              height: "100%",
              width: "100%",
              background: background,
              opacity: opacity,
            }}
          ></div>,
          document.querySelector("#overlay") as Element
        )}
    </>
  );
};
