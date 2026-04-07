// Init + Register challenges & exercises
// ===== INIT =====
renderSidebar(); render(); renderXP(); checkWelcome();
// Check streak on load
var today = new Date().toISOString().split('T')[0];
if (xpData.lastDate !== today) {
  var yesterday = new Date(Date.now()-86400000).toISOString().split('T')[0];
  if (xpData.lastDate && xpData.lastDate !== yesterday) xpData.streak = 0;
}

// ===== REGISTER CHALLENGES =====
// M1
registerChallenge('m1_calc', function(logs) {
  if (logs.some(function(l){return l.includes('26')})) return {pass:true,msg:'Chính xác! 2026-2000 = 26 tuổi. +20 XP'};
  return {pass:false,msg:'Chưa đúng. Hãy tính 2026 - namSinh và in ra bằng template literal.'};
});
registerChallenge('m1_bill', function(logs) {
  if (logs.some(function(l){return l.includes('81000') || l.includes('81,000')})) return {pass:true,msg:'Hóa đơn tính đúng! 90000 - 10% = 81000đ. +20 XP'};
  return {pass:false,msg:'Thực trả = tongTien - (tongTien * giamGia / 100). Kết quả phải là 81000.'};
});
registerChallenge('m1_convert', function(logs) {
  if (logs.some(function(l){return l.includes('165') && l.includes('2645')})) return {pass:true,msg:'Chuyển đổi chính xác! +20 XP'};
  return {pass:false,msg:'75kg = 165.375 lb = 2645.55 oz. Kiểm tra lại phép nhân.'};
});
registerChallenge('m1_profile', function(logs) {
  if (logs.some(function(l){return l.includes('PROFILE') || l.includes('Ten:')}) && logs.length >= 1) return {pass:true,msg:'Profile card đẹp! +20 XP'};
  return {pass:false,msg:'Cần in ra đủ: Ten, Tuoi, Email, Nghe nghiep, Thanh pho.'};
});
// M2
registerChallenge('m2_fizz', function(logs) {
  if (logs.length >= 15 && logs.some(function(l){return l==='FizzBuzz'})) return {pass:true,msg:'FizzBuzz hoàn hảo! +20 XP'};
  return {pass:false,msg:'Cần in 1-30: chia hết 3→Fizz, chia hết 5→Buzz, cả hai→FizzBuzz.'};
});
registerChallenge('m2_grade', function(logs) {
  if (logs.some(function(l){return l.toLowerCase().includes('kha')})) return {pass:true,msg:'Xếp loại đúng! 7.5 → Khá. +20 XP'};
  return {pass:false,msg:'Điểm 7.5 cần xếp loại "Kha" (>= 6.5 và < 8).'};
});
registerChallenge('m2_atm', function(logs) {
  if (logs.some(function(l){return l.includes('thanh cong') || l.includes('Rut')})) return {pass:true,msg:'ATM hoạt động! +20 XP'};
  return {pass:false,msg:'Kiểm tra: đủ số dư? Chia hết 50000? In kết quả phù hợp.'};
});
registerChallenge('m2_pattern', function(logs) {
  if (logs.length >= 5 && logs[4] && logs[4].includes('*****')) return {pass:true,msg:'Tam giác sao hoàn hảo! +20 XP'};
  return {pass:false,msg:'Cần in 5 dòng: *, **, ***, ****, *****. Dùng vòng for.'};
});
// M3
registerChallenge('m3_factorial', function(logs, code) {
  if (logs.some(function(l){return l.includes('120')}) && code.includes('function')) return {pass:true,msg:'Giai thừa 5 = 120. Chính xác! +20 XP'};
  return {pass:false,msg:'Hàm giaiThua(5) cần trả về 120. Dùng vòng lặp nhân dần.'};
});
registerChallenge('m3_password', function(logs, code) {
  if (code.includes('function') && logs.some(function(l){return l.includes('true')}) && logs.some(function(l){return l.includes('false')})) return {pass:true,msg:'Kiểm tra mật khẩu hoạt động! +20 XP'};
  return {pass:false,msg:'Hàm cần trả về {manh: true/false, lyDo: "..."}. Kiểm tra length, chữ hoa, số.'};
});
registerChallenge('m3_format', function(logs) {
  if (logs.some(function(l){return l.includes('1,500,000') || l.includes('1.500.000')})) return {pass:true,msg:'Format tiền VND đúng! +20 XP'};
  return {pass:false,msg:'1500000 → "1,500,000 VND". Thử dùng .toLocaleString("vi-VN").'};
});
registerChallenge('m3_calc', function(logs) {
  if (logs.some(function(l){return l.includes('15')}) && logs.some(function(l){return l.includes('chia cho 0') || l.includes('Khong the')})) return {pass:true,msg:'Máy tính hoạt động! +20 XP'};
  return {pass:false,msg:'10+5=15 phải đúng VÀ chia cho 0 phải báo lỗi.'};
});
// M4
registerChallenge('m4_contacts', function(logs) {
  if (logs.length >= 3 && logs.some(function(l){return l.includes('Ban be') || l.includes('An')})) return {pass:true,msg:'Quản lý danh bạ OK! +20 XP'};
  return {pass:false,msg:'Cần: thêm contact, tìm theo tên, lọc nhóm, map tên+sdt.'};
});
registerChallenge('m4_shop', function(logs) {
  if (logs.some(function(l){return l.includes('Tong') || l.includes('tong')})) return {pass:true,msg:'Giỏ hàng tính đúng! +20 XP'};
  return {pass:false,msg:'Dùng reduce để tính tổng: gia * soLuong cho mỗi sản phẩm.'};
});
registerChallenge('m4_stats', function(logs) {
  if (logs.length >= 3) return {pass:true,msg:'Thống kê lớp học hoàn chỉnh! +20 XP'};
  return {pass:false,msg:'Cần tính: TB, cao/thấp nhất, xếp loại, sắp xếp. In đủ kết quả.'};
});
// M5
registerChallenge('m5_order', function(logs) {
  if (logs.some(function(l){return l.includes('thanh cong') || l.includes('Con hang')})) return {pass:true,msg:'Hệ thống đặt hàng hoạt động! +20 XP'};
  return {pass:false,msg:'Cần gọi tuần tự: kiemTraKho → thanhToan → guiEmail với await.'};
});
registerChallenge('m5_race', function(logs) {
  if (logs.some(function(l){return l.includes('nhanh nhat') || l.includes('VN')})) return {pass:true,msg:'Promise.race hoạt động! +20 XP'};
  return {pass:false,msg:'Dùng Promise.race() với 3 server. In tên server nhanh nhất.'};
});
// ===== REGISTER EXERCISES =====
// M1
registerExercise('m1_ex1', function(logs) { return logs.some(function(l){return l.includes('26')}) ? {pass:true} : {pass:false}; });
registerExercise('m1_ex2', function(logs) { return logs.some(function(l){return l.includes('98.6')}) ? {pass:true} : {pass:false}; });
registerExercise('m1_ex3', function(logs) { return logs.some(function(l){return l.toLowerCase().includes('le')}) ? {pass:true} : {pass:false}; });
registerExercise('m1_ex4', function(logs) { return logs.some(function(l){return l.includes('minh@gmail.com')}) ? {pass:true} : {pass:false}; });
registerExercise('m1_ex5', function(logs) { return (logs.some(function(l){return l.includes('10')}) && logs.some(function(l){return l.includes('dlroW')||l.includes('2')})) ? {pass:true} : {pass:false}; });
// M2
registerExercise('m2_ex1', function(logs) { return (logs.length >= 10 && logs.some(function(l){return l.includes('7 x 10 = 70')||l.includes('70')})) ? {pass:true} : {pass:false}; });
registerExercise('m2_ex2', function(logs) { return (logs.some(function(l){return l.includes('2')}) && logs.some(function(l){return l.includes('47')})) ? {pass:true} : {pass:false}; });
registerExercise('m2_ex3', function(logs) { return (logs.length >= 20 && logs.some(function(l){return l==='FizzBuzz'})) ? {pass:true} : {pass:false}; });
// M3
registerExercise('m3_ex1', function(logs) { return logs.some(function(l){return l.includes('120')}) ? {pass:true} : {pass:false}; });
registerExercise('m3_ex2', function(logs) { return (logs.some(function(l){return l.includes('true')}) && logs.some(function(l){return l.includes('false')})) ? {pass:true} : {pass:false}; });
registerExercise('m3_ex3', function(logs) { return logs.some(function(l){return l.includes('olleh')}) ? {pass:true} : {pass:false}; });
registerExercise('m3_ex4', function(logs) { return (logs.some(function(l){return l.includes('2')}) && logs.some(function(l){return l.includes('3')})) ? {pass:true} : {pass:false}; });
// M4
registerExercise('m4_ex1', function(logs) { return (logs.some(function(l){return l.includes('10')}) && logs.some(function(l){return l.includes('50')})) ? {pass:true} : {pass:false}; });
registerExercise('m4_ex2', function(logs) { return logs.some(function(l){return l.includes('10') && l.includes('9') && l.includes('5')}) ? {pass:true} : {pass:false}; });
registerExercise('m4_ex3', function(logs) { return logs.length >= 2 ? {pass:true} : {pass:false}; });
// M5
registerExercise('m5_ex1', function(logs) { return logs.some(function(l){return l.includes('Xin chao')||l.includes('Xong')}) ? {pass:true} : {pass:false}; });
registerExercise('m5_ex2', function(logs) { return logs.some(function(l){return l.includes('thanh cong')||l.includes('Dang nhap')}) ? {pass:true} : {pass:false}; });
registerExercise('m5_ex3', function(logs) { return logs.some(function(l){return l.includes('User')||l.includes('Order')||l.includes('Detail')}) ? {pass:true} : {pass:false}; });
// M6
registerExercise('m6_ex1', function(logs, code) { return (logs.some(function(l){return l.includes('15')}) && code.includes('class')) ? {pass:true} : {pass:false}; });
registerExercise('m6_ex2', function(logs, code) { return (code.includes('extends') && code.includes('super') && logs.length >= 1) ? {pass:true} : {pass:false}; });
// M13
registerExercise('m13_ex1', function(logs, code) { return (code.includes('TC-CART') && code.includes('Positive') && code.includes('Negative')) ? {pass:true} : {pass:false}; });
registerExercise('m13_ex2', function(logs, code) { return (code.includes('Title') && code.includes('Steps') && code.includes('Expected') && code.includes('Actual')) ? {pass:true} : {pass:false}; });
// M14
registerExercise('m14_ex1', function(logs, code) { return (code.includes('devices') && code.includes('projects') && code.includes('screenshot')) ? {pass:true} : {pass:false}; });
