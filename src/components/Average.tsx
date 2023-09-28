const average = (arr: number[]): number => {
  if (arr.length === 0) {
    return 0;
  }
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  return sum / arr.length;
};

export default average;
