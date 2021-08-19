import { render, screen, within } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import Header from ".";

it("should render the header", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const list = screen.getByRole("menu");
  const { getAllByRole } = within(list);
  const items = getAllByRole("menuitem");
  expect(items.length).toBe(1);
});
