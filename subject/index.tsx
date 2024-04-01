import { ReactNode } from "react";

interface SubjectProps {
  content: ReactNode | string;
  rightSide?: ReactNode;
}

export const Subject = (props: SubjectProps) => {
  return (
    <>
      <div className="content-top">
        <div className="top-left">
          <h1>{props.content}</h1>
        </div>
        <div className="top-right">{props.rightSide && props.rightSide}</div>
      </div>
      <div style={{ height: "120px" }}></div>
    </>
  );
};
