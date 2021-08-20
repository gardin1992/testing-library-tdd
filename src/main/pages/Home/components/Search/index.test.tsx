import { screen, render, fireEvent } from "@testing-library/react";
import { useState } from "react";
import { Search } from ".";

it("should render input search", () => {
  function Container() {
    const [query, setQuery] = useState("");
    return <Search query={query} setQuery={setQuery} />;
  }

  render(<Container />);
  const icon = screen.getByTitle("input-search");
  expect(icon).toBeInTheDocument();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const input: any = screen.getByLabelText("search-input");
  expect(input).toBeInTheDocument();

  const inputValue = "Bulbasar";
  fireEvent.change(input, { target: { value: inputValue } });

  expect(input.value).toBe(inputValue);
});
