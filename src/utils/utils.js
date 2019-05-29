/**
 *  一维数组转换为二维数组
 * @param {array} arr
 * @param {number} maxNum
 * @param {number} rowNum
 * @return {array} res
 */
function twoMatrix(arr, maxNum = arr.length, rowNum = 3) {
  let res = [],
    maxArr = [],
    k = 0,
    origin = [].concat(arr);
  if (maxNum) {
    arr[maxNum - 1].isEnd = true;
    origin.forEach((val, i) => {
      if (i == maxNum - 1) {
        val.isEnd = true;
      } else {
        val.isEnd = false;
      }
    });
    maxArr = origin.splice(0, maxNum);
  }
  for (let i = 0; i < maxNum; i = i + rowNum) {
    k++;
    let _arr = [];
    for (let j = i; j < i + rowNum && j < maxNum; j++) {
      if (maxArr[j]) {
        _arr.push(maxArr[j]);
      }
    }
    if (!(k % 2)) {
      _arr.reverse();
      _arr.forEach((val, i) => {
        console.log(val);
        val.class = "left-normal";
        if (i == 0 && !val.isEnd) {
          val.class = "row-end";
        } else if (val.isEnd) {
          val.class = "";
        }
      });
    } else {
      _arr.forEach((val, i) => {
        val.class = "right-normal";
        if (i == rowNum - 1 && !val.isEnd) {
          val.class = "row-end";
        } else if (val.isEnd) {
          val.class = "";
        }
      });
    }
    res.push(_arr);
  }
  return res;
}
export default twoMatrix;
