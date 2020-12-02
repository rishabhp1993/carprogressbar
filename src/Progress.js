import React from "react";
import "./progress.css";
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
              <svg
                className="car"
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="45px"
                height="25px"
                viewBox="0 0 222.000000 131.000000"
              >
                <g
                  transform="translate(0.000000,131.000000) scale(0.100000,-0.100000)"
                  fill={this.state.data.color}
                  stroke="none"
                >
                  <path
                    d="M629 1289 c-17 -6 -79 -79 -175 -205 -81 -107 -156 -199 -165 -205
-10 -5 -68 -9 -129 -9 -104 0 -112 -1 -135 -25 l-25 -24 0 -251 0 -251 25 -24
c22 -23 31 -25 122 -25 l98 0 18 50 c35 99 118 178 211 201 64 15 162 7 212
-19 65 -33 131 -107 155 -174 l22 -58 253 0 253 0 11 39 c24 91 121 187 213
212 68 18 166 6 227 -27 63 -34 122 -105 147 -175 l18 -49 95 0 c143 0 140 -4
140 184 0 145 -1 156 -26 202 -71 135 -219 214 -402 214 -24 0 -52 4 -62 10
-10 5 -62 63 -116 127 -192 231 -207 248 -238 268 -29 19 -50 20 -376 22 -210
1 -355 -2 -371 -8z m321 -289 l0 -130 -225 0 c-124 0 -225 3 -225 6 0 6 57 82
143 192 l49 62 129 0 129 0 0 -130z m386 88 c50 -53 174 -204 174 -212 0 -3
-90 -6 -200 -6 l-200 0 0 130 0 130 93 0 93 0 40 -42z"
                  />
                  <path
                    d="M475 401 c-155 -72 -151 -289 7 -356 106 -43 229 17 259 127 42 158
-119 297 -266 229z"
                  />
                  <path
                    d="M1595 401 c-97 -44 -141 -160 -96 -256 70 -152 282 -152 352 0 75
162 -94 330 -256 256z"
                  />
                </g>
              </svg>
            </div>
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
              <p className="steplabel">{step}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Progress;
