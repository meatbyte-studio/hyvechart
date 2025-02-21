"use client";

import React from "react";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

const Chart: React.FC = () => {
  return <Tldraw inferDarkMode={true} persistenceKey="hyvechart" />;
};

export default Chart;
