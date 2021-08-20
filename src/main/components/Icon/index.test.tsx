import { screen, render } from "@testing-library/react";
import { ReactComponent as MenuSvg } from "assets/icons/menu-closed.svg";
import Icon from ".";

it("should render icon from svg", () => {
  render(<Icon icon={MenuSvg} />);

  const icon = screen.getByRole("button").closest("i");
  const svg = screen.getByRole("img");
  expect(icon).toBeInTheDocument();
  expect(svg).toBeInTheDocument();
});
