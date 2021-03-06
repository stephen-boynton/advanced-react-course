import { renderComponent, expect } from "../test_helper";

import App from "../../src/components/app";

// describe - Use describe to group together similar tests
describe("App", () => {
  //it - use 'it' to test a single attribute of a target
  it("shows the correct text", () => {
    //create an instance of App
    const component = renderComponent(App);
    //expect - used to make an assertion about a target
    expect(component).to.contain("React simple starter");
  });
});
