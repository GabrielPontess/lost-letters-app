import React from 'react';
import '../../global.css'

const Tipography = ({ children, weight = '100' , size = '4vh', fontStyle="normal"}) => {
  const estilo = {
    fontFamily: "Red Hat Display",
    fontOptical: "auto",
    fontWeight: weight,
    fontStyle: fontStyle,
    fontSize: size,
  };

  return <span style={estilo}>{children}</span>;
};

export default Tipography;