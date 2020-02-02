import React from "react";
import { render } from "@testing-library/react";
import { SomeComponent } from "./SomeComponent";

const renderComponent = (props = {}) => {
  return render(<SomeComponent {...props} />);
};

describe("SomeComponent component", () => {
  it("should render default properties", () => {
    const { getByText } = renderComponent();
    const linkElement = getByText(/Some property/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("should render someProperty correctly", () => {
    const { getByText } = renderComponent({ someProperty: "Good property" });
    const linkElement = getByText(/Some property Good property/i);
    expect(linkElement).toBeInTheDocument();
  });
});
