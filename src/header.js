import React from "react";

function Header(props) {
  return (
    <div className="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <div>{props.children}</div>
    </div>
  );
}

export default Header;
