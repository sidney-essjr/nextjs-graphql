import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("should render properly", () => {
  it("should contain the text", () => {
    render(<Home />);
    const el = screen.getByRole("heading", { level: 1 });
    expect(el).toBeInTheDocument();
  });
});
