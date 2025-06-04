// Xử lý đăng ký, đăng nhập, đăng xuất, phân quyền cho user
// Lưu user vào localStorage, role: 'guest' | 'member' | 'admin'

// Đăng ký: thêm user mới vào localStorage, lưu cả thời gian tạo
function registerUser({ username, password, role = 'member' }) {
  let users = JSON.parse(localStorage.getItem('users') || '[]');
  if (users.find(u => u.username === username)) return { success: false, message: 'Tên đăng nhập đã tồn tại!' };
  users.push({ username, password, role, createdAt: Date.now() });
  localStorage.setItem('users', JSON.stringify(users));
  return { success: true };
}

// Đăng nhập: kiểm tra user, lưu user hiện tại
function loginUser({ username, password }) {
  let users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return { success: false, message: 'Sai tên đăng nhập hoặc mật khẩu!' };
  localStorage.setItem('currentUser', JSON.stringify(user));
  return { success: true, user };
}

// Đăng xuất
function logoutUser() {
  localStorage.removeItem('currentUser');
}

// Lấy user hiện tại
function getCurrentUser() {
  return JSON.parse(localStorage.getItem('currentUser') || 'null');
}

// Kiểm tra quyền
function requireRole(role) {
  const user = getCurrentUser();
  if (!user) return false;
  if (role === 'member') return user.role === 'member' || user.role === 'admin';
  if (role === 'admin') return user.role === 'admin';
  return true;
}

// Tạo sẵn tài khoản admin mặc định nếu chưa có
(function ensureDefaultAdmin() {
  let users = JSON.parse(localStorage.getItem('users') || '[]');
  if (!users.find(u => u.username === 'admin')) {
    users.push({ username: 'admin', password: 'admin123', role: 'admin', createdAt: Date.now() });
    localStorage.setItem('users', JSON.stringify(users));
  }
})();

// Xuất các hàm ra window để dùng ở html
window.registerUser = registerUser;
window.loginUser = loginUser;
window.logoutUser = logoutUser;
window.getCurrentUser = getCurrentUser;
window.requireRole = requireRole;
