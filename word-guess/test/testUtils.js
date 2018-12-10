import checkPropTypes from "check-prop-types";
/**
 * Return ShallowWrapper containing node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to serach within
 * @param {string} val - value of data-set attribut for search
 * @returns {Shallow Wrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(component.propTypes, "prop", component.name);
  expect(propError).toBeUndefined();
};
