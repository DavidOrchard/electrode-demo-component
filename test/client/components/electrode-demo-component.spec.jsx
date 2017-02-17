/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import ElectrodeDemoComponent from "src/components/electrode-demo-component";

describe("components/electrode-demo-component", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<ElectrodeDemoComponent />);
      expect(component).to.not.be.null;
    });

  });

});
