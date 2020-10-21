import React from "react";
import "./progress.css";
import greencar from "./images/greencar.png";
import CheckIcon from "@material-ui/icons/Check";

class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stagecount: 0,
      data: {
        completedstepcount: 4,
        steps: [
          { stepname: "Step 1" },
          { stepname: "Step 2" },
          { stepname: "Step 3" },
          { stepname: "Step 4" },
          { stepname: "Step 5" }
        ]
      },
      progressmade: 0
    };
  }
  componentDidMount() {
    let percentagecomplete =
      (this.state.data.completedstepcount /
        (this.state.data.steps.length - 1)) *
      100;
    if (percentagecomplete <= 100) {
      this.setState({ progressmade: percentagecomplete });
    } else {
      this.setState({ progressmade: 100 });
    }
  }
  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div
          className="carcontainer"
          style={
            this.state.progressmade === 100
              ? { width: `calc(${this.state.progressmade}% - 35px` }
              : { width: `${this.state.progressmade}%` }
          }
        >
          <img
            className="car"
            alt="car"
            width="50px"
            height="25px"
            src={greencar}
          />
        </div>
        <div className="emptybar">
          <div className="bar" style={{ width: `${this.state.progressmade}%` }}>
            <div className="barfluid"></div>
          </div>
        </div>
        <div className="stepscontainer">
          {this.state.data.steps.map((step, i) => (
            <div class="step">
              <div
                className={
                  i < this.state.data.completedstepcount
                    ? "stepcirclecomplete"
                    : "stepcirclepending"
                }
              >
                <CheckIcon className="icon" style={{ fontSize: "14px" }} />
              </div>
              <p className="steplabel">{step.stepname}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Progress;
