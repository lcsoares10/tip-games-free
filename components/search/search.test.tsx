import { render, screen } from "@testing-library/react";
import Search from "@/components/search";

describe("Search", () => {
  it("input should is empty", () => {
    render(<Search />);

    const input = screen.getByTestId("input-search");

    expect(input).toBeInTheDocument();
  });
});
