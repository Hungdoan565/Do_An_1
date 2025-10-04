/**
 * Lazy Loading Images
 * Tối ưu performance bằng cách chỉ load images khi cần thiết
 */

class LazyLoader {
  constructor(options = {}) {
    this.options = {
      rootMargin: options.rootMargin || '50px',
      threshold: options.threshold || 0.01,
      loadingClass: options.loadingClass || 'lazy-loading',
      loadedClass: options.loadedClass || 'lazy-loaded',
      errorClass: options.errorClass || 'lazy-error',
      placeholder: options.placeholder || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif"%3ELoading...%3C/text%3E%3C/svg%3E'
    };

    this.observer = null;
    this.init();
  }

  init() {
    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      console.warn('IntersectionObserver not supported, loading all images immediately');
      this.loadAllImages();
      return;
    }

    // Create observer
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      {
        rootMargin: this.options.rootMargin,
        threshold: this.options.threshold
      }
    );

    // Observe all lazy images
    this.observeImages();
  }

  observeImages() {
    const lazyImages = document.querySelectorAll('img[data-src], img[loading="lazy"]');
    lazyImages.forEach(img => {
      // Set placeholder if not already set
      if (!img.src || img.src === window.location.href) {
        img.src = this.options.placeholder;
      }
      
      img.classList.add(this.options.loadingClass);
      this.observer.observe(img);
    });
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.loadImage(entry.target);
        this.observer.unobserve(entry.target);
      }
    });
  }

  loadImage(img) {
    const src = img.dataset.src || img.getAttribute('data-src');
    if (!src) return;

    // Add loading class
    img.classList.add(this.options.loadingClass);

    // Create temp image to preload
    const tempImg = new Image();
    
    tempImg.onload = () => {
      img.src = src;
      img.classList.remove(this.options.loadingClass);
      img.classList.add(this.options.loadedClass);
      
      // Remove data-src attribute
      img.removeAttribute('data-src');
      
      // Dispatch custom event
      img.dispatchEvent(new CustomEvent('lazyloaded', {
        detail: { src }
      }));
    };

    tempImg.onerror = () => {
      img.classList.remove(this.options.loadingClass);
      img.classList.add(this.options.errorClass);
      
      // Set error placeholder
      img.src = this.getErrorPlaceholder();
      img.alt = 'Failed to load image';
      
      console.error(`Failed to load image: ${src}`);
    };

    tempImg.src = src;
  }

  loadAllImages() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
      const src = img.dataset.src;
      if (src) {
        img.src = src;
        img.removeAttribute('data-src');
      }
    });
  }

  getErrorPlaceholder() {
    return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23ffebee" width="400" height="300"/%3E%3Ctext fill="%23c62828" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif"%3EError loading image%3C/text%3E%3C/svg%3E';
  }

  // Public method to observe new images added dynamically
  observe(img) {
    if (this.observer) {
      this.observer.observe(img);
    }
  }

  // Disconnect observer
  disconnect() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

/**
 * Progressive Image Loading
 * Load low quality placeholder trước, sau đó load full quality
 */
class ProgressiveImage {
  constructor(container) {
    this.container = container;
    this.smallSrc = container.dataset.small || container.dataset.src;
    this.largeSrc = container.dataset.large || container.dataset.src;
    
    this.init();
  }

  init() {
    // Load small image first
    const smallImg = new Image();
    smallImg.onload = () => {
      this.container.style.backgroundImage = `url(${this.smallSrc})`;
      this.container.classList.add('progressive-loading');
      
      // Then load large image
      this.loadLargeImage();
    };
    smallImg.src = this.smallSrc;
  }

  loadLargeImage() {
    const largeImg = new Image();
    largeImg.onload = () => {
      this.container.style.backgroundImage = `url(${this.largeSrc})`;
      this.container.classList.add('progressive-loaded');
      this.container.classList.remove('progressive-loading');
    };
    largeImg.src = this.largeSrc;
  }
}

/**
 * Background Image Lazy Loading
 */
class BackgroundLazyLoader {
  constructor() {
    this.observer = null;
    this.init();
  }

  init() {
    if (!('IntersectionObserver' in window)) {
      this.loadAllBackgrounds();
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      {
        rootMargin: '50px',
        threshold: 0.01
      }
    );

    this.observeBackgrounds();
  }

  observeBackgrounds() {
    const lazyBackgrounds = document.querySelectorAll('[data-bg]');
    lazyBackgrounds.forEach(el => this.observer.observe(el));
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.loadBackground(entry.target);
        this.observer.unobserve(entry.target);
      }
    });
  }

  loadBackground(element) {
    const bgUrl = element.dataset.bg;
    if (!bgUrl) return;

    const img = new Image();
    img.onload = () => {
      element.style.backgroundImage = `url(${bgUrl})`;
      element.classList.add('bg-loaded');
      element.removeAttribute('data-bg');
    };
    img.src = bgUrl;
  }

  loadAllBackgrounds() {
    const lazyBackgrounds = document.querySelectorAll('[data-bg]');
    lazyBackgrounds.forEach(el => {
      const bgUrl = el.dataset.bg;
      if (bgUrl) {
        el.style.backgroundImage = `url(${bgUrl})`;
        el.removeAttribute('data-bg');
      }
    });
  }
}

/**
 * Auto Initialize
 */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize lazy loader
  window.lazyLoader = new LazyLoader({
    rootMargin: '100px',
    threshold: 0.01
  });

  // Initialize background lazy loader
  window.backgroundLazyLoader = new BackgroundLazyLoader();

  // Initialize progressive images
  document.querySelectorAll('.progressive-image').forEach(container => {
    new ProgressiveImage(container);
  });

  console.log('✅ Lazy loading initialized');
});

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LazyLoader, ProgressiveImage, BackgroundLazyLoader };
}
