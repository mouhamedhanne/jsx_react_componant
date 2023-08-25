import React from "react";

const Image = (props) => {
  return (
    <img
      style={{ width: "288px", height: "200px" }}
      src={props.image}
      alt="Image du produit"
    />
  );
};

export default Image;
