// app created using create-react-app will run setupTests.js before executing anyother code
import Enzyme, { shallow } from "enzyme";

import EnzymeAdapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new EnzymeAdapter() });
