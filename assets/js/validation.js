/**
 * Input Validation & Sanitization Library
 * Sử dụng cho tất cả form inputs trong ứng dụng
 */

const Validator = {
  /**
   * Validate email format
   * @param {string} email 
   * @returns {boolean}
   */
  email: (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  },

  /**
   * Validate password strength
   * Ít nhất 8 ký tự, 1 chữ hoa, 1 chữ thường, 1 số
   * @param {string} password 
   * @returns {object} { valid: boolean, message: string }
   */
  password: (password) => {
    if (password.length < 8) {
      return { valid: false, message: 'Mật khẩu phải có ít nhất 8 ký tự' };
    }
    if (!/[a-z]/.test(password)) {
      return { valid: false, message: 'Mật khẩu phải có ít nhất 1 chữ thường' };
    }
    if (!/[A-Z]/.test(password)) {
      return { valid: false, message: 'Mật khẩu phải có ít nhất 1 chữ hoa' };
    }
    if (!/\d/.test(password)) {
      return { valid: false, message: 'Mật khẩu phải có ít nhất 1 chữ số' };
    }
    return { valid: true, message: 'Mật khẩu hợp lệ' };
  },

  /**
   * Validate username
   * 3-20 ký tự, chỉ chữ cái, số và underscore
   * @param {string} username 
   * @returns {boolean}
   */
  username: (username) => {
    const re = /^[a-zA-Z0-9_]{3,20}$/;
    return re.test(username);
  },

  /**
   * Sanitize HTML để prevent XSS attacks
   * @param {string} str 
   * @returns {string}
   */
  sanitizeHTML: (str) => {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  },

  /**
   * Validate và sanitize recipe title
   * @param {string} title 
   * @returns {object}
   */
  recipeTitle: (title) => {
    if (!title || title.trim().length < 5) {
      return { valid: false, message: 'Tên công thức phải có ít nhất 5 ký tự' };
    }
    if (title.length > 100) {
      return { valid: false, message: 'Tên công thức không được quá 100 ký tự' };
    }
    return { valid: true, sanitized: Validator.sanitizeHTML(title.trim()) };
  },

  /**
   * Validate description
   * @param {string} description 
   * @returns {object}
   */
  description: (description) => {
    if (!description || description.trim().length < 10) {
      return { valid: false, message: 'Mô tả phải có ít nhất 10 ký tự' };
    }
    if (description.length > 1000) {
      return { valid: false, message: 'Mô tả không được quá 1000 ký tự' };
    }
    return { valid: true, sanitized: Validator.sanitizeHTML(description.trim()) };
  },

  /**
   * Validate URL
   * @param {string} url 
   * @returns {boolean}
   */
  url: (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },

  /**
   * Validate số nguyên dương
   * @param {any} num 
   * @returns {boolean}
   */
  positiveInteger: (num) => {
    return Number.isInteger(Number(num)) && Number(num) > 0;
  },

  /**
   * Validate phone number (Vietnam)
   * @param {string} phone 
   * @returns {boolean}
   */
  phoneVN: (phone) => {
    const re = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    return re.test(phone);
  },

  /**
   * Validate image file
   * @param {File} file 
   * @returns {object}
   */
  imageFile: (file) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!file) {
      return { valid: false, message: 'Vui lòng chọn file' };
    }

    if (!allowedTypes.includes(file.type)) {
      return { valid: false, message: 'Chỉ chấp nhận file ảnh (JPG, PNG, WebP, GIF)' };
    }

    if (file.size > maxSize) {
      return { valid: false, message: 'File ảnh không được vượt quá 5MB' };
    }

    return { valid: true };
  },

  /**
   * Validate array of strings (ingredients, tags)
   * @param {Array} arr 
   * @param {number} minLength 
   * @returns {object}
   */
  stringArray: (arr, minLength = 1) => {
    if (!Array.isArray(arr)) {
      return { valid: false, message: 'Dữ liệu không hợp lệ' };
    }
    
    if (arr.length < minLength) {
      return { valid: false, message: `Phải có ít nhất ${minLength} mục` };
    }

    const sanitized = arr.map(item => Validator.sanitizeHTML(String(item).trim()));
    return { valid: true, sanitized };
  }
};

/**
 * Form Validator Helper
 * Tự động validate form khi submit
 */
class FormValidator {
  constructor(formElement, rules) {
    this.form = formElement;
    this.rules = rules;
    this.errors = {};
    
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (this.validate()) {
        this.onSuccess(this.getData());
      } else {
        this.displayErrors();
      }
    });
  }

  validate() {
    this.errors = {};
    let isValid = true;

    for (const [fieldName, rule] of Object.entries(this.rules)) {
      const field = this.form.querySelector(`[name="${fieldName}"]`);
      if (!field) continue;

      const value = field.value;
      
      // Required check
      if (rule.required && !value.trim()) {
        this.errors[fieldName] = rule.requiredMessage || 'Trường này là bắt buộc';
        isValid = false;
        continue;
      }

      // Custom validation
      if (rule.validator) {
        const result = rule.validator(value);
        if (result && !result.valid) {
          this.errors[fieldName] = result.message;
          isValid = false;
        }
      }
    }

    return isValid;
  }

  getData() {
    const formData = new FormData(this.form);
    const data = {};
    
    for (const [key, value] of formData.entries()) {
      const rule = this.rules[key];
      // Sanitize nếu rule yêu cầu
      if (rule && rule.sanitize) {
        data[key] = Validator.sanitizeHTML(value);
      } else {
        data[key] = value;
      }
    }
    
    return data;
  }

  displayErrors() {
    // Clear previous errors
    this.form.querySelectorAll('.error-message').forEach(el => el.remove());
    this.form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));

    // Display new errors
    for (const [fieldName, errorMessage] of Object.entries(this.errors)) {
      const field = this.form.querySelector(`[name="${fieldName}"]`);
      if (!field) continue;

      field.classList.add('is-invalid');
      
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message text-danger small mt-1';
      errorDiv.textContent = errorMessage;
      
      field.parentElement.appendChild(errorDiv);
    }

    // Focus vào field đầu tiên có lỗi
    const firstError = this.form.querySelector('.is-invalid');
    if (firstError) firstError.focus();
  }

  onSuccess(data) {
    // Override this method
    console.log('Form validated successfully:', data);
  }
}

// Export cho sử dụng trong modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Validator, FormValidator };
}
