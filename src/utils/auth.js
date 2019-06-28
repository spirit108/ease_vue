/**
 * 用户授权操作
 */
import storage from "./storage";
// 重置用户授权
function removeAuth() {
  storage.deleteUserMenuList();
  storage.deleteUserToken();
}

export default {
  removeAuth: removeAuth
};
