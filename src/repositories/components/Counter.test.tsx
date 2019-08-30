import React from "react";
import { shallow } from "enzyme";
// SUT
import Counter from "./Counter";
import { RepositoryCounter } from "../../models/repository-counter.enum";

const icons = ["fa-star", "fa-code-fork", "fa-eye", "fa-exclamation-circle"];

describe("Counter Component", () => {
  it("should render the correct icon", () => {
    // Arrange - Act
    const component = shallow(<Counter type={RepositoryCounter.Issues} count={0} />);

    const icon = component.find("i");

    // Assert
    expect(icon.hasClass(icons[3])).toBe(true);
  });

  it("should render the correct count based on props", () => {
    // Arrange - Act
    const component = shallow(<Counter type={RepositoryCounter.Issues} count={2} />);

    const icon = component.find("span");

    // Assert
    expect(icon.text()).toBe("2");
  });

  it("should render the fa-eye icon", () => {
    // Arrange - Act
    const component = shallow(<Counter type={RepositoryCounter.Watchers} count={0} />);

    const icon = component.find("i");

    // Assert
    expect(icon.hasClass(icons[2])).toBe(true);
  });
});
