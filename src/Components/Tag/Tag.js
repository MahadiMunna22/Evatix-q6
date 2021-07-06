import React, { useEffect, useState } from "react";
import "./Tag.css";

export function SimpleTag(props) {
  const [remove, setRemove] = useState(false);
  const [colors, setColors] = useState([
    {
      name: "standard",
      bgColor: "rgb(244, 245, 247)",
      textColor: "rgb(37, 56, 88)",
    },
    {
      name: "blue",
      bgColor: "rgb(76, 154, 255)",
      textColor: "rgb(23, 43, 77)",
    },
    {
      name: "green",
      bgColor: "rgb(87, 217, 163)",
      textColor: "rgb(23, 43, 77)",
    },
    {
      name: "teal",
      bgColor: "rgb(0, 199, 230)",
      textColor: "rgb(23, 43, 77)",
    },
    {
      name: "purple",
      bgColor: "rgb(153, 141, 217)",
      textColor: "rgb(23, 43, 77)",
    },
    {
      name: "red",
      bgColor: "rgb(255, 143, 115)",
      textColor: "rgb(23, 43, 77)",
    },
    {
      name: "yellow",
      bgColor: "rgb(255, 196, 0)",
      textColor: "rgb(23, 43, 77)",
    },
    {
      name: "grey",
      bgColor: "rgb(66, 82, 110)",
      textColor: "rgb(255, 255, 255)",
    },
    {
      name: "greenLight",
      bgColor: "rgb(121, 242, 192)",
      textColor: "rgb(0, 102, 68)",
    },
    {
      name: "tealLight",
      bgColor: "rgb(121, 226, 242)",
      textColor: "rgb(66, 82, 110)",
    },
    {
      name: "blueLight",
      bgColor: "rgb(179, 212, 255)",
      textColor: "rgb(7, 71, 166)",
    },
    {
      name: "purpleLight",
      bgColor: "rgb(192, 182, 242)",
      textColor: "rgb(64, 50, 148)",
    },
    {
      name: "redLight",
      bgColor: "rgb(255, 189, 173)",
      textColor: "rgb(66, 82, 110)",
    },
    {
      name: "yellowLight",
      bgColor: "rgb(255, 227, 128)",
      textColor: "rgb(66, 82, 110)",
    },
    {
      name: "greyLight",
      bgColor: "rgb(235, 236, 240)",
      textColor: "rgb(66, 82, 110)",
    },
  ]);
  const [bgColor, setBgColor] = useState("");
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    setBgColor(
      colors
        .filter((color) => color.name === props.color)
        .map((color) => color.bgColor)
    );
    setTextColor(
      colors
        .filter((color) => color.name === props.color)
        .map((color) => color.textColor)
    );
  }, []);

  return (
    <div>
      {!remove ? (
        <div
          style={{
            margin: "5px",
            backgroundColor: `${props.color ? bgColor : "rgb(244, 245, 247)"}`,
            color: `${props.color ? textColor : "rgb(37, 56, 88)"}`,
          }}
          className={`tag ${props.appearance === "rounded" ? "rounded" : null}`}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.elemBefore ? (
              <div style={{ marginRight: "5px" }}>{props.elemBefore}</div>
            ) : null}

            {props.href ? (
              <a
                className={`tag text href ${
                  props.appearance === "rounded" ? "rounded" : null
                }`}
                href={props.href}
              >
                {props.text}
              </a>
            ) : (
              <div className="text" style={{ margin: "0 5px 5px 5px" }}>
                {props.text}
              </div>
            )}
            {props.removeButtonLabel === "Remove" ? (
              <div
                onClick={() => setRemove(true)}
                style={{ padding: "0px 5px 5px 5px", cursor: "pointer" }}
              >
                x
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function TagGroup(props) {
  return <div class="tag-group">{props.children}</div>;
}
