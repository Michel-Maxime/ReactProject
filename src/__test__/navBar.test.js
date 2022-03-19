import { render, screen } from "@testing-library/react";
import NavBar from "../components/navBar";

import * as reactRedux from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("navBar", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });
  it("renders Heroes", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const linkElement = screen.getAllByText("Heroes");
    expect(linkElement).toBeTruthy();
  });
  it("renders Feed", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const linkElement = screen.getAllByText("Feed");
    expect(linkElement).toBeTruthy();
  });
  it("renders Fav (0)", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const linkElement = screen.getAllByText("Fav (0)");
    expect(linkElement).toBeTruthy();
  });
});
