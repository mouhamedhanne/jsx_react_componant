import React from "react";

const Prix = (prod) => {
  return (
    <h5
      style={{
        color: "#fff",
        textAlign: "center",
        backgroundColor: "blue",
      }}
    >
      {prod.prix} Fcfa
    </h5>
  );
};

export default Prix;
