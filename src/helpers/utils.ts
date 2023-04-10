const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getCubeValue = (cube: number, count: number, modify: number) => {
  const min = 1;
  const randomList = [];
  let sum = 0;

  for (let i = 0; i < count; i++) {
    randomList.push(getRandomInt(min, cube));
  }

  randomList.forEach((value) => {
    sum += value;
  });

  sum += modify;

  return {
    sum: sum > 0 ? sum : min,
    list: randomList,
  };
};

export const checkSkillValue = ({
  baseSkillValue = 0,
  addSkillValue = 0,
  modify = 0,
}) => {
  const { sum, list } = getRandomCubesValue(false);
  const result = sum + baseSkillValue + addSkillValue + modify;

  return {
    sum: result > 0 ? result : 1,
    list,
  };
};

interface RandomCubesValue {
  sum: number;
  list: Array<number>;
}

const getRandomCubesValue = (crete = false): RandomCubesValue => {
  const min = 1;
  const max = 10;
  const list = [];
  let sum = 0;

  if (crete) {
    const randomValue = getRandomInt(min, max);
    sum += randomValue;
    list.push(randomValue);

    if (randomValue === max) {
      const { sum: addSum, list: addList } = getRandomCubesValue(true);

      sum += addSum;
      list.push(...addList);
    }

    return {
      sum,
      list,
    };
  }

  const randomValue = getRandomInt(min, max);
  list.push(randomValue);

  if (randomValue === max) {
    const { sum: addSum, list: addList } = getRandomCubesValue(true);

    sum += randomValue + addSum;
    list.push(...addList);
  } else if (randomValue === min) {
    const { sum: subtractSum, list: addList } = getRandomCubesValue(true);

    sum -= subtractSum;
    list.push(...addList);
  } else {
    sum += randomValue;
  }

  return {
    sum,
    list,
  };
};
