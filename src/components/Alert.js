import React from "react";

function Alert(props) {
    const cap =()=>{
        let str = props.alert.type;
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
  return (
    props.alert && <div className="container">
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{cap(props.alert.type)} : </strong>{props.alert.msg}
      </div>
    </div>
  );
}

export default Alert;
