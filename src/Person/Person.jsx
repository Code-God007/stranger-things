import React from "react";

export default function Person(props) {
  const { id, name, quote, src, changeName, changed } = props;
  return (
    <div style={pStyle}>
      <img src={src} alt={name} style={imgStyle} />
      <h1>{name}</h1>
      <p>{quote}</p>
      <input
        className="form-control"
        type="text"
        placeholder="Enter full name"
        onChange={changed.bind(this, id)}
      />
      <button
        className="btn btn-primary mt-3"
        onClick={changeName.bind(this, id)}
      >
        Capitalize Name
      </button>
    </div>
  );
}

const pStyle = {
  display: "inline-block",
  margin: "20px",
  border: "2px solid #eee",
  boxShadow: "0 2px 2px #ccc",
  width: "400px",
  padding: "30px"
};

const imgStyle = {
  width: "300px",
  height: "300px"
};
