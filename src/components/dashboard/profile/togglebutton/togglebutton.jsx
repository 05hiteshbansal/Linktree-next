"use client"
import React, { useState } from "react";
import {Tabs, Tab} from "@nextui-org/react";

export default function ToggleButton({setimagetoggler ,imagetoggler }) {
  return (

    <div className="flex flex-wrap gap-4">
        <Tabs key="lg" size="lg" aria-label="Tabs sizes" color="#18181b" variant="solid" selectedKey={imagetoggler} onSelectionChange={setimagetoggler} data-selected={imagetoggler}>
          <Tab  key="colour" title="Colour"/>
          <Tab  key="Image" title="Image"/>
        </Tabs>
    </div>
  );
}