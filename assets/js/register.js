// Đăng ký tài khoản với kiểm tra điều kiện mật khẩu và xác nhận điều khoản
// Hiển thị điều kiện mật khẩu đạt được bằng màu xanh

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registerForm');
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmInput = document.getElementById('confirmPassword');
  const agreeInput = document.getElementById('agreeTerms');
  const passwordRules = {
    length: document.getElementById('pwRuleLength'),
    upper: document.getElementById('pwRuleUpper'),
    lower: document.getElementById('pwRuleLower'),
    special: document.getElementById('pwRuleSpecial'),
  };
  const passwordIcons = {
    length: document.getElementById('pwIconLength'),
    upper: document.getElementById('pwIconUpper'),
    lower: document.getElementById('pwIconLower'),
    special: document.getElementById('pwIconSpecial'),
  };

  function validatePassword(pw) {
    return {
      length: pw.length >= 8,
      upper: /[A-Z]/.test(pw),
      lower: /[a-z]/.test(pw),
      special: /[0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(pw),
    };
  }

  passwordInput?.addEventListener('input', function () {
    const val = passwordInput.value;
    const rules = validatePassword(val);
    Object.keys(passwordRules).forEach(k => {
      if (rules[k]) {
        passwordRules[k].classList.add('text-success', 'fw-bold');
        passwordIcons[k].classList.add('text-success');
        passwordIcons[k].classList.remove('text-secondary');
      } else {
        passwordRules[k].classList.remove('text-success', 'fw-bold');
        passwordIcons[k].classList.remove('text-success');
        passwordIcons[k].classList.add('text-secondary');
      }
    });
  });

  form?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value;
    const confirm = confirmInput.value;
    const agree = agreeInput.checked;
    const rules = validatePassword(password);
    if (!email) {
      alert('Vui lòng nhập email!');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Email không hợp lệ!');
      return;
    }
    if (!(rules.length && rules.upper && rules.lower && rules.special)) {
      alert('Mật khẩu chưa đủ mạnh!');
      return;
    }
    if (password !== confirm) {
      alert('Xác nhận mật khẩu không khớp!');
      return;
    }
    if (!agree) {
      alert('Bạn phải đồng ý với điều khoản sử dụng!');
      return;
    }    // Đăng ký user (chỉ gọi khi email hợp lệ và chưa trùng)
    const result = window.registerUser({ username, email, password, role: 'member' });
    if (!result.success && result.message === 'Email đã tồn tại!') {
      alert('Email đã tồn tại! Vui lòng dùng email khác.');
      return;
    }
    if (!result.success) {
      alert(result.message);
      return;
    }
    // Lưu user local vào node users trên Firebase
    if (typeof saveUserToFirebase === 'function') {
      saveUserToFirebase(result.user);
    }
    alert('Đăng ký thành công! Vui lòng đăng nhập.');
    window.location.href = '/pages/auth/login.html';
  });
});