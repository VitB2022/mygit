export const getAdults = obj => {
    let resultObj = {};
    for (let key in obj) {
        if (obj[key] >= 18) {
            resultObj[key] = obj[key];
        }
    }

    return resultObj;
};