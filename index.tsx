import React from "react";
import ReactDOM from "react-dom/client";
import ComponentGallery from "./ComponentGallery";

// Create root element if it doesn't exist
const rootElement = document.getElementById("root") || document.createElement("div");
if (!rootElement.id) {
  rootElement.id = "root";
  document.body.appendChild(rootElement);
}

const root = ReactDOM.createRoot(rootElement);
root.render(<ComponentGallery />);