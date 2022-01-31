// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TimeBarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TimeBarIcon(props: TimeBarIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 39.688 39.688"}
      version={"1.1"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        transform={"translate(-76.73 -122.375)"}
        fill={"currentColor"}
        fillOpacity={"1"}
        paintOrder={"normal"}
      >
        <rect
          width={"10.583"}
          height={"21.167"}
          x={"76.729"}
          y={"140.896"}
          ry={"2.646"}
          opacity={"1"}
        ></rect>

        <rect
          width={"10.583"}
          height={"39.688"}
          x={"91.281"}
          y={"122.375"}
          ry={"2.835"}
          opacity={"1"}
        ></rect>

        <rect
          width={"10.583"}
          height={"15.875"}
          x={"105.833"}
          y={"146.188"}
          ry={"2.646"}
          opacity={"1"}
        ></rect>
      </g>
    </svg>
  );
}

export default TimeBarIcon;
/* prettier-ignore-end */
