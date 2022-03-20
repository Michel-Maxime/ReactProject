import { render, screen } from "@testing-library/react";
import SpecTable from "../components/specTable";

describe("SpecTable", () => {
  it("renders PowerStats", () => {
    render(<SpecTable />);
    const linkElement = screen.getByText("PowerStats");
    expect(linkElement).toBeTruthy();
  });

  it("renders Combat Value", () => {
    const stats = {
      power: 10,
    };
    render(<SpecTable data={stats} />);
    const linkElement = screen.getByText(10);
    expect(linkElement).toBeTruthy();
  });
});
