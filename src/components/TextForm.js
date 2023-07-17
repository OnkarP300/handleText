import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(""); // useState is a hook
  let newText = text.split(/[ ]+/);
  let trimText = newText.join(' ');
  let char = trimText.replaceAll(" ", ""); //remove all spaces to count total characters
  // setText("Nothing");
  const change = (eliment) => {
    setText(eliment.target.value);
  };

  const capitalize = () => {
    let capText = text.toUpperCase();
    setText(capText);
    props.alert("Converted to Upper case", "success")
  };

  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.alert("Converted to Lower case","success")
  };

  const italic = () => {
    document.getElementById("text").style.fontFamily = "italic";
    document.getElementById("textA").style.fontFamily = "italic";
    props.alert("Converted to Ittalic style", "info")
  };

  const clipB = () => {
    let copyText = text;
    navigator.clipboard.writeText(copyText);
    props.alert("Text copied", `${props.btnToggle}`)
  };

  const clearText = () => {
    alert("Are You Sure")
    setText("");
    props.alert("Text cleared", "danger")
  };

  return (
    <>
      <div
        className={`container text-${props.mode === "dark" ? "light" : "dark"}`}
      >
        <h3 className="my-3">{props.heading}</h3>
        <div className="input-group">
          <textarea
            className={`form-control bg-${
              props.mode === "dark" ? "dark" : "light"
            } text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
            id="textA"
            placeholder="Type here!!"
            value={text}
            onChange={change}
            rows="8"
            aria-label="With textarea"
          ></textarea>
        </div>
        <button className={`btn btn-${props.btnToggle} shadow my-3`} onClick={capitalize}>
          Capitalize text
        </button>
        <button className={`btn btn-${props.btnToggle} shadow m-3`} onClick={lowerCase}>
          Lower Case text
        </button>
        <button className={`btn btn-${props.btnToggle} shadow`} onClick={italic}>
          Convert to Italic
        </button>
        <button className={`btn btn-${props.btnToggle} shadow m-3`} onClick={clipB}>
          Copy to Clipboard
        </button>
        <button className={`btn btn-${props.btnToggle} shadow`} onClick={clearText}>
          Clear
        </button>
      <div className="container my-3">
        <h2>Text Summary</h2>
        <p>
          {char.length === 0?"0":trimText.trim().split(" ").length} Words and {char.length} Characters
        </p>
        <h2>Text Preview</h2>
        <p id="text">{text.length === 0?"Write something in the text box to preview here!":text}</p>
      </div>
      </div>
    </>
  );
}
