import { render } from "@testing-library/react";
/**
 * @jest-environment jsdom
 */

import renderer from "react-test-renderer";
import Records from "../Records";

describe("Should render the app without crashing", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  // it("renders homepage unchanged", () => {
  //   const { container } = render(<Records />);
  //   expect(container).toMatchSnapshot();
  // });

  it("renders homepage unchanged", () => {
    const component = renderer.create(<Records />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
