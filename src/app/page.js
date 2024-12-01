// src\app\page.js
import React from "react";

import Init from "./home/Init";
import Maps from "./home/Maps";
import FAQs from "./home/FAQs";





export default function Home() {
  return (
    <React.Fragment>
      <Init />
      {/*<Maps />*/}
      <FAQs />
    </React.Fragment>
  );
}
