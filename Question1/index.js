const lowerCaseWords = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length > 0) {
      const words = arr
        .filter((item) => typeof item === "string")
        .map((item) => item.toLowerCase());
      resolve(words);
    } else {
      reject("Invalid array.");
    }
  });
};

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

console.log(lowerCaseWords(mixedArray));
