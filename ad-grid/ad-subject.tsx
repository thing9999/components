import { ReactNode } from "react";

interface AdSubjectProps {
  children: ReactNode;
}

export const AdSubject = ({ children }: AdSubjectProps) => {
  return (
    <>
      <div className="infor-top">{children}</div>
    </>
  );
};
