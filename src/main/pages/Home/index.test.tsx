import { render, screen } from "@testing-library/react";
import HomePage from ".";

it("should render home page", () => {
  render(<HomePage />);

  const title = "HomePage";
  const titleRender = screen.getByText(title);
  expect(titleRender).toHaveTextContent(title);
});
