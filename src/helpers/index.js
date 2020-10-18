/**
 * ls() localStorage method
 * @param {object} item: {key: "", value: ""}
 * @param {string} method: set, get, clear, remove/delete
 * @return {object | string}
 */
export function ls(item = {}, method = "set") {
  const ls = localStorage;

  switch (method) {
    case "get": {
      return ls.getItem(item.key);
    }
    case "delete":
    case "remove": {
      ls.removeItem(item);
      return item;
    }
    case "clear": {
      ls.clear();
      return "LocalStorage is clear";
    }
    default: {
      ls.setItem(item.key, item.value);
      break;
    }
  }
};

/**
 * createArrayFromObj()
 * @param {array} array common array of objects
 * @param {string} key
 * @return {object} {...значения объектов массива}
 */
export function divideData(array, key = "") {
  const data = {};
  let keys = [];

  array.forEach(elm => {
    if (JSON.stringify(key) !== JSON.stringify(Object.keys(elm))) {
      keys = Object.keys(elm);
    }

    keys.forEach(key => {
      data[key] = array.map(m => m[key]);
    });
  });

  return data;
};