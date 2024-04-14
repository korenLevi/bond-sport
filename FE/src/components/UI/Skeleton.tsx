import React from "react";

import Placeholder from "react-bootstrap/Placeholder";

interface SkeletonProps {
  size?: string | undefined;
  animation?: string | undefined;
  xs?: number;
}

export const Skeleton = ({ size, animation, xs }: SkeletonProps) => {
  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <tr>
          <Placeholder
            className="w-75"
            key={index}
            xs={xs}
            />
        </tr>
      ))}
    </>
  );
};
