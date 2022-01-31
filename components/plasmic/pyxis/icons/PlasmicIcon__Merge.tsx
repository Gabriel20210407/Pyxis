// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MergeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MergeIcon(props: MergeIconProps) {
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
          "M30.48 14.07A30.48 30.48 0 000 44.55a30.48 30.48 0 0030.48 30.48 30.48 30.48 0 0011.49-2.272 32.582 32.582 0 01-16.356-28.206v-.002a32.582 32.582 0 0116.297-28.206 30.48 30.48 0 00-11.432-2.273zm27.707 0a30.48 30.48 0 00-11.49 2.271 32.58 32.58 0 0116.356 28.207v.002a32.58 32.58 0 01-16.297 28.207 30.48 30.48 0 0011.431 2.272 30.48 30.48 0 0030.48-30.48 30.48 30.48 0 00-30.48-30.478zm-13.88 5.788c-8.914 5.011-14.502 14.405-14.504 24.69v.002c.013 10.297 5.623 19.694 14.559 24.692 8.914-5.012 14.5-14.406 14.502-24.69-.012-10.297-5.62-19.697-14.557-24.694z"
        }
        opacity={"1"}
        fill={"currentColor"}
        fillOpacity={"1"}
        paintOrder={"normal"}
      ></path>
    </svg>
  );
}

export default MergeIcon;
/* prettier-ignore-end */
