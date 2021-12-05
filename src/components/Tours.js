import React, { useState } from "react";
import "../styles/Tours.css";

const Tours = ({ tours, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article>
      <h1>Tours Page !!!</h1>
      {tours.map((value) => {
        const { name, image, info, price, id } = value;
        return (
          <div>
            <footer>
              <img src={image} className="img" alt="" />

              <h1>{name}</h1>
              <p>
                {readMore ? info : `${info.substring(0, 200)}...`}
                <button
                  className="btn"
                  onClick={() => {
                    setReadMore(!readMore);
                  }}
                >
                  {readMore ? "show less" : "read more"}
                </button>
              </p>
              <p className="para">£{price}</p>
              <button
                onClick={() => {
                  removeTour(id);
                }}
              >
                Not Intrested
              </button>
            </footer>
          </div>
        );
      })}
    </article>
  );
};

export default Tours;
