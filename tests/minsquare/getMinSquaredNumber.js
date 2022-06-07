export const getMinSquaredNumber = arr => {

    if (!Array.isArray(arr) || arr.length === 0) { return null; }

    const arrAbsNumber = arr.map(elem => Math.abs(elem));

    const minSquaredNum = Math.min(...arrAbsNumber);

    return minSquaredNum ** 2;

}