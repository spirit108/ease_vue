/**
 * Storage操作封装
 */

// 长久保存数据
function savaLocalStorage(key, params) {
  let _params = "";
  if (params && typeof params === "object") {
    _params = JSON.stringify(params);
  } else if (typeof params === "string") {
    _params = params;
  }
  localStorage.setItem(key, _params);
}
// 指定删除永久数据
function deleteLocalStorage(key) {
  localStorage.removeItem(key);
}
// 指定获得永久数据
function getLocalStorage(key) {
  localStorage.getItem(key);
}

// 临时保存数据
function savaSessionStorage(key, params) {
  let _params = "";
  if (params && typeof params === "object") {
    _params = JSON.stringify(params);
  } else if (typeof params === "string") {
    _params = params;
  }
  sessionStorage.setItem(key, _params);
}
// 指定删除临时数据
function deleteSessionStorage(key) {
  sessionStorage.removeItem(key);
}
// 指定获得临时数据
function getSessionStorage(key) {
  sessionStorage.getItem(key);
}

// 保存用户路由
function savaUserMenuList(menuList) {
  savaLocalStorage("menuList", menuList);
}
// 删除用户路由
function deleteUserMenuList() {
  deleteLocalStorage("menuList");
}
// 获取用户路由
function getUserMenuList() {
  getLocalStorage("menuList");
}

// 永久保存用户Token
function savaUserToken(token) {
  savaLocalStorage("token", token);
}
// 获取永久用户Token
function getUserToken() {
  getLocalStorage("token");
}
// 删除用户Token
function deleteUserToken() {
  deleteLocalStorage("token");
}

// 临时保存用户Token
function savaSessionUserToken(token) {
  savaSessionStorage("token", token);
}

// 永久保存用户信息
function savaUserInfo(userInfo) {
  savaLocalStorage("userInfo", userInfo);
}
// 获取用户信息
function getUserInfo() {
  getLocalStorage("userInfo");
}
// 删除用户信息
function deleteUserInfo() {
  deleteLocalStorage("userInfo");
}

// 临时保存用户信息
function savaSessionUserInfo(userInfo) {
  savaSessionStorage("userInfo", userInfo);
}

export default {
  savaLocalStorage: savaLocalStorage,
  deleteLocalStorage: deleteLocalStorage,
  getLocalStorage: getLocalStorage,
  savaSessionStorage: savaSessionStorage,
  deleteSessionStorage: deleteSessionStorage,
  getSessionStorage: getSessionStorage,
  savaUserMenuList: savaUserMenuList,
  deleteUserMenuList: deleteUserMenuList,
  getUserMenuList: getUserMenuList,
  savaUserToken: savaUserToken,
  deleteUserToken: deleteUserToken,
  getUserToken: getUserToken,
  savaSessionUserToken: savaSessionUserToken,
  savaUserInfo: savaUserInfo,
  deleteUserInfo: deleteUserInfo,
  getUserInfo: getUserInfo,
  savaSessionUserInfo: savaSessionUserInfo
};
