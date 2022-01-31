// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SplitIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SplitIcon(props: SplitIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 88.667 88.667"}
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

      <path
        d={
          "M52.535 9.538v69.568a35.042 35.042 0 0031.073-34.773A35.042 35.042 0 0052.535 9.538zm-16.404.022A35.042 35.042 0 005.058 44.333 35.042 35.042 0 0036.131 79.13z"
        }
        opacity={"1"}
        fill={"currentColor"}
        fillOpacity={"1"}
        paintOrder={"normal"}
      ></path>

      <rect
        width={"4.932"}
        height={"88.667"}
        x={"41.867"}
        y={"0"}
        ry={"1.328"}
        opacity={"1"}
        fill={"currentColor"}
        fillOpacity={"1"}
        paintOrder={"normal"}
      ></rect>
    </svg>
  );
}

export default SplitIcon;
/* prettier-ignore-end */
