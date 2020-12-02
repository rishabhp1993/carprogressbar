import React from "react";
import "./styles.css";
import Progress from "./Progress";

export default function App() {
  return (
    <div>
      <Progress colorprop="green" steplabelsprop="Step 1,step2,step3,step4" />
    </div>
  );
}
