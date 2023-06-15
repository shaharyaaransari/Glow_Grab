export const FilterDataType = (arr: Array<any>, type: any) => {
  switch (type) {
    case "men": {
      return arr.filter((item, ind) => item.category == "men");
    }
    case "women": {
      return arr.filter((item, ind) => item.category == "women");
    }
    case "kids": {
      return arr.filter((item, ind) => item.category == "kids");
    }
    case "sneakers": {
      return arr.filter((item, ind) => item.category == "sneakers");
    }

    default: {
      return arr;
    }
  }
};
