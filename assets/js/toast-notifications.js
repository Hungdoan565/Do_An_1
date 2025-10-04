/**
 * TOAST NOTIFICATION SYSTEM
 * Professional notification toasts với animations
 */

class ToastNotification {
  constructor(options = {}) {
    this.container = null;
    this.toasts = [];
    this.options = {
      position: options.position || 'top-right', // top-right, top-left, bottom-right, bottom-left, top-center, bottom-center
      maxToasts: options.maxToasts || 5,
      defaultDuration: options.defaultDuration || 4000,
      animationDuration: options.animationDuration || 300,
      gap: options.gap || 16,
    };
    
    this.init();
  }

  init() {
    // Create container if doesn't exist
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = `toast-container toast-${this.options.position}`;
      this.container.style.cssText = this.getContainerStyles();
      document.body.appendChild(this.container);
    }
  }

  getContainerStyles() {
    const positions = {
      'top-right': 'top: 20px; right: 20px;',
      'top-left': 'top: 20px; left: 20px;',
      'bottom-right': 'bottom: 20px; right: 20px;',
      'bottom-left': 'bottom: 20px; left: 20px;',
      'top-center': 'top: 20px; left: 50%; transform: translateX(-50%);',
      'bottom-center': 'bottom: 20px; left: 50%; transform: translateX(-50%);',
    };

    return `
      position: fixed;
      ${positions[this.options.position]}
      z-index: 10000;
      display: flex;
      flex-direction: column;
      gap: ${this.options.gap}px;
      max-width: 400px;
      pointer-events: none;
    `;
  }

  /**
   * Show toast notification
   * @param {object} config - { type, title, message, duration, icon, action }
   */
  show(config) {
    const {
      type = 'info',
      title,
      message,
      duration = this.options.defaultDuration,
      icon,
      action
    } = config;

    // Remove oldest toast if limit reached
    if (this.toasts.length >= this.options.maxToasts) {
      this.remove(this.toasts[0].id);
    }

    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const toast = this.createToast({ id, type, title, message, icon, action });
    
    this.toasts.push({ id, element: toast, timer: null });
    this.container.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('toast-show');
    });

    // Auto remove after duration
    if (duration > 0) {
      const timer = setTimeout(() => {
        this.remove(id);
      }, duration);
      
      const toastObj = this.toasts.find(t => t.id === id);
      if (toastObj) toastObj.timer = timer;
    }

    return id;
  }

  createToast({ id, type, title, message, icon, action }) {
    const toast = document.createElement('div');
    toast.id = id;
    toast.className = `toast toast-${type}`;
    toast.style.cssText = this.getToastStyles();

    const iconHTML = icon || this.getDefaultIcon(type);
    const actionHTML = action ? `
      <button class="toast-action" onclick="${action.onClick}">
        ${action.text}
      </button>
    ` : '';

    toast.innerHTML = `
      <div class="toast-icon">${iconHTML}</div>
      <div class="toast-content">
        ${title ? `<div class="toast-title">${title}</div>` : ''}
        ${message ? `<div class="toast-message">${message}</div>` : ''}
        ${actionHTML}
      </div>
      <button class="toast-close" aria-label="Close">
        <i class="fas fa-times"></i>
      </button>
    `;

    // Add close button handler
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.remove(id);
    });

    // Make toast clickable if action exists
    if (action && action.onToastClick) {
      toast.style.cursor = 'pointer';
      toast.addEventListener('click', action.onToastClick);
    }

    return toast;
  }

  getToastStyles() {
    return `
      background: white;
      border-radius: 12px;
      padding: 16px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.05);
      display: flex;
      align-items: flex-start;
      gap: 12px;
      min-width: 300px;
      max-width: 400px;
      opacity: 0;
      transform: translateX(100%);
      transition: all ${this.options.animationDuration}ms cubic-bezier(0.4, 0, 0.2, 1);
      pointer-events: all;
      position: relative;
      overflow: hidden;
    `;
  }

  getDefaultIcon(type) {
    const icons = {
      success: '<i class="fas fa-check-circle" style="color: #10B981;"></i>',
      error: '<i class="fas fa-times-circle" style="color: #EF4444;"></i>',
      warning: '<i class="fas fa-exclamation-triangle" style="color: #F59E0B;"></i>',
      info: '<i class="fas fa-info-circle" style="color: #3B82F6;"></i>',
    };
    return icons[type] || icons.info;
  }

  remove(id) {
    const toastObj = this.toasts.find(t => t.id === id);
    if (!toastObj) return;

    const { element, timer } = toastObj;
    
    // Clear timer
    if (timer) clearTimeout(timer);

    // Remove animation
    element.classList.remove('toast-show');
    element.classList.add('toast-hide');

    // Remove from DOM after animation
    setTimeout(() => {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }
      this.toasts = this.toasts.filter(t => t.id !== id);
    }, this.options.animationDuration);
  }

  // Shorthand methods
  success(message, title, duration) {
    return this.show({ type: 'success', title, message, duration });
  }

  error(message, title, duration) {
    return this.show({ type: 'error', title, message, duration });
  }

  warning(message, title, duration) {
    return this.show({ type: 'warning', title, message, duration });
  }

  info(message, title, duration) {
    return this.show({ type: 'info', title, message, duration });
  }

  // Clear all toasts
  clearAll() {
    this.toasts.forEach(toast => this.remove(toast.id));
  }
}

// Inject CSS styles
const toastStyles = document.createElement('style');
toastStyles.textContent = `
  .toast-show {
    opacity: 1 !important;
    transform: translateX(0) !important;
  }

  .toast-hide {
    opacity: 0 !important;
    transform: translateX(100%) !important;
  }

  .toast-icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

  .toast-content {
    flex: 1;
    min-width: 0;
  }

  .toast-title {
    font-size: 14px;
    font-weight: 600;
    color: #111827;
    margin-bottom: 4px;
  }

  .toast-message {
    font-size: 14px;
    color: #6B7280;
    line-height: 1.5;
  }

  .toast-close {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    color: #9CA3AF;
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 150ms;
  }

  .toast-close:hover {
    background: #F3F4F6;
    color: #111827;
  }

  .toast-action {
    margin-top: 8px;
    padding: 6px 12px;
    border: none;
    background: #3B82F6;
    color: white;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 150ms;
  }

  .toast-action:hover {
    background: #2563EB;
  }

  /* Type-specific styles */
  .toast-success {
    border-left: 4px solid #10B981;
  }

  .toast-error {
    border-left: 4px solid #EF4444;
  }

  .toast-warning {
    border-left: 4px solid #F59E0B;
  }

  .toast-info {
    border-left: 4px solid #3B82F6;
  }

  /* Progress bar */
  .toast-progress {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background: currentColor;
    opacity: 0.3;
    animation: toast-progress 4s linear;
  }

  @keyframes toast-progress {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }

  /* Mobile responsive */
  @media (max-width: 640px) {
    .toast-container {
      left: 10px !important;
      right: 10px !important;
      max-width: calc(100% - 20px) !important;
    }

    .toast {
      min-width: auto !important;
      max-width: none !important;
    }
  }

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    .toast {
      background: #1F2937 !important;
    }

    .toast-title {
      color: #F9FAFB !important;
    }

    .toast-message {
      color: #D1D5DB !important;
    }

    .toast-close {
      color: #9CA3AF !important;
    }

    .toast-close:hover {
      background: #374151 !important;
      color: #F9FAFB !important;
    }
  }
`;
document.head.appendChild(toastStyles);

// Create global instance
window.toast = new ToastNotification({
  position: 'top-right',
  maxToasts: 5,
  defaultDuration: 4000
});

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ToastNotification;
}

console.log('✅ Toast Notification System initialized');
