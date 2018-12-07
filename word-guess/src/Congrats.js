import React from "react";

// ctrl+shift+d for block comment
// jsdoc atom package
/**
 * Functional react component for congartulatory message
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component (or null if success prop is rendered)
 */

export default props => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congartulations! You Guessed the word
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};