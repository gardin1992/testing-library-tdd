import { screen, render, fireEvent } from "@testing-library/react";
import { ReactComponent as MenuSvg } from "assets/icons/menu-closed.svg";
import { Icon } from ".";

it("should render icon from svg", () => {
  let clicked = false;

  function onClick(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    clicked = true;
  }

  render(<Icon icon={MenuSvg} onClick={onClick} />);

  const icon = screen.getByRole("button");
  expect(icon).toBeInTheDocument();

  const svg = screen.getByRole("img");
  expect(svg).toBeInTheDocument();

  fireEvent.click(icon);
  expect(clicked).toBe(true);
});
