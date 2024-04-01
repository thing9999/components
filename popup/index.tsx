import { ReactNode, useEffect } from "react";
import { OverLay } from "../overlay";

interface PopupProps {
  children?: ReactNode;
  isShow: boolean;
  closeBtn?: boolean;
  onClose: () => void;
}

const PopupWrap = ({ children, onClose, closeBtn }) => {
  return (
    <div
      className="layer-basic layer-table"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {closeBtn && (
        <button
          className="close-btn"
          style={{ position: "absolute", right: "2.4rem", top: "2.4rem" }}
          onClick={onClose}
        />
      )}
      {children}
    </div>
  );
};

const Popup = ({ children, isShow, onClose, closeBtn }: PopupProps) => {
  useEffect(() => {
    const escKeyModalClose = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", escKeyModalClose);
    return () => window.removeEventListener("keydown", escKeyModalClose);
  }, []);
  return (
    <>
      {isShow ? (
        <PopupWrap children={children} onClose={onClose} closeBtn={closeBtn} />
      ) : (
        ""
      )}
      <OverLay
        onClick={onClose}
        isShow={isShow}
        background="#000000"
        opacity={0}
      ></OverLay>
    </>
  );
};

export default Popup;
