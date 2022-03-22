import { render, screen } from "@testing-library/react";
import HeroList from "src/components/heroList";

describe("HeroList", () => {
  it("component should display list card ", () => {
    render(<HeroList />);

    const input = screen.getByAltText("input-search");

    expect(input).toBeInTheDocument();
  });
});
