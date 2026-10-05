// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Nếu để nguyên "YOUR_API_KEY", game sẽ báo lỗi đỏ và khóa nút, không chạy.
export const firebaseConfig = {
  apiKey: "AIzaSyBjLVuU3qzsKyjJcKsZYwTWTz3nZAt_ORc",
  authDomain: "game7-37fb4.firebaseapp.com",
  databaseURL: "https://game7-37fb4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "game7-37fb4"
};
// Đổi tên phòng cho mỗi buổi thuyết trình để bảng điểm không bị lẫn
export const ROOM = "buoi-1";
