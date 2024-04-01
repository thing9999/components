import { useEffect, useState } from "react";

interface SpacerProps {
  $width?: string;
  $height?: string;
}

export const Spacer = ({ $width, $height }: SpacerProps) => {
  const [styleObject, setStyleObject] = useState({
    height: "0px",
    width: "0px",
  });

  useEffect(() => {
    if ($width) {
      setStyleObject({
        ...styleObject,
        width: $width,
      });
    }

    if ($height) {
      setStyleObject({
        ...styleObject,
        height: $height,
      });
    }
  }, []);

  return <div style={styleObject}>&nbsp;</div>;
};
