import { render, screen } from "@testing-library/react";
import Navigation from "."; // remeber: was man testet, ist was am Ende in der Datei ist, ergo die ganze Comp fn, nicht einzelnene custom components

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);
  const historyLink = screen.getByRole("link", {
    name: "History",
  });
  const playLink = screen.getByRole("link", {
    name: "Play",
  });

  expect(historyLink).toBeInTheDocument();
  expect(playLink).toBeInTheDocument();
});
