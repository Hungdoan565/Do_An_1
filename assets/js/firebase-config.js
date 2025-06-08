// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzqOJYiXQTe35KpqDpyALCSg4ZX-1UgEQ",
  authDomain: "recipes-food-a3989.firebaseapp.com",
  databaseURL: "https://recipes-food-a3989-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "recipes-food-a3989",
  storageBucket: "recipes-food-a3989.firebasestorage.app",
  messagingSenderId: "778286523232",
  appId: "1:778286523232:web:47da38bb305b2e4cbdf405",
  measurementId: "G-Z3QS5H4C4V"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
var analytics = firebase.analytics();
window.app = app;

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
