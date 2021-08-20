import { render, screen, within } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import Header from ".";

it("should render the header with closed menu", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Header />
    </MemoryRouter>
  );

  const title = screen.getByRole("heading", {
    name: process.env?.REACT_APP_NAME,
  });
  expect(title).toBeInTheDocument();

  const icon = screen.getByTitle("header-menu");
  expect(icon).toBeInTheDocument();

  const navigation = screen.queryByRole("navigation");
  expect(navigation).not.toBeInTheDocument();
});
