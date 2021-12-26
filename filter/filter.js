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

export { filterFunc, filterMultiFunc };
