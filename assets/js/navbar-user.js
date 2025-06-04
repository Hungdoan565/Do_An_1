// assets/js/navbar-user.js
// Tự động render navbar theo trạng thái đăng nhập trên mọi trang

document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.navbar-nav');
  if (!nav) return;
  // Xóa các nav-item user/profile cũ 
  nav.innerHTML = '';
  const user = window.getCurrentUser && window.getCurrentUser();
  let html = '';
  html += `<li class="nav-item"><a class="nav-link" href="/index.html">Trang chủ</a></li>`;
  html += `<li class="nav-item"><a class="nav-link" href="/pages/recipes/list.html">Công thức</a></li>`;
  html += `<li class="nav-item"><a class="nav-link" href="/pages/blog.html">Blog</a></li>`;
  html += `<li class="nav-item"><a class="nav-link" href="/pages/about.html">Về chúng tôi</a></li>`;
  if (user) {
    // Avatar + tên + dropdown 
    html += `<li class="nav-item dropdown ms-3">
      <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="fas fa-user-circle fa-lg me-2"></i> ${user.username || 'User'}
      </a>
      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
        <li><a class="dropdown-item" href="/pages/user/profile.html">Trang cá nhân</a></li>
        ${user.role === 'admin' ? '<li><a class="dropdown-item" href="/pages/admin/dashboard.html">Quản trị</a></li>' : ''}
        <li><a class="dropdown-item text-danger" href="#" id="logoutNav">Đăng xuất</a></li>
      </ul>
    </li>`;
  } else {
    html += `<li class="nav-item ms-3">
      <a class="btn btn-outline-primary px-4 py-2 ms-2" href="/pages/auth/login.html" id="loginBtn">Đăng nhập</a>
      <a class="btn btn-primary px-4 py-2 ms-2" href="/pages/auth/register.html" id="registerBtn">Đăng ký</a>
    </li>`;
  }
  nav.innerHTML = html;
  // Đăng xuất
  document.getElementById('logoutNav')?.addEventListener('click', function (e) {
    e.preventDefault();
    window.logoutUser && window.logoutUser();
    window.location.href = '/index.html';
  });
});
