// Dán cấu hình Firebase của bạn vào đây (xem README.md, phần "Cài Firebase").
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjLVuU3qzsKyjJcKsZYwTWTz3nZAt_ORc",
  authDomain: "game7-37fb4.firebaseapp.com",
  databaseURL: "https://game7-37fb4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "game7-37fb4",
  storageBucket: "game7-37fb4.firebasestorage.app",
  messagingSenderId: "864755700151",
  appId: "1:864755700151:web:8d3234d7ae1e1e6f87d832",
  measurementId: "G-2J2WN7HX8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Nếu để nguyên "YOUR_API_KEY", game sẽ báo lỗi đỏ và khóa nút, không chạy.
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT",
};
// Đổi tên phòng cho mỗi buổi thuyết trình để bảng điểm không bị lẫn
export const ROOM = "buoi-1";
