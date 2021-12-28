const filterFunc = (type = "greater", value, el) => {
  if (type === "greater") return el > value;
  if (type === "greaterEqual") return el >= value;
  if (type === "smaller") return el < value;
  if (type === "smallerEqual") return el <= value;
  if (type === "doubleEqual") return el == value;
  if (type === "TrippleEqual") return el === value;
};

const filterMultiFunc = function (el, options, arrayCondition = "AND") {
  return options.reduce(
    (acc, c) =>
      arrayCondition === "AND"
        ? acc && filterFunc(c.condition, c.value, c?.key ? el[c.key] : el)
        : acc || filterFunc(c.condition, c.value, c.key ? el[key] : el),

    true
  );
};

const addUniqueObj = function (filterArray) {
  const newArray = [];
  filterArray.forEach((r) => {
    if (r !== null && typeof r === "object") {
      let isExists = true;
      const isFind = newArray.find((obj) => {
        const keys = Object.keys(r);
        if (keys.length === Object.keys(obj).length) {
          for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            isExists = obj[key] === r[key] ? false : true;
          }
        }
        return !isExists ? true : false;
      });
      !isFind && newArray.push(r);
    }
  });
  return newArray;
};

export { filterFunc, filterMultiFunc, addUniqueObj };
