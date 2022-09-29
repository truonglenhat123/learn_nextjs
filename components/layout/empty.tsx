import Link from "next/link";
import * as React from "react";
import { LayoutPage } from "../../Model/common";

export interface IEmptyLayout {}

export function EmptyLayout({ children }: LayoutPage) {
  return <div>{children}</div>;
}
