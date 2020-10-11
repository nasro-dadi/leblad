const projectWilaya = require("../utils/projections/wilayaProjection");

const getBaladyiatsForWilaya = data =>
/**
   * Takes a wilaya code (mattricule) and returns array of Baladiyates of wilaya.
   *
   * @example Get Baladiyats list of Alger (code: 16)
   *
   *
   * getBaladyiatsForWilaya (16)
   *
   * @param { Number } mattricule wilaya code (mattricule)
   * @param {String[]} projection a list of Baladyia object attributes to keep
   * @returns { Object[] }
   */

  (mattricule, projections) => {
    const baladyiats = [].concat(...data.find((wilaya) => wilaya.mattricule === mattricule).dairats.map((daira) => daira.baladyiats));
    return projectWilaya(baladyiats, projections);
  };


module.exports = getBaladyiatsForWilaya;
