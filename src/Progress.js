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
        completedstepcount: 2,
        steps: props.steplabelsprop.split(","),
        color: props.colorprop
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
    const styles = {
      bgcolor: { backgroundColor: this.state.data.color }
    };
    return (
      <div className="container">
        <div className="emptybar">
          <div className="bar" style={{ width: `${this.state.progressmade}%` }}>
            <div className="barfluid" style={styles.bgcolor}>
              <img
                className="car"
                alt="car"
                width="45px"
                height="25px"
                src={greencar}
              />
            </div>
          </div>
        </div>
        <div className="stepscontainer">
          {this.state.data.steps.map((step, i) => (
            <div class="step">
              <div
                style={
                  i < this.state.data.completedstepcount
                    ? styles.bgcolor
                    : styles.nobgcolor
                }
                className={
                  i < this.state.data.completedstepcount
                    ? "stepcirclecomplete"
                    : "stepcirclepending"
                }
              >
                <CheckIcon className="icon" style={{ fontSize: "14px" }} />
              </div>
              <p className="steplabel">{step}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Progress;
