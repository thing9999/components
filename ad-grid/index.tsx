import { ReactNode, Suspense } from "react";
import { GridHeader, GridHeaderProps } from "./grid-header";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";

interface AdGridProps {
  headerList: GridHeaderProps[];
  children: ReactNode;
}

export const AdGrid = ({ headerList, children }: AdGridProps) => {
  return (
    <>
      <div className={"table-box"}>
        <table>
          <thead>
            <GridHeader headerList={headerList} />
          </thead>
          <tbody>
            <Suspense fallback={<>loding...</>}>{children}</Suspense>
          </tbody>
        </table>
      </div>
    </>
  );
};
