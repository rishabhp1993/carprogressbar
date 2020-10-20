import React from "react";
import "./progress.css";
import greencar from "./images/greencar.png";
import CheckIcon from "@material-ui/icons/Check";

class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stagecount: 0
    };
  }

  render() {
    return (
      <div className="container">
        <div className="carcontainer">
          <img className="car" alt="milestone" width="40px" src={greencar} />
        </div>
        <div className="emptybar">
          <div className="bar"></div>
        </div>
        <div className="stepscontainer">
          <div class="step">
            <div className="stepcirclecomplete">
              <CheckIcon className="icon" />
            </div>
            <p className="steplabel">Step 2</p>
          </div>
          <div class="step">
            <div className="stepcirclecomplete">
              <CheckIcon className="icon" />
            </div>
            <p className="steplabel">Step 2</p>
          </div>
          <div class="step">
            <div className="stepcirclecomplete">
              <CheckIcon className="icon" />
            </div>
            <p className="steplabel">Step 2</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Progress;
