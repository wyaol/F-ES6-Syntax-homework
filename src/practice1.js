const parseData = (input) => {
  const {data, column} = input;
  return data.map(item => {
    const res = {};
    column.forEach((property, index) => Object.assign(res, {[property.name]: item[index]}));
    return res;
  })
}
export { parseData };
