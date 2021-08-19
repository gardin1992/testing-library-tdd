import { render, screen } from "@testing-library/react";
import HomePage from ".";

test("renders learn react link", () => {
  render(<HomePage />);

  const title = "HomePage";
  const titleRender = screen.getByText(title);
  expect(titleRender).toHaveTextContent(title);
});
