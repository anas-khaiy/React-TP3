import React from "react";
import photo1 from "./images/photo1.jpeg";
import photo2 from "./images/photo2.jpg";
import photo3 from "./images/photo3.avif";

function Galerie() {
  const images = [photo1, photo2, photo3];

  return (
    <div>
      <h2>Galerie d'images</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Paysage ${index + 1}`} width={150} />
        ))}
      </div>
    </div>
  );
}

export default Galerie;
