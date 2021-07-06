import React, { useEffect, useState } from "react";
import online from "../../Assets/Images/Online.png";
import offline from "../../Assets/Images/Offline.png";
import "./Avatar.css";
export default function Avatar(props) {
  const [avatarSizes, setAvatarSizes] = useState([
    {
      name: "xsmall",
      value: "20px",
    },
    { name: "small", value: "30px" },
    { name: "medium", value: "40px" },
    { name: "large", value: "50px" },
    { name: "xlarge", value: "80px" },
    { name: "xxlarge", value: "120px" },
  ]);

  const [avatarSize, setAvatarSize] = useState("25px");

  useEffect(() => {
    setAvatarSize(
      avatarSizes
        .filter((size) => size.name === props.size)
        .map((size) => size.value)
    );
  }, [props.size, avatarSizes]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          margin: "5px",
        }}
      >
        <img
          className={`${props.label !== undefined ? "avatar" : null} `}
          src={`${
            props.src === undefined
              ? require("../../Assets/Images/no-user-image-square.jpg").default
              : props.src
          }`}
          alt={props.name}
          width={props.size ? avatarSize : "25px"}
          style={{
            borderRadius: `${
              props.appearance === undefined
                ? "100%"
                : props.appearance === "square"
                ? "10%"
                : "100%"
            }`,
          }}
          onClick={props.onClick}
        />
        <img
          src={`${
            props.presence === "online"
              ? online
              : props.presence === "offline"
              ? offline
              : null
          }`}
          alt=""
          width={parseInt(avatarSize) / 3}
          style={{ marginLeft: `-${parseInt(avatarSize) / 3}px`, zIndex: "20" }}
        />
      </div>
    </div>
  );
}
