import { useState } from "react";
import { Search } from "./components/Search";

function HomePage() {
  const [query, setQuery] = useState("");

  return (
    <div className="c-home-page">
      <Search query={query} setQuery={setQuery} />
      <h2>HomePage</h2>
    </div>
  );
}

export default HomePage;
