// Firebase v8 config chuẩn, KHÔNG gọi analytics nếu không dùng
// Đảm bảo chỉ khởi tạo 1 lần
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCzqOJYiXQTe35KpqDpyALCSg4ZX-1UgEQ",
    authDomain: "recipes-food-a3989.firebaseapp.com",
    databaseURL: "https://recipes-food-a3989-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "recipes-food-a3989",
    storageBucket: "recipes-food-a3989.appspot.com",
    messagingSenderId: "778286523232",
    appId: "1:778286523232:web:47da38bb305b2e4cbdf405",
    measurementId: "G-Z3QS5H4C4V"
  });
}

// Lấy dữ liệu từ Firebase Realtime Database
function fetchData(path, callback) {
  var db = firebase.database();
  db.ref(path).once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
}

// Ghi dữ liệu vào Firebase Realtime Database
function addRecipeToFirebase(recipe, callback, errorCallback) {
  var db = firebase.database();
  // Tạo id tự động bằng push
  var newRef = db.ref('recipes').push();
  newRef.set(recipe)
    .then(function() {
      if (callback) callback(newRef.key);
    })
    .catch(function(error) {
      if (errorCallback) errorCallback(error);
    });
}

// Lưu user vào Firebase Realtime Database (node users/{uid})
function saveUserToFirebase(user) {
  if (!user || !user.uid) return;
  var db = firebase.database();
  // Chuẩn hóa dữ liệu user
  var userData = {
    uid: user.uid,
    username: user.username || user.displayName || '',
    email: user.email || '',
    photoURL: user.photoURL || user.avatar || '',
    role: user.role || 'member',
    createdAt: user.createdAt || Date.now(),
    bio: user.bio || '',
  };
  db.ref('users/' + user.uid).set(userData);
}

// Lưu liên hệ vào Firebase Realtime Database (node contacts)
function saveContactToFirebase(contact, callback, errorCallback) {
  var db = firebase.database();
  var newRef = db.ref('contacts').push();
  newRef.set(contact)
    .then(function() {
      if (callback) callback(newRef.key);
    })
    .catch(function(error) {
      if (errorCallback) errorCallback(error);
    });
}

// Lấy danh mục món ăn (categories) chỉ active=true
function fetchActiveCategories(callback) {
  var db = firebase.database();
  db.ref('categories').once('value').then(function(snapshot) {
    const categories = snapshot.val() || {};
    // Chỉ lấy các mục active=true
    const activeCats = Object.entries(categories)
      .filter(([id, cat]) => cat.active !== false)
      .map(([id, cat]) => ({ id, ...cat }));
    callback(activeCats);
  });
}

// Lấy tags công thức chỉ active=true
function fetchActiveRecipeTags(callback) {
  var db = firebase.database();
  db.ref('tags_recipe').once('value').then(function(snapshot) {
    const tags = snapshot.val() || {};
    const activeTags = Object.entries(tags)
      .filter(([id, tag]) => tag.active !== false)
      .map(([id, tag]) => ({ id, ...tag }));
    callback(activeTags);
  });
}

// Lấy tags blog chỉ active=true
function fetchActiveBlogTags(callback) {
  var db = firebase.database();
  db.ref('tags_blog').once('value').then(function(snapshot) {
    const tags = snapshot.val() || {};
    const activeTags = Object.entries(tags)
      .filter(([id, tag]) => tag.active !== false)
      .map(([id, tag]) => ({ id, ...tag }));
    callback(activeTags);
  });
}

