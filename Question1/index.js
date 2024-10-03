const lowerCaseWords = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length > 0) {
      let result = arr
        .filter((item) => typeof item === "string")
        .map((item) => item.toLowerCase());
      resolve(result);
    } else {
      reject("Array is empty");
    }
  });
};

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];
console.log(lowerCaseWords(mixedArray));
