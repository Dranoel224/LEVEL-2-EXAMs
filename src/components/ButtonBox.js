import React, {useEffect, useState} from "react";

import "./ButtonBox.css";


const ButtonBox = ({ children }) => {
  return <div className="buttonBox">{children}</div>;
};

export default ButtonBox;