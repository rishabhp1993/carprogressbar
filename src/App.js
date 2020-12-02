import React from "react";
import "./styles.css";
import Progress from "./Progress";

export default function App() {
  return (
    <div>
      <Progress colorprop="green" steplabelsprop="Step 1,Step2,Step3,Step4" />
    </div>
  );
}
