import React from "react";

const Tours = ({ tours }) => {
  console.log(tours);
  return (
    <div>
      {tours.map((value) => {
        const { name, image, info, price } = value;
        return (
          <div>
            <img src={image} alt="" />
            <h1>{name}</h1>
            <p>{info}</p>
            <p>{price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Tours;
