import * as assert from "power-assert";
import * as main from "../src";

describe("Sample Test", () => {
  it("twice", () => {
    assert(main.twice(1) === 2);
  });
});

