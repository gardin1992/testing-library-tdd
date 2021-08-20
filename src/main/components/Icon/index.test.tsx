import { screen, render } from "@testing-library/react";
import { ReactComponent as MenuSvg } from "assets/icons/menu-close.svg";
import Icon from ".";

it("should render icon from svg", () => {
  render(<Icon icon={MenuSvg} />);

  const svg = screen.getByRole("button").closest("i");
  expect(svg).toBeInTheDocument();
});
