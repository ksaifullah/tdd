const findIntersection = (values) => {
  const firstString = values[0];
  const secondString = values[1];

  const firstStringArray = firstString.split(',').map(x => x.trim());
  const secondStringArray = secondString.split(',').map(x => x.trim());

  const intersectionArray = firstStringArray.filter(x => secondStringArray.includes(x));
  
  return intersectionArray.join(',');
};

module.exports = {
  findIntersection,
};
