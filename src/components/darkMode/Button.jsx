"use client"
import React from "react";
import {Switch} from "@nextui-org/react";
import {Moon} from "./Moon";
import {Sun} from "./Sun";

export default function Button() {
  return (
    <Switch
      defaultSelected
      size="lg"
      color="success"
      startContent={<Sun />}
      endContent={<Moon />}
    >
    </Switch>
  );
}