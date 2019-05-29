/**
 * 1. 在一个区域内生成 n 个随机位置
 * 2. 保证每个位置为中心的固定半径图像不相交
 * 3. 这个区域随着 n 增大，面积增大
 */
class RandomPosition {
  constructor(n = 10, w = 10) {
    this.width = w;
    this.num = n;
    this.positonArr = [];
  }
  // 检查是否相交
  static check(x1, x2, y1, y2, r) {
    let x = Math.abs(x1 - x2),
      y = Math.abs(y1 - y2);
    return x * x + y * y > r * r * 2;
  }
  // 获得随机数
  static getRandomNum(w, n) {
    let maxNum = w * n * 2 - w;
    return parseInt(Math.random() * maxNum);
  }
  getRandomPosition() {
    let i = 0,
      w = this.width,
      n = this.num;
    this.positonArr.push({
      x: w / 2,
      y: w / 2
    });
    while (i < n * 100 && this.positonArr.length < n) {
      let obj = {
        x: RandomPosition.getRandomNum(w, n),
        y: RandomPosition.getRandomNum(w, n)
      };
      let flag = this.positonArr.every(val => {
        return RandomPosition.check(val.x, obj.x, val.y, obj.y, w);
      });
      if (flag) {
        this.positonArr.push(obj);
      }
      i++;
    }
    return this.positonArr;
  }
}
export default RandomPosition;
