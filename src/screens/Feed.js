import { useState } from "react";
import CenterInput from "../components/input";

export default function Feed() {
  const [filter, setFilter] = useState("");
  return (
    <>
      <p style={{ textAlign: "center" }}>FEED</p>
      <CenterInput text={filter} textSet={setFilter} />
    </>
  );
}
