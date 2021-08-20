import { render, screen, within, fireEvent } from "@testing-library/react";

import { useState } from "react";
import { MemoryRouter } from "react-router-dom";
import { Dropdown } from ".";

it("it should have menu closed", () => {
  let openTest = false;

  function onCloseMenu() {
    openTest = false;
  }

  render(
    <MemoryRouter initialEntries={["/"]}>
      <Dropdown open={openTest} onCloseMenu={onCloseMenu} />
    </MemoryRouter>
  );
  const list = screen.queryByRole("menu");
  expect(list).not.toBeInTheDocument();
});

it("it should open and close menu", () => {
  function Container() {
    const [openTest, setOpenTest] = useState(true);

    function onCloseMenu() {
      setOpenTest(false);
    }

    return (
      <div role="presentation">
        <Dropdown open={openTest} onCloseMenu={onCloseMenu} />
      </div>
    );
  }
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Container />
    </MemoryRouter>
  );

  const list = screen.getByRole("menu");
  const { getAllByRole } = within(list);
  const items = getAllByRole("menuitem");
  expect(items.length).toBe(3);

  fireEvent.click(screen.getByRole("presentation"));

  expect(screen.queryByRole("menu")).not.toBeInTheDocument();
});
