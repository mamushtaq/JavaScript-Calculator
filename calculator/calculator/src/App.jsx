import logo from "./logo.svg";
import "./App.css";
import react, { Component, useState } from "react";
//import Input from "./components/input";
import { render } from "@testing-library/react";
import * as math from "mathjs"
import { clear } from "@testing-library/user-event/dist/clear";




function App() {
  const [equation, setequation] = useState({
    eq: "0",
    isanswer:false,
    answer:""

  })
  const handleonclick = (data) => {
      setequation({
        ...equation,
        eq: equation.eq + data,
        isanswer:false,
      })
    console.log(equation.eq);
  };

  const handleequal = () => {
    setequation({
      ...equation,
      eq:"",
      answer: math.evaluate(equation.eq),
      isanswer:true,
    })
  }

  const clearscreen = () => {
    setequation({
      ...equation,
      eq: "0",
      isanswer: false
    })
  }
  const eraseone = () => {
    setequation({
      ...equation,
      eq: equation.eq.slice(0,-1),
    })
  }
    return (
      <>
        <h1 className="heading">CALCULATOR</h1>
        <div className="calculator">
        {equation.isanswer? (<div className="input">{equation.answer}</div>):(<div className="input">{equation.eq}</div>)}
          <div className="buttons">
          <div className="row">
              <button className="Start" onClick={() => clearscreen()}>
                Clear
              </button>
              <button className="number" onClick={() => eraseone()}>
                back
              </button>
              <button className="number" onClick={() => handleonclick("^")}>
                ^
              </button>
              <button className="number" onClick={() => handleonclick("sqrt(")}>
                sqrt
              </button>
              <button className="number" onClick={() => handleonclick("(")}>
                (
              </button>
            </div>
            <div className="row">
              <button className="number" onClick={() => handleonclick("7")}>
                7
              </button>
              <button className="number" onClick={() => handleonclick("8")}>
                8
              </button>
              <button className="number" onClick={() => handleonclick("9")}>
                9
              </button>
              <button className="number" onClick={() => handleonclick(" + ")}>
                +
              </button>
              <button className="number" onClick={() => handleonclick(")")}>
                )
              </button>
            </div>
            <div className="row">
              <button className="number" onClick={() => handleonclick("4")}>
                4
              </button>
              <button className="number" onClick={() => handleonclick("5")}>
                5
              </button>
              <button className="number" onClick={() => handleonclick("6")}>
                6
              </button>
              <button className="number" onClick={() => handleonclick(" - ")}>
                -
              </button>
              <button className="number" onClick={() => handleonclick("deg)")}>
                deg)
              </button>
            </div>
            <div className="row">
              <button className="number" onClick={() => handleonclick("1")}>
                1
              </button>
              <button className="number" onClick={() => handleonclick("2")}>
                2
              </button>
              <button className="number" onClick={() => handleonclick("3")}>
                3
              </button>
              <button className="number" onClick={() => handleonclick(" * ")}>
                x
              </button>
              <button className="number" onClick={() => handleonclick("cos(")}>
                cos(
              </button>
            </div>
            <div className="row">
              <button className="number" onClick={() => handleonclick("0")}>
                0
              </button>
              <button className="number" onClick={() => handleequal(" = ")}>
                =
              </button>
              <button className="number" onClick={() => handleonclick(".")}>
                .
              </button>
              <button className="number" onClick={() => handleonclick(" / ")}>
                /
              </button>
              <button className="number" onClick={() => handleonclick("sin(")}>
                sin(
              </button>
            </div>
          </div>
        </div>
      </>
    )
}

export default App;
