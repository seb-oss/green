import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tooltip from "./tooltip";

describe("test for Tooltip", () => {
  it("should render component", () => {
    const { container } = render(
      <Tooltip text="">
        <></>
      </Tooltip>
    );

    expect(
      container.querySelector("div.tooltip-container")
    ).toBeInTheDocument();
  });

  it("should render children", () => {
    const tooltip = "tooltipText";
    const className = "classNameText";

    render(
      <Tooltip text={tooltip}>
        <button className={className}>
          <p>ChildItemText</p>
        </button>
      </Tooltip>
    );

    const spanElement = screen.getByText("ChildItemText");
    expect(spanElement).toBeInTheDocument();
  });
});
