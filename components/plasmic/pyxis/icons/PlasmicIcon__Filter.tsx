// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FilterIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FilterIcon(props: FilterIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 32 32"}
      xmlSpace={"preserve"}
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
          "M31.812 1.168A1.991 1.991 0 0029.983 0H2.013C1.218 0 .517.448.185 1.168a1.972 1.972 0 00.297 2.128l.001.001L12 14.371V31a1 1 0 001.555.832l6-4c.277-.186.444-.498.444-.832V14.371L31.516 3.297a1.972 1.972 0 00.296-2.129z"
        }
      ></path>
    </svg>
  );
}

export default FilterIcon;
/* prettier-ignore-end */
