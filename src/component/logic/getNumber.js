const getNumber = () => {
  let number = [];
  for (let i = 0; i < 6; i++) {
    const result = Math.round(Math.random() * 905);
    number = [...number, result];
  }
  let beforeNumber = [];

  number.forEach((element) => {
    beforeNumber.push(element);
  });

  return beforeNumber;
};

export default getNumber;
