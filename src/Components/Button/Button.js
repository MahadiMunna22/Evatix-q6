import React from "react";
import "./Button.css";

export function Button(props) {
  return (
    <div>
      <button
        type="button"
        className={`button ${
          props.isDisabled
            ? "disabled"
            : props.isSelected
            ? "selected"
            : props.appearance === "primary"
            ? "primary"
            : props.appearance === "subtle"
            ? "subtle"
            : props.appearance === "link"
            ? "link"
            : props.appearance === "subtle-link"
            ? "subtle-link"
            : props.appearance === "warning"
            ? "warning"
            : props.appearance === "danger"
            ? "danger"
            : "default"
        } ${props.shouldFitContainer ? "fullWidth" : null} ${
          props.spacing === "compact"
            ? "space-compact"
            : props.spacing === "none"
            ? "space-none"
            : null
        }`}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {props.iconBefore}
          <div style={{ paddingInline: "5px", margin: "auto" }}>
            {props.children}
          </div>
          {props.iconAfter}
        </div>
      </button>
    </div>
  );
}

export function LoadingButton(props) {
  return (
    <div>
      <button
        disabled
        className={`loading-button ${
          props.isDisabled
            ? "disabled"
            : props.isSelected
            ? "selected"
            : props.appearance === "primary"
            ? "primary"
            : props.appearance === "subtle"
            ? "subtle"
            : props.appearance === "link"
            ? "link"
            : props.appearance === "subtle-link"
            ? "subtle-link"
            : props.appearance === "warning"
            ? "warning"
            : props.appearance === "danger"
            ? "danger"
            : "default"
        }`}
      >
        <div id="loading"></div>
      </button>
    </div>
  );
}

export function ButtonGroup(props) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {props.children}
    </div>
  );
}
