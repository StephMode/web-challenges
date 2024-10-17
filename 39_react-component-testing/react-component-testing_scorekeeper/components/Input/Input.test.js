import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

// Step 1: consider what to render
// Step 2: use the appropriate query to test for input
test("renders a label and an input with the correct attributes", () => {
  render(<Input />);
  const input = screen.getByLabelText("input", {
    name: "name",
  });
});

test("calls callback on every user input", async () => {});
