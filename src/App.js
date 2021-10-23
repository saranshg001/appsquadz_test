import * as React from "react";
import "./styles.css";
import { ITEMS_DATA } from "./data";
import CatItem from "./Components/CatItem";

export default function App() {
  return (
    <div className="App">
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          marginBottom: 20
        }}
      >
        <div style={{ width: "20%" }}>Name</div>
        <div style={{ width: "10%" }}>Colors</div>
        <div style={{ width: "10%" }}>Options</div>
        <div style={{ width: "10%" }}>ID</div>
        <div style={{ width: "25%" }}>Count</div>
        <div style={{ width: "25%" }}>Action</div>
      </div>
      {ITEMS_DATA.map((e) => (
        <CatItem data={e} />
      ))}
    </div>
  );
}
