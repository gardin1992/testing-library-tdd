import { render, screen } from "@testing-library/react";
import HomePage from ".";

it("should render home page", () => {
  render(<HomePage />);

  const list = screen.getByTestId("pokemon-list");
  expect(list).toBeInTheDocument();
});
