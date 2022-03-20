import { TextField } from "@mui/material";

export default function CenterInput({ text, textSet }) {
  const onChange = (event) => {
    textSet(event.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {" "}
      <TextField
        id="outlined-basic"
        label="Heroe search"
        value={text}
        onChange={onChange}
        variant="outlined"
        margin="normal"
      />
    </div>
  );
}
