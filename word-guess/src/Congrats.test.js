import React from "react";
import Enzyme, { shallow } from "enzyme";

import EnzymeAdapter from "enzyme-adapter-react-16";

import { findByTestAttr } from "../test/testUtils";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a shallow wrapper for the App component
 * @function setup
 * @param {object} props - component props specific to this setup
 * @params {any} state- initial state for setup
 * @returns {ShallowWrapper} - Enzyme class
 */

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders no text when success prop is false", () => {
  const wrapper = setup({ success: false });
  // find the componnent
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders non-empty congrats message when success prop is true", () => {
  const wrapper = setup({ success: true });
  // find the congrats-message div
  const message = findByTestAttr(wrapper, "congrats-message");
  // expect the message text not to be empty
  expect(message.text().length).not.toBe(0);
});
