import { render, screen } from "@testing-library/react";
import Input from "../components/input";

describe("Input", () => {
  it("renders Film search", () => {
    render(<Input />);
    const linkElement = screen.getByLabelText("Film search");
    expect(linkElement).toBeInTheDocument();
  });

  it("renders MyText", () => {
    render(<Input text={"MyText"} />);
    const linkElement = screen.getByDisplayValue("MyText");
    expect(linkElement).toBeInTheDocument();
  });
});
