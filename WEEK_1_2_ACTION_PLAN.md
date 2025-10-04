# 📅 TUẦN 1-2: ACTION PLAN CHI TIẾT

## 🎯 MỤC TIÊU: 5 Quick Wins với tác động lớn nhất

---

## 📋 CHECKLIST TỔNG QUAN

- [ ] **Day 1-3:** Firebase Storage + Image Upload
- [ ] **Day 4-5:** Real Rating System
- [ ] **Day 6:** PWA Setup (manifest + service worker)
- [ ] **Day 7:** Dark Mode
- [ ] **Day 8-9:** SEO Optimization
- [ ] **Day 10:** Testing & Bug fixes
- [ ] **Day 11-12:** Performance optimization
- [ ] **Day 13-14:** Documentation & Deploy

---

## 🔥 NGÀY 1-3: FIREBASE STORAGE & IMAGE UPLOAD

### 🎯 Mục tiêu:
Thay thế base64 images bằng Firebase Storage để website nhanh hơn 70%

### 📝 Các bước thực hiện:

#### Bước 1: Enable Firebase Storage (15 phút)
1. Vào Firebase Console → Storage
2. Click "Get Started"
3. Chọn location (asia-southeast1 cho VN)
4. Enable Storage

#### Bước 2: Cài đặt Firebase Storage trong code (30 phút)

**File: `assets/js/firebase-config.js`**
```javascript
// Thêm vào sau firebase.initializeApp()
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp({...});
  
  // Khởi tạo Storage
  const storage = firebase.storage();
  const storageRef = storage.ref();
  
  window.firebaseStorage = storage;
  window.storageRef = storageRef;
}
```

#### Bước 3: Tạo Image Upload Utility (2 giờ)

**File mới: `assets/js/image-upload.js`**
```javascript
// Compress và upload ảnh lên Firebase Storage
async function uploadRecipeImage(file, recipeId) {
  try {
    // 1. Compress image
    const compressed = await compressImage(file, 800, 0.8);
    
    // 2. Upload to Firebase Storage
    const path = `recipes/${recipeId}/${Date.now()}_${file.name}`;
    const uploadRef = window.storageRef.child(path);
    const snapshot = await uploadRef.put(compressed);
    
    // 3. Get download URL
    const downloadURL = await snapshot.ref.getDownloadURL();
    
    return downloadURL;
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}

// Compress image before upload
function compressImage(file, maxWidth, quality) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        
        // Resize if needed
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }
        
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        
        canvas.toBlob(
          (blob) => resolve(blob),
          'image/jpeg',
          quality
        );
      };
    };
    reader.onerror = reject;
  });
}

// Upload multiple images
async function uploadMultipleImages(files, recipeId) {
  const promises = Array.from(files).map(file => 
    uploadRecipeImage(file, recipeId)
  );
  return Promise.all(promises);
}
```

#### Bước 4: Update Add Recipe Form (1 giờ)

**File: `pages/user/add-recipe.html`**
```html
<!-- Thay input file hiện tại bằng: -->
<div class="mb-3">
  <label class="form-label">Hình ảnh món ăn</label>
  <input 
    type="file" 
    class="form-control" 
    id="recipeImageInput"
    accept="image/*"
    multiple
  />
  <small class="text-muted">Có thể chọn nhiều ảnh. Ảnh sẽ được tự động nén.</small>
  
  <!-- Preview -->
  <div id="imagePreview" class="mt-3 d-flex flex-wrap gap-2"></div>
</div>
```

**JavaScript:**
```javascript
// Preview images
document.getElementById('recipeImageInput').addEventListener('change', (e) => {
  const files = e.target.files;
  const preview = document.getElementById('imagePreview');
  preview.innerHTML = '';
  
  Array.from(files).forEach(file => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.style.width = '100px';
      img.style.height = '100px';
      img.style.objectFit = 'cover';
      img.style.borderRadius = '8px';
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
});

// On form submit
async function handleRecipeSubmit(e) {
  e.preventDefault();
  
  // Show loading
  showLoading();
  
  try {
    // 1. Create recipe ID
    const recipeId = firebase.database().ref('recipe_config').push().key;
    
    // 2. Upload images
    const files = document.getElementById('recipeImageInput').files;
    const imageUrls = await uploadMultipleImages(files, recipeId);
    
    // 3. Save recipe with image URLs
    const recipe = {
      ...getFormData(),
      image: imageUrls[0], // Main image
      images: imageUrls,   // All images
      createdAt: Date.now(),
      pending: true
    };
    
    await firebase.database().ref(`recipe_config/${recipeId}`).set(recipe);
    
    hideLoading();
    showSuccess('Công thức đã được tạo!');
    
  } catch (error) {
    hideLoading();
    showError('Lỗi: ' + error.message);
  }
}
```

#### Bước 5: Update Detail Page để hiển thị multiple images (1 giờ)

**File: `pages/recipes/detail.html`**
```html
<!-- Thêm image gallery -->
<div class="image-gallery mb-4">
  <div class="main-image">
    <img src="" alt="" id="mainRecipeImage">
  </div>
  <div class="thumbnail-list d-flex gap-2 mt-2" id="thumbnailList">
    <!-- Thumbnails will be rendered here -->
  </div>
</div>
```

```javascript
// Render multiple images
function renderRecipeImages(images) {
  const mainImg = document.getElementById('mainRecipeImage');
  const thumbnails = document.getElementById('thumbnailList');
  
  if (!images || images.length === 0) {
    mainImg.src = '/assets/images/recipes/default.jpg';
    return;
  }
  
  mainImg.src = images[0];
  
  thumbnails.innerHTML = images.map((url, i) => `
    <img 
      src="${url}" 
      alt="Recipe image ${i+1}"
      class="thumbnail ${i === 0 ? 'active' : ''}"
      onclick="changeMainImage('${url}')"
      style="width:80px;height:80px;object-fit:cover;cursor:pointer;border-radius:8px;"
    />
  `).join('');
}

function changeMainImage(url) {
  document.getElementById('mainRecipeImage').src = url;
  // Update active thumbnail
  document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
}
```

#### Bước 6: Firebase Security Rules (30 phút)

**Firebase Console → Storage → Rules:**
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /recipes/{recipeId}/{imageId} {
      // Cho phép đọc với mọi người
      allow read: if true;
      
      // Chỉ cho phép user đã login upload
      allow write: if request.auth != null 
        && request.resource.size < 5 * 1024 * 1024 // Max 5MB
        && request.resource.contentType.matches('image/.*'); // Chỉ cho phép image
    }
  }
}
```

### ✅ Kiểm tra hoàn thành:
- [ ] Firebase Storage đã enable
- [ ] Image upload utility đã hoạt động
- [ ] Add recipe form có upload nhiều ảnh
- [ ] Detail page hiển thị image gallery
- [ ] Security rules đã set up
- [ ] Test upload ảnh thành công
- [ ] Ảnh được compress tự động

---

## ⭐ NGÀY 4-5: REAL RATING SYSTEM

### 🎯 Mục tiêu:
User có thể rate công thức 1-5 sao, hiển thị rating trung bình real-time

### 📝 Các bước:

#### Bước 1: Database Structure

**Firebase Realtime Database:**
```json
{
  "ratings": {
    "recipe_id": {
      "user_id_1": 5,
      "user_id_2": 4,
      "user_id_3": 5
    }
  }
}
```

#### Bước 2: Rating Component (1 giờ)

**File mới: `assets/js/rating-system.js`**
```javascript
// Hiển thị stars
function renderStars(rating, size = 'medium') {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  let html = '';
  
  // Full stars
  for (let i = 0; i < fullStars; i++) {
    html += '<i class="fas fa-star text-warning"></i>';
  }
  
  // Half star
  if (hasHalfStar) {
    html += '<i class="fas fa-star-half-alt text-warning"></i>';
  }
  
  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    html += '<i class="far fa-star text-warning"></i>';
  }
  
  return html;
}

// Calculate average rating
function calculateAverageRating(ratings) {
  if (!ratings || Object.keys(ratings).length === 0) return 0;
  const values = Object.values(ratings);
  const sum = values.reduce((a, b) => a + b, 0);
  return (sum / values.length).toFixed(1);
}

// Get rating breakdown
function getRatingBreakdown(ratings) {
  const breakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  Object.values(ratings || {}).forEach(rating => {
    breakdown[rating] = (breakdown[rating] || 0) + 1;
  });
  return breakdown;
}

// Rate recipe
async function rateRecipe(recipeId, rating) {
  const user = window.getCurrentUser();
  if (!user) {
    alert('Vui lòng đăng nhập để đánh giá!');
    return;
  }
  
  try {
    await firebase.database()
      .ref(`ratings/${recipeId}/${user.uid}`)
      .set(rating);
    
    showToast('Cảm ơn bạn đã đánh giá!', 'success');
    
    // Update UI
    await loadRecipeRating(recipeId);
  } catch (error) {
    showToast('Lỗi: ' + error.message, 'error');
  }
}

// Load recipe rating
async function loadRecipeRating(recipeId) {
  const snapshot = await firebase.database()
    .ref(`ratings/${recipeId}`)
    .once('value');
  
  const ratings = snapshot.val() || {};
  const average = calculateAverageRating(ratings);
  const count = Object.keys(ratings).length;
  
  // Update UI
  document.getElementById('recipeRating').innerHTML = `
    ${renderStars(average)}
    <span class="ms-2">${average} (${count} đánh giá)</span>
  `;
  
  // Update rating breakdown
  renderRatingBreakdown(ratings);
}
```

#### Bước 3: Add Rating UI to Detail Page (1 giờ)

**File: `pages/recipes/detail.html`**
```html
<!-- Thêm sau recipe-meta -->
<div class="rating-section my-4">
  <div class="d-flex align-items-center gap-3">
    <div id="recipeRating">
      <i class="far fa-star text-warning"></i>
      <i class="far fa-star text-warning"></i>
      <i class="far fa-star text-warning"></i>
      <i class="far fa-star text-warning"></i>
      <i class="far fa-star text-warning"></i>
      <span class="ms-2">0.0 (0 đánh giá)</span>
    </div>
    <button class="btn btn-outline-primary btn-sm" onclick="openRatingModal()">
      <i class="fas fa-star me-1"></i>Đánh giá
    </button>
  </div>
  
  <!-- Rating breakdown -->
  <div id="ratingBreakdown" class="mt-3"></div>
</div>

<!-- Rating Modal -->
<div class="modal fade" id="ratingModal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Đánh giá công thức</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body text-center">
        <p class="mb-3">Bạn thấy công thức này như thế nào?</p>
        <div class="rating-stars" id="userRatingStars">
          <i class="far fa-star fs-1 mx-1" data-rating="1"></i>
          <i class="far fa-star fs-1 mx-1" data-rating="2"></i>
          <i class="far fa-star fs-1 mx-1" data-rating="3"></i>
          <i class="far fa-star fs-1 mx-1" data-rating="4"></i>
          <i class="far fa-star fs-1 mx-1" data-rating="5"></i>
        </div>
        <p class="mt-2 text-muted" id="ratingText">Chọn số sao</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
        <button class="btn btn-primary" id="submitRatingBtn" disabled>Gửi đánh giá</button>
      </div>
    </div>
  </div>
</div>
```

**JavaScript:**
```javascript
let selectedRating = 0;

function openRatingModal() {
  const user = window.getCurrentUser();
  if (!user) {
    alert('Vui lòng đăng nhập để đánh giá!');
    return;
  }
  
  const modal = new bootstrap.Modal(document.getElementById('ratingModal'));
  modal.show();
}

// Handle star hover and click
document.querySelectorAll('#userRatingStars i').forEach(star => {
  star.addEventListener('mouseover', function() {
    const rating = parseInt(this.dataset.rating);
    highlightStars(rating);
  });
  
  star.addEventListener('click', function() {
    selectedRating = parseInt(this.dataset.rating);
    document.getElementById('submitRatingBtn').disabled = false;
    updateRatingText(selectedRating);
  });
});

document.getElementById('userRatingStars').addEventListener('mouseleave', () => {
  highlightStars(selectedRating);
});

function highlightStars(rating) {
  document.querySelectorAll('#userRatingStars i').forEach((star, index) => {
    if (index < rating) {
      star.classList.remove('far');
      star.classList.add('fas');
    } else {
      star.classList.remove('fas');
      star.classList.add('far');
    }
  });
}

function updateRatingText(rating) {
  const texts = ['', 'Không hài lòng', 'Tạm được', 'Bình thường', 'Tốt', 'Xuất sắc!'];
  document.getElementById('ratingText').textContent = texts[rating];
}

document.getElementById('submitRatingBtn').addEventListener('click', async () => {
  await rateRecipe(recipeId, selectedRating);
  bootstrap.Modal.getInstance(document.getElementById('ratingModal')).hide();
});
```

### ✅ Kiểm tra hoàn thành:
- [ ] User có thể rate 1-5 sao
- [ ] Hiển thị average rating
- [ ] Hiển thị số lượng ratings
- [ ] Rating breakdown chart
- [ ] Modal rating UX tốt
- [ ] Real-time update

---

## 📱 NGÀY 6: PWA SETUP

### 🎯 Mục tiêu:
Biến website thành Progressive Web App, có thể install lên điện thoại

### 📝 Các bước:

#### Bước 1: Tạo manifest.json (30 phút)

**File mới: `manifest.json`**
```json
{
  "name": "Món Ngon Việt Nam",
  "short_name": "Món Ngon VN",
  "description": "Nền tảng chia sẻ công thức nấu ăn Việt Nam",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#e74c3c",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/assets/images/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "/assets/images/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "/assets/images/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "/assets/images/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "/assets/images/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "/assets/images/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/assets/images/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "/assets/images/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

#### Bước 2: Link manifest trong HTML (10 phút)

**Thêm vào `<head>` của tất cả HTML files:**
```html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#e74c3c">
<link rel="apple-touch-icon" href="/assets/images/icon-192x192.png">
```

#### Bước 3: Service Worker (2 giờ)

**File mới: `service-worker.js`**
```javascript
const CACHE_NAME = 'mon-ngon-vn-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/pages/recipes/list.html',
  '/assets/css/style.css',
  '/assets/js/main.js',
  '/assets/images/logo.png'
];

// Install service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch from cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

// Update service worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );
});
```

#### Bước 4: Register Service Worker (15 phút)

**File mới: `assets/js/pwa.js`**
```javascript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('SW registered:', reg))
      .catch(err => console.error('SW registration failed:', err));
  });
}

// Install prompt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  
  // Show install button
  const installBtn = document.getElementById('installBtn');
  if (installBtn) {
    installBtn.style.display = 'block';
    installBtn.addEventListener('click', () => {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted install');
        }
        deferredPrompt = null;
      });
    });
  }
});
```

### ✅ Kiểm tra:
- [ ] manifest.json created
- [ ] Icons generated (72-512px)
- [ ] Service worker registered
- [ ] Offline mode works
- [ ] Install prompt shows

---

**CÒN TIẾP... (Day 7-14 trong file tiếp theo)**
