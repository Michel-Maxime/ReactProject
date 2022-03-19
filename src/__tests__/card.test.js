import { render, screen } from "@testing-library/react";
import Carde from "../components/card";

import * as reactRedux from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("Carde", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });
  it("renders Super-Man", () => {
    render(
      <BrowserRouter>
        <Carde title={"Super-Man"} />
      </BrowserRouter>
    );
    const linkElement = screen.getByText("Super-Man");
    expect(linkElement).toBeTruthy();
  });
});
