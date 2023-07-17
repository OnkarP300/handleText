// import { Link } from "react-router-dom";

// import link from "react-router-dom";
export default function Navbar(props) {
    

  return (
    <nav
      className={`navbar navbar-expand-lg shadow bg-${props.mode} border-bottom`}
      data-bs-theme={`${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.page}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-underline me-auto mb-2 mb-lg-0">
            <li className="nav-item dt">
              <a className="nav-link" aria-current="page" href="/TextForm">
                {props.home}
              </a>
            </li>
            {/* <li className="nav-item dt">
              <a className="nav-link" href="/About">
                {props.link}
              </a>
            </li> */}
          </ul>
          <div className="d-flex"> {/**Color modes */}
          <h6>Color Themes </h6>
            <div className="bg-primary rounded shadow mx-2" onClick={()=>props.toggleMode('primary')} style={{height:"20px",width:"20px", cursor:"pointer"}} ></div>
            <div className="bg-success rounded shadow mx-2" onClick={()=>props.toggleMode('success')} style={{height:"20px",width:"20px", cursor:"pointer"}} ></div>
            <div className="bg-warning rounded shadow mx-2" onClick={()=>props.toggleMode('warning')} style={{height:"20px",width:"20px", cursor:"pointer"}} ></div>
            <div className="bg-info rounded shadow mx-2" onClick={()=>props.toggleMode('info')} style={{height:"20px",width:"20px", cursor:"pointer"}} ></div>
            <div className="bg-danger rounded shadow mx-2" onClick={()=>props.toggleMode('danger')} style={{height:"20px",width:"20px", cursor:"pointer"}} ></div>
            <div className={`bg-${props.mode==='dark'?'light':'dark'} rounded shadow mx-2 shadow`} onClick={()=>props.toggleMode('dark')} style={{height:"20px",width:"20px", cursor:"pointer"}} ></div>
          </div>

        </div>
      </div>
    </nav>
  );
}

// propsType =
