/**
 * localStorage操作封装
 */

// 保存数据
function savaStorage(key, params) {
  let _params = "";
  if (params && typeof params === "object") {
    _params = JSON.stringify(params);
  } else if (typeof params === "string") {
    _params = params;
  }
  localStorage.setItem(key, _params);
}
// 删除数据
function deleteStorage(key) {
  localStorage.removeItem(key);
}
// 获得数据
function getStorage(key) {
  localStorage.getItem(key);
}
// 保存用户路由
function savaUserMenuList(menuList) {
  savaStorage("menuList", menuList);
}
// 删除用户路由
function deleteUserMenuList() {
  deleteStorage("menuList");
}
// 获取用户路由
function getUserMenuList() {
  getStorage("menuList");
}
// 保存用户Token
function savaUserToken(token) {
  savaStorage("token", token);
}
// 获取用户Token
function getUserToken() {
  getStorage("token");
}
// 删除用户Token
function deleteUserToken() {
  deleteStorage("token");
}

export default {
  savaStorage: savaStorage,
  deleteStorage: deleteStorage,
  getStorage: getStorage,
  savaUserMenuList: savaUserMenuList,
  deleteUserMenuList: deleteUserMenuList,
  getUserMenuList: getUserMenuList,
  savaUserToken: savaUserToken,
  deleteUserToken: deleteUserToken,
  getUserToken: getUserToken
};
