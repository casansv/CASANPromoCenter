// src\app\page.js
import React from "react";

import Init from "./home/Init";
import Maps from "./home/Maps";





export default function Home() {
  return (
    <React.Fragment>
      <Init />
      <Maps />
    </React.Fragment>
  );
}
