/* eslint-disable no-undefined */

const { describe, it } = require("mocha")
const { expect } = require("chai")
const { deleteUndefinedKeys } = require("../src/index")

describe("Test", function () {

  const obj = {
    a1: undefined,
    a2: 2,
    a3: 3,
    a4: undefined,
  }

  it("delete undefined keys", function () {

    const result = deleteUndefinedKeys(obj)

    expect(result).to.be.deep.equal({
      a2: 2,
      a3: 3,
    })

  })

})
