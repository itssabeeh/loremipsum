import React, { useState } from "react";
import data from "./data";

const ParaCard = () => {
  const [number, setNumber] = useState("");
  const [para, setPara] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let num = number;
    if (number < 0) {
      num = 0;
    } else if (number > 9) {
      num = 9;
    }
    setPara(data.filter((p, i) => i < num));
  };
  return (
    <div className="container">
      <article>
        <h1>TIRED OF BORING LOREM IPSUM?</h1>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label style={{ padding: "0.25rem" }} htmlFor="paragraph">
              Paragraphs:
            </label>
            <input
              style={{ width: "3vw" }}
              id="paragraph"
              name="paragraph"
              value={number}
              type="number"
              onChange={(e) => setNumber(e.target.value)}
              //   onChange={changeNumber}
            />
          </div>
          <button
            style={{ marginLeft: "0.25rem" }}
            type="submit"
            className="btn"
          >
            Generate
          </button>
        </form>
      </article>
      <article style={{ paddingTop: "4rem" }} className="para">
        {para.map((item) => {
          return <div>{item}</div>;
        })}
      </article>
    </div>
  );
};

export default ParaCard;
