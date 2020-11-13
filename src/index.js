/* eslint-disable no-undefined */

const deleteUndefinedKeys = (obj) => Object.entries(obj)
    .filter((el) => el[1] !== undefined)
    .reduce((acc, [key, value]) => ({
      ...acc,
      [key]: value,
    }), {})

module.exports = {
  deleteUndefinedKeys,
}
