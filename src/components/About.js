import React from "react";

export default function About(props) {
  // const [btn, setBtn] = useState("Dark Mode");
  // const [myStyle, setMyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  // });
  // // let btnStyle ={
  // //     backgroundColor : "black"
  // // }

  // const toggleMode = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({ color: "black", backgroundColor: "white" });
  //     setBtn("Dark Mode");
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setBtn("Light Mode");
  //   }
  // };

  return (
    <div className={`container my-5 text-${props.mode === "dark" ? "light" : "dark"}`}>
      <div className="accordion p-3" id="accordionFlushExample" >
        <h1 className="my-3">{props.about}</h1>
        <div className={`accordion-item bg-${props.mode === "dark" ? "light" : "dark"}`} >
          <h2 className="accordion-header">
            <button
              
              className={`accordion-button collapsed bg-${props.mode === "dark" ? "dark" : "light"} text-${props.mode === "dark" ? "light" : "dark"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className={`accordion-body collapsed bg-${props.mode === "dark" ? "dark" : "light"} text-${props.mode === "dark" ? "light" : "dark"}`}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the first item's accordion body.
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header">
            <button
              
              className={`accordion-button collapsed bg-${props.mode === "dark" ? "dark" : "light"} text-${props.mode === "dark" ? "light" : "dark"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className={`accordion-body collapsed bg-${props.mode === "dark" ? "dark" : "light"} text-${props.mode === "dark" ? "light" : "dark"}`}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the second item's accordion body. Let's imagine this being filled
              with some actual content.
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header">
            <button
              
              className={`accordion-button collapsed bg-${props.mode === "dark" ? "dark" : "light"} text-${props.mode === "dark" ? "light" : "dark"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className={`accordion-body collapsed bg-${props.mode === "dark" ? "dark" : "light"} text-${props.mode === "dark" ? "light" : "dark"}`}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the third item's accordion body. Nothing more exciting happening
              here in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
        {/* <button className="btn btn-success m-3" onClick={toggleMode}>
          {btn}
        </button> */}
      </div>
    </div>
  );
}
