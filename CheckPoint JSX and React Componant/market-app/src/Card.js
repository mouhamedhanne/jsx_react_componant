import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProductData from "./Products";
import Nom from "./componants/Nom";
import Prix from "./componants/Prix";
import Image from "./componants/Images";
import Description from "./componants/Description";

function CardItem() {
  return (
    <div className="card-container">
      <h3 style={{ textAlign: "center", marginTop: "5px" }}>
        Produits Populaires
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "30px",
        }}
        className="card-row"
      >
        {ProductData.map((prod) => (
          <Card key={prod.id} style={{ width: "18rem" }}>
            <Image image={prod.image} />
            <Card.Body>
              <Nom nom={prod.nom} />
              <Prix prix={prod.prix} />
              <Description description={prod.description} />
              <Button variant="primary">Acheter</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CardItem;
