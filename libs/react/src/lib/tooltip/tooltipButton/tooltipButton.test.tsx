import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TooltipButton from "./tooltipButton";

describe("test for TooltipButton", () => {
  it("should render component", () => {
    const tooltipText = "tooltipTestText";

    const { container } = render(
      <TooltipButton tooltip={tooltipText} className="my-button-test">
        <p>ChildItemText</p>
      </TooltipButton>
    );

    expect(container.querySelector("div.tooltip-container")).toBeInTheDocument();
    expect(container.querySelector("button.my-button-test")).toBeInTheDocument();
    const spanElement = screen.getByText("ChildItemText");
    expect(spanElement).toBeInTheDocument();
    validateTextPresent(tooltipText);
  });
});

function validateTextPresent(tooltipText : string) {
    const tooltipTextRendered = screen.getByText((content, element) => {
        return (
            element?.tagName.toLowerCase() === "span" &&
            element?.className === "tooltip-text"
        );
    });

    expect(tooltipTextRendered.innerText === tooltipText);

    expect(tooltipTextRendered).toBeInTheDocument();
}

