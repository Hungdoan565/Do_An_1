// Firebase configuration
var auth = firebase.auth();

function registerUser({ username, email, password, role = 'member' }) {
  let users = JSON.parse(localStorage.getItem('users') || '[]');
  const emailNorm = email.trim().toLowerCase();
  if (users.find(u => (u.email || '').trim().toLowerCase() === emailNorm)) return { success: false, message: 'Email đã tồn tại!' };
  users.push({ username, email: emailNorm, password, role, createdAt: Date.now() });
  localStorage.setItem('users', JSON.stringify(users));
  return { success: true };
}

// Đăng nhập: kiểm tra user qua email hoặc username
function loginUser({ email, username, password }) {
  let users = JSON.parse(localStorage.getItem('users') || '[]');
  let user = null;
  if (email) {
    const emailNorm = email.trim().toLowerCase();
    user = users.find(u => (u.email || '').trim().toLowerCase() === emailNorm && u.password === password);
  } else if (username) {
    user = users.find(u => (u.username || '').trim() === username.trim() && u.password === password);
  }
  if (!user) return { success: false, message: 'Sai email hoặc mật khẩu!' };
  sessionStorage.setItem('currentUser', JSON.stringify(user));
  return { success: true, user };
}

// Đăng xuất
function logoutUser() {
  sessionStorage.removeItem('currentUser');
}

// Lấy user hiện tại
function getCurrentUser() {
  return JSON.parse(sessionStorage.getItem('currentUser') || 'null');
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
// Xử lý đăng nhập Google
var provider = new firebase.auth.GoogleAuthProvider();

document.querySelectorAll(".btn-google, .social-btn.google-btn").forEach(function(btn) {
  btn.addEventListener("click", async function(e) {
    e.preventDefault();
    try {
      var result = await auth.signInWithPopup(provider);
      var user = result.user;
      sessionStorage.setItem(
        "currentUser",
        JSON.stringify({
          username: user.displayName || user.email.split("@")[0],
          email: user.email,
          photoURL: user.photoURL,
          role: "member",
          google: true,
          createdAt: Date.now(),
        })
      );
      window.location.href = "/index.html";
    } catch (error) {
      // Nếu popup bị chặn thì mới báo lỗi, còn lại im lặng
      if (error.code === "auth/popup-blocked") {
        alert("Đăng nhập Google thất bại: Cửa sổ đăng nhập bị chặn. Vui lòng cho phép popup.");
      }
      console.error("Lỗi đăng nhập Google:", error);
    }
  });
});

// Giám sát trạng thái xác thực
function setupAuthStateMonitoring() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Người dùng đã đăng nhập - có thể cập nhật UI nếu cần
      console.log("Đã đăng nhập với:", user.email);

      // Lưu thông tin người dùng nếu chưa có
      if (!localStorage.getItem("codemaster_user")) {
        localStorage.setItem(
          "codemaster_user",
          JSON.stringify({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName || user.email.split("@")[0],
            photoURL: user.photoURL,
          })
        );
      }

      // Cập nhật UI nếu cần
      // ...
    } else {
      // Người dùng chưa đăng nhập
      console.log("Chưa đăng nhập");

      // Cập nhật UI nếu cần
      // ...
    }
  });
}

// Đăng nhập Google (dùng cho login/register)
window.googleSignIn = async function() {
  var provider = new firebase.auth.GoogleAuthProvider();
  try {
    var result = await auth.signInWithPopup(provider);
    var user = result.user;
    sessionStorage.setItem(
      "currentUser",
      JSON.stringify({
        username: user.displayName || user.email.split("@")[0],
        email: user.email,
        photoURL: user.photoURL,
        role: "member",
        google: true,
        createdAt: Date.now(),
      })
    );
    window.location.href = "/index.html";
  } catch (error) {
    if (error.code === "auth/popup-blocked") {
      alert("Đăng nhập Google thất bại: Cửa sổ đăng nhập bị chặn. Vui lòng cho phép popup.");
    }
    console.error("Lỗi đăng nhập Google:", error);
  }
};

// Đăng nhập GitHub (dùng cho login/register)
window.githubSignIn = async function() {
  var provider = new firebase.auth.GithubAuthProvider();
  try {
    var result = await auth.signInWithPopup(provider);
    var user = result.user;
    sessionStorage.setItem(
      "currentUser",
      JSON.stringify({
        username: user.displayName || user.email?.split("@")[0] || user.uid,
        email: user.email || '',
        photoURL: user.photoURL,
        role: "member",
        github: true,
        createdAt: Date.now(),
      })
    );
    window.location.href = "/index.html";
  } catch (error) {
    if (error.code === "auth/popup-blocked") {
      alert("Đăng nhập GitHub thất bại: Cửa sổ đăng nhập bị chặn. Vui lòng cho phép popup.");
    }
    console.error("Lỗi đăng nhập GitHub:", error);
  }
};
