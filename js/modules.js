// Module data - auto-extracted
var defined_pg = function(label, code, rows) {
  rows = rows || 4;
  return '<div class="playground" data-playground>' +
    '<div class="playground-header"><span>💻 ' + label + '</span><div style="display:flex;gap:6px"><button onclick="expandPlayground(this,\'' + label.replace(/'/g,"\\'") + '\')" class="expand-btn" title="Mở rộng">⛶ Phóng to</button><button onclick="runPlayground(this)" style="background:var(--green)">▶ Chạy</button><button onclick="clearPlayground(this)" style="background:var(--text3)">✕ Xóa</button></div></div>' +
    '<textarea class="playground-editor" spellcheck="false" rows="' + rows + '">' + code + '</textarea>' +
    '<div class="playground-output"><span style="color:var(--text3)">// Nhấn ▶ Chạy để xem kết quả</span></div></div>';
};

var D = [];

// =============================================
// MODULE 0 — GIỚI THIỆU
// =============================================
D.push({id:0,title:"Giới thiệu",week:"Trước khi bắt đầu",phase:0,html:[
'<h2>Khóa học này dành cho ai?</h2>',
'<p>Dành cho người <strong>chưa từng viết một dòng code nào</strong>. Bạn không cần biết trước bất cứ điều gì. Mọi khái niệm sẽ được giải thích bằng ngôn ngữ đời thường trước, rồi mới đến code.</p>',

'<h2>Bạn sẽ học được gì?</h2>',
'<p>Sau khóa học, bạn sẽ:</p>',
'<ul>',
'<li>Hiểu và viết được <strong>JavaScript</strong> — ngôn ngữ lập trình phổ biến nhất thế giới.</li>',
'<li>Sử dụng <strong>Playwright</strong> — công cụ để "ra lệnh" cho trình duyệt web tự động click, gõ, kiểm tra trang web thay bạn.</li>',
'<li>Tự xây dựng được một bộ test tự động hoàn chỉnh cho website thật.</li>',
'</ul>',

'<h2>Lộ trình học</h2>',
'<table>',
'<tr><th>Giai đoạn</th><th>Thời gian</th><th>Nội dung</th></tr>',
'<tr><td>🟡 Phase 1</td><td>Tuần 1–4</td><td>JavaScript cơ bản: biến, điều kiện, vòng lặp, hàm, mảng, bất đồng bộ, OOP & HTML</td></tr>',
'<tr><td>🟢 Phase 2</td><td>Tuần 5–7</td><td>Playwright cơ bản: cài đặt, debug, viết test, tương tác trang web</td></tr>',
'<tr><td>🔴 Phase 3</td><td>Tuần 8–12</td><td>Nâng cao: POM, API test, test strategy, bug report, mobile test, CI/CD, dự án thực tế</td></tr>',
'</table>',

'<h2>Cần chuẩn bị gì?</h2>',
'<ul>',
'<li>Máy tính (Windows, Mac, hoặc Linux).</li>',
'<li>Internet.</li>',
'<li>1–2 tiếng/ngày.</li>',
'<li><strong>Không cần</strong> biết trước về lập trình hay tiếng Anh giỏi.</li>',
'</ul>',

'<h2>Cách học hiệu quả nhất</h2>',
'<div class="b ok"><strong>Quy tắc vàng:</strong> Đọc lý thuyết → <strong>Gõ lại code bằng tay</strong> (tuyệt đối đừng copy-paste) → Làm bài tập "Thử ngay" → Làm bài tập cuối module → Thử sáng tạo thêm.</div>',
'<p>Gõ tay giúp não bạn ghi nhớ gấp 3 lần so với chỉ đọc. Kể cả khi gõ sai — sai cũng là học!</p>',

'<h2>Thử ngay Code Playground!</h2>',
'<p>Bạn có thể viết và chạy code JavaScript ngay trên trang này. Hãy thử gõ và nhấn nút <strong>▶ Chạy</strong>:</p>',
defined_pg('Thử ngay', 'console.log("Xin chao! Toi dang hoc JavaScript!");\nconsole.log("2 + 3 =", 2 + 3);', 3),

'<h2>Khi gặp lỗi thì làm gì?</h2>',
'<p>Lỗi là chuyện <strong>bình thường và tốt</strong>. 90% thời gian của lập trình viên là sửa lỗi. Đây là cách xử lý:</p>',
'<ol>',
'<li><strong>Đọc thông báo lỗi</strong> — thường ở dòng cuối cùng, có ghi số dòng bị lỗi.</li>',
'<li><strong>Kiểm tra chính tả</strong> — 80% lỗi của người mới là gõ sai tên biến, thiếu dấu ngoặc, thiếu dấu chấm phẩy.</li>',
'<li><strong>Copy thông báo lỗi, dán vào Google hoặc hỏi Claude</strong> — gần 100% lỗi bạn gặp đã có người gặp trước.</li>',
'</ol>',

'<h2>Bảng thuật ngữ</h2>',
'<p>Bạn sẽ gặp các từ tiếng Anh sau xuyên suốt khóa học. Không cần nhớ hết ngay — quay lại đây tra khi cần:</p>',
'<table>',
'<tr><th>Thuật ngữ</th><th>Phát âm gần đúng</th><th>Nghĩa</th></tr>',
'<tr><td>Variable</td><td>va-ri-ơ-bồ</td><td>Biến — hộp chứa dữ liệu</td></tr>',
'<tr><td>Function</td><td>phăng-sần</td><td>Hàm — công thức tái sử dụng</td></tr>',
'<tr><td>Array</td><td>ơ-rây</td><td>Mảng — danh sách</td></tr>',
'<tr><td>Object</td><td>óp-giéc</td><td>Đối tượng — thẻ thông tin</td></tr>',
'<tr><td>String</td><td>xì-tring</td><td>Chuỗi — đoạn văn bản</td></tr>',
'<tr><td>Number</td><td>năm-bờ</td><td>Số</td></tr>',
'<tr><td>Boolean</td><td>bu-li-ần</td><td>Đúng/Sai (true/false)</td></tr>',
'<tr><td>Parameter</td><td>pa-ra-mi-tờ</td><td>Tham số — "nguyên liệu" truyền vào hàm</td></tr>',
'<tr><td>Return</td><td>ri-tơn</td><td>Trả về — hàm "đưa" kết quả ra ngoài</td></tr>',
'<tr><td>Async</td><td>ây-xinh</td><td>Bất đồng bộ — không chờ, làm tiếp</td></tr>',
'<tr><td>Await</td><td>ơ-guết</td><td>Chờ — dừng lại đợi kết quả</td></tr>',
'<tr><td>Locator</td><td>lâu-kây-tờ</td><td>Bộ tìm — địa chỉ phần tử trên web</td></tr>',
'<tr><td>Assertion</td><td>ơ-sơ-sần</td><td>Kiểm tra — so sánh kết quả thực tế vs mong đợi</td></tr>',
'<tr><td>Test case</td><td>tét-kêi-s</td><td>Ca kiểm thử — 1 kịch bản test</td></tr>',
'</table>',
].join('\n')});

// =============================================
// MODULE 1 — BIẾN & KIỂU DỮ LIỆU
// =============================================
D.push({id:1,title:"Biến & Kiểu dữ liệu",week:"Tuần 1 (phần 1)",phase:1,html:[

'<h2>1. Lập trình là gì?</h2>',
'<p>Lập trình là viết <strong>từng bước hướng dẫn</strong> cho máy tính thực hiện công việc. Giống viết công thức nấu ăn: rõ ràng, đúng thứ tự, không mập mờ.</p>',

'<div class="b idea">💡 <strong>Hình dung:</strong> Máy tính giống đầu bếp robot — cực kỳ giỏi nhưng cực kỳ "ngốc". Nó làm <em>chính xác</em> những gì bạn viết. Viết "cho 10 muỗng muối" thay vì 1 muỗng? Nó sẽ cho đúng 10 muỗng mà không hỏi lại.</div>',

'<h2>2. Cài đặt môi trường</h2>',
'<p>Trước khi nấu ăn, cần có bếp và dụng cụ. Trước khi code, cần cài 2 thứ:</p>',

'<h3>2.1. Node.js — "cái bếp" để chạy JavaScript</h3>',
'<div class="term"><strong>Node.js</strong> = phần mềm cho phép máy tính hiểu và chạy code JavaScript. Không có Node.js, máy tính không hiểu JS.</div>',
'<ol>',
'<li>Mở trình duyệt, vào <strong>https://nodejs.org</strong></li>',
'<li>Nhấn nút xanh <strong>LTS</strong> (viết tắt của Long Term Support — bản ổn định).</li>',
'<li>Mở file vừa tải → nhấn Next → Next → Install → Finish.</li>',
'<li>Kiểm tra: mở <strong>Command Prompt</strong>:</li>',
'</ol>',

'<div class="b info"><strong>Cách mở Command Prompt:</strong> Nhấn phím <strong>Windows</strong> trên bàn phím → gõ <strong>cmd</strong> → nhấn Enter. Trên Mac: mở app <strong>Terminal</strong>.</div>',

'<p>Gõ lệnh sau rồi nhấn Enter:</p>',
'<pre>node --version</pre>',
'<p>Nếu thấy số phiên bản (ví dụ: <code>v20.11.0</code>) → thành công! ✅</p>',
'<p>Nếu thấy lỗi → thử tắt máy, bật lại, mở cmd gõ lại.</p>',

'<h3>2.2. VS Code — "cái bàn" để viết code</h3>',
'<div class="term"><strong>VS Code</strong> (Visual Studio Code) = trình soạn thảo code miễn phí. Giống Microsoft Word nhưng dành cho code — tự tô màu, gợi ý, báo lỗi.</div>',
'<ol>',
'<li>Vào <strong>https://code.visualstudio.com</strong> → tải → cài đặt.</li>',
'<li>Mở VS Code lên.</li>',
'</ol>',

'<h3>2.3. Chạy chương trình đầu tiên</h3>',
'<ol>',
'<li>Tạo thư mục mới trên máy tính, đặt tên <code>hoc-js</code>.</li>',
'<li>Mở VS Code → <strong>File → Open Folder</strong> → chọn thư mục <code>hoc-js</code>.</li>',
'<li>Ở thanh bên trái, nhấn biểu tượng <strong>New File</strong> → đặt tên <code>bai1.js</code></li>',
'<li>Gõ đúng dòng này vào file (gõ tay, đừng copy!):</li>',
'</ol>',
'<pre>console.log("Xin chao, toi dang hoc JavaScript!");</pre>',

'<p><strong>Giải thích từng phần:</strong></p>',
'<table>',
'<tr><th>Phần</th><th>Nghĩa</th></tr>',
'<tr><td><code>console.log()</code></td><td>Lệnh "hiển thị nội dung ra màn hình". Bạn sẽ dùng lệnh này cả ngàn lần.</td></tr>',
'<tr><td><code>"Xin chao..."</code></td><td>Nội dung muốn hiển thị. Phải nằm trong dấu ngoặc kép.</td></tr>',
'<tr><td><code>;</code></td><td>Kết thúc câu lệnh. Giống dấu chấm cuối câu tiếng Việt.</td></tr>',
'</table>',

'<p>Hoặc thử luôn trên trang này:</p>',
defined_pg('Chương trình đầu tiên', 'console.log("Xin chao, toi dang hoc JavaScript!");', 2),

'<p>5. Mở Terminal trong VS Code: nhấn <strong>Ctrl + `</strong> (phím nằm góc trái trên bàn phím, cạnh phím 1 và phím Esc).</p>',
'<p>6. Gõ lệnh sau rồi nhấn Enter:</p>',
'<pre>node bai1.js</pre>',
'<p>7. Kết quả hiện ra:</p>',
'<pre>Xin chao, toi dang hoc JavaScript!</pre>',

'<div class="b ok">🎉 <strong>Chúc mừng!</strong> Bạn vừa viết và chạy thành công chương trình đầu tiên!</div>',

'<h4>Nếu bị lỗi thì sao?</h4>',
'<div class="b err"><strong>Lỗi thường gặp #1:</strong> <code>SyntaxError: Unexpected token</code><br>Nguyên nhân: gõ sai cú pháp — thiếu dấu ngoặc, thiếu dấu nháy, gõ sai tên lệnh.<br><strong>Cách sửa:</strong> Kiểm tra lại từng ký tự. So sánh với code mẫu.</div>',
'<div class="b err"><strong>Lỗi thường gặp #2:</strong> <code>node: command not found</code><br>Nguyên nhân: Node.js chưa cài xong hoặc chưa restart terminal.<br><strong>Cách sửa:</strong> Đóng terminal, mở lại. Nếu vẫn lỗi → cài lại Node.js.</div>',

'<hr class="sep">',

'<h2>3. Biến (Variable) — "Hộp chứa" dữ liệu</h2>',

'<div class="b idea">💡 <strong>Hình dung:</strong> Biến giống <strong>chiếc hộp có dán nhãn tên</strong>.<br>- Bạn đặt tên cho hộp (tên biến).<br>- Bỏ đồ vào trong (giá trị).<br>- Khi cần, gọi tên hộp là lấy được đồ bên trong.</div>',

'<p>Ví dụ ngoài đời:</p>',
'<ul>',
'<li>Hộp dán nhãn <strong>"ten"</strong> → bên trong chứa <strong>"Minh"</strong></li>',
'<li>Hộp dán nhãn <strong>"tuoi"</strong> → bên trong chứa <strong>25</strong></li>',
'<li>Hộp dán nhãn <strong>"dangOnline"</strong> → bên trong chứa <strong>true</strong> (đúng) hoặc <strong>false</strong> (sai)</li>',
'</ul>',

'<h3>3.1. Tạo biến bằng <code>let</code></h3>',
'<div class="term"><strong>let</strong> = tạo hộp <strong>có thể thay đổi</strong> đồ bên trong.</div>',
defined_pg('Thử let', 'let ten = "Minh";\nconsole.log(ten);  // Hiện ra: Minh\n\nten = "Hung";      // Thay đổi đồ trong hộp\nconsole.log(ten);  // Hiện ra: Hung', 5),

'<p>Giải thích từng dòng:</p>',
'<ul>',
'<li><code>let ten = "Minh";</code> → Tạo hộp tên "ten", bỏ "Minh" vào.</li>',
'<li><code>console.log(ten);</code> → Mở hộp "ten" ra xem, hiện ra "Minh".</li>',
'<li><code>ten = "Hung";</code> → Lấy "Minh" ra, bỏ "Hung" vào thay. (Không cần viết <code>let</code> lại vì hộp đã tồn tại.)</li>',
'</ul>',

'<div class="mini">Tạo biến <code>let monan = "Pho";</code> rồi in ra. Sau đó đổi thành "Bun" và in lại.</div>',

'<h3>3.2. Tạo biến bằng <code>const</code></h3>',
'<div class="term"><strong>const</strong> = tạo hộp <strong>bị khóa</strong> — một khi bỏ đồ vào thì KHÔNG đổi được.</div>',
defined_pg('Thử const', 'const PI = 3.14159;\nconsole.log(PI);  // 3.14159\n\n// PI = 3.14;  ← THỬ BỎ COMMENT DÒNG NÀY → SẼ BÁO LỖI!\n// Lỗi: TypeError: Assignment to constant variable.', 5),

'<div class="b idea">💡 <code>let</code> = hộp nắp mở, thay đồ thoải mái.<br><code>const</code> = hộp dán keo, bỏ vào rồi thì thôi.</div>',

'<div class="b ok"><strong>Quy tắc đơn giản cho người mới:</strong><br>1. Luôn dùng <code>const</code> trước.<br>2. Khi nào cần thay đổi giá trị → đổi sang <code>let</code>.<br>3. <strong>Không bao giờ dùng <code>var</code></strong> (cách cũ, hay gây bug).</div>',

'<div class="mini">Tạo <code>const TEN_APP = "AutoTest";</code> và in ra. Thử gán lại giá trị mới xem lỗi gì.</div>',

'<h3>3.3. Cách đặt tên biến</h3>',
'<pre>// ✅ ĐÚNG:\nlet hoTen = "Nguyen Van A";  // camelCase\nlet soLuong = 10;\nlet _riengTu = "bi mat";\nlet $gia = 50000;\n\n// ❌ SAI:\n// let 1ten = "abc";     ← bắt đầu bằng số\n// let ho ten = "abc";   ← có dấu cách\n// let let = "abc";      ← trùng từ khóa JS</pre>',

'<div class="term"><strong>camelCase</strong> = quy ước đặt tên: chữ đầu viết thường, mỗi từ tiếp theo viết HOA chữ cái đầu. Ví dụ: <code>hoTen</code>, <code>ngaySinh</code>, <code>diaChiNha</code>.</div>',

'<hr class="sep">',

'<h2>4. Kiểu dữ liệu — "Đồ trong hộp" là loại gì?</h2>',
'<p>Hộp (biến) có thể chứa nhiều loại đồ khác nhau. JavaScript có các loại chính sau:</p>',

'<h3>4.1. String (Chuỗi) — Văn bản</h3>',
'<div class="term"><strong>String</strong> = bất cứ đoạn văn bản nào nằm trong dấu ngoặc kép <code>"..."</code> hoặc ngoặc đơn <code>\'...\'</code>.</div>',
'<pre>let ten = "Minh";          // dấu nháy kép ✅\nlet loi = \'Xin chao\';     // dấu nháy đơn ✅ (giống nhau)\nlet so = "42";             // ĐÂY LÀ CHUỖI, không phải số!\n                            // Vì nằm trong ngoặc kép</pre>',

'<div class="b warn"><strong>Bẫy phổ biến:</strong> <code>"42"</code> là CHUỖI (string), còn <code>42</code> (không có ngoặc) mới là SỐ (number). Chúng khác nhau hoàn toàn!</div>',

'<div class="mini">Tạo biến <code>let diaChi = "123 Le Loi";</code> và in ra. Thử tạo thêm biến <code>let sdt = "0901234567";</code> — số điện thoại nên là string hay number?</div>',

'<h3>4.2. Number (Số)</h3>',
'<div class="term"><strong>Number</strong> = số, viết trực tiếp KHÔNG có ngoặc kép. Bao gồm số nguyên và số thập phân.</div>',
'<pre>let tuoi = 25;       // số nguyên\nlet diem = 8.5;      // số thập phân\nlet nhietDo = -5;    // số âm</pre>',

'<div class="mini">Tạo 2 biến: <code>let a = 10;</code> và <code>let b = 3;</code>. In ra <code>a + b</code>, <code>a - b</code>, <code>a * b</code>, <code>a / b</code>.</div>',

'<h3>4.3. Boolean — Đúng hoặc Sai</h3>',
'<div class="term"><strong>Boolean</strong> = chỉ có đúng 2 giá trị: <code>true</code> (đúng) hoặc <code>false</code> (sai). Không có giá trị thứ 3.</div>',
'<pre>let daDangNhap = true;   // đã đăng nhập → đúng\nlet laAdmin = false;      // là admin → sai</pre>',
'<div class="b idea">💡 Boolean giống <strong>công tắc đèn</strong>: chỉ có BẬT hoặc TẮT, không có "hơi bật".</div>',

'<div class="mini">Tạo biến <code>let troiMua = true;</code>. In ra. Đổi thành <code>false</code>, in lại.</div>',

'<h3>4.4. null và undefined</h3>',
'<pre>let ketQua = null;   // "Hộp rỗng, tôi CỐ Ý để trống"\n\nlet diaChi;          // Chưa bỏ gì vào hộp\nconsole.log(diaChi); // undefined — "chưa được gán giá trị"</pre>',

'<div class="b idea">💡 <code>null</code> = bạn mở tủ lạnh, thấy trống, vì bạn <em>chủ đích</em> chưa mua đồ.<br><code>undefined</code> = bạn tạo tủ lạnh nhưng <em>quên</em> bỏ đồ vào.</div>',

'<h3>4.5. Kiểm tra kiểu — typeof</h3>',
'<p>Muốn biết "đồ trong hộp" là loại gì? Dùng <code>typeof</code>:</p>',
defined_pg('Thử typeof', 'console.log(typeof "hello");    // "string"\nconsole.log(typeof 42);         // "number"\nconsole.log(typeof true);       // "boolean"\nconsole.log(typeof undefined);  // "undefined"\nconsole.log(typeof null);       // "object" ← bug lịch sử của JS!', 6),

'<div class="mini">Tạo 4 biến khác kiểu, dùng typeof kiểm tra từng biến.</div>',

'<hr class="sep">',

'<h2>5. Toán tử — "Phép tính" trong code</h2>',

'<h3>5.1. Toán tử số học</h3>',
defined_pg('Thử toán tử', 'let a = 10, b = 3;\n\nconsole.log(a + b);   // 13  (cộng)\nconsole.log(a - b);   // 7   (trừ)\nconsole.log(a * b);   // 30  (nhân — dùng dấu *)\nconsole.log(a / b);   // 3.33 (chia — dùng dấu /)\nconsole.log(a % b);   // 1   (chia lấy DƯ)\nconsole.log(a ** b);  // 1000 (lũy thừa — 10 mũ 3)', 9),

'<div class="b idea">💡 <code>%</code> (modulo/chia lấy dư) rất hữu ích!<br>Số chẵn hay lẻ? → <code>so % 2</code>. Dư 0 = chẵn, dư 1 = lẻ.<br>Chia hết cho 3? → <code>so % 3 === 0</code></div>',

'<div class="mini">Tính: <code>17 % 5</code> bằng bao nhiêu? <code>20 % 4</code> bằng bao nhiêu? Thử đoán trước rồi kiểm tra bằng code.</div>',

'<h3>5.2. Toán tử so sánh — kết quả là true/false</h3>',
defined_pg('Thử so sánh', 'console.log(5 === 5);     // true  ← BẰNG (3 dấu =)\nconsole.log(5 === "5");   // false ← số 5 khác chuỗi "5"\nconsole.log(5 !== 3);     // true  ← KHÔNG BẰNG\nconsole.log(10 > 5);      // true  ← lớn hơn\nconsole.log(10 < 5);      // false ← nhỏ hơn\nconsole.log(10 >= 10);    // true  ← lớn hơn HOẶC bằng', 7),

'<div class="b warn"><strong>SAI LẦM PHỔ BIẾN NHẤT CỦA NGƯỜI MỚI:</strong><br><br>Dùng <code>=</code> để so sánh → SAI! <code>=</code> là GÁN giá trị.<br>Dùng <code>==</code> (2 dấu bằng) → TRÁNH! Nó tự ý chuyển kiểu, gây kết quả bất ngờ.<br><br>✅ Luôn dùng <code>===</code> (3 dấu bằng) và <code>!==</code> để so sánh.</div>',

'<pre>// Ví dụ tại sao == nguy hiểm:\nconsole.log(0 == "");     // true  ← WTF? Số 0 bằng chuỗi rỗng?!\nconsole.log(0 === "");    // false ← Đúng! Số 0 khác chuỗi rỗng.</pre>',

'<div class="mini">So sánh: <code>10 === 10</code>, <code>"10" === 10</code>, <code>true === 1</code>. Đoán kết quả trước rồi kiểm tra.</div>',

'<h3>5.3. Toán tử logic — VÀ, HOẶC, KHÔNG</h3>',
'<pre>// &amp;&amp; nghĩa là VÀ — cả 2 phải đúng mới đúng\nconsole.log(true &amp;&amp; true);   // true\nconsole.log(true &amp;&amp; false);  // false\n\n// || nghĩa là HOẶC — 1 trong 2 đúng là đủ\nconsole.log(true || false);  // true\nconsole.log(false || false); // false\n\n// ! nghĩa là KHÔNG — đảo ngược\nconsole.log(!true);   // false\nconsole.log(!false);  // true</pre>',

'<div class="b idea">💡 <strong>Ví dụ đời thường:</strong><br><code>&amp;&amp;</code> (VÀ): "Trên 18 tuổi VÀ có CMND" → phải thỏa cả 2 mới vào bar.<br><code>||</code> (HOẶC): "Có thẻ VIP HOẶC có thiệp mời" → chỉ cần 1.<br><code>!</code> (KHÔNG): "KHÔNG phải admin" → đảo ngược kết quả.</div>',

'<pre>// Ví dụ thực tế:\nlet tuoi = 20;\nlet coCMND = true;\n\nconsole.log(tuoi >= 18 &amp;&amp; coCMND); // true → đủ điều kiện\nconsole.log(tuoi >= 18 &amp;&amp; !coCMND); // false → có tuổi nhưng không CMND</pre>',

'<hr class="sep">',

'<h2>6. Template Literal — Chèn biến vào chuỗi</h2>',
'<p>Thay vì nối chuỗi phức tạp bằng <code>+</code>, dùng <strong>backtick</strong> (phím ` bên trái số 1) và <code>${...}</code>:</p>',

defined_pg('Thử template literal', 'let ten = "Minh";\nlet tuoi = 25;\n\n// CÁCH CŨ (khó đọc):\nconsole.log("Toi la " + ten + ", " + tuoi + " tuoi.");\n\n// CÁCH MỚI (dễ đọc):\nconsole.log(`Toi la ${ten}, ${tuoi} tuoi.`);\n\n// Tính toán bên trong ${}:\nconsole.log(`Nam sinh: ${2026 - tuoi}`); // "Nam sinh: 2001"', 10),

'<div class="b ok"><strong>Mẹo:</strong> Luôn dùng backtick + <code>${}</code>. Quên nháy kép đi — backtick làm được mọi thứ và dễ đọc hơn.</div>',

'<div class="mini">Tạo biến ten, tuoi, thanhPho. In ra: "Xin chao! Toi la [ten], [tuoi] tuoi, song tai [thanhPho]." bằng template literal.</div>',

'<hr class="sep">',

'<h2>7. Phương thức chuỗi — "Kỹ năng" có sẵn</h2>',
'<div class="b idea">💡 Mỗi chuỗi trong JS tự có sẵn nhiều "kỹ năng" (gọi là phương thức/method). Giống điện thoại mua về đã có sẵn app Camera, Đồng hồ — không cần cài thêm.</div>',

defined_pg('Thử string methods', 'let s = "  Xin Chao JavaScript!  ";\n\nconsole.log(s.length);            // 25 (đếm ký tự, kể cả dấu cách)\nconsole.log(s.toUpperCase());     // "  XIN CHAO JAVASCRIPT!  "\nconsole.log(s.toLowerCase());     // "  xin chao javascript!  "\nconsole.log(s.trim());            // "Xin Chao JavaScript!" (xóa cách đầu/cuối)\nconsole.log(s.includes("Java"));  // true (có chứa "Java" không?)\n\nconsole.log("JavaScript".slice(0, 4)); // "Java" (cắt từ vị trí 0 đến 3)\nconsole.log("I love Java".replace("Java", "JS")); // "I love JS"\nconsole.log("a,b,c".split(","));  // ["a", "b", "c"] (tách thành mảng)', 11),

'<div class="mini">Tạo biến <code>let email = "  MINH@Gmail.Com  ";</code>. Dùng <code>.trim()</code> và <code>.toLowerCase()</code> để chuẩn hóa thành "minh@gmail.com".</div>',

'<hr class="sep">',

'<h2>8. Chuyển đổi kiểu dữ liệu</h2>',
defined_pg('Thử chuyển kiểu', '// Chuỗi → Số\nlet tuoiStr = "25";\nlet tuoiNum = Number(tuoiStr);  // 25 (kiểu number)\n\nconsole.log(Number("abc"));     // NaN (Not a Number — không chuyển được)\nconsole.log(Number(""));        // 0\nconsole.log(Number(true));      // 1\nconsole.log(Number(false));     // 0\n\n// Số → Chuỗi\nlet so = 42;\nlet chuoi = String(so);          // "42"\nconsole.log(typeof chuoi);       // "string"', 13),

'<div class="term"><strong>NaN</strong> (Not a Number) = kết quả khi cố chuyển thứ không phải số thành số. Ví dụ: <code>Number("hello")</code> → NaN.</div>',

'<hr class="sep">',

'<h2>Bài tập cuối Module 1</h2>',

buildExercise('m1_ex1', 'green', 'Bài 1: Tính tuổi',
  'Tạo biến <code>namSinh = 2000</code>, tính tuổi (năm 2026), in ra: <code>"Ban 26 tuoi."</code> bằng template literal.',
  'Dùng phép trừ và backtick `${}`',
  '// Viết code tại đây\n',
  'const namSinh = 2000;\nconst tuoi = 2026 - namSinh;\nconsole.log(`Ban ${tuoi} tuoi.`);',
  '<strong>Giải thích:</strong> Tính tuổi = năm hiện tại - năm sinh. Dùng <code>`Ban ${tuoi} tuoi.`</code> để chèn biến vào chuỗi.',
  null, 4),

buildExercise('m1_ex2', 'green', 'Bài 2: Chuyển °C sang °F',
  'Cho <code>c = 37</code>. Chuyển sang °F. Công thức: <code>F = C * 9/5 + 32</code>. In ra: <code>"37 do C = 98.6 do F"</code>',
  'Nhân trước, cộng sau. Dùng template literal.',
  '// Viết code tại đây\n',
  'const c = 37;\nconst f = c * 9/5 + 32;\nconsole.log(`${c} do C = ${f} do F`);',
  '<strong>Giải thích:</strong> Áp dụng công thức trực tiếp. 37 * 9/5 + 32 = 98.6. Lưu ý thứ tự phép tính.',
  null, 4),

buildQuiz('m1', [
  {q:'<code>let x = 5; x = "hello";</code> — biến x bây giờ có kiểu gì?', opts:['Number','String','Boolean','Error'], answer:1, explain:'JS cho phép đổi kiểu. x ban đầu là Number, sau gán lại thành String.'},
  {q:'<code>const PI = 3.14; PI = 3;</code> — chuyện gì xảy ra?', opts:['PI = 3','PI vẫn = 3.14','TypeError: Assignment to constant variable','SyntaxError'], answer:2, explain:'const không cho phép gán lại giá trị. Sẽ báo TypeError.'},
  {q:'<code>typeof null</code> trả về gì?', opts:['"null"','"undefined"','"object"','null'], answer:2, explain:'Đây là bug lịch sử của JS! typeof null trả về "object" thay vì "null".'},
  {q:'<code>"5" === 5</code> cho kết quả?', opts:['true','false','undefined','Error'], answer:1, explain:'=== so sánh cả kiểu. "5" (string) khác 5 (number) → false.'},
  {q:'Cách đặt tên biến nào SAI?', opts:['let _name','let $price','let 1stPlace','let camelCase'], answer:2, explain:'Tên biến không được bắt đầu bằng số.'}
]),

buildChallenge('m1_calc', 'Tính tuổi', 'Tạo biến <code>namSinh = 2000</code>, tính tuổi (năm 2026), in ra bằng template literal: "Ban 26 tuoi."', '// Viết code tại đây\nconst namSinh = 2000;\n', 4),

buildExercise('m1_ex3', 'yellow', 'Bài 3: Chẵn hay Lẻ',
  'Cho <code>so = 7</code>. In ra <code>"7 la so le"</code> hoặc <code>"7 la so chan"</code>.',
  'Dùng <code>%</code> (chia lấy dư) và toán tử 3 ngôi <code>? :</code>',
  'const so = 7;\n// TODO: kiem tra chan/le va in ra\n',
  'const so = 7;\nconst loai = so % 2 === 0 ? "chan" : "le";\nconsole.log(`${so} la so ${loai}`);',
  '<strong>Giải thích:</strong> <code>so % 2</code> chia lấy dư cho 2. Nếu dư 0 → chẵn, dư 1 → lẻ. Toán tử 3 ngôi: <code>điều_kiện ? đúng : sai</code>.',
  null, 4),

buildExercise('m1_ex4', 'yellow', 'Bài 4: Chuẩn hóa email',
  'Tạo biến <code>email = "  MINH@Gmail.Com  "</code>. Xóa cách thừa và chuyển thường. In ra <code>"minh@gmail.com"</code>.',
  'Dùng <code>.trim()</code> và <code>.toLowerCase()</code>',
  'let email = "  MINH@Gmail.Com  ";\n// TODO: chuan hoa va in ra\n',
  'let email = "  MINH@Gmail.Com  ";\nemail = email.trim().toLowerCase();\nconsole.log(email); // "minh@gmail.com"',
  '<strong>Giải thích:</strong> <code>.trim()</code> xóa khoảng trắng đầu/cuối. <code>.toLowerCase()</code> chuyển tất cả thành chữ thường. Nối chuỗi method: <code>email.trim().toLowerCase()</code>.',
  null, 4),

buildExercise('m1_ex5', 'red', 'Bài 5: Phân tích chuỗi',
  'Cho chuỗi <code>"Hello World"</code>. In ra: (a) số ký tự không tính dấu cách, (b) số từ, (c) chuỗi viết ngược.',
  'Dùng <code>.replace()</code>, <code>.split()</code>, <code>.reverse()</code>, <code>.join()</code>',
  'const s = "Hello World";\n// (a) So ky tu khong tinh dau cach\n\n// (b) So tu\n\n// (c) Chuoi viet nguoc\n',
  'const s = "Hello World";\nconsole.log("Ky tu:", s.replace(/ /g, "").length); // 10\nconsole.log("So tu:", s.split(" ").length);         // 2\nconsole.log("Dao:", s.split("").reverse().join("")); // dlroW olleH',
  '<strong>Giải thích:</strong><br>(a) <code>s.replace(/ /g, "")</code> xóa tất cả dấu cách, rồi đếm <code>.length</code>.<br>(b) <code>s.split(" ")</code> tách thành mảng các từ, đếm <code>.length</code>.<br>(c) <code>split("")</code> tách từng ký tự → <code>reverse()</code> đảo → <code>join("")</code> nối lại.',
  null, 6),

'<hr class="sep">',

'<h2>🚀 Mini Project: Hệ thống tính hóa đơn</h2>',
'<div class="b idea">💡 Áp dụng kiến thức Module 1 vào bài toán thực tế: tính tiền hóa đơn nhà hàng.</div>',

buildChallenge('m1_bill', 'Tính hóa đơn nhà hàng',
  'Tạo các biến: <code>tenMon</code> ("Pho"), <code>gia</code> (45000), <code>soLuong</code> (2), <code>giamGia</code> (10 — phần trăm).<br>Tính <code>tongTien</code> và <code>thucTra</code> (sau giảm giá).<br>In ra: <code>"Mon: Pho x2 = 90000d, Giam 10%, Thuc tra: 81000d"</code>',
  '// Khai bao bien\nconst tenMon = "Pho";\nconst gia = 45000;\nconst soLuong = 2;\nconst giamGia = 10; // %\n\n// Tinh toan\nconst tongTien = gia * soLuong;\nconst thucTra = 0; // TODO: tinh thuc tra\n\n// In ket qua bang template literal\nconsole.log("TODO");', 10),

buildChallenge('m1_convert', 'Chuyển đổi đơn vị',
  'Cho <code>kg = 75</code>. Chuyển sang pound (1kg = 2.205 lb) và ounce (1kg = 35.274 oz).<br>In: <code>"75 kg = 165.375 lb = 2645.55 oz"</code>',
  'const kg = 75;\n// TODO: chuyen doi va in ra\n', 5),

buildChallenge('m1_profile', 'Tạo profile card',
  'Tạo biến: ten, tuoi, email, ngheNghiep, thanhPho.<br>In ra profile card đẹp dùng template literal:<br><code>"===== PROFILE =====\\nTen: ...\\nTuoi: ...\\nEmail: ...\\nNghe nghiep: ...\\nThanh pho: ...\\n==================="</code>',
  '// Tao cac bien\n\n// In profile card\n', 8),

'<hr class="sep">',
buildExam('exam_m1', 'Bài kiểm tra Module 1 — Biến & Kiểu dữ liệu', 10, [
  {q:'<code>let x = 10; const y = 20;</code> — câu nào đúng?', opts:['x và y đều gán lại được','Chỉ x gán lại được','Chỉ y gán lại được','Cả hai đều không gán lại được'], answer:1, explain:'let cho phép gán lại, const thì không.'},
  {q:'<code>typeof "123"</code> trả về gì?', opts:['"number"','"string"','"boolean"','"integer"'], answer:1, explain:'"123" nằm trong ngoặc kép nên là string, không phải number.'},
  {q:'Cách nào tạo template literal?', opts:['Ngoặc kép "..."','Ngoặc đơn \'...\'','Backtick `...`','Ngoặc tròn (...)'], answer:2, explain:'Template literal dùng backtick ` và ${} để chèn biến.'},
  {q:'<code>let a; console.log(a);</code> in ra gì?', opts:['null','0','undefined','Error'], answer:2, explain:'Biến khai báo nhưng chưa gán giá trị → undefined.'},
  {q:'<code>"5" + 3</code> cho kết quả gì?', opts:['8','53','"53"','Error'], answer:2, explain:'String + number → JS nối chuỗi: "5"+"3" = "53".'},
  {q:'Phương thức nào xóa khoảng trắng đầu/cuối?', opts:['.slice()','.trim()','.clean()','.strip()'], answer:1, explain:'.trim() xóa khoảng trắng đầu và cuối chuỗi.'},
  {q:'<code>10 % 3</code> bằng bao nhiêu?', opts:['3','3.33','1','0'], answer:2, explain:'10 ÷ 3 = 3 dư 1. % lấy phần dư.'},
  {q:'<code>0 === false</code> kết quả?', opts:['true','false','undefined','Error'], answer:1, explain:'=== so sánh cả kiểu. 0 (number) khác false (boolean) → false.'},
  {q:'<code>!true</code> cho kết quả gì?', opts:['true','false','null','1'], answer:1, explain:'! đảo ngược boolean. !true = false.'},
  {q:'<code>Number("abc")</code> trả về gì?', opts:['0','null','NaN','Error'], answer:2, explain:'Không chuyển được "abc" thành số → NaN.'}
]),
].join('\n')});

// =============================================
// MODULE 2 — ĐIỀU KIỆN & VÒNG LẶP
// =============================================
D.push({id:2,title:"Điều kiện & Vòng lặp",week:"Tuần 1 (phần 2)",phase:1,html:[
'<h2>1. Câu lệnh điều kiện — "NẾU ... THÌ ..."</h2>',
'<div class="b idea">💡 Đời thường: "NẾU trời mưa THÌ mang ô. NẾU KHÔNG THÌ mang kính."<br>Trong code: dùng <code>if / else</code> y hệt vậy.</div>',

'<h3>1.1. if / else</h3>',
defined_pg('Thử if/else', 'let nhietDo = 38;\n\nif (nhietDo >= 38) {\n  console.log("Ban bi sot! Nen di kham.");\n} else {\n  console.log("Nhiet do binh thuong.");\n}\n// Kết quả: "Ban bi sot! Nen di kham."', 8),

'<p><strong>Cách đọc:</strong> "NẾU nhietDo lớn hơn hoặc bằng 38 THÌ in ra bị sốt. KHÔNG THÌ in ra bình thường."</p>',

'<div class="b warn"><strong>Lỗi phổ biến:</strong> Dùng <code>=</code> thay vì <code>===</code> trong if.<br><code>if (x = 5)</code> ← SAI! Đây là GÁN x = 5, không phải so sánh.<br><code>if (x === 5)</code> ← ĐÚNG! So sánh x có bằng 5 không.</div>',

'<div class="mini">Tạo biến <code>let tuoi = 15;</code>. Viết if/else: tuoi >= 18 thì in "Nguoi lon", ngược lại in "Tre em".</div>',

'<h3>1.2. else if — nhiều trường hợp</h3>',
defined_pg('Thử else if', 'let diem = 75;\n\nif (diem >= 90) {\n  console.log("Xuat sac");\n} else if (diem >= 70) {\n  console.log("Kha");         // ← chạy dòng này (75 >= 70)\n} else if (diem >= 50) {\n  console.log("Trung binh");\n} else {\n  console.log("Yeu");\n}', 10),
'<p>JS kiểm tra từ trên xuống. Gặp điều kiện đúng đầu tiên → chạy, rồi bỏ qua tất cả bên dưới.</p>',

'<div class="mini">Viết chương trình xếp loại BMI: dưới 18.5 = "Gay", 18.5-24.9 = "Binh thuong", 25-29.9 = "Thua can", 30+ = "Beo phi".</div>',

'<h3>1.3. Toán tử 3 ngôi — if/else viết tắt 1 dòng</h3>',
'<pre>let tuoi = 20;\nlet loai = tuoi >= 18 ? "Nguoi lon" : "Tre em";\nconsole.log(loai); // "Nguoi lon"\n\n// Cú pháp: điều_kiện ? giá_trị_nếu_đúng : giá_trị_nếu_sai</pre>',

'<hr class="sep">',

'<h2>2. Vòng lặp — "Lặp đi lặp lại"</h2>',
'<div class="b idea">💡 <strong>Hình dung:</strong> Vòng lặp giống tập thể dục: "Hít đất 10 cái".<br>Bạn lặp hành động "hít đất" 10 lần. Trong code, thay vì viết 10 dòng giống nhau, dùng vòng lặp.</div>',

'<h3>2.1. for — khi biết trước số lần</h3>',
defined_pg('Thử for', 'for (let i = 1; i <= 5; i++) {\n  console.log("Lan thu " + i);\n}\n// Lan thu 1\n// Lan thu 2\n// ...\n// Lan thu 5', 7),

'<p><strong>3 phần trong ngoặc <code>for</code>:</strong></p>',
'<table>',
'<tr><th>Phần</th><th>Ví dụ</th><th>Nghĩa</th></tr>',
'<tr><td>Khởi tạo</td><td><code>let i = 1</code></td><td>Bắt đầu đếm từ 1</td></tr>',
'<tr><td>Điều kiện</td><td><code>i &lt;= 5</code></td><td>Lặp chừng nào i còn ≤ 5</td></tr>',
'<tr><td>Bước nhảy</td><td><code>i++</code></td><td>Mỗi lần lặp xong, tăng i lên 1</td></tr>',
'</table>',

'<div class="term"><strong>i++</strong> là viết tắt của <code>i = i + 1</code>. Tương tự: <code>i--</code> nghĩa là <code>i = i - 1</code>.</div>',

'<div class="b err"><strong>Lỗi phổ biến:</strong> Quên <code>i++</code> → vòng lặp chạy mãi không dừng (lặp vô hạn) → treo máy! Nếu máy bị treo, nhấn <strong>Ctrl + C</strong> trong terminal để dừng.</div>',

'<div class="mini">Viết vòng for in ra các số chẵn từ 2 đến 20. Gợi ý: <code>i += 2</code> hoặc dùng <code>if (i % 2 === 0)</code>.</div>',

'<h3>2.2. while — khi không biết trước số lần</h3>',
'<pre>let dem = 1;\nwhile (dem &lt;= 3) {\n  console.log("Dem: " + dem);\n  dem++;  // PHẢI tăng biến! Quên = lặp vô hạn!\n}\n// Dem: 1, Dem: 2, Dem: 3</pre>',

'<h3>2.3. for...of — duyệt mảng/chuỗi (học mảng ở Module 3)</h3>',
'<pre>let ten = "Minh";\nfor (let kyTu of ten) {\n  console.log(kyTu);  // M, i, n, h (từng ký tự)\n}</pre>',

'<h3>2.4. break &amp; continue</h3>',
defined_pg('Thử break & continue', '// break — DỪNG vòng lặp ngay\nfor (let i = 1; i <= 10; i++) {\n  if (i === 5) break;   // gặp 5 thì dừng\n  console.log(i);       // in: 1, 2, 3, 4\n}\n\nconsole.log("---");\n\n// continue — BỎ QUA lần hiện tại, chạy lần tiếp\nfor (let i = 1; i <= 5; i++) {\n  if (i === 3) continue; // bỏ qua số 3\n  console.log(i);        // in: 1, 2, 4, 5\n}', 13),

'<div class="mini">Viết vòng lặp in số từ 1 đến 20, nhưng bỏ qua các số chia hết cho 3. Dùng <code>continue</code>.</div>',

'<hr class="sep">',

'<h2>Bài tập cuối Module 2</h2>',

buildExercise('m2_ex1', 'green', 'Bài 1: Bảng cửu chương',
  'In ra bảng cửu chương 7: <code>7x1=7, 7x2=14, ..., 7x10=70</code>.',
  'Dùng vòng for từ 1 đến 10, in <code>`7 x ${i} = ${7*i}`</code>',
  '// In bang cuu chuong 7\n',
  'for (let i = 1; i <= 10; i++) {\n  console.log(`7 x ${i} = ${7 * i}`);\n}',
  '<strong>Giải thích:</strong> Vòng for chạy i từ 1→10. Mỗi lần in <code>7 x i = 7*i</code>. Template literal giúp chèn biến vào chuỗi.',
  null, 4),

buildExercise('m2_ex2', 'yellow', 'Bài 2: Số nguyên tố',
  'In tất cả số nguyên tố từ 2 đến 50.',
  'Số nguyên tố = chỉ chia hết cho 1 và chính nó. Dùng vòng lặp lồng.',
  '// In so nguyen to tu 2 den 50\n',
  'for (let n = 2; n <= 50; n++) {\n  let laSNT = true;\n  for (let i = 2; i * i <= n; i++) {\n    if (n % i === 0) { laSNT = false; break; }\n  }\n  if (laSNT) console.log(n);\n}',
  '<strong>Giải thích:</strong> Với mỗi số n, kiểm tra có chia hết cho số nào từ 2 đến √n không. Nếu không chia hết cho ai → là số nguyên tố. <code>break</code> dừng sớm khi tìm thấy ước.',
  null, 6),

buildQuiz('m2', [
  {q:'Vòng lặp <code>for(let i=0; i&lt;3; i++)</code> chạy bao nhiêu lần?', opts:['2 lần','3 lần','4 lần','Vô hạn'], answer:1, explain:'i=0,1,2 → 3 lần. Khi i=3 thì i<3 false → dừng.'},
  {q:'<code>break</code> làm gì?', opts:['Bỏ qua lần lặp hiện tại','Dừng vòng lặp ngay','Thoát chương trình','Không có tác dụng gì'], answer:1, explain:'break dừng toàn bộ vòng lặp. continue mới là bỏ qua lần hiện tại.'},
  {q:'<code>10 % 3</code> bằng bao nhiêu?', opts:['3','3.33','1','0'], answer:2, explain:'10 ÷ 3 = 3 dư 1. Toán tử % lấy phần dư.'}
]),

buildChallenge('m2_fizz', 'FizzBuzz', 'In số 1→30. Chia hết 3→"Fizz", chia hết 5→"Buzz", cả hai→"FizzBuzz".', '// Viết FizzBuzz tại đây\nfor (let i = 1; i <= 30; i++) {\n  // TODO\n}', 6),

buildExercise('m2_ex3', 'red', 'Bài 3: FizzBuzz (1→100)',
  'In số từ 1→100. Chia hết cho 3 → in "Fizz". Chia hết cho 5 → in "Buzz". Chia hết cả hai → in "FizzBuzz".',
  'Kiểm tra chia hết 15 TRƯỚC (vì 15 = 3*5), rồi mới kiểm tra 3 và 5 riêng.',
  'for (let i = 1; i <= 100; i++) {\n  // TODO\n}',
  'for (let i = 1; i <= 100; i++) {\n  if (i % 15 === 0) console.log("FizzBuzz");\n  else if (i % 3 === 0) console.log("Fizz");\n  else if (i % 5 === 0) console.log("Buzz");\n  else console.log(i);\n}',
  '<strong>Giải thích:</strong> Phải kiểm tra <code>i % 15 === 0</code> trước! Nếu kiểm tra %3 trước → số 15 sẽ in "Fizz" thay vì "FizzBuzz". Thứ tự if/else if rất quan trọng.',
  null, 6),

'<hr class="sep">',

'<h2>🚀 Mini Project: Hệ thống xếp loại học sinh</h2>',
buildChallenge('m2_grade', 'Xếp loại học sinh',
  'Cho <code>diem = 7.5</code>. Viết if/else xếp loại:<br>≥ 9: "Xuat sac", ≥ 8: "Gioi", ≥ 6.5: "Kha", ≥ 5: "Trung binh", &lt; 5: "Yeu".<br>In: <code>"Diem 7.5 → Xep loai: Kha"</code>',
  'const diem = 7.5;\n\n// TODO: viet if/else xep loai\nlet xepLoai;\n\nconsole.log(`Diem ${diem} → Xep loai: ${xepLoai}`);', 8),

buildChallenge('m2_atm', 'Máy ATM đơn giản',
  'Cho <code>soDu = 5000000</code> và <code>soTienRut = 2000000</code>.<br>Kiểm tra: nếu soTienRut > soDu → in "Khong du so du".<br>Nếu soTienRut không chia hết 50000 → in "So tien phai la boi cua 50,000".<br>Ngược lại → in "Rut thanh cong! So du con lai: ..."',
  'const soDu = 5000000;\nconst soTienRut = 2000000;\n\n// TODO: kiem tra va in ket qua\n', 8),

buildChallenge('m2_pattern', 'Vẽ tam giác sao',
  'Dùng vòng lặp in ra tam giác:<br><code>*<br>**<br>***<br>****<br>*****</code><br>Gợi ý: vòng for + lặp nối chuỗi "*".',
  '// In tam giac 5 dong\nfor (let i = 1; i <= 5; i++) {\n  // TODO: tao chuoi "*" co i ky tu\n  console.log("TODO");\n}', 6),

'<hr class="sep">',
buildExam('exam_m2', 'Bài kiểm tra Module 2 — Điều kiện & Vòng lặp', 8, [
  {q:'<code>if (x = 5) { ... }</code> — có gì sai?', opts:['Không sai gì','Dùng = thay vì === (gán thay vì so sánh)','Thiếu else','Thiếu dấu chấm phẩy'], answer:1, explain:'= là gán giá trị, === mới là so sánh. Đây là lỗi rất phổ biến!'},
  {q:'<code>for(let i=0; i&lt;5; i++)</code> — i lần lượt nhận giá trị nào?', opts:['1,2,3,4,5','0,1,2,3,4','0,1,2,3,4,5','1,2,3,4'], answer:1, explain:'i bắt đầu từ 0, chạy khi i<5, nên i = 0,1,2,3,4.'},
  {q:'<code>continue</code> làm gì trong vòng lặp?', opts:['Dừng vòng lặp','Bỏ qua lần lặp hiện tại, tiếp tục lần sau','Thoát chương trình','Lặp lại từ đầu'], answer:1, explain:'continue bỏ qua phần còn lại của lần lặp hiện tại, nhảy sang lần tiếp.'},
  {q:'Quên <code>i++</code> trong for loop sẽ thế nào?', opts:['Không lặp lần nào','Lặp 1 lần','Lặp vô hạn (treo máy)','Báo lỗi'], answer:2, explain:'Không tăng i → điều kiện luôn đúng → lặp mãi. Nhấn Ctrl+C để dừng.'},
  {q:'<code>let x = 7 > 3 ? "lon" : "nho";</code> — x bằng gì?', opts:['"lon"','"nho"','true','7'], answer:0, explain:'7>3 là true → lấy giá trị sau ? → "lon".'},
  {q:'Vòng lặp nào phù hợp khi KHÔNG biết trước số lần lặp?', opts:['for','while','for...of','Không vòng nào'], answer:1, explain:'while lặp dựa trên điều kiện, phù hợp khi không biết trước số lần.'},
  {q:'<code>for(let i=10; i>=0; i-=2)</code> — in ra bao nhiêu số?', opts:['5','6','10','11'], answer:1, explain:'i = 10,8,6,4,2,0 → 6 số.'}
]),
].join('\n')});

// =============================================
// MODULE 3 — HÀM
// =============================================
D.push({id:3,title:"Hàm (Function)",week:"Tuần 2 (phần 1)",phase:1,html:[
'<h2>1. Hàm là gì?</h2>',
'<div class="b idea">💡 <strong>Hình dung:</strong> Hàm giống <strong>công thức nấu ăn</strong>.<br>- Bạn viết công thức 1 lần (định nghĩa hàm).<br>- Nấu nhiều lần với nguyên liệu khác nhau (gọi hàm với tham số khác nhau).<br>- Mỗi lần nấu cho ra món khác (return kết quả khác).</div>',

'<h3>1.1. Tạo và gọi hàm</h3>',
defined_pg('Thử function', '// BƯỚC 1: Viết công thức (định nghĩa hàm)\nfunction chao(ten) {\n  return "Xin chao " + ten + "!";\n}\n\n// BƯỚC 2: Sử dụng công thức (gọi hàm)\nconsole.log(chao("Minh"));   // "Xin chao Minh!"\nconsole.log(chao("Hung"));   // "Xin chao Hung!"\nconsole.log(chao("Lan"));    // "Xin chao Lan!"', 10),

'<p><strong>Giải thích từng phần:</strong></p>',
'<table>',
'<tr><th>Code</th><th>Nghĩa</th><th>Ví dụ đời thường</th></tr>',
'<tr><td><code>function chao</code></td><td>Tạo hàm tên "chao"</td><td>Viết công thức "Nước cam"</td></tr>',
'<tr><td><code>(ten)</code></td><td>Tham số — "nguyên liệu" cần truyền vào</td><td>Nguyên liệu: cam</td></tr>',
'<tr><td><code>{ ... }</code></td><td>Thân hàm — các bước thực hiện</td><td>Bước: vắt cam, thêm đường, khuấy</td></tr>',
'<tr><td><code>return ...</code></td><td>Trả về kết quả</td><td>Bưng ly nước cam ra cho khách</td></tr>',
'<tr><td><code>chao("Minh")</code></td><td>Gọi hàm, truyền "Minh" vào</td><td>"Pha nước cam cho Minh"</td></tr>',
'</table>',

'<div class="b warn"><strong>return vs console.log — KHÁC NHAU!</strong><br><code>return</code> = hàm "đưa" kết quả ra ngoài để dùng tiếp.<br><code>console.log</code> = chỉ in ra màn hình, không "đưa" gì cả.<br><br>Hàm KHÔNG có return sẽ trả về <code>undefined</code>.</div>',

'<pre>// Ví dụ KHÔNG return:\nfunction chaoSai(ten) {\n  console.log("Xin chao " + ten);  // chỉ in, không return\n}\nlet kq = chaoSai("Minh");  // In "Xin chao Minh"\nconsole.log(kq);            // undefined! Vì hàm không return gì.\n\n// Ví dụ CÓ return:\nfunction chaoDung(ten) {\n  return "Xin chao " + ten;\n}\nlet kq2 = chaoDung("Minh");\nconsole.log(kq2);            // "Xin chao Minh" ← có giá trị!</pre>',

'<div class="mini">Viết hàm <code>tinhDienTichHCN(dai, rong)</code> trả về diện tích. Gọi hàm với dai=5, rong=3.</div>',

'<h3>1.2. Hàm nhiều tham số</h3>',
'<pre>function tinhTong(a, b) {\n  return a + b;\n}\nconsole.log(tinhTong(3, 5));   // 8\nconsole.log(tinhTong(10, 20)); // 30</pre>',

'<h3>1.3. Tham số mặc định</h3>',
'<pre>function chao(ten = "ban") {\n  return "Xin chao " + ten + "!";\n}\nconsole.log(chao("Minh")); // "Xin chao Minh!"\nconsole.log(chao());        // "Xin chao ban!" ← dùng giá trị mặc định</pre>',

'<h3>1.4. Arrow Function — cách viết ngắn gọn</h3>',
defined_pg('Thử arrow function', '// Hàm thường\nfunction cong(a, b) {\n  return a + b;\n}\n\n// Arrow function — viết tắt\nconst cong2 = (a, b) => a + b;\n\n// 1 tham số — bỏ ngoặc\nconst gap2 = x => x * 2;\n\nconsole.log(cong(3, 5));  // 8\nconsole.log(cong2(3, 5));  // 8\nconsole.log(gap2(4));       // 8', 13),

'<div class="b info">Arrow function thường dùng khi viết hàm ngắn (1 dòng). Hàm dài vẫn nên dùng <code>function</code> cho dễ đọc.</div>',

'<hr class="sep">',

'<h2>2. Scope — Phạm vi của biến</h2>',
'<div class="b idea">💡 Biến tạo trong hàm giống <strong>đồ trong phòng riêng</strong> — chỉ dùng trong phòng đó.<br>Biến tạo ngoài hàm giống <strong>đồ ở phòng khách</strong> — ai cũng thấy.</div>',

'<pre>let x = "toan cuc"; // ngoài hàm — mọi nơi thấy\n\nfunction test() {\n  let y = "cuc bo"; // trong hàm — chỉ hàm này thấy\n  console.log(x);   // ✅ OK — thấy biến bên ngoài\n  console.log(y);   // ✅ OK\n}\n\ntest();\n// console.log(y);  ← ❌ LỖI! Ngoài hàm không thấy y</pre>',

'<hr class="sep">',

'<h2>Bài tập cuối Module 3</h2>',

buildExercise('m3_ex1', 'green', 'Bài 1: Giai thừa',
  'Viết hàm <code>giaiThua(n)</code>. Giai thừa 5 = 5 x 4 x 3 x 2 x 1 = 120. In ra <code>giaiThua(5)</code> và <code>giaiThua(0)</code>.',
  'Dùng vòng for, nhân dần từ 1 đến n. giaiThua(0) = 1.',
  'function giaiThua(n) {\n  // TODO\n}\nconsole.log(giaiThua(5));\nconsole.log(giaiThua(0));',
  'function giaiThua(n) {\n  let kq = 1;\n  for (let i = 2; i <= n; i++) {\n    kq = kq * i;\n  }\n  return kq;\n}\nconsole.log(giaiThua(5)); // 120\nconsole.log(giaiThua(0)); // 1',
  '<strong>Giải thích:</strong> Bắt đầu kq = 1. Nhân lần lượt 2, 3, 4, 5 → 1*2*3*4*5 = 120. Khi n=0, vòng for không chạy → trả về 1 (đúng vì 0! = 1).',
  null, 5),

buildExercise('m3_ex2', 'green', 'Bài 2: Kiểm tra số nguyên tố',
  'Viết hàm <code>laSoNguyenTo(n)</code> trả về <code>true</code> nếu n là số nguyên tố, <code>false</code> nếu không.',
  'Số nguyên tố > 1 và chỉ chia hết cho 1 và chính nó. Chỉ cần kiểm tra đến √n.',
  'function laSoNguyenTo(n) {\n  // TODO\n}\nconsole.log(laSoNguyenTo(7));  // true\nconsole.log(laSoNguyenTo(10)); // false\nconsole.log(laSoNguyenTo(1));  // false',
  'function laSoNguyenTo(n) {\n  if (n < 2) return false;\n  for (let i = 2; i * i <= n; i++) {\n    if (n % i === 0) return false;\n  }\n  return true;\n}\nconsole.log(laSoNguyenTo(7));  // true\nconsole.log(laSoNguyenTo(10)); // false\nconsole.log(laSoNguyenTo(1));  // false',
  '<strong>Giải thích:</strong> n < 2 → không phải SNT. Kiểm tra từ 2 đến √n: nếu n chia hết cho i → không phải SNT. Tại sao chỉ đến √n? Vì nếu n = a*b thì a hoặc b ≤ √n.',
  null, 6),

buildQuiz('m3', [
  {q:'Hàm không có <code>return</code> trả về gì?', opts:['null','0','undefined','Error'], answer:2, explain:'Hàm không return → trả về undefined.'},
  {q:'<code>const f = x => x * 2;</code> là gì?', opts:['Khai báo biến','Arrow function','Phép nhân','Object'], answer:1, explain:'Arrow function viết tắt: nhận x, trả về x*2.'},
  {q:'Biến tạo trong hàm có dùng được ngoài hàm không?', opts:['Có','Không','Tùy trường hợp','Chỉ khi dùng var'], answer:1, explain:'Biến let/const trong hàm có scope cục bộ — chỉ dùng trong hàm đó.'}
]),

'<hr class="sep">',
buildExam('exam_m3', 'Bài kiểm tra Module 3 — Hàm', 8, [
  {q:'Hàm không có <code>return</code> trả về gì?', opts:['null','0','undefined','Error'], answer:2, explain:'Hàm không return sẽ tự động trả về undefined.'},
  {q:'<code>function f(a=5){return a;} f();</code> trả về?', opts:['undefined','5','null','Error'], answer:1, explain:'Tham số mặc định a=5. Gọi f() không truyền a → dùng mặc định = 5.'},
  {q:'Arrow function <code>const add = (a,b) => a+b;</code> tương đương?', opts:['function add(a,b){return a+b;}','function(a,b){a+b}','const add = function(a,b){a+b;}','add(a,b) => return a+b'], answer:0, explain:'Arrow function 1 dòng tự return. Tương đương function declaration có return.'},
  {q:'Biến <code>let x</code> trong hàm A, hàm B có dùng được x không?', opts:['Có','Không','Chỉ khi khai báo var','Chỉ khi x là const'], answer:1, explain:'Biến let/const trong hàm là cục bộ (local scope). Hàm khác không thấy.'},
  {q:'<code>console.log(f(3)); function f(x){return x*2;}</code> — chạy được không?', opts:['Có, in ra 6','Không, lỗi ReferenceError','In ra undefined','In ra NaN'], answer:0, explain:'Function declaration được hoisted — JS "đưa" lên đầu trước khi chạy. Nên gọi trước khi khai báo vẫn OK.'},
  {q:'<code>const f = x => { x * 2 }</code> — f(3) trả về?', opts:['6','undefined','Error','3'], answer:1, explain:'Dùng {} nhưng KHÔNG có return → trả về undefined. Phải viết { return x*2 } hoặc bỏ {}: x => x*2.'}
]),

buildChallenge('m3_factorial', 'Giai thừa', 'Viết hàm <code>giaiThua(n)</code> trả về n!. In ra giaiThua(5) (kết quả = 120).', 'function giaiThua(n) {\n  // TODO: viết code tại đây\n}\nconsole.log(giaiThua(5));', 5),

buildExercise('m3_ex3', 'yellow', 'Bài 3: Đảo ngược chuỗi',
  'Viết hàm <code>daoChuoi(s)</code> đảo ngược chuỗi <strong>KHÔNG dùng <code>.reverse()</code></strong>.',
  'Dùng vòng for từ cuối chuỗi về đầu, nối từng ký tự.',
  'function daoChuoi(s) {\n  // TODO: khong dung .reverse()\n}\nconsole.log(daoChuoi("hello")); // "olleh"',
  'function daoChuoi(s) {\n  let kq = "";\n  for (let i = s.length - 1; i >= 0; i--) {\n    kq = kq + s[i];\n  }\n  return kq;\n}\nconsole.log(daoChuoi("hello")); // "olleh"',
  '<strong>Giải thích:</strong> Duyệt chuỗi từ cuối (index = length-1) về đầu (index = 0). Nối từng ký tự vào chuỗi kết quả. <code>s[i]</code> lấy ký tự tại vị trí i.',
  null, 5),

buildExercise('m3_ex4', 'red', 'Bài 4: Đếm từ',
  'Viết hàm <code>demTu(s)</code> đếm số từ. Xử lý cả nhiều dấu cách liên tiếp. <code>demTu("  Xin   chao  ban ")</code> → 3.',
  'Dùng <code>.trim()</code> + <code>.split()</code> với regex.',
  'function demTu(s) {\n  // TODO\n}\nconsole.log(demTu("Hello World"));       // 2\nconsole.log(demTu("  Xin   chao  ban ")); // 3',
  'function demTu(s) {\n  return s.trim().split(/\\s+/).length;\n}\nconsole.log(demTu("Hello World"));       // 2\nconsole.log(demTu("  Xin   chao  ban ")); // 3',
  '<strong>Giải thích:</strong> <code>.trim()</code> xóa cách đầu/cuối. <code>.split(/\\s+/)</code> tách theo 1 hoặc nhiều dấu cách (regex \\s+ = whitespace). Kết quả là mảng các từ → đếm .length.',
  null, 5),

'<hr class="sep">',

'<h2>🚀 Mini Project: Bộ công cụ xử lý chuỗi</h2>',
'<div class="b idea">💡 Xây dựng bộ hàm tiện ích — giống thư viện utils mà mọi dự án thật đều có.</div>',

buildChallenge('m3_password', 'Kiểm tra mật khẩu',
  'Viết hàm <code>kiemTraMatKhau(mk)</code> trả về object: <code>{ manh: true/false, lyDo: "..." }</code><br>Quy tắc: ≥ 8 ký tự, có chữ hoa, có số.<br>Test: <code>kiemTraMatKhau("Abc12345")</code> → manh: true<br><code>kiemTraMatKhau("abc")</code> → manh: false, lyDo: "..."',
  'function kiemTraMatKhau(mk) {\n  // TODO: kiem tra do dai >= 8\n  // TODO: kiem tra co chu hoa\n  // TODO: kiem tra co so\n  return { manh: false, lyDo: "TODO" };\n}\n\nconsole.log(kiemTraMatKhau("Abc12345"));\nconsole.log(kiemTraMatKhau("abc"));\nconsole.log(kiemTraMatKhau("abcdefgh"));', 10),

buildChallenge('m3_format', 'Format tiền Việt Nam',
  'Viết hàm <code>formatVND(so)</code> chuyển số thành chuỗi tiền VN.<br><code>formatVND(1500000)</code> → <code>"1,500,000 VND"</code><br><code>formatVND(50000)</code> → <code>"50,000 VND"</code><br>Gợi ý: dùng <code>.toLocaleString()</code> hoặc tự viết logic.',
  'function formatVND(so) {\n  // TODO\n}\n\nconsole.log(formatVND(1500000));  // "1,500,000 VND"\nconsole.log(formatVND(50000));    // "50,000 VND"\nconsole.log(formatVND(1000));     // "1,000 VND"', 8),

buildChallenge('m3_calc', 'Máy tính đơn giản',
  'Viết hàm <code>tinhToan(a, phepTinh, b)</code>.<br>Hỗ trợ: "+", "-", "*", "/".<br>Chia cho 0 → trả về "Khong the chia cho 0".<br>Phép tính sai → trả về "Phep tinh khong hop le".',
  'function tinhToan(a, phepTinh, b) {\n  // TODO\n}\n\nconsole.log(tinhToan(10, "+", 5));  // 15\nconsole.log(tinhToan(10, "/", 0));  // "Khong the chia cho 0"\nconsole.log(tinhToan(10, "^", 2)); // "Phep tinh khong hop le"', 9),

defined_pg('Làm bài tập tại đây', '// Viết code bài tập tại đây\n', 4),
].join('\n')});

// =============================================
// MODULE 4 — ARRAY & OBJECT
// =============================================
D.push({id:4,title:"Array & Object",week:"Tuần 2 (phần 2)",phase:1,html:[
'<h2>1. Array (Mảng) — "Danh sách có số thứ tự"</h2>',
'<div class="b idea">💡 <strong>Hình dung:</strong> Array giống <strong>danh sách mua sắm</strong> được đánh số. Mỗi món có vị trí (index) bắt đầu từ <strong>0</strong> (không phải 1!).</div>',

'<h3>1.1. Tạo mảng</h3>',
'<pre>let fruits = ["Tao", "Cam", "Chuoi"];\n//  vị trí:    [0]    [1]    [2]</pre>',

'<h3>1.2. Đọc phần tử</h3>',
defined_pg('Thử Array', 'let fruits = ["Tao", "Cam", "Chuoi"];\nconsole.log(fruits[0]);     // "Tao"  ← phần tử ĐẦU TIÊN = index 0\nconsole.log(fruits[1]);     // "Cam"\nconsole.log(fruits[2]);     // "Chuoi"\nconsole.log(fruits[3]);     // undefined ← không tồn tại!\nconsole.log(fruits.length); // 3 ← có 3 phần tử', 7),

'<div class="b warn"><strong>Bẫy phổ biến:</strong> Index bắt đầu từ 0. Mảng 3 phần tử → index là 0, 1, 2 (không phải 1, 2, 3). <code>fruits[3]</code> sẽ là <code>undefined</code>!</div>',

'<div class="mini">Tạo mảng <code>let mau = ["do", "xanh", "vang"];</code>. In ra phần tử thứ 2 (index 1). In ra <code>.length</code>.</div>',

'<h3>1.3. Thêm / Xóa phần tử</h3>',
defined_pg('Thử push/pop', 'let a = [1, 2, 3];\nconsole.log("Ban dau:", a);\n\na.push(4);      // Thêm vào CUỐI  → [1,2,3,4]\nconsole.log("push(4):", a);\n\na.unshift(0);   // Thêm vào ĐẦU   → [0,1,2,3,4]\nconsole.log("unshift(0):", a);\n\na.pop();        // Xóa phần tử CUỐI → [0,1,2,3]\nconsole.log("pop():", a);\n\na.shift();      // Xóa phần tử ĐẦU  → [1,2,3]\nconsole.log("shift():", a);', 12),

'<div class="b idea">💡 Mẹo nhớ: <strong>push/pop</strong> = cuối mảng (giống xếp đĩa). <strong>unshift/shift</strong> = đầu mảng.</div>',

'<div class="mini">Tạo mảng rỗng <code>let giohang = [];</code>. Push "Sua", "Banh", "Trung" vào. In ra. Pop bỏ phần tử cuối. In lại.</div>',

'<hr class="sep">',

'<h2>2. Array Methods — "Kỹ năng" của mảng</h2>',

'<h3>2.1. forEach — duyệt từng phần tử</h3>',
'<div class="b idea">💡 Giống đọc từng món trong danh sách mua sắm, từ trên xuống dưới.</div>',
'<pre>let fruits = ["Tao", "Cam", "Chuoi"];\n\nfruits.forEach(function(item, index) {\n  console.log(index + ": " + item);\n});\n// 0: Tao\n// 1: Cam\n// 2: Chuoi</pre>',
'<p><code>forEach</code> nhận 1 hàm, hàm đó được gọi lần lượt cho từng phần tử. Tham số <code>item</code> = phần tử hiện tại, <code>index</code> = vị trí.</p>',

'<h3>2.2. map — biến đổi mảng (tạo mảng mới)</h3>',
'<div class="b idea">💡 Giống <strong>nhà máy chế biến</strong>: nguyên liệu đưa vào → thành phẩm đi ra. Mỗi phần tử được "chế biến" thành phần tử mới. Mảng gốc KHÔNG bị thay đổi.</div>',
defined_pg('Thử map', 'let nums = [1, 2, 3, 4];\nlet doubled = nums.map(function(n) {\n  return n * 2;\n});\n// Viết ngắn bằng arrow function:\n// let doubled = nums.map(n => n * 2);\n\nconsole.log(doubled); // [2, 4, 6, 8]\nconsole.log(nums);    // [1, 2, 3, 4] ← KHÔNG đổi!', 9),

'<div class="mini">Cho <code>let ten = ["minh", "hung", "lan"];</code>. Dùng map để tạo mảng mới với mỗi tên viết HOA chữ cái đầu. Gợi ý: <code>s[0].toUpperCase() + s.slice(1)</code></div>',

'<h3>2.3. filter — lọc mảng</h3>',
'<div class="b idea">💡 Giống <strong>rây bột</strong>: chỉ giữ lại những phần tử thỏa điều kiện, bỏ phần còn lại.</div>',
defined_pg('Thử filter', 'let ages = [12, 25, 8, 30, 16];\nlet adults = ages.filter(function(age) {\n  return age >= 18;  // giữ lại nếu >= 18\n});\n// Viết ngắn: ages.filter(a => a >= 18)\n\nconsole.log(adults); // [25, 30]', 7),

'<div class="mini">Cho <code>let nums = [5, 12, 3, 8, 20, 1];</code>. Lọc ra những số lớn hơn 10.</div>',

'<h3>2.4. find — tìm phần tử ĐẦU TIÊN khớp</h3>',
'<pre>let users = [\n  { ten: "An", tuoi: 20 },\n  { ten: "Binh", tuoi: 17 },\n  { ten: "Cuong", tuoi: 25 }\n];\nlet found = users.find(u => u.ten === "Binh");\nconsole.log(found); // { ten: "Binh", tuoi: 17 }</pre>',
'<p>Khác <code>filter</code>: <code>find</code> trả về 1 phần tử (hoặc <code>undefined</code>), còn <code>filter</code> trả về mảng.</p>',

'<h3>2.5. reduce — gộp mảng thành 1 giá trị</h3>',
'<div class="b idea">💡 Giống <strong>cộng dồn hóa đơn</strong>: bắt đầu từ 0, cộng từng món vào.</div>',
defined_pg('Thử reduce', 'let nums = [10, 20, 30];\n\nlet tong = nums.reduce(function(congDon, so) {\n  console.log(`congDon=${congDon}, so=${so}`);\n  return congDon + so;\n}, 0);  // 0 = giá trị bắt đầu\n\n// Quá trình:\n// Lần 1: congDon=0,  so=10 → 10\n// Lần 2: congDon=10, so=20 → 30\n// Lần 3: congDon=30, so=30 → 60\n\nconsole.log("Tong:", tong); // 60', 12),

'<div class="b info"><strong>reduce</strong> là method khó nhất. Nếu chưa hiểu ngay — bình thường! Hãy thử chạy code, thêm <code>console.log</code> bên trong để xem từng bước.</div>',

'<h3>2.6. Chuỗi methods hữu ích khác</h3>',
'<pre>let a = [3, 1, 4, 1, 5];\nconsole.log(a.includes(4));        // true (có chứa 4?)\nconsole.log(a.indexOf(1));         // 1 (vị trí đầu tiên của 1)\nconsole.log(a.join(" - "));        // "3 - 1 - 4 - 1 - 5"\nconsole.log([...a].sort());        // [1, 1, 3, 4, 5] (sắp xếp)\nconsole.log([...a].reverse());     // [5, 1, 4, 1, 3] (đảo ngược)</pre>',

'<div class="b warn"><strong>Lưu ý:</strong> <code>.sort()</code> và <code>.reverse()</code> THAY ĐỔI mảng gốc. Dùng <code>[...a]</code> (spread) để tạo bản sao trước khi sort/reverse nếu muốn giữ mảng gốc.</div>',

'<hr class="sep">',

'<h2>3. Object — "Thẻ thông tin"</h2>',
'<div class="b idea">💡 Object giống <strong>thẻ căn cước</strong>: có nhiều trường (key) và giá trị (value).<br>- key "ten" → value "Minh"<br>- key "tuoi" → value 25<br><br>Khác array: array dùng SỐ THỨ TỰ (0,1,2...) để truy cập. Object dùng TÊN (key).</div>',

'<h3>3.1. Tạo và đọc</h3>',
defined_pg('Thử Object', 'let user = {\n  ten: "Minh",         // key: "ten", value: "Minh"\n  tuoi: 25,            // key: "tuoi", value: 25\n  thanhPho: "HCMC",\n  dangLamViec: true\n};\n\n// Đọc giá trị — 2 cách:\nconsole.log(user.ten);        // "Minh"   ← cách 1: dấu chấm\nconsole.log(user["tuoi"]);    // 25       ← cách 2: ngoặc vuông', 10),

'<h3>3.2. Thêm / Sửa / Xóa</h3>',
'<pre>user.email = "minh@test.com";  // Thêm trường mới\nuser.tuoi = 26;                 // Sửa giá trị\ndelete user.dangLamViec;        // Xóa trường</pre>',

'<div class="mini">Tạo object <code>let sach = { ten: "Harry Potter", gia: 150000, conHang: true };</code>. In ra tên sách. Thêm trường <code>tacGia</code>. Sửa giá thành 180000.</div>',

'<h3>3.3. Object methods</h3>',
'<pre>console.log(Object.keys(user));   // ["ten","tuoi","thanhPho","email"]\nconsole.log(Object.values(user)); // ["Minh", 26, "HCMC", "minh@test.com"]\nconsole.log(Object.entries(user));\n// [["ten","Minh"], ["tuoi",26], ...]</pre>',

'<h3>3.4. Duyệt object bằng for...in</h3>',
'<pre>for (let key in user) {\n  console.log(key + ": " + user[key]);\n}\n// ten: Minh\n// tuoi: 26\n// thanhPho: HCMC\n// email: minh@test.com</pre>',

'<hr class="sep">',

'<h2>4. Array of Objects — Cấu trúc dữ liệu QUAN TRỌNG nhất</h2>',
'<div class="b idea">💡 Trong thực tế (API, database, test data), dữ liệu gần như luôn ở dạng <strong>mảng chứa nhiều object</strong>. Đây là cấu trúc bạn sẽ gặp nhiều nhất khi làm automation.</div>',

defined_pg('Thử Array of Objects', 'const users = [\n  { ten: "An", tuoi: 20, role: "user" },\n  { ten: "Binh", tuoi: 17, role: "user" },\n  { ten: "Cuong", tuoi: 25, role: "admin" },\n  { ten: "Dao", tuoi: 30, role: "admin" },\n  { ten: "Em", tuoi: 15, role: "user" }\n];\n\n// Lọc người trên 18 tuổi\nconst adults = users.filter(u => u.tuoi >= 18);\nconsole.log("Tren 18:", adults.map(u => u.ten));\n\n// Tìm tất cả admin\nconst admins = users.filter(u => u.role === "admin");\nconsole.log("Admins:", admins);\n\n// Tính tuổi trung bình\nconst tbTuoi = users.reduce((s, u) => s + u.tuoi, 0) / users.length;\nconsole.log("Tuoi TB:", tbTuoi);\n\n// Sắp xếp theo tuổi giảm dần\nconst sorted = [...users].sort((a, b) => b.tuoi - a.tuoi);\nconsole.log("Sap xep:", sorted.map(u => `${u.ten}(${u.tuoi})`));', 20),

'<h3>4.1. Các pattern thường dùng</h3>',
'<pre>// Tạo mảng chỉ chứa tên\nconst names = users.map(u => u.ten);\n// ["An", "Binh", "Cuong", "Dao", "Em"]\n\n// Nhóm theo role\nconst grouped = {};\nusers.forEach(u => {\n  if (!grouped[u.role]) grouped[u.role] = [];\n  grouped[u.role].push(u);\n});\n// { user: [...], admin: [...] }\n\n// Kiểm tra có ai tên "Cuong" không?\nconst hasCuong = users.some(u => u.ten === "Cuong"); // true\n\n// Tất cả đều trên 10 tuổi?\nconst allAbove10 = users.every(u => u.tuoi > 10); // true</pre>',

'<div class="b ok"><strong>Mẹo:</strong> <code>.some()</code> = "có ÍT NHẤT 1 phần tử thỏa?". <code>.every()</code> = "TẤT CẢ đều thỏa?"</div>',

'<h3>4.2. Ví dụ thực tế: Xử lý dữ liệu sản phẩm</h3>',
defined_pg('Xử lý sản phẩm', 'const products = [\n  { name: "Iphone 15", price: 25000000, stock: 10 },\n  { name: "Samsung S24", price: 22000000, stock: 0 },\n  { name: "Pixel 8", price: 18000000, stock: 5 },\n  { name: "Xiaomi 14", price: 12000000, stock: 20 }\n];\n\n// Sản phẩm còn hàng, giá dưới 20 triệu\nconst affordable = products\n  .filter(p => p.stock > 0 && p.price < 20000000)\n  .map(p => `${p.name}: ${(p.price/1000000)}tr`);\nconsole.log("Gia tot, con hang:", affordable);\n\n// Tổng giá trị kho hàng\nconst totalValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);\nconsole.log("Tong gia tri kho:", (totalValue/1000000) + " trieu");', 16),

'<div class="mini">Cho mảng students (ten, diem, lop). Lọc học sinh giỏi (diem >= 8), nhóm theo lớp, tính điểm trung bình mỗi lớp.</div>',

'<hr class="sep">',

'<h2>5. Destructuring & Spread</h2>',

'<h3>4.1. Destructuring — "Mở hộp" nhanh</h3>',
defined_pg('Thử destructuring', '// Array destructuring\nconst [a, b, c] = [1, 2, 3];\nconsole.log(a, b, c); // 1 2 3\n\n// Object destructuring\nconst user = { ten: "Minh", tuoi: 25, tp: "HCMC" };\nconst { ten, tuoi } = user;\nconsole.log(ten);  // "Minh"\nconsole.log(tuoi); // 25', 9),

'<h3>4.2. Spread operator (...) — Trải phần tử</h3>',
'<pre>// Gộp mảng\nconst arr1 = [1, 2];\nconst arr2 = [3, 4];\nconst arr3 = [...arr1, ...arr2]; // [1, 2, 3, 4]\n\n// Copy mảng (tạo bản sao)\nconst copy = [...arr1]; // [1, 2]\n\n// Gộp object\nconst base = { a: 1, b: 2 };\nconst extra = { ...base, c: 3 }; // { a: 1, b: 2, c: 3 }</pre>',

'<hr class="sep">',

'<h2>5. JSON — Ngôn ngữ trao đổi dữ liệu</h2>',
'<div class="term"><strong>JSON</strong> (JavaScript Object Notation) = cách viết dữ liệu mà cả người và máy đều đọc được. API gửi/nhận dữ liệu bằng JSON.</div>',
defined_pg('Thử JSON', '// Object → chuỗi JSON\nconst user = { ten: "Minh", tuoi: 25 };\nconst jsonStr = JSON.stringify(user);\nconsole.log(jsonStr);       // \'{"ten":"Minh","tuoi":25}\'\nconsole.log(typeof jsonStr); // "string"\n\n// Chuỗi JSON → Object\nconst obj = JSON.parse(jsonStr);\nconsole.log(obj.ten);  // "Minh"\nconsole.log(typeof obj); // "object"', 10),

'<hr class="sep">',

'<h2>Bài tập cuối Module 4</h2>',

buildExercise('m4_ex1', 'green', 'Bài 1: Max, Min, Tổng',
  'Cho mảng <code>[8, 3, 9, 5, 7, 2, 10, 6]</code>. Tìm số lớn nhất, nhỏ nhất, và tổng.',
  'Dùng <code>Math.max(...arr)</code>, <code>Math.min(...arr)</code>, <code>.reduce()</code>',
  'const arr = [8, 3, 9, 5, 7, 2, 10, 6];\n// TODO: tim max, min, tong\n',
  'const arr = [8, 3, 9, 5, 7, 2, 10, 6];\nconsole.log("Max:", Math.max(...arr));  // 10\nconsole.log("Min:", Math.min(...arr));  // 2\nconsole.log("Tong:", arr.reduce((s,n) => s+n, 0)); // 50',
  '<strong>Giải thích:</strong> <code>Math.max(...arr)</code> spread mảng thành các tham số riêng lẻ. <code>reduce((s,n) => s+n, 0)</code> cộng dồn từ 0.',
  null, 5),

buildExercise('m4_ex2', 'yellow', 'Bài 2: Lọc và sắp xếp',
  'Cho mảng điểm <code>[8, 3, 9, 5, 7, 2, 10, 6]</code>. Lọc điểm >= 5, sắp xếp giảm dần.',
  'Dùng <code>.filter()</code> rồi <code>.sort((a,b) => b-a)</code>',
  'const diem = [8, 3, 9, 5, 7, 2, 10, 6];\n// TODO: loc va sap xep\n',
  'const diem = [8, 3, 9, 5, 7, 2, 10, 6];\nconst kq = diem.filter(d => d >= 5).sort((a,b) => b - a);\nconsole.log(kq); // [10, 9, 8, 7, 6, 5]',
  '<strong>Giải thích:</strong> <code>.filter(d => d >= 5)</code> giữ lại số >= 5. <code>.sort((a,b) => b-a)</code> sắp giảm dần (b-a > 0 → b đứng trước a).',
  null, 5),

buildExercise('m4_ex3', 'red', 'Bài 3: Xử lý Array of Objects',
  'Cho mảng users (ten, tuoi). Đếm người trên 18 tuổi, tìm người lớn tuổi nhất, tạo mảng chỉ chứa tên.',
  'Dùng <code>.filter()</code>, <code>.reduce()</code>, <code>.map()</code>',
  'const users = [\n  { ten: "An", tuoi: 20 },\n  { ten: "Binh", tuoi: 17 },\n  { ten: "Cuong", tuoi: 25 },\n  { ten: "Dao", tuoi: 15 }\n];\n// TODO\n',
  'const users = [\n  { ten: "An", tuoi: 20 },\n  { ten: "Binh", tuoi: 17 },\n  { ten: "Cuong", tuoi: 25 },\n  { ten: "Dao", tuoi: 15 }\n];\nconsole.log("Tren 18:", users.filter(u => u.tuoi >= 18).length);\nconsole.log("Lon nhat:", users.reduce((max, u) => u.tuoi > max.tuoi ? u : max));\nconsole.log("Ten:", users.map(u => u.ten));',
  '<strong>Giải thích:</strong><br>- <code>.filter(u => u.tuoi >= 18).length</code> = đếm số object thỏa điều kiện.<br>- <code>.reduce((max, u) => ...)</code> so sánh tuổi, giữ lại object có tuổi lớn nhất.<br>- <code>.map(u => u.ten)</code> rút tên từ mỗi object.',
  null, 8),

'<hr class="sep">',

'<h2>🚀 Mini Project: Quản lý danh bạ</h2>',
'<div class="b idea">💡 Xây dựng hệ thống quản lý contacts — giống ứng dụng Danh bạ trên điện thoại.</div>',

buildChallenge('m4_contacts', 'Quản lý danh bạ',
  'Cho mảng contacts (ten, sdt, email, nhom). Viết code:<br>1. Thêm 1 contact mới<br>2. Tìm contact theo tên (dùng filter)<br>3. Lọc contacts thuộc nhóm "Ban be"<br>4. Tạo mảng chỉ chứa tên + sdt (dùng map)<br>In kết quả từng bước.',
  'let contacts = [\n  { ten: "An", sdt: "0901111111", email: "an@gmail.com", nhom: "Ban be" },\n  { ten: "Binh", sdt: "0902222222", email: "binh@gmail.com", nhom: "Cong viec" },\n  { ten: "Cuong", sdt: "0903333333", email: "cuong@gmail.com", nhom: "Ban be" },\n  { ten: "Dao", sdt: "0904444444", email: "dao@gmail.com", nhom: "Gia dinh" },\n];\n\n// 1. Them contact moi\n\n\n// 2. Tim theo ten\n\n\n// 3. Loc nhom "Ban be"\n\n\n// 4. Map chi lay ten + sdt\n', 16),

buildChallenge('m4_shop', 'Giỏ hàng e-commerce',
  'Cho mảng sản phẩm trong giỏ hàng (ten, gia, soLuong).<br>Tính: tổng tiền, số lượng sản phẩm, sản phẩm đắt nhất.<br>Áp dụng giảm giá 15% nếu tổng > 500,000đ.<br>In hóa đơn đẹp.',
  'const gioHang = [\n  { ten: "Ao thun", gia: 200000, soLuong: 2 },\n  { ten: "Quan jeans", gia: 450000, soLuong: 1 },\n  { ten: "Giay", gia: 350000, soLuong: 1 },\n  { ten: "Non", gia: 80000, soLuong: 3 },\n];\n\n// Tinh tong tien\nconst tongTien = 0; // TODO: dung reduce\nconsole.log("Tong tien:", tongTien);\n\n// San pham dat nhat\n// TODO\n\n// Giam gia neu > 500000\n// TODO\n\n// In hoa don\n// TODO', 18),

buildChallenge('m4_stats', 'Thống kê điểm lớp học',
  'Cho mảng học sinh (ten, diem). Tính:<br>1. Điểm trung bình lớp<br>2. Điểm cao nhất, thấp nhất<br>3. Số HS giỏi (≥8), khá (≥6.5), TB (≥5), yếu (&lt;5)<br>4. Sắp xếp theo điểm giảm dần<br>In bảng thống kê.',
  'const lop = [\n  { ten: "An", diem: 9 },\n  { ten: "Binh", diem: 6 },\n  { ten: "Cuong", diem: 8.5 },\n  { ten: "Dao", diem: 4 },\n  { ten: "Em", diem: 7 },\n  { ten: "Phuc", diem: 3.5 },\n  { ten: "Giang", diem: 8 },\n  { ten: "Hoa", diem: 5.5 },\n];\n\n// 1. Diem trung binh\n\n// 2. Cao nhat, thap nhat\n\n// 3. Thong ke xep loai\n\n// 4. Sap xep giam dan\n', 18),

'<hr class="sep">',
buildExam('exam_m4', 'Bài kiểm tra Module 4 — Array & Object', 10, [
  {q:'Array index bắt đầu từ số mấy?', opts:['0','1','-1','Tùy chọn'], answer:0, explain:'Trong JS (và hầu hết ngôn ngữ), index bắt đầu từ 0.'},
  {q:'<code>[1,2,3].push(4)</code> — mảng sau đó là gì?', opts:['[4,1,2,3]','[1,2,3,4]','[1,2,3]','[4]'], answer:1, explain:'push() thêm phần tử vào CUỐI mảng.'},
  {q:'<code>[1,2,3].map(x => x*2)</code> trả về gì?', opts:['6','[2,4,6]','[1,2,3]','undefined'], answer:1, explain:'map() tạo mảng MỚI, mỗi phần tử nhân 2.'},
  {q:'<code>[5,3,8,1].filter(x => x > 4)</code> trả về?', opts:['[5,8]','[3,1]','8','2'], answer:0, explain:'filter() giữ lại phần tử thỏa điều kiện >4.'},
  {q:'<code>users.find(u => u.name === "An")</code> trả về?', opts:['Mảng tất cả user tên An','Object user đầu tiên tên An','true/false','Index'], answer:1, explain:'find() trả về PHẦN TỬ ĐẦU TIÊN khớp, không phải mảng.'},
  {q:'<code>const {a, b} = {a:1, b:2, c:3};</code> — a và b bằng?', opts:['undefined','1 và 2','{a:1} và {b:2}','Error'], answer:1, explain:'Destructuring rút giá trị từ object. a=1, b=2.'},
  {q:'<code>[...arr1, ...arr2]</code> làm gì?', opts:['So sánh 2 mảng','Gộp 2 mảng thành 1','Nhân 2 mảng','Xóa phần tử trùng'], answer:1, explain:'Spread operator ... trải phần tử. Gộp 2 mảng thành mảng mới.'},
  {q:'<code>.reduce((sum, n) => sum + n, 0)</code> dùng để?', opts:['Lọc mảng','Biến đổi mảng','Tính tổng (gộp thành 1 giá trị)','Sắp xếp mảng'], answer:2, explain:'reduce gộp mảng thành 1 giá trị. Ở đây là tính tổng.'}
]),
].join('\n')});

// =============================================
// MODULE 5 — ASYNC/AWAIT & TRY/CATCH
// =============================================
D.push({id:5,title:"Async/Await & Try/Catch",week:"Tuần 3",phase:1,html:[
'<h2>1. Bất đồng bộ (Asynchronous) là gì?</h2>',
'<div class="b idea">💡 <strong>Đồng bộ (Sync)</strong> = xếp hàng mua trà sữa: phải chờ người trước xong mới đến lượt bạn.<br><strong>Bất đồng bộ (Async)</strong> = order trên app: gửi đơn rồi làm việc khác, khi nào xong app báo.</div>',

'<p>JavaScript là ngôn ngữ <strong>single-thread</strong> (chỉ làm 1 việc cùng lúc), nhưng nó xử lý bất đồng bộ rất giỏi nhờ <strong>callback, Promise, và async/await</strong>.</p>',

'<p>Các tác vụ bất đồng bộ phổ biến:</p>',
'<ul>',
'<li>Gọi API (đợi server trả dữ liệu)</li>',
'<li>Đọc/ghi file</li>',
'<li>Chờ người dùng thao tác</li>',
'<li>setTimeout (đặt hẹn giờ)</li>',
'</ul>',

'<h3>1.1. setTimeout — "Đặt hẹn giờ"</h3>',
defined_pg('Thử setTimeout', 'console.log("Buoc 1: Bat dau");\n\nsetTimeout(function() {\n  console.log("Buoc 2: Sau 2 giay");\n}, 2000); // 2000ms = 2 giây\n\nconsole.log("Buoc 3: Khong doi, chay luon!");\n\n// Thứ tự in ra: Buoc 1 → Buoc 3 → Buoc 2', 9),

'<div class="b warn"><strong>Bất ngờ!</strong> Bước 3 in TRƯỚC bước 2 vì JS không chờ setTimeout xong. Nó "đặt hẹn" rồi chạy tiếp ngay.</div>',

'<h3>1.2. Callback — "Gọi lại khi xong"</h3>',
'<div class="term"><strong>Callback</strong> = một hàm được truyền vào hàm khác, sẽ được gọi lại sau khi tác vụ hoàn tất.</div>',
'<pre>function layDuLieu(callback) {\n  setTimeout(function() {\n    const data = "Du lieu tu server";\n    callback(data);  // gọi hàm callback khi xong\n  }, 1000);\n}\n\nlayDuLieu(function(ketQua) {\n  console.log("Nhan duoc:", ketQua);\n});\nconsole.log("Dang cho...");</pre>',

'<div class="b err"><strong>Callback Hell:</strong> Khi có nhiều callback lồng nhau → code thụt vào sâu hoắm, cực khó đọc. Đây là lý do ra đời Promise.</div>',

'<hr class="sep">',

'<h2>2. Promise — "Lời hứa"</h2>',
'<div class="b idea">💡 Promise giống <strong>phiếu hẹn lấy đồ</strong>:<br>- Bạn đưa đồ sửa → nhận phiếu hẹn (Promise).<br>- Kết quả: <strong>resolve</strong> (sửa xong) hoặc <strong>reject</strong> (không sửa được).<br>- Bạn dùng <strong>.then()</strong> để nhận đồ khi xong, <strong>.catch()</strong> để xử lý lỗi.</div>',

defined_pg('Thử Promise', '// Tạo Promise\nfunction layDuLieu() {\n  return new Promise(function(resolve, reject) {\n    setTimeout(function() {\n      const thanhCong = true; // thử đổi thành false\n      if (thanhCong) {\n        resolve("Du lieu da tai xong!");\n      } else {\n        reject("Loi: khong tai duoc!");\n      }\n    }, 1000);\n  });\n}\n\n// Sử dụng Promise\nlayDuLieu()\n  .then(function(data) {\n    console.log("Thanh cong:", data);\n  })\n  .catch(function(err) {\n    console.log("That bai:", err);\n  });\n\nconsole.log("Dang cho...");', 20),

'<h3>3 trạng thái của Promise:</h3>',
'<table>',
'<tr><th>Trạng thái</th><th>Nghĩa</th><th>Chuyển sang</th></tr>',
'<tr><td><strong>pending</strong></td><td>Đang chờ</td><td>→ fulfilled hoặc rejected</td></tr>',
'<tr><td><strong>fulfilled</strong></td><td>Thành công (resolve)</td><td>.then() được gọi</td></tr>',
'<tr><td><strong>rejected</strong></td><td>Thất bại (reject)</td><td>.catch() được gọi</td></tr>',
'</table>',

'<hr class="sep">',

'<h2>3. async/await — Cách viết dễ đọc hơn</h2>',
'<div class="b idea">💡 <code>async/await</code> là "đường" bọc ngoài Promise, giúp code bất đồng bộ trông giống code đồng bộ — dễ đọc hơn rất nhiều!</div>',

defined_pg('Thử async/await', 'function doi(ms) {\n  return new Promise(resolve => setTimeout(resolve, ms));\n}\n\nasync function main() {\n  console.log("Bat dau...");\n  \n  await doi(1000);  // chờ 1 giây\n  console.log("1 giay da troi qua!");\n  \n  await doi(500);   // chờ thêm 0.5 giây\n  console.log("Them 0.5 giay nua!");\n  \n  console.log("Xong!");\n}\n\nmain();', 14),

'<div class="b ok"><strong>Quy tắc vàng:</strong><br>1. Hàm có <code>await</code> bên trong → PHẢI có <code>async</code> phía trước.<br>2. <code>await</code> = "chờ Promise xong rồi mới tiếp".<br>3. <code>async function</code> luôn trả về Promise.</div>',

'<div class="b warn"><strong>Lỗi phổ biến:</strong><br><code>await</code> ngoài hàm <code>async</code> → báo lỗi!<br><pre>// ❌ SAI:\nawait doi(1000); // SyntaxError!\n\n// ✅ ĐÚNG:\nasync function main() {\n  await doi(1000);\n}\nmain();</pre></div>',

'<hr class="sep">',

'<h2>4. try/catch — "Lưới an toàn" bắt lỗi</h2>',
'<div class="b idea">💡 <code>try/catch</code> giống <strong>lưới an toàn khi đi trên dây</strong>: nếu ngã (lỗi), lưới đỡ bạn thay vì rơi tự do (crash chương trình).</div>',

defined_pg('Thử try/catch', 'try {\n  // Thử chạy code có thể lỗi\n  let data = JSON.parse("day khong phai JSON");\n  console.log(data); // dòng này KHÔNG chạy vì dòng trên lỗi\n} catch (error) {\n  // Bắt lỗi, xử lý\n  console.log("Bi loi roi!");\n  console.log("Loi:", error.message);\n} finally {\n  // LUÔN chạy dù có lỗi hay không\n  console.log("Luon chay du co loi hay khong.");\n}', 12),

'<h3>try/catch với async/await</h3>',
'<pre>async function layDuLieu() {\n  try {\n    const response = await fetch("https://api.example.com/data");\n    const data = await response.json();\n    console.log("Du lieu:", data);\n  } catch (error) {\n    console.log("Loi khi goi API:", error.message);\n  }\n}</pre>',

'<div class="b ok"><strong>Quy tắc:</strong> Luôn dùng try/catch khi gọi API hoặc tương tác bên ngoài. Lỗi mạng, server sập, dữ liệu sai... đều có thể xảy ra.</div>',

'<hr class="sep">',

'<h2>5. Promise.all & Promise.race — Chạy nhiều tác vụ cùng lúc</h2>',
'<div class="b idea">💡 <strong>Promise.all</strong> = gọi 3 món cùng lúc, chờ TẤT CẢ xong mới ăn.<br><strong>Promise.race</strong> = gọi 3 món, ai xong TRƯỚC thì ăn trước.</div>',

defined_pg('Thử Promise.all', 'function layUser() {\n  return new Promise(r => setTimeout(() => r({ name: "Minh" }), 1000));\n}\nfunction layOrders() {\n  return new Promise(r => setTimeout(() => r([{ id: 1, total: 500000 }]), 800));\n}\nfunction laySettings() {\n  return new Promise(r => setTimeout(() => r({ theme: "dark" }), 600));\n}\n\nasync function main() {\n  console.log("Goi 3 API cung luc...");\n  const start = Date.now();\n\n  // Promise.all — chạy SONG SONG, nhanh hơn nhiều!\n  const [user, orders, settings] = await Promise.all([\n    layUser(), layOrders(), laySettings()\n  ]);\n\n  console.log("Xong sau", Date.now() - start, "ms");\n  console.log("User:", user);\n  console.log("Orders:", orders);\n  console.log("Settings:", settings);\n}\nmain();', 20),

'<div class="b warn"><strong>Lưu ý:</strong> <code>Promise.all</code> fail nếu BẤT KỲ promise nào fail. Dùng <code>Promise.allSettled</code> nếu muốn biết kết quả tất cả (kể cả fail).</div>',

'<pre>// Promise.race — ai xong trước thắng\nconst kq = await Promise.race([\n  fetch("/api/main"),           // server chính\n  fetch("/api/backup"),         // server dự phòng\n]);\n// Trả về response của server nào phản hồi nhanh hơn\n\n// Promise.allSettled — không fail khi 1 promise fail\nconst results = await Promise.allSettled([\n  fetch("/api/users"),\n  fetch("/api/orders"),  // có thể fail\n]);\nresults.forEach(r => {\n  if (r.status === "fulfilled") console.log("OK:", r.value);\n  else console.log("FAIL:", r.reason);\n});</pre>',

'<h3>Ví dụ thực tế: Gọi nhiều API trong Playwright</h3>',
'<pre>// Trong Playwright test, bạn sẽ thường gặp pattern này:\ntest("Load dashboard data", async ({ page }) => {\n  // Chờ nhiều API response cùng lúc\n  const [usersRes, ordersRes] = await Promise.all([\n    page.waitForResponse("**/api/users"),\n    page.waitForResponse("**/api/orders"),\n    page.goto("https://example.com/dashboard") // trigger cả 2 API\n  ]);\n\n  expect(usersRes.status()).toBe(200);\n  expect(ordersRes.status()).toBe(200);\n});</pre>',

'<hr class="sep">',

'<h2>Bài tập cuối Module 5</h2>',

buildExercise('m5_ex1', 'green', 'Bài 1: Đợi và in',
  'Viết hàm <code>doiVaIn(message, ms)</code> — trả về Promise, chờ ms mili giây rồi in message. Gọi tuần tự 2 lần.',
  'Dùng <code>new Promise</code> + <code>setTimeout</code> + <code>async/await</code>',
  'function doiVaIn(message, ms) {\n  // TODO: tra ve Promise, setTimeout, resolve\n}\n\nasync function main() {\n  await doiVaIn("Xin chao!", 1000);\n  await doiVaIn("Ban khoe?", 500);\n  console.log("Xong!");\n}\nmain();',
  'function doiVaIn(message, ms) {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      console.log(message);\n      resolve();\n    }, ms);\n  });\n}\n\nasync function main() {\n  await doiVaIn("Xin chao!", 1000);\n  await doiVaIn("Ban khoe?", 500);\n  console.log("Xong!");\n}\nmain();',
  '<strong>Giải thích:</strong> Hàm trả về Promise. Bên trong dùng setTimeout để delay. Khi xong → gọi <code>resolve()</code>. Dùng <code>await</code> để chờ từng Promise xong mới tiếp.',
  null, 10),

buildExercise('m5_ex2', 'yellow', 'Bài 2: Giả lập login async',
  'Viết hàm <code>login(username)</code> trả về Promise: chờ 1 giây, username = "admin" → resolve, ngược lại → reject. Dùng try/catch.',
  'Promise + setTimeout + resolve/reject + async/await + try/catch',
  'function login(username) {\n  // TODO\n}\n\nasync function main() {\n  try {\n    const kq = await login("admin");\n    console.log(kq);\n  } catch (err) {\n    console.log("Loi:", err);\n  }\n}\nmain();',
  'function login(username) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (username === "admin") resolve("Dang nhap thanh cong!");\n      else reject("Sai ten dang nhap!");\n    }, 1000);\n  });\n}\n\nasync function main() {\n  try {\n    const kq = await login("admin");\n    console.log(kq);\n  } catch (err) {\n    console.log("Loi:", err);\n  }\n}\nmain();',
  '<strong>Giải thích:</strong> <code>resolve()</code> khi đúng, <code>reject()</code> khi sai. <code>try/catch</code> bắt reject — reject sẽ rơi vào catch block.',
  null, 12),

buildExercise('m5_ex3', 'red', 'Bài 3: Chuỗi API calls',
  'Viết 3 hàm async giả lập: <code>layUser()</code> → trả về {id:1, name:"Minh"}, <code>layDonHang(userId)</code> → trả về {orderId:99}, <code>layChiTiet(orderId)</code> → trả về {total:500000}. Gọi tuần tự với await.',
  'Mỗi hàm trả về Promise + setTimeout 500ms',
  '// TODO: viet 3 ham async\n\nasync function main() {\n  // TODO: goi tuan tu\n}\nmain();',
  'function layUser() {\n  return new Promise(r => setTimeout(() => r({id:1,name:"Minh"}), 500));\n}\nfunction layDonHang(userId) {\n  return new Promise(r => setTimeout(() => r({orderId:99,userId}), 500));\n}\nfunction layChiTiet(orderId) {\n  return new Promise(r => setTimeout(() => r({total:500000,orderId}), 500));\n}\n\nasync function main() {\n  const user = await layUser();\n  console.log("User:", user);\n  const order = await layDonHang(user.id);\n  console.log("Order:", order);\n  const detail = await layChiTiet(order.orderId);\n  console.log("Detail:", detail);\n}\nmain();',
  '<strong>Giải thích:</strong> Mỗi bước dùng kết quả của bước trước: user.id → layDonHang → order.orderId → layChiTiet. Đây là pattern phổ biến khi gọi API thực tế.',
  null, 6),

'<hr class="sep">',

buildExam('exam_m5', 'Bài kiểm tra Module 5 — Async/Await', 8, [
  {q:'<code>setTimeout(fn, 1000)</code> — code sau setTimeout chạy ngay hay chờ 1 giây?', opts:['Chờ 1 giây','Chạy ngay','Tùy trường hợp','Báo lỗi'], answer:1, explain:'JS không chờ setTimeout. Nó "đặt hẹn" rồi chạy tiếp ngay lập tức.'},
  {q:'Promise có mấy trạng thái?', opts:['2: đúng/sai','3: pending, fulfilled, rejected','4','1: resolved'], answer:1, explain:'Promise: pending (đang chờ) → fulfilled (resolve) hoặc rejected (reject).'},
  {q:'<code>await</code> dùng được ở đâu?', opts:['Bất kỳ đâu','Chỉ trong hàm async','Chỉ trong Promise','Chỉ trong try/catch'], answer:1, explain:'await BẮT BUỘC phải ở trong hàm có từ khóa async phía trước.'},
  {q:'<code>Promise.all([p1,p2,p3])</code> — nếu p2 fail thì sao?', opts:['Chỉ p2 fail, p1+p3 vẫn OK','Tất cả fail','Promise.all fail ngay','Chờ tất cả xong rồi báo lỗi'], answer:2, explain:'Promise.all fail ngay khi BẤT KỲ promise nào fail. Dùng Promise.allSettled nếu muốn biết tất cả kết quả.'},
  {q:'<code>try { ... } catch (e) { ... }</code> — catch bắt gì?', opts:['Chỉ bắt lỗi mạng','Bắt mọi lỗi/exception trong try','Bắt lỗi cú pháp','Bắt lỗi runtime và compile'], answer:1, explain:'catch bắt mọi exception (throw/reject) xảy ra trong block try.'}
]),

'<h2>🚀 Mini Project: Giả lập hệ thống đặt hàng</h2>',
'<div class="b idea">💡 Mô phỏng flow thực tế khi đặt hàng online: kiểm tra kho → xử lý thanh toán → gửi email xác nhận. Mỗi bước là async.</div>',

buildChallenge('m5_order', 'Hệ thống đặt hàng',
  'Viết 3 hàm async giả lập (mỗi hàm setTimeout 500-1000ms):<br>1. <code>kiemTraKho(sanPham)</code> → resolve "Con hang" hoặc reject "Het hang"<br>2. <code>thanhToan(soTien)</code> → resolve "Thanh toan OK"<br>3. <code>guiEmail(email)</code> → resolve "Da gui email xac nhan"<br><br>Viết hàm <code>datHang()</code> gọi tuần tự 3 hàm trên với try/catch.',
  'function kiemTraKho(sanPham) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (sanPham === "Iphone") resolve("Con hang!");\n      else reject("Het hang: " + sanPham);\n    }, 500);\n  });\n}\n\nfunction thanhToan(soTien) {\n  // TODO: resolve sau 500ms\n}\n\nfunction guiEmail(email) {\n  // TODO: resolve sau 300ms\n}\n\nasync function datHang() {\n  try {\n    console.log("Buoc 1: Kiem tra kho...");\n    const kho = await kiemTraKho("Iphone");\n    console.log(kho);\n    \n    // TODO: buoc 2, 3\n    \n    console.log("Dat hang thanh cong!");\n  } catch (err) {\n    console.log("LOI:", err);\n  }\n}\n\ndatHang();', 25),

buildChallenge('m5_race', 'Đua server: ai nhanh hơn?',
  'Giả lập 3 server response với thời gian khác nhau. Dùng <code>Promise.race()</code> để lấy kết quả từ server nhanh nhất.<br>In: "Server X phan hoi nhanh nhat sau Yms".',
  'function server(name, ms) {\n  return new Promise(resolve => {\n    setTimeout(() => resolve({ name, time: ms }), ms);\n  });\n}\n\nasync function main() {\n  console.log("Dang goi 3 server...");\n  \n  const winner = await Promise.race([\n    server("VN", 200),\n    server("SG", 500),\n    server("US", 800)\n  ]);\n  \n  console.log(`${winner.name} nhanh nhat: ${winner.time}ms`);\n}\n\nmain();', 15),

defined_pg('Làm bài tập tại đây', '// Viết code bài tập tại đây\n', 4),
].join('\n')});

// =============================================
// MODULE 6 — CLASS, OOP & HTML CƠ BẢN (MỚI)
// =============================================
D.push({id:6,title:"Class, OOP & HTML",week:"Tuần 3-4",phase:1,html:[
'<h2>1. Tại sao cần học phần này?</h2>',
'<div class="b idea">💡 Ở Module 9 (Page Object Model), bạn sẽ viết <code>class LoginPage extends BasePage</code>. Nếu không hiểu class/constructor/extends, bạn sẽ bị "sốc".<br><br>Ngoài ra, để viết locator tốt trong Playwright, bạn cần hiểu HTML cơ bản.</div>',

'<h2>2. Class — "Bản thiết kế"</h2>',
'<div class="b idea">💡 Class giống <strong>bản thiết kế nhà</strong>. Bạn vẽ bản thiết kế 1 lần, rồi xây nhiều căn nhà từ bản đó. Mỗi căn nhà (object) có cùng cấu trúc nhưng khác dữ liệu.</div>',

defined_pg('Thử Class', 'class Animal {\n  // constructor = "khởi tạo" — chạy khi tạo object mới\n  constructor(ten, tuoi) {\n    this.ten = ten;   // this = chính object này\n    this.tuoi = tuoi;\n  }\n\n  // Method = hàm bên trong class\n  gioi_thieu() {\n    return `Toi la ${this.ten}, ${this.tuoi} tuoi.`;\n  }\n}\n\n// Tạo object từ class (gọi là "instance")\nconst meo = new Animal("Miu", 3);\nconst cho = new Animal("Lucky", 5);\n\nconsole.log(meo.gioi_thieu()); // "Toi la Miu, 3 tuoi."\nconsole.log(cho.gioi_thieu()); // "Toi la Lucky, 5 tuoi."\nconsole.log(meo.ten);          // "Miu"', 18),

'<table>',
'<tr><th>Khái niệm</th><th>Nghĩa</th><th>Ví dụ</th></tr>',
'<tr><td><code>class</code></td><td>Bản thiết kế</td><td>Bản vẽ nhà</td></tr>',
'<tr><td><code>constructor()</code></td><td>Hàm khởi tạo, chạy khi <code>new</code></td><td>Đặt nền móng</td></tr>',
'<tr><td><code>this</code></td><td>Chính object hiện tại</td><td>"Căn nhà này"</td></tr>',
'<tr><td><code>new ClassName()</code></td><td>Tạo object mới từ class</td><td>Xây 1 căn nhà</td></tr>',
'<tr><td>Method</td><td>Hàm bên trong class</td><td>Chức năng của nhà (mở cửa, bật đèn)</td></tr>',
'</table>',

'<h3>2.1. extends — Kế thừa</h3>',
'<div class="b idea">💡 <code>extends</code> = "class con thừa hưởng mọi thứ từ class cha, rồi thêm của riêng mình".<br>Giống: Con kế thừa họ của cha, nhưng có tên riêng.</div>',

defined_pg('Thử extends', 'class Animal {\n  constructor(ten) {\n    this.ten = ten;\n  }\n  keu() {\n    return "...";\n  }\n}\n\n// Dog KẾ THỪA từ Animal\nclass Dog extends Animal {\n  constructor(ten, giong) {\n    super(ten);        // gọi constructor CHA\n    this.giong = giong; // thêm thuộc tính riêng\n  }\n  keu() {\n    return "Gau gau!"; // GHI ĐÈ method cha\n  }\n}\n\nconst d = new Dog("Lucky", "Corgi");\nconsole.log(d.ten);    // "Lucky" (từ cha)\nconsole.log(d.giong);  // "Corgi" (riêng)\nconsole.log(d.keu());  // "Gau gau!" (ghi đè)', 22),

'<div class="b warn"><strong>super()</strong> = gọi constructor của class cha. BẮT BUỘC phải gọi <code>super()</code> trong constructor của class con TRƯỚC khi dùng <code>this</code>.</div>',

'<h3>2.2. Tại sao liên quan đến Playwright?</h3>',
'<pre>// Đây chính xác là cấu trúc Page Object Model:\nclass BasePage {\n  constructor(page) {\n    this.page = page;  // lưu page của Playwright\n  }\n  async goto(url) {\n    await this.page.goto(url);\n  }\n}\n\nclass LoginPage extends BasePage {\n  constructor(page) {\n    super(page);  // truyền page cho BasePage\n    this.username = page.locator("#username");\n    this.password = page.locator("#password");\n  }\n  async login(user, pass) {\n    await this.username.fill(user);\n    await this.password.fill(pass);\n  }\n}\n\n// Bây giờ bạn hiểu POM rồi! 🎉</pre>',

'<hr class="sep">',

'<h2>3. HTML Cơ bản — Hiểu cấu trúc trang web</h2>',
'<div class="b idea">💡 Để viết locator trong Playwright, bạn cần hiểu HTML. HTML = "bộ xương" của trang web. Mỗi thành phần trên trang (nút, ô input, text...) đều là 1 thẻ HTML.</div>',

'<h3>3.1. Cấu trúc thẻ HTML</h3>',
'<pre>&lt;!-- Cú pháp: &lt;thẻ thuộc-tính="giá-trị"&gt;Nội dung&lt;/thẻ&gt; --&gt;\n\n&lt;button id="login-btn" class="btn primary"&gt;Đăng nhập&lt;/button&gt;\n│        │              │                    │\n│        │              │                    └── Nội dung (text)\n│        │              └── class = tên nhóm (CSS styling)\n│        └── id = tên DUY NHẤT (giống CMND)\n└── Tên thẻ (button = nút bấm)</pre>',

'<h3>3.2. Các thẻ HTML phổ biến trong testing</h3>',
'<table>',
'<tr><th>Thẻ</th><th>Nghĩa</th><th>Playwright locator</th></tr>',
'<tr><td><code>&lt;button&gt;</code></td><td>Nút bấm</td><td><code>getByRole("button")</code></td></tr>',
'<tr><td><code>&lt;input&gt;</code></td><td>Ô nhập liệu</td><td><code>getByLabel() / getByPlaceholder()</code></td></tr>',
'<tr><td><code>&lt;a href="..."&gt;</code></td><td>Đường link</td><td><code>getByRole("link")</code></td></tr>',
'<tr><td><code>&lt;select&gt;</code></td><td>Dropdown</td><td><code>page.selectOption()</code></td></tr>',
'<tr><td><code>&lt;h1&gt;–&lt;h6&gt;</code></td><td>Tiêu đề</td><td><code>getByRole("heading")</code></td></tr>',
'<tr><td><code>&lt;div&gt;, &lt;span&gt;</code></td><td>Khối chứa, inline</td><td><code>page.locator(".class")</code></td></tr>',
'<tr><td><code>&lt;form&gt;</code></td><td>Form nhập liệu</td><td>Chứa input + button</td></tr>',
'<tr><td><code>&lt;label&gt;</code></td><td>Nhãn cho input</td><td><code>getByLabel()</code></td></tr>',
'<tr><td><code>&lt;img&gt;</code></td><td>Hình ảnh</td><td><code>getByRole("img")</code></td></tr>',
'<tr><td><code>&lt;table&gt;</code></td><td>Bảng</td><td><code>page.locator("table")</code></td></tr>',
'</table>',

'<h3>3.3. Thuộc tính quan trọng cho testing</h3>',
'<pre>&lt;input\n  id="email"                    ← DUY NHẤT trên trang\n  class="form-input large"      ← có thể trùng nhiều phần tử\n  name="user_email"             ← tên field trong form\n  type="email"                  ← loại input (text/email/password/checkbox...)\n  placeholder="Nhập email..."   ← gợi ý khi trống\n  data-testid="email-input"     ← dev thêm riêng cho test\n  aria-label="Email address"    ← accessibility label\n/&gt;</pre>',

'<div class="b ok"><strong>Mẹo:</strong> Nhấn <strong>F12</strong> (hoặc Ctrl+Shift+I) trên trình duyệt để mở <strong>DevTools</strong>. Tab <strong>Elements</strong> hiện toàn bộ HTML của trang. Đây là công cụ số 1 khi viết locator!</div>',

'<h3>3.4. DOM Tree — Cấu trúc cây</h3>',
'<pre>&lt;html&gt;\n  └── &lt;body&gt;\n       ├── &lt;header&gt;\n       │    └── &lt;nav&gt; ... &lt;/nav&gt;\n       ├── &lt;main&gt;\n       │    ├── &lt;form id="login"&gt;\n       │    │    ├── &lt;label&gt;Email&lt;/label&gt;\n       │    │    ├── &lt;input type="email"&gt;\n       │    │    ├── &lt;label&gt;Password&lt;/label&gt;\n       │    │    ├── &lt;input type="password"&gt;\n       │    │    └── &lt;button&gt;Login&lt;/button&gt;\n       │    └── &lt;div class="error"&gt;&lt;/div&gt;\n       └── &lt;footer&gt; ... &lt;/footer&gt;</pre>',
'<div class="b info">Playwright duyệt cây DOM này để tìm phần tử. Hiểu cấu trúc cây = viết locator chính xác hơn.</div>',

'<hr class="sep">',

buildExam('exam_m6', 'Bài kiểm tra Module 6 — Class/OOP & HTML', 8, [
  {q:'<code>constructor()</code> chạy khi nào?', opts:['Khi gọi method','Khi dùng new ClassName()','Khi khai báo class','Không bao giờ tự chạy'], answer:1, explain:'constructor tự động chạy khi tạo object mới bằng new.'},
  {q:'<code>this</code> trong class trỏ tới đâu?', opts:['Window','Class','Object hiện tại (instance)','Hàm gọi nó'], answer:2, explain:'this = chính object đang được tạo/sử dụng (instance của class).'},
  {q:'<code>class Dog extends Animal</code> — Dog gọi constructor Animal bằng?', opts:['Animal()','this.Animal()','super()','parent()'], answer:2, explain:'super() gọi constructor của class cha. Bắt buộc gọi trước khi dùng this.'},
  {q:'Thẻ HTML nào tạo nút bấm?', opts:['&lt;a&gt;','&lt;div&gt;','&lt;button&gt;','&lt;input&gt;'], answer:2, explain:'<button> tạo nút bấm. <a> tạo link, <div> tạo khối chứa.'},
  {q:'<code>id</code> và <code>class</code> trong HTML khác gì?', opts:['Giống nhau','id duy nhất, class có thể trùng','class duy nhất, id trùng được','Không có sự khác biệt'], answer:1, explain:'id phải DUY NHẤT trên trang (như CMND). class có thể dùng lại nhiều phần tử.'},
  {q:'Playwright ưu tiên locator nào nhất?', opts:['CSS Selector','getByRole','getByTestId','XPath'], answer:1, explain:'getByRole tốt nhất vì nó giống cách user thấy trang (nút, link, heading...).'}
]),

'<h2>Bài tập cuối Module 6</h2>',
buildExercise('m6_ex1', 'green', 'Bài 1: Class Hình chữ nhật',
  'Tạo class <code>HinhChuNhat</code> với constructor nhận dai, rong. Thêm method <code>dienTich()</code> và <code>chuVi()</code>. Tạo HCN dai=5, rong=3 và in diện tích, chu vi.',
  'Dùng <code>this.dai</code>, method trả về giá trị bằng return.',
  'class HinhChuNhat {\n  // TODO\n}\nconst h = new HinhChuNhat(5, 3);\nconsole.log("DT:", h.dienTich());\nconsole.log("CV:", h.chuVi());',
  'class HinhChuNhat {\n  constructor(dai, rong) {\n    this.dai = dai;\n    this.rong = rong;\n  }\n  dienTich() { return this.dai * this.rong; }\n  chuVi() { return 2 * (this.dai + this.rong); }\n}\nconst h = new HinhChuNhat(5, 3);\nconsole.log("DT:", h.dienTich()); // 15\nconsole.log("CV:", h.chuVi());    // 16',
  '<strong>Giải thích:</strong> <code>constructor</code> chạy khi <code>new</code>. <code>this.dai</code> lưu giá trị vào object. Method truy cập thuộc tính qua <code>this</code>.',
  null, 7),

buildExercise('m6_ex2', 'yellow', 'Bài 2: Kế thừa Class',
  'Tạo class <code>NhanVien</code> (ten, luong). Tạo class <code>QuanLy extends NhanVien</code> thêm thuộc tính <code>soPhoiHop</code>. QuanLy có method <code>thuong()</code> trả về luong * 0.2.',
  'Dùng <code>extends</code> + <code>super()</code> trong constructor.',
  'class NhanVien {\n  // TODO\n}\nclass QuanLy extends NhanVien {\n  // TODO\n}\nconst ql = new QuanLy("Minh", 20000000, 5);\nconsole.log(ql.ten, "thuong:", ql.thuong());',
  'class NhanVien {\n  constructor(ten, luong) {\n    this.ten = ten;\n    this.luong = luong;\n  }\n}\nclass QuanLy extends NhanVien {\n  constructor(ten, luong, soPhoiHop) {\n    super(ten, luong);\n    this.soPhoiHop = soPhoiHop;\n  }\n  thuong() { return this.luong * 0.2; }\n}\nconst ql = new QuanLy("Minh", 20000000, 5);\nconsole.log(ql.ten, "thuong:", ql.thuong());',
  '<strong>Giải thích:</strong> <code>extends</code> kế thừa. <code>super(ten, luong)</code> gọi constructor cha. QuanLy có thêm soPhoiHop và method thuong().',
  null, 8),
].join('\n')});

// =============================================
// MODULE 7 — PLAYWRIGHT CƠ BẢN (cũ M6)
// =============================================
D.push({id:7,title:"Playwright Cơ bản",week:"Tuần 5",phase:2,html:[
'<h2>1. Playwright là gì?</h2>',
'<div class="b idea">💡 Playwright giống <strong>robot ngồi trước máy tính</strong>: tự mở trình duyệt, gõ text, click nút, kiểm tra kết quả — thay bạn. Nhanh hơn, không mệt, không sai sót.</div>',

'<table>',
'<tr><th>Test thủ công</th><th>Playwright</th></tr>',
'<tr><td>Mở Chrome bằng tay</td><td>Mở Chrome bằng code</td></tr>',
'<tr><td>Gõ URL bằng tay</td><td><code>page.goto(url)</code></td></tr>',
'<tr><td>Nhìn mắt kiểm tra</td><td><code>expect(...).toBeVisible()</code></td></tr>',
'<tr><td>Lặp 50 lần mệt muốn chết</td><td>Chạy 50 test trong 30 giây</td></tr>',
'<tr><td>Test 1 trình duyệt</td><td>Test Chrome + Firefox + Safari cùng lúc</td></tr>',
'</table>',

'<div class="b ok"><strong>Tại sao Playwright?</strong><br>- Microsoft phát triển, miễn phí, open-source.<br>- Hỗ trợ Chrome, Firefox, Safari.<br>- Auto-wait thông minh — không cần sleep().<br>- Codegen — tự viết code khi bạn thao tác.</div>',

'<h2>2. Cài đặt Playwright</h2>',
'<pre># Tạo thư mục dự án\nmkdir hoc-playwright\ncd hoc-playwright\n\n# Khởi tạo Playwright (trả lời các câu hỏi)\nnpm init playwright@latest</pre>',

'<div class="b info"><strong>Khi được hỏi:</strong><br>- TypeScript or JavaScript? → chọn <strong>JavaScript</strong><br>- Where to put your end-to-end tests? → <strong>tests</strong><br>- Add a GitHub Actions workflow? → <strong>No</strong> (thêm sau)<br>- Install Playwright browsers? → <strong>Yes</strong></div>',

'<h3>Cấu trúc thư mục sau khi cài</h3>',
'<pre>hoc-playwright/\n├── tests/              ← viết test ở đây\n│   └── example.spec.js ← test mẫu\n├── playwright.config.js ← file cấu hình\n├── package.json\n└── node_modules/</pre>',

'<h2>3. Test đầu tiên</h2>',
'<p>Tạo file <code>tests/bai1.spec.js</code>:</p>',
'<pre>const { test, expect } = require("@playwright/test");\n\ntest("Mo trang Google", async ({ page }) => {\n  // Bước 1: Mở Google\n  await page.goto("https://www.google.com");\n\n  // Bước 2: Kiểm tra tiêu đề có chứa "Google"\n  await expect(page).toHaveTitle(/Google/);\n});</pre>',

'<p><strong>Giải thích từng dòng:</strong></p>',
'<table>',
'<tr><th>Code</th><th>Nghĩa</th></tr>',
'<tr><td><code>const { test, expect }</code></td><td>Import 2 hàm từ Playwright</td></tr>',
'<tr><td><code>test("Mo trang...", ...)</code></td><td>Khai báo 1 test case, đặt tên</td></tr>',
'<tr><td><code>async ({ page })</code></td><td>Playwright tự tạo trang trình duyệt cho bạn</td></tr>',
'<tr><td><code>await page.goto(...)</code></td><td>Mở URL (phải có await!)</td></tr>',
'<tr><td><code>await expect(page)</code></td><td>Kiểm tra kết quả</td></tr>',
'</table>',

'<h2>4. Chạy test</h2>',
'<pre># Chạy tất cả test\nnpx playwright test\n\n# Chạy 1 file cụ thể\nnpx playwright test bai1.spec.js\n\n# Chạy và MỞ TRÌNH DUYỆT cho xem\nnpx playwright test --headed\n\n# Mở UI mode (siêu đẹp, dễ debug)\nnpx playwright test --ui\n\n# Xem báo cáo sau khi chạy\nnpx playwright show-report</pre>',

'<div class="b ok"><strong>Mẹo:</strong> Luôn chạy <code>--headed</code> lần đầu để thấy robot thao tác. Sau đó chạy không headed (nhanh hơn).</div>',

'<h2>5. Codegen — Tự động viết code</h2>',
'<pre>npx playwright codegen https://the-internet.herokuapp.com</pre>',
'<div class="b idea">💡 Codegen mở trình duyệt, bạn thao tác bình thường (click, gõ, chọn...) → Playwright <strong>tự viết code cho bạn</strong>! Copy code đó vào file test. Tuyệt vời để bắt đầu.</div>',

'<h2>6. Ví dụ: Test Login hoàn chỉnh</h2>',
'<pre>const { test, expect } = require("@playwright/test");\n\ntest("Login thanh cong", async ({ page }) => {\n  // Mở trang login\n  await page.goto("https://the-internet.herokuapp.com/login");\n\n  // Gõ username và password\n  await page.fill("#username", "tomsmith");\n  await page.fill("#password", "SuperSecretPassword!");\n\n  // Click nút Login\n  await page.click(\'button[type="submit"]\');\n\n  // Kiểm tra kết quả\n  await expect(page.locator(".flash.success")).toBeVisible();\n  await expect(page).toHaveURL(/\\/secure/);\n});</pre>',

'<hr class="sep">',

'<h2>7. Debug — Khi test không chạy đúng</h2>',
'<div class="b idea">💡 Test fail là bình thường. Quan trọng là biết cách <strong>debug</strong> — tìm ra lỗi ở đâu. Playwright có nhiều công cụ debug cực mạnh.</div>',

'<h3>7.1. --headed — Xem robot thao tác</h3>',
'<pre>npx playwright test --headed\n# Mở trình duyệt, bạn thấy robot click, gõ từng bước</pre>',

'<h3>7.2. --debug — Debug từng bước</h3>',
'<pre>npx playwright test --debug\n# Mở Playwright Inspector: chạy từng dòng, xem locator, DOM</pre>',
'<div class="b ok"><strong>Inspector</strong> là công cụ debug số 1. Bạn có thể:<br>- Nhấn Step Over để chạy từng dòng<br>- Hover lên locator để thấy phần tử được highlight<br>- Pick Locator để tìm locator tốt nhất cho phần tử</div>',

'<h3>7.3. page.pause() — Dừng giữa test</h3>',
'<pre>test("Debug login", async ({ page }) => {\n  await page.goto("https://the-internet.herokuapp.com/login");\n  await page.fill("#username", "tomsmith");\n\n  await page.pause(); // ← DỪNG Ở ĐÂY! Mở Inspector\n\n  await page.fill("#password", "SuperSecretPassword!");\n  await page.click(\'button[type="submit"]\');\n});</pre>',

'<h3>7.4. Trace Viewer — "Camera an ninh" cho test</h3>',
'<pre># Chạy test với trace\nnpx playwright test --trace on\n\n# Mở trace viewer sau khi chạy\nnpx playwright show-trace trace.zip</pre>',
'<div class="b info"><strong>Trace Viewer</strong> ghi lại MỌI THỨ: screenshot mỗi bước, network requests, console logs, DOM snapshot. Giống camera an ninh — xem lại chuyện gì đã xảy ra.</div>',

'<h3>7.5. Screenshot khi fail</h3>',
'<pre>// Trong playwright.config.js:\nuse: {\n  screenshot: "only-on-failure",  // tự chụp khi fail\n  video: "retain-on-failure",     // quay video khi fail\n  trace: "retain-on-failure",     // ghi trace khi fail\n}</pre>',

'<h3>7.6. Lỗi phổ biến và cách fix</h3>',
'<table>',
'<tr><th>Lỗi</th><th>Nguyên nhân</th><th>Cách fix</th></tr>',
'<tr><td><code>Timeout</code></td><td>Phần tử chưa xuất hiện</td><td>Kiểm tra locator, tăng timeout</td></tr>',
'<tr><td><code>strict mode violation</code></td><td>Locator khớp nhiều phần tử</td><td>Dùng <code>.first()</code> hoặc locator cụ thể hơn</td></tr>',
'<tr><td><code>Element not visible</code></td><td>Phần tử bị ẩn</td><td>Scroll, hover, hoặc chờ visible</td></tr>',
'<tr><td><code>Navigation interrupted</code></td><td>Trang chuyển hướng</td><td>Dùng <code>waitForURL()</code></td></tr>',
'</table>',

'<hr class="sep">',

'<h2>Bài tập cuối Module 7</h2>',
'<div class="ex"><span class="tag tg">🟢 Bài 1</span>',
'<p>Viết test mở <code>https://the-internet.herokuapp.com</code>, kiểm tra title chứa "The Internet".</p>',
'<details><summary>Xem code mẫu (Playwright - cần chạy trên máy)</summary>',
'<pre>test("Trang chu", async ({ page }) => {\n  await page.goto("https://the-internet.herokuapp.com");\n  await expect(page).toHaveTitle(/The Internet/);\n});</pre>',
'</details></div>',

'<div class="ex"><span class="tag ty">🟡 Bài 2</span>',
'<p>Viết test login trên /login với tomsmith / SuperSecretPassword!. Kiểm tra thấy "secure area".</p>',
'<details><summary>Xem code mẫu (Playwright - cần chạy trên máy)</summary>',
'<pre>test("Login OK", async ({ page }) => {\n  await page.goto("https://the-internet.herokuapp.com/login");\n  await page.fill("#username", "tomsmith");\n  await page.fill("#password", "SuperSecretPassword!");\n  await page.click(\'button[type="submit"]\');\n  await expect(page.locator(".flash")).toContainText("secure area");\n});</pre>',
'</details></div>',

'<div class="ex"><span class="tag tr">🔴 Bài 3</span>',
'<p>Viết test login SAI. Thêm <code>page.pause()</code> để debug. Chạy với <code>--debug</code> và sử dụng Inspector.</p>',
'</div>',

'<hr class="sep">',
buildExam('exam_m7', 'Bài kiểm tra Module 7 — Playwright Cơ bản', 8, [
  {q:'Playwright dùng để làm gì?', opts:['Viết backend','Thiết kế UI','Test tự động trình duyệt','Quản lý database'], answer:2, explain:'Playwright tự động hóa trình duyệt: mở trang, click, gõ, kiểm tra kết quả.'},
  {q:'Lệnh nào cài đặt Playwright?', opts:['npm install playwright','npm init playwright@latest','pip install playwright','yarn add playwright'], answer:1, explain:'npm init playwright@latest tạo project mới với config, browsers, và test mẫu.'},
  {q:'<code>await page.goto(url)</code> làm gì?', opts:['Tạo trang mới','Mở URL trên trình duyệt','Đóng trang','Chụp ảnh trang'], answer:1, explain:'page.goto() điều hướng trình duyệt đến URL chỉ định.'},
  {q:'Chạy test với trình duyệt hiện ra để xem, dùng flag nào?', opts:['--visible','--show','--headed','--browser'], answer:2, explain:'npx playwright test --headed mở trình duyệt cho bạn xem robot thao tác.'},
  {q:'Codegen dùng để làm gì?', opts:['Sinh code test từ thao tác tay','Tạo database','Build project','Deploy test'], answer:0, explain:'Codegen ghi lại thao tác của bạn trên trình duyệt → tự sinh code test.'},
  {q:'<code>page.pause()</code> dùng khi nào?', opts:['Tắt trình duyệt','Dừng test để debug','Chờ 5 giây','Chụp screenshot'], answer:1, explain:'page.pause() dừng test tại dòng đó, mở Inspector để debug.'},
  {q:'Trace Viewer ghi lại những gì?', opts:['Chỉ screenshot','Chỉ console log','Mọi thứ: screenshot, DOM, network, console','Chỉ video'], answer:2, explain:'Trace Viewer ghi lại toàn bộ: screenshot mỗi bước, network, console, DOM snapshot.'},
  {q:'Lỗi Timeout thường do nguyên nhân gì?', opts:['Code sai cú pháp','Phần tử chưa xuất hiện trên trang','RAM hết','Internet chậm'], answer:1, explain:'Timeout = Playwright chờ phần tử nhưng không tìm thấy trong thời gian cho phép. Kiểm tra locator.'}
]),
].join('\n')});

// =============================================
// MODULE 8 — LOCATOR & ACTIONS (cũ M7)
// =============================================
D.push({id:8,title:"Locator & Actions",week:"Tuần 5-6",phase:2,html:[
'<h2>1. Locator — "Địa chỉ" phần tử trên trang</h2>',
'<div class="b idea">💡 Muốn robot click nút → phải chỉ cho nó biết nút ở đâu. <strong>Locator = "địa chỉ"</strong> của phần tử trên trang web.</div>',

'<h3>🥇 getByRole — tốt nhất, dùng đầu tiên</h3>',
'<div class="term"><strong>Role</strong> = vai trò của phần tử: button (nút), link (đường link), heading (tiêu đề), checkbox (ô tích)...</div>',
'<pre>page.getByRole("button", { name: "Dang nhap" });\npage.getByRole("link", { name: "Trang chu" });\npage.getByRole("heading", { name: "Chao mung" });\npage.getByRole("checkbox", { name: "Dong y" });</pre>',

'<h3>🥈 getByLabel — dùng cho input có label</h3>',
'<pre>// Khi HTML có: &lt;label&gt;Email&lt;/label&gt;&lt;input ...&gt;\npage.getByLabel("Email");\npage.getByLabel("Mat khau");</pre>',

'<h3>🥉 getByPlaceholder — dùng cho input có placeholder</h3>',
'<pre>// Khi HTML có: &lt;input placeholder="Nhap email..."&gt;\npage.getByPlaceholder("Nhap email...");</pre>',

'<h3>getByText — theo nội dung chữ</h3>',
'<pre>page.getByText("Xin chao");\npage.getByText("Dang ky ngay", { exact: true }); // khớp chính xác</pre>',

'<h3>getByTestId — khi dev thêm data-testid</h3>',
'<pre>// HTML: &lt;button data-testid="submit-btn"&gt;Gui&lt;/button&gt;\npage.getByTestId("submit-btn");</pre>',

'<h3>CSS Selector — khi không có cách nào khác</h3>',
'<pre>page.locator("#username");            // theo id\npage.locator(".btn-primary");          // theo class\npage.locator(\'input[name="email"]\');  // theo thuộc tính</pre>',

'<div class="b ok"><strong>Thứ tự ưu tiên khi chọn locator:</strong><br>getByRole → getByLabel → getByPlaceholder → getByText → getByTestId → CSS → XPath (cuối cùng)</div>',

'<h3>Locator Chaining — Kết hợp locator</h3>',
'<div class="b idea">💡 Khi trang có nhiều phần tử giống nhau (VD: 2 nút "Delete"), dùng chaining để thu hẹp phạm vi tìm kiếm.</div>',
'<pre>// Tìm nút "Delete" BÊN TRONG dòng có text "Sản phẩm A"\npage.locator("tr", { hasText: "San pham A" })\n    .getByRole("button", { name: "Delete" });\n\n// Tìm phần tử thứ 2 trong danh sách\npage.locator(".product-card").nth(1); // index từ 0\n\n// Tìm phần tử đầu tiên / cuối cùng\npage.locator(".item").first();\npage.locator(".item").last();\n\n// Filter theo text\npage.locator(".card").filter({ hasText: "Premium" });\n\n// Filter theo locator con\npage.locator(".card").filter({ has: page.locator(".badge-sale") });</pre>',

'<div class="b warn"><strong>Mẹo quan trọng:</strong> Nếu locator khớp nhiều phần tử → Playwright báo <code>strict mode violation</code>. Dùng <code>.first()</code>, <code>.nth()</code>, hoặc chaining để chỉ định chính xác.</div>',

'<hr class="sep">',

'<h2>2. Tương tác (Actions)</h2>',
'<div class="b idea">💡 Sau khi tìm được phần tử (locator), bạn cần "ra lệnh" cho robot: click, gõ, chọn, hover...</div>',

'<h3>2.1. Click & Gõ text</h3>',
'<pre>// CLICK vào phần tử\nawait page.getByRole("button", { name: "Gui" }).click();\n\n// DOUBLE CLICK\nawait page.locator("#item").dblclick();\n\n// RIGHT CLICK (context menu)\nawait page.locator("#item").click({ button: "right" });</pre>',

'<h3>2.2. Nhập liệu</h3>',
'<pre>// GÕ TEXT vào ô input (xóa nội dung cũ trước)\nawait page.getByLabel("Email").fill("test@gmail.com");\n\n// GÕ TỪNG KÝ TỰ (như đang gõ bàn phím)\nawait page.getByLabel("Search").type("playwright", { delay: 100 });\n\n// XÓA nội dung ô input\nawait page.getByLabel("Email").clear();</pre>',

'<div class="b info"><strong>fill() vs type():</strong><br><code>fill()</code> = paste ngay, nhanh. Dùng khi chỉ cần điền giá trị.<br><code>type()</code> = gõ từng chữ, chậm hơn. Dùng khi cần trigger sự kiện keydown (VD: autocomplete, search).</div>',

'<h3>2.3. Checkbox, Radio, Dropdown</h3>',
'<pre>// TICK checkbox\nawait page.getByRole("checkbox", { name: "Dong y" }).check();\nawait page.getByRole("checkbox", { name: "Dong y" }).uncheck();\n\n// CHỌN dropdown\nawait page.selectOption("select#country", "vn");\nawait page.selectOption("select#size", { label: "Large" });\n\n// CHỌN nhiều option\nawait page.selectOption("select#colors", ["red", "blue"]);</pre>',

'<h3>2.4. Hover, Drag, Upload</h3>',
'<pre>// HOVER (di chuột lên)\nawait page.getByText("Menu").hover();\n\n// DRAG AND DROP\nawait page.locator("#source").dragTo(page.locator("#target"));\n\n// UPLOAD FILE\nawait page.locator(\'input[type="file"]\').setInputFiles("path/to/file.pdf");\n\n// UPLOAD nhiều file\nawait page.locator(\'input[type="file"]\').setInputFiles(["file1.pdf", "file2.pdf"]);</pre>',

'<h3>2.5. Keyboard & Scroll</h3>',
'<pre>// NHẤN PHÍM\nawait page.keyboard.press("Enter");\nawait page.keyboard.press("Control+a"); // Select All\nawait page.keyboard.press("Control+c"); // Copy\n\n// GÕ TEXT bằng keyboard\nawait page.keyboard.type("Hello World");\n\n// SCROLL\nawait page.mouse.wheel(0, 500); // scroll xuống 500px\nawait page.locator("#footer").scrollIntoViewIfNeeded();</pre>',

'<hr class="sep">',

'<h2>3. Auto-wait — Tự động chờ</h2>',
'<div class="b ok"><strong>Tin vui:</strong> Playwright TỰ ĐỘNG CHỜ phần tử sẵn sàng trước khi tương tác. Không cần viết <code>sleep(3000)</code> như Selenium! Playwright đủ thông minh để biết khi nào nút đã load xong.</div>',

'<p>Khi cần chờ thủ công:</p>',
'<pre>await page.waitForURL("**/dashboard"); // chờ URL chuyển trang\nawait page.waitForSelector(".loading", { state: "hidden" }); // chờ loading biến mất</pre>',

'<h2>5. Xử lý Dialog (Alert/Confirm)</h2>',
'<pre>// Đăng ký listener TRƯỚC khi dialog xuất hiện\npage.on("dialog", async function(dialog) {\n  console.log("Noi dung:", dialog.message());\n  await dialog.accept();   // nhấn OK\n  // await dialog.dismiss(); // nhấn Cancel\n});\n\nawait page.getByText("Show Alert").click();</pre>',

'<h2>6. iframe &amp; Tab mới</h2>',
'<pre>// Tương tác trong iframe\nconst frame = page.frameLocator("#my-iframe");\nawait frame.getByRole("button", { name: "Click me" }).click();\n\n// Chờ tab mới mở\nconst [newPage] = await Promise.all([\n  page.context().waitForEvent("page"),\n  page.getByText("Open new tab").click()\n]);\nconsole.log(await newPage.title());</pre>',

'<hr class="sep">',

'<h2>Bài tập cuối Module 7</h2>',
'<div class="ex"><span class="tag tg">🟢 Bài 1</span>',
'<p>Test dropdown trên the-internet.herokuapp.com/dropdown: chọn "Option 1", kiểm tra đã chọn.</p>',
'<details><summary>Xem code mẫu (Playwright - cần chạy trên máy)</summary>',
'<pre>test("Dropdown", async ({ page }) => {\n  await page.goto("https://the-internet.herokuapp.com/dropdown");\n  await page.selectOption("#dropdown", "1");\n  await expect(page.locator("#dropdown")).toHaveValue("1");\n});</pre>',
'</details></div>',

'<div class="ex"><span class="tag ty">🟡 Bài 2</span>',
'<p>Test checkbox: mở /checkboxes, tick checkbox đầu tiên, kiểm tra đã tick.</p>',
'<details><summary>Xem code mẫu (Playwright - cần chạy trên máy)</summary>',
'<pre>test("Checkbox", async ({ page }) => {\n  await page.goto("https://the-internet.herokuapp.com/checkboxes");\n  const cb = page.locator(\'input[type="checkbox"]\').first();\n  await cb.check();\n  await expect(cb).toBeChecked();\n});</pre>',
'</details></div>',

'<div class="ex"><span class="tag tr">🔴 Bài 3</span>',
'<p>Test JavaScript Alert: mở /javascript_alerts, click nút, nhấn OK, kiểm tra kết quả.</p>',
'<details><summary>Xem code mẫu (Playwright - cần chạy trên máy)</summary>',
'<pre>test("JS Alert", async ({ page }) => {\n  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");\n  page.on("dialog", d => d.accept());\n  await page.getByText("Click for JS Alert").click();\n  await expect(page.locator("#result"))\n    .toHaveText("You successfully clicked an alert");\n});</pre>',
'</details></div>',

'<hr class="sep">',
buildExam('exam_m8', 'Bài kiểm tra Module 8 — Locator & Actions', 8, [
  {q:'Locator nào được ưu tiên nhất trong Playwright?', opts:['CSS Selector','XPath','getByRole','getByTestId'], answer:2, explain:'getByRole tốt nhất vì nó giống cách user nhìn trang (nút, link, heading...).'},
  {q:'<code>page.getByLabel("Email")</code> tìm phần tử nào?', opts:['Thẻ label','Input có label "Email"','Div chứa text Email','Button tên Email'], answer:1, explain:'getByLabel tìm input/textarea được liên kết với thẻ <label> có text "Email".'},
  {q:'<code>page.fill("#username", "admin")</code> làm gì?', opts:['Tạo thẻ mới','Xóa nội dung','Gõ "admin" vào ô input','Click vào input'], answer:2, explain:'fill() xóa nội dung cũ và gõ text mới vào input.'},
  {q:'Playwright có tự động chờ phần tử không?', opts:['Không, phải dùng sleep','Có, auto-wait','Chỉ khi dùng waitFor','Tùy config'], answer:1, explain:'Playwright tự động chờ phần tử visible, enabled trước khi tương tác. Không cần sleep!'},
  {q:'Xử lý JavaScript Alert, cần làm gì TRƯỚC?', opts:['Click nút alert','Đăng ký page.on("dialog") listener','Gọi page.waitForAlert()','Không cần làm gì'], answer:1, explain:'Phải đăng ký listener TRƯỚC khi dialog xuất hiện, nếu không sẽ bị miss.'},
  {q:'<code>page.locator(".btn").first()</code> dùng khi nào?', opts:['Luôn luôn','Khi có nhiều phần tử khớp locator','Khi phần tử chưa load','Khi test fail'], answer:1, explain:'Khi locator khớp nhiều phần tử → strict mode violation. Dùng .first() để lấy phần tử đầu tiên.'},
  {q:'<code>page.keyboard.press("Control+a")</code> làm gì?', opts:['Mở trang mới','Chọn tất cả text (Select All)','Đóng tab','Undo'], answer:1, explain:'Control+a = Select All, giống phím tắt trên bàn phím.'}
]),
].join('\n')});

// =============================================
// MODULE 9 — ASSERTIONS & TỔ CHỨC TEST (cũ M8)
// =============================================
D.push({id:9,title:"Assertions & Tổ chức Test",week:"Tuần 6-7",phase:2,html:[
'<h2>1. Assertions — "Giám khảo chấm thi"</h2>',
'<div class="b idea">💡 Robot (Playwright) thao tác xong → Assertion kiểm tra: "Kết quả có đúng như mong đợi không?" Giống giám khảo chấm thi sau khi thí sinh làm bài.</div>',

'<h3>Assertions phổ biến</h3>',
'<pre>// Kiểm tra TRANG\nawait expect(page).toHaveTitle(/Dashboard/);  // title khớp\nawait expect(page).toHaveURL("https://example.com"); // URL đúng\n\n// Kiểm tra PHẦN TỬ\nawait expect(page.locator(".msg")).toBeVisible();     // hiển thị\nawait expect(page.locator(".msg")).toBeHidden();      // ẩn\nawait expect(page.locator(".msg")).toHaveText("Xong!"); // text đúng\nawait expect(page.locator(".msg")).toContainText("ong"); // chứa text\nawait expect(page.locator("input")).toHaveValue("hello"); // giá trị\nawait expect(page.locator("li")).toHaveCount(5);       // đếm\nawait expect(page.locator(".btn")).toBeEnabled();       // bấm được\nawait expect(page.locator(".btn")).toBeDisabled();      // bị vô hiệu\nawait expect(page.locator("input")).toBeChecked();      // đã tick</pre>',

'<h3>Soft Assertions — không dừng test khi fail</h3>',
'<pre>await expect.soft(page.locator(".a")).toHaveText("X");\nawait expect.soft(page.locator(".b")).toHaveText("Y");\n// Test vẫn chạy tiếp dù assertion trên fail\n// Báo cáo cuối cùng sẽ liệt kê TẤT CẢ lỗi</pre>',

'<hr class="sep">',

'<h2>2. test.describe — Nhóm test</h2>',
'<pre>test.describe("Trang Login", function() {\n\n  test.describe("Truong hop dung", function() {\n    test("login thanh cong", async ({ page }) => { });\n    test("chuyen sang dashboard", async ({ page }) => { });\n  });\n\n  test.describe("Truong hop sai", function() {\n    test("sai password", async ({ page }) => { });\n    test("username trong", async ({ page }) => { });\n  });\n\n});</pre>',

'<h2>3. Hooks — beforeEach / afterEach</h2>',
'<div class="b idea">💡 <code>beforeEach</code> = "việc phải làm TRƯỚC mỗi test" (mở trang, login sẵn...).<br><code>afterEach</code> = "việc phải làm SAU mỗi test" (chụp ảnh, dọn dẹp...).</div>',

'<pre>test.describe("Login", function() {\n\n  test.beforeEach(async ({ page }) => {\n    await page.goto("https://the-internet.herokuapp.com/login");\n  });\n\n  test.afterEach(async ({ page }, testInfo) => {\n    if (testInfo.status === "failed") {\n      await page.screenshot({ path: "fail-" + testInfo.title + ".png" });\n    }\n  });\n\n  test("login dung", async ({ page }) => {\n    await page.fill("#username", "tomsmith");\n    await page.fill("#password", "SuperSecretPassword!");\n    await page.click(\'button[type="submit"]\');\n    await expect(page.locator(".flash.success")).toBeVisible();\n  });\n\n  test("login sai", async ({ page }) => {\n    await page.fill("#username", "sai");\n    await page.fill("#password", "sai");\n    await page.click(\'button[type="submit"]\');\n    await expect(page.locator(".flash.error")).toBeVisible();\n  });\n});</pre>',

'<h2>4. Parameterized Tests — Test nhiều bộ dữ liệu</h2>',
'<pre>const cases = [\n  { user: "tomsmith", pass: "SuperSecretPassword!", ok: true },\n  { user: "wrong", pass: "wrong", ok: false },\n  { user: "", pass: "", ok: false },\n  { user: "tomsmith", pass: "", ok: false },\n  { user: "", pass: "SuperSecretPassword!", ok: false },\n];\n\nfor (const c of cases) {\n  test("Login: " + (c.user || "(trong)") + " -> " + (c.ok ? "OK" : "Fail"),\n    async ({ page }) => {\n      await page.goto("https://the-internet.herokuapp.com/login");\n      await page.fill("#username", c.user);\n      await page.fill("#password", c.pass);\n      await page.click(\'button[type="submit"]\');\n      if (c.ok) {\n        await expect(page.locator(".flash.success")).toBeVisible();\n      } else {\n        await expect(page.locator(".flash.error")).toBeVisible();\n      }\n    });\n}</pre>',

'<h2>5. Tags &amp; Skip</h2>',
'<pre>test("test quan trong @smoke", async ({ page }) => { });\ntest("test chi tiet @regression", async ({ page }) => { });\ntest.skip("test chua viet xong", async ({ page }) => { });\ntest.fixme("test co bug", async ({ page }) => { });</pre>',
'<pre># Chạy theo tag\nnpx playwright test --grep @smoke</pre>',

'<hr class="sep">',
'<h2>6. Ví dụ thực tế: Test flow e-commerce</h2>',
'<pre>const { test, expect } = require("@playwright/test");\n\ntest.describe("Saucedemo - Mua hàng", function() {\n\n  test.beforeEach(async ({ page }) => {\n    await page.goto("https://www.saucedemo.com");\n    await page.fill("#user-name", "standard_user");\n    await page.fill("#password", "secret_sauce");\n    await page.click("#login-button");\n  });\n\n  test("Hiển thị danh sách sản phẩm", async ({ page }) => {\n    // Kiểm tra có ít nhất 1 sản phẩm\n    await expect(page.locator(".inventory_item")).toHaveCount(6);\n\n    // Kiểm tra tên sản phẩm đầu tiên\n    await expect(page.locator(".inventory_item").first())\n      .toContainText("Sauce Labs");\n  });\n\n  test("Thêm vào giỏ hàng", async ({ page }) => {\n    // Click nút Add to cart\n    await page.locator(".inventory_item").first()\n      .getByRole("button", { name: "Add to cart" }).click();\n\n    // Kiểm tra badge giỏ hàng hiện "1"\n    await expect(page.locator(".shopping_cart_badge")).toHaveText("1");\n\n    // Kiểm tra nút đổi thành "Remove"\n    await expect(page.locator(".inventory_item").first()\n      .getByRole("button", { name: "Remove" })).toBeVisible();\n  });\n\n  test("Checkout thành công", async ({ page }) => {\n    // Thêm sản phẩm\n    await page.locator("[data-test=\\"add-to-cart-sauce-labs-backpack\\"]").click();\n\n    // Vào giỏ hàng\n    await page.locator(".shopping_cart_link").click();\n    await expect(page).toHaveURL(/cart/);\n\n    // Checkout\n    await page.click("[data-test=\\"checkout\\"]");\n    await page.fill("[data-test=\\"firstName\\"]", "Test");\n    await page.fill("[data-test=\\"lastName\\"]", "User");\n    await page.fill("[data-test=\\"postalCode\\"]", "70000");\n    await page.click("[data-test=\\"continue\\"]");\n    await page.click("[data-test=\\"finish\\"]");\n\n    // Kiểm tra thành công\n    await expect(page.locator(".complete-header"))\n      .toHaveText("Thank you for your order!");\n  });\n});</pre>',

'<div class="b ok"><strong>Best practices tổ chức test:</strong><br>1. Mỗi file test = 1 feature/trang<br>2. <code>describe</code> nhóm test liên quan<br>3. <code>beforeEach</code> setup chung (login, mở trang)<br>4. Tên test mô tả rõ hành vi mong đợi<br>5. Mỗi test kiểm tra 1 điều cụ thể</div>',

'<hr class="sep">',

'<h2>Bài tập cuối Module 9</h2>',
'<div class="ex"><span class="tag ty">🟡 Bài 1</span>',
'<p>Viết test suite: beforeEach mở trang login, afterEach screenshot khi fail. Test 5 bộ credentials bằng parameterized test.</p></div>',
'<div class="ex"><span class="tag tr">🔴 Bài 2</span>',
'<p>Viết helper kiểm tra toast notification: xuất hiện → chứa text → biến mất sau vài giây.</p></div>',

'<hr class="sep">',
buildExam('exam_m9', 'Bài kiểm tra Module 9 — Assertions & Tổ chức Test', 8, [
  {q:'<code>await expect(page).toHaveTitle(/Dashboard/)</code> kiểm tra gì?', opts:['URL chứa Dashboard','Title trang chứa "Dashboard"','Có text Dashboard trên trang','Page đã load'], answer:1, explain:'toHaveTitle kiểm tra thẻ <title> của trang, hỗ trợ regex.'},
  {q:'Soft assertion khác assertion thường ở điểm nào?', opts:['Nhanh hơn','Không dừng test khi fail','Không cần await','Chạy sau test'], answer:1, explain:'expect.soft() ghi nhận fail nhưng test vẫn chạy tiếp. Báo cáo cuối liệt kê tất cả lỗi.'},
  {q:'<code>test.beforeEach</code> chạy khi nào?', opts:['1 lần đầu tiên','Trước MỖI test trong describe','Sau mỗi test','Khi test fail'], answer:1, explain:'beforeEach chạy TRƯỚC mỗi test — dùng để setup (mở trang, login...).'},
  {q:'Parameterized test dùng để làm gì?', opts:['Chạy test nhanh hơn','Test 1 flow với nhiều bộ dữ liệu khác nhau','Tạo report','Skip test'], answer:1, explain:'Lặp test với mỗi bộ data (credentials, input...) — viết code 1 lần, test nhiều case.'},
  {q:'<code>test.skip("reason")</code> làm gì?', opts:['Xóa test','Bỏ qua test, đánh dấu skipped','Chạy test 2 lần','Fail test'], answer:1, explain:'test.skip bỏ qua test, hiện "skipped" trong report. Dùng khi test chưa viết xong hoặc tạm tắt.'},
  {q:'<code>await expect(locator).toHaveCount(5)</code> kiểm tra gì?', opts:['Text có 5 ký tự','Có 5 phần tử khớp locator','Trang load 5 giây','5 test pass'], answer:1, explain:'toHaveCount đếm số phần tử khớp locator. VD: kiểm tra có 5 items trong danh sách.'}
]),
].join('\n')});

// =============================================
// MODULE 10 — PAGE OBJECT MODEL (cũ M9)
// =============================================
D.push({id:10,title:"Page Object Model (POM)",week:"Tuần 8",phase:3,html:[
'<h2>1. Vấn đề khi KHÔNG dùng POM</h2>',
'<div class="b idea">💡 Bạn có 50 file test, mỗi file viết <code>page.fill("#username",...)</code>. Một ngày dev đổi id thành <code>#user-name</code>. Bạn phải sửa 50 file! 😱<br><br><strong>POM giải quyết:</strong> gom tất cả locator vào 1 file. Đổi UI → sửa 1 file duy nhất.</div>',

'<table>',
'<tr><th>Không POM</th><th>Có POM</th></tr>',
'<tr><td>Locator rải rác 50 file</td><td>Locator tập trung 1 file</td></tr>',
'<tr><td>Đổi UI → sửa 50 file</td><td>Đổi UI → sửa 1 file</td></tr>',
'<tr><td>Code lặp lại nhiều</td><td>Gọi hàm gọn gàng</td></tr>',
'</table>',

'<h2>2. Cấu trúc POM</h2>',
'<pre>my-automation/\n├── pages/               ← MỖI TRANG = 1 FILE\n│   ├── BasePage.js\n│   ├── LoginPage.js\n│   └── DashboardPage.js\n├── tests/               ← Test gọi hàm từ pages/\n│   └── login.spec.js\n└── playwright.config.js</pre>',

'<h2>3. Viết POM</h2>',

'<h3>BasePage.js — class cha (dùng chung)</h3>',
'<pre>class BasePage {\n  constructor(page) {\n    this.page = page;\n  }\n\n  async goto(url) {\n    await this.page.goto(url);\n  }\n\n  async screenshot(name) {\n    await this.page.screenshot({ path: "screenshots/" + name + ".png" });\n  }\n}\nmodule.exports = BasePage;</pre>',

'<h3>LoginPage.js</h3>',
'<pre>const BasePage = require("./BasePage");\n\nclass LoginPage extends BasePage {\n  constructor(page) {\n    super(page); // gọi constructor cha\n\n    // TẤT CẢ locator ở đây\n    this.usernameInput = page.locator("#username");\n    this.passwordInput = page.locator("#password");\n    this.submitBtn = page.locator(\'button[type="submit"]\');\n    this.flashMsg = page.locator("#flash");\n  }\n\n  async goto() {\n    await super.goto("https://the-internet.herokuapp.com/login");\n  }\n\n  async login(username, password) {\n    await this.usernameInput.fill(username);\n    await this.passwordInput.fill(password);\n    await this.submitBtn.click();\n  }\n}\nmodule.exports = LoginPage;</pre>',

'<h3>Test dùng POM — gọn gàng!</h3>',
'<pre>const { test, expect } = require("@playwright/test");\nconst LoginPage = require("../pages/LoginPage");\n\ntest.describe("Login (POM)", function() {\n  let loginPage;\n\n  test.beforeEach(async ({ page }) => {\n    loginPage = new LoginPage(page);\n    await loginPage.goto();\n  });\n\n  test("Login thanh cong", async () => {\n    await loginPage.login("tomsmith", "SuperSecretPassword!");\n    await expect(loginPage.flashMsg).toContainText("secure area");\n  });\n\n  test("Login sai password", async () => {\n    await loginPage.login("tomsmith", "sai");\n    await expect(loginPage.flashMsg).toContainText("invalid");\n  });\n});</pre>',

'<div class="b ok">So sánh: test ngắn gọn, dễ đọc, không có locator nào lộ ra. UI đổi → chỉ sửa LoginPage.js!</div>',

'<h2>4. Thêm InventoryPage — ví dụ trang phức tạp hơn</h2>',
'<pre>const BasePage = require("./BasePage");\n\nclass InventoryPage extends BasePage {\n  constructor(page) {\n    super(page);\n    this.productList = page.locator(".inventory_item");\n    this.sortDropdown = page.locator("[data-test=\\"product_sort_container\\"]");\n    this.cartBadge = page.locator(".shopping_cart_badge");\n    this.cartLink = page.locator(".shopping_cart_link");\n  }\n\n  async getProductCount() {\n    return await this.productList.count();\n  }\n\n  async addToCart(productName) {\n    await this.productList\n      .filter({ hasText: productName })\n      .getByRole("button", { name: "Add to cart" })\n      .click();\n  }\n\n  async removeFromCart(productName) {\n    await this.productList\n      .filter({ hasText: productName })\n      .getByRole("button", { name: "Remove" })\n      .click();\n  }\n\n  async sortBy(option) {\n    await this.sortDropdown.selectOption(option);\n  }\n\n  async getProductNames() {\n    return await this.productList\n      .locator(".inventory_item_name").allTextContents();\n  }\n\n  async getProductPrices() {\n    const texts = await this.productList\n      .locator(".inventory_item_price").allTextContents();\n    return texts.map(t => parseFloat(t.replace("$", "")));\n  }\n}\nmodule.exports = InventoryPage;</pre>',

'<h3>Test dùng InventoryPage</h3>',
'<pre>test("Sort by price low to high", async ({ page }) => {\n  const inventory = new InventoryPage(page);\n  await inventory.sortBy("lohi");\n\n  const prices = await inventory.getProductPrices();\n  // Kiểm tra giá tăng dần\n  for (let i = 1; i < prices.length; i++) {\n    expect(prices[i]).toBeGreaterThanOrEqual(prices[i-1]);\n  }\n});</pre>',

'<h2>5. Best Practices POM</h2>',
'<div class="b ok"><strong>Quy tắc viết POM tốt:</strong><br>1. <strong>1 Page = 1 File</strong> — không gộp nhiều trang<br>2. <strong>Locator ở constructor</strong> — dễ tìm, dễ sửa<br>3. <strong>Method = hành động có nghĩa</strong> — <code>login()</code> thay vì <code>fillAndClick()</code><br>4. <strong>Method return Page Object</strong> — <code>login() → InventoryPage</code> cho method chaining<br>5. <strong>Không có assertion trong Page</strong> — assertion chỉ ở test file<br>6. <strong>BasePage cho code chung</strong> — goto, screenshot, waitForLoad</div>',

'<pre>// Method chaining — trả về page object tiếp theo\nclass LoginPage extends BasePage {\n  async login(user, pass) {\n    await this.usernameInput.fill(user);\n    await this.passwordInput.fill(pass);\n    await this.submitBtn.click();\n    return new InventoryPage(this.page); // ← trả về trang tiếp theo\n  }\n}\n\n// Trong test — chain gọn gàng:\nconst inventory = await loginPage.login("standard_user", "secret_sauce");\nawait inventory.addToCart("Backpack");</pre>',

'<hr class="sep">',
'<h2>Bài tập cuối Module 10</h2>',
'<div class="ex"><span class="tag ty">🟡 Bài 1</span><p>Refactor tất cả test login từ Module 6-8 sang POM.</p></div>',
'<div class="ex"><span class="tag tr">🔴 Bài 2</span><p>Tạo POM cho saucedemo.com: LoginPage, InventoryPage, CartPage, CheckoutPage.</p></div>',

'<hr class="sep">',
buildExam('exam_m10', 'Bài kiểm tra Module 10 — Page Object Model', 6, [
  {q:'POM giải quyết vấn đề gì?', opts:['Test chạy nhanh hơn','Gom locator vào 1 file, dễ bảo trì','Tự viết test','Không cần browser'], answer:1, explain:'UI đổi → chỉ sửa 1 file Page Object thay vì 50 file test.'},
  {q:'<code>super(page)</code> trong constructor của LoginPage dùng để?', opts:['Tạo page mới','Gọi constructor BasePage, truyền page','Skip test','Mở trình duyệt'], answer:1, explain:'super() gọi constructor class cha (BasePage) để lưu this.page.'},
  {q:'Trong POM, locator nên đặt ở đâu?', opts:['Trong file test','Trong constructor của Page class','Trong config','Trong helper'], answer:1, explain:'Gom tất cả locator vào constructor → đổi UI chỉ sửa 1 chỗ.'},
  {q:'Method <code>login(user, pass)</code> trong LoginPage thuộc loại gì?', opts:['Locator','Action method','Assertion','Config'], answer:1, explain:'Action method = nhóm nhiều thao tác thành 1 hàm có nghĩa (fill + fill + click = login).'},
  {q:'Khi nào KHÔNG nên dùng POM?', opts:['Khi có 50 file test','Khi project nhỏ, chỉ 1-2 test','Khi test phức tạp','Luôn nên dùng POM'], answer:1, explain:'POM thêm complexity. Nếu chỉ 1-2 test đơn giản → viết thẳng cho nhanh.'}
]),
].join('\n')});

// =============================================
// MODULE 11 — API TESTING & DATA-DRIVEN (cũ M10)
// =============================================
D.push({id:11,title:"API Testing & Data-driven",week:"Tuần 9",phase:3,html:[
'<h2>1. API Testing là gì?</h2>',
'<div class="b idea">💡 <strong>UI Test</strong> = đi nhà hàng, gọi món, chờ bưng ra, kiểm tra. Chậm nhưng sát thực tế.<br><strong>API Test</strong> = vào thẳng bếp, kiểm tra nguyên liệu và quy trình. <strong>Nhanh hơn rất nhiều.</strong></div>',

'<p>Trong Playwright, API test dùng <code>request</code> thay vì <code>page</code> — không cần mở trình duyệt.</p>',

'<h2>2. GET — Lấy dữ liệu</h2>',
'<pre>const { test, expect } = require("@playwright/test");\n\ntest("GET danh sach users", async ({ request }) => {\n  const res = await request.get("https://reqres.in/api/users?page=1");\n\n  // Kiểm tra status code\n  expect(res.status()).toBe(200); // 200 = OK\n\n  // Kiểm tra body\n  const body = await res.json();\n  expect(body.data.length).toBeGreaterThan(0);\n  expect(body.data[0]).toHaveProperty("email");\n});</pre>',

'<div class="term"><strong>Status code phổ biến:</strong><br>200 = OK | 201 = Created | 204 = No Content (deleted) | 400 = Bad Request | 401 = Unauthorized | 404 = Not Found | 500 = Server Error</div>',

'<h2>3. POST — Tạo dữ liệu mới</h2>',
'<pre>test("POST tao user", async ({ request }) => {\n  const res = await request.post("https://reqres.in/api/users", {\n    data: { name: "Minh", job: "Tester" }\n  });\n\n  expect(res.status()).toBe(201);\n  const body = await res.json();\n  expect(body.name).toBe("Minh");\n  expect(body).toHaveProperty("id");\n});</pre>',

'<h2>4. PUT &amp; DELETE</h2>',
'<pre>test("PUT update", async ({ request }) => {\n  const res = await request.put("https://reqres.in/api/users/2", {\n    data: { name: "Updated", job: "Lead" }\n  });\n  expect(res.status()).toBe(200);\n});\n\ntest("DELETE user", async ({ request }) => {\n  const res = await request.delete("https://reqres.in/api/users/2");\n  expect(res.status()).toBe(204);\n});</pre>',

'<h2>5. CRUD Flow — Test toàn bộ vòng đời</h2>',
'<pre>test("CRUD flow", async ({ request }) => {\n  // CREATE\n  const createRes = await request.post("https://reqres.in/api/users", {\n    data: { name: "Test", job: "QA" }\n  });\n  expect(createRes.status()).toBe(201);\n  const user = await createRes.json();\n\n  // READ\n  const getRes = await request.get("https://reqres.in/api/users/" + user.id);\n\n  // UPDATE\n  const putRes = await request.put("https://reqres.in/api/users/" + user.id, {\n    data: { name: "Updated" }\n  });\n  expect(putRes.status()).toBe(200);\n\n  // DELETE\n  const delRes = await request.delete("https://reqres.in/api/users/" + user.id);\n  expect(delRes.status()).toBe(204);\n});</pre>',

'<hr class="sep">',

'<h2>6. Mock API — "Giả lập" response</h2>',
'<div class="b idea">💡 Mock giống <strong>diễn viên đóng thế</strong>: thay vì gọi API thật (chậm, không kiểm soát được), bạn "giả" response để test UI khi API lỗi, trả dữ liệu trống, hay chậm.</div>',

'<pre>test("Mock API loi 500", async ({ page }) => {\n  // Chặn mọi request đến /api/users\n  await page.route("**/api/users", function(route) {\n    route.fulfill({\n      status: 500,\n      contentType: "application/json",\n      body: JSON.stringify({ error: "Server Error" })\n    });\n  });\n\n  await page.goto("https://example.com/users");\n  // Kiểm tra UI hiển thị thông báo lỗi\n});\n\ntest("Mock API du lieu rong", async ({ page }) => {\n  await page.route("**/api/users", function(route) {\n    route.fulfill({\n      status: 200,\n      contentType: "application/json",\n      body: JSON.stringify({ data: [] }) // mảng rỗng\n    });\n  });\n  // Kiểm tra UI hiển thị "Không có dữ liệu"\n});</pre>',

'<h2>7. Intercept &amp; Modify — Chặn và sửa response</h2>',
'<pre>test("Sua gia san pham", async ({ page }) => {\n  await page.route("**/api/products", async function(route) {\n    const response = await route.fetch(); // gọi API thật\n    const body = await response.json();\n    body.products[0].price = 0;           // sửa giá = 0\n    await route.fulfill({\n      response: response,\n      body: JSON.stringify(body)\n    });\n  });\n  await page.goto("https://example.com/products");\n  // Kiểm tra UI hiện giá = 0\n});</pre>',

'<hr class="sep">',

'<h2>8. Authentication — Test API cần đăng nhập</h2>',
'<div class="b idea">💡 Nhiều API cần token/cookie để truy cập. Playwright hỗ trợ gửi headers trong mỗi request.</div>',

'<pre>test("GET with auth token", async ({ request }) => {\n  // Bước 1: Login để lấy token\n  const loginRes = await request.post("https://api.example.com/login", {\n    data: { email: "admin@test.com", password: "123456" }\n  });\n  const { token } = await loginRes.json();\n\n  // Bước 2: Gọi API với token\n  const res = await request.get("https://api.example.com/profile", {\n    headers: { Authorization: "Bearer " + token }\n  });\n  expect(res.status()).toBe(200);\n  const body = await res.json();\n  expect(body.email).toBe("admin@test.com");\n});</pre>',

'<pre>// Hoặc cấu hình baseURL + headers trong config:\n// playwright.config.js\nuse: {\n  baseURL: "https://api.example.com",\n  extraHTTPHeaders: {\n    Authorization: "Bearer YOUR_TOKEN",\n    "Content-Type": "application/json"\n  }\n}</pre>',

'<h2>9. Response Validation — Kiểm tra response chi tiết</h2>',
'<pre>test("Validate response schema", async ({ request }) => {\n  const res = await request.get("https://reqres.in/api/users/1");\n  const body = await res.json();\n\n  // Kiểm tra cấu trúc response\n  expect(body).toHaveProperty("data");\n  expect(body.data).toHaveProperty("id");\n  expect(body.data).toHaveProperty("email");\n  expect(body.data).toHaveProperty("first_name");\n\n  // Kiểm tra kiểu dữ liệu\n  expect(typeof body.data.id).toBe("number");\n  expect(typeof body.data.email).toBe("string");\n  expect(body.data.email).toMatch(/@/);\n\n  // Kiểm tra headers\n  expect(res.headers()["content-type"]).toContain("application/json");\n});</pre>',

'<hr class="sep">',

'<h2>10. Data-driven Testing — Test từ file dữ liệu</h2>',
'<div class="b idea">💡 Thay vì hardcode test data trong code, đọc từ file JSON/CSV. Thêm test case mới = thêm 1 dòng data, không sửa code!</div>',

'<h3>8.1. Test data từ JSON file</h3>',
'<pre>// test-data/login-data.json\n[\n  { "user": "tomsmith", "pass": "SuperSecretPassword!", "expected": "success" },\n  { "user": "wrong", "pass": "wrong", "expected": "error" },\n  { "user": "", "pass": "", "expected": "error" },\n  { "user": "tomsmith", "pass": "", "expected": "error" },\n  { "user": "", "pass": "SuperSecretPassword!", "expected": "error" }\n]</pre>',

'<pre>// tests/login-data-driven.spec.js\nconst { test, expect } = require("@playwright/test");\nconst loginData = require("../test-data/login-data.json");\n\nfor (const data of loginData) {\n  test(`Login: ${data.user || "(empty)"} → ${data.expected}`,\n    async ({ page }) => {\n      await page.goto("https://the-internet.herokuapp.com/login");\n      await page.fill("#username", data.user);\n      await page.fill("#password", data.pass);\n      await page.click(\'button[type="submit"]\');\n\n      if (data.expected === "success") {\n        await expect(page.locator(".flash.success")).toBeVisible();\n      } else {\n        await expect(page.locator(".flash.error")).toBeVisible();\n      }\n    });\n}</pre>',

'<div class="b ok"><strong>Lợi ích:</strong> Thêm 100 test case = thêm 100 dòng JSON. Code test KHÔNG ĐỔI. QA (không biết code) cũng thêm được test data.</div>',

'<h3>8.2. Test data từ CSV</h3>',
'<pre>// utils/csv-reader.js\nconst fs = require("fs");\n\nfunction readCSV(filePath) {\n  const content = fs.readFileSync(filePath, "utf-8");\n  const lines = content.trim().split("\\n");\n  const headers = lines[0].split(",");\n  return lines.slice(1).map(line => {\n    const values = line.split(",");\n    const obj = {};\n    headers.forEach((h, i) => obj[h.trim()] = values[i].trim());\n    return obj;\n  });\n}\nmodule.exports = { readCSV };</pre>',

'<hr class="sep">',

'<h2>Bài tập cuối Module 11</h2>',
'<div class="ex"><span class="tag tg">🟢 Bài 1</span><p>GET /api/users từ reqres.in, kiểm tra status 200 và có ít nhất 1 user.</p></div>',
'<div class="ex"><span class="tag ty">🟡 Bài 2</span><p>CRUD: POST tạo → verify → PUT update → DELETE → verify đã xóa.</p></div>',
'<div class="ex"><span class="tag tr">🔴 Bài 3</span><p>Tạo file JSON chứa 5 bộ login data. Viết data-driven test đọc file và chạy tất cả.</p></div>',

'<hr class="sep">',
buildExam('exam_m11', 'Bài kiểm tra Module 11 — API Testing', 8, [
  {q:'API test khác UI test ở điểm nào?', opts:['Chạy chậm hơn','Không cần mở trình duyệt, test trực tiếp server','Cần trình duyệt','Không kiểm tra được gì'], answer:1, explain:'API test gọi server trực tiếp bằng request, nhanh hơn rất nhiều so với UI test.'},
  {q:'Status code 201 nghĩa là gì?', opts:['OK','Created (đã tạo thành công)','Not Found','Server Error'], answer:1, explain:'201 = resource đã được tạo thành công (thường sau POST).'},
  {q:'Status code 404 nghĩa là gì?', opts:['OK','Unauthorized','Not Found (không tìm thấy)','Bad Request'], answer:2, explain:'404 = server không tìm thấy resource tại URL đó.'},
  {q:'Mock API dùng để làm gì?', opts:['Gọi API thật','Giả lập response để test UI trong mọi tình huống','Tạo API mới','Xóa data'], answer:1, explain:'Mock = giả response (lỗi 500, data trống...) để test UI xử lý edge case.'},
  {q:'<code>page.route("**/api/users", ...)</code> làm gì?', opts:['Tạo API','Chặn request đến /api/users và trả response giả','Xóa API','Redirect URL'], answer:1, explain:'page.route chặn request, cho phép bạn fulfill với response tùy ý.'},
  {q:'Data-driven testing lợi ích gì?', opts:['Chạy nhanh hơn','Thêm test case = thêm dòng data, không sửa code','Code ngắn hơn','Không cần setup'], answer:1, explain:'Tách data khỏi code → QA thêm data mà không cần biết code.'},
  {q:'CRUD flow test gồm mấy bước?', opts:['2: tạo và xóa','3: tạo, đọc, xóa','4: Create, Read, Update, Delete','5 bước'], answer:2, explain:'CRUD = Create (POST) → Read (GET) → Update (PUT) → Delete (DELETE). Test toàn bộ vòng đời.'}
]),
].join('\n')});

// =============================================
// MODULE 12 — CONFIG, CI/CD & CAPSTONE (cũ M11)
// =============================================
D.push({id:12,title:"Config, CI/CD & Capstone",week:"Tuần 10-11",phase:3,html:[
'<h2>PHẦN A: Config &amp; CI/CD</h2>',

'<h2>1. playwright.config.js — "Bảng điều khiển"</h2>',
'<div class="b idea">💡 File config giống bảng điều khiển: thiết lập mọi thứ — chạy trình duyệt nào, retry mấy lần, chụp ảnh khi nào...</div>',

'<pre>const { defineConfig } = require("@playwright/test");\n\nmodule.exports = defineConfig({\n  testDir: "./tests",\n  timeout: 30000,          // mỗi test tối đa 30 giây\n  retries: 2,              // fail thì thử lại 2 lần\n  workers: 4,              // chạy 4 test song song\n\n  use: {\n    baseURL: "https://the-internet.herokuapp.com",\n    headless: true,                     // chạy ẩn\n    screenshot: "only-on-failure",      // chụp ảnh khi fail\n    video: "retain-on-failure",         // quay video khi fail\n    trace: "retain-on-failure",         // ghi trace khi fail\n  },\n\n  projects: [\n    { name: "chromium", use: { browserName: "chromium" } },\n    { name: "firefox", use: { browserName: "firefox" } },\n    { name: "webkit", use: { browserName: "webkit" } },\n  ],\n\n  reporter: [["html"], ["list"]],\n});</pre>',

'<h2>2. HTML Report</h2>',
'<pre>npx playwright test          # chạy test\nnpx playwright show-report   # mở báo cáo đẹp</pre>',

'<h2>3. Multi-Environment</h2>',
'<pre>// Dùng biến môi trường\nmodule.exports = defineConfig({\n  use: {\n    baseURL: process.env.BASE_URL || "https://dev.example.com",\n  },\n});</pre>',
'<pre># Chạy trên staging\nBASE_URL=https://staging.example.com npx playwright test</pre>',

'<h2>4. GitHub Actions CI/CD</h2>',
'<div class="b idea">💡 CI/CD giống <strong>bảo vệ cổng</strong>: mỗi lần push code, hệ thống TỰ ĐỘNG chạy test. Fail → báo ngay, không cho merge code lỗi.</div>',

'<p>Tạo file <code>.github/workflows/playwright.yml</code>:</p>',
'<pre>name: Playwright Tests\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n      - run: npm ci\n      - run: npx playwright install --with-deps\n      - run: npx playwright test\n      - uses: actions/upload-artifact@v4\n        if: always()\n        with:\n          name: playwright-report\n          path: playwright-report/</pre>',

'<hr class="sep">',

'<h2>5. Fixtures — Chia sẻ setup giữa các test</h2>',
'<div class="b idea">💡 <strong>Fixture</strong> giống "bộ dụng cụ" được chuẩn bị sẵn cho mỗi test. Thay vì mỗi test tự tạo LoginPage, bạn tạo fixture 1 lần → tất cả test dùng chung.</div>',

'<pre>// fixtures.js\nconst { test: base } = require("@playwright/test");\nconst LoginPage = require("./pages/LoginPage");\nconst InventoryPage = require("./pages/InventoryPage");\n\n// Tạo custom fixtures\nconst test = base.extend({\n  // Fixture "loginPage" — tự tạo LoginPage cho mỗi test\n  loginPage: async ({ page }, use) => {\n    const loginPage = new LoginPage(page);\n    await loginPage.goto();\n    await use(loginPage);  // truyền vào test\n  },\n\n  // Fixture "loggedInPage" — đã login sẵn!\n  loggedInPage: async ({ page }, use) => {\n    const loginPage = new LoginPage(page);\n    await loginPage.goto();\n    await loginPage.login("standard_user", "secret_sauce");\n    const inventoryPage = new InventoryPage(page);\n    await use(inventoryPage);\n  },\n});\n\nmodule.exports = { test };</pre>',

'<pre>// tests/cart.spec.js — sử dụng fixture\nconst { test } = require("../fixtures");\nconst { expect } = require("@playwright/test");\n\n// loggedInPage đã login sẵn, không cần viết login lại!\ntest("Them san pham vao gio", async ({ loggedInPage }) => {\n  await loggedInPage.addToCart("Sauce Labs Backpack");\n  await expect(loggedInPage.cartBadge).toHaveText("1");\n});\n\ntest("Xoa san pham khoi gio", async ({ loggedInPage }) => {\n  await loggedInPage.addToCart("Sauce Labs Backpack");\n  await loggedInPage.removeFromCart("Sauce Labs Backpack");\n  await expect(loggedInPage.cartBadge).not.toBeVisible();\n});</pre>',

'<div class="b ok"><strong>Lợi ích Fixture:</strong><br>- Test ngắn gọn hơn (không lặp login)<br>- Thay đổi flow login → sửa 1 chỗ<br>- Tự cleanup sau mỗi test</div>',

'<hr class="sep">',

'<h2>6. Visual Testing — So sánh giao diện bằng screenshot</h2>',
'<div class="b idea">💡 Visual testing = chụp ảnh trang web → so sánh với ảnh chuẩn. Nếu khác → có bug UI! Phát hiện lỗi mà mắt người hay bỏ sót.</div>',

'<pre>test("Trang login khong doi giao dien", async ({ page }) => {\n  await page.goto("https://www.saucedemo.com");\n\n  // Lần đầu: tạo ảnh chuẩn (baseline)\n  // Lần sau: so sánh với ảnh chuẩn → khác = FAIL\n  await expect(page).toHaveScreenshot("login-page.png");\n});\n\ntest("Form login khong doi", async ({ page }) => {\n  await page.goto("https://www.saucedemo.com");\n\n  // So sánh 1 phần tử cụ thể\n  const form = page.locator(".login-box");\n  await expect(form).toHaveScreenshot("login-form.png");\n});\n\ntest("Cho phep sai lech 5%", async ({ page }) => {\n  await page.goto("https://www.saucedemo.com");\n\n  // Cho phép 5% pixel khác (vì font rendering khác nhau)\n  await expect(page).toHaveScreenshot("login.png", {\n    maxDiffPixelRatio: 0.05\n  });\n});</pre>',

'<pre># Lần đầu: tạo ảnh chuẩn\nnpx playwright test --update-snapshots\n\n# Lần sau: so sánh\nnpx playwright test</pre>',

'<div class="b warn"><strong>Lưu ý:</strong> Visual test phụ thuộc OS và font. Nên chạy trong Docker hoặc CI để kết quả nhất quán. Ảnh baseline lưu trong thư mục <code>tests/*.spec.js-snapshots/</code>.</div>',

'<hr class="sep">',

'<h2>PHẦN B: DỰ ÁN CAPSTONE</h2>',

'<h2>Đề bài: Test SauceDemo.com</h2>',
'<p>Áp dụng MỌI THỨ đã học để xây framework test cho <strong>https://www.saucedemo.com</strong></p>',

'<h3>Tài khoản test</h3>',
'<pre>Username: standard_user\nPassword: secret_sauce</pre>',

'<h3>Cấu trúc yêu cầu</h3>',
'<pre>saucedemo-tests/\n├── pages/\n│   ├── BasePage.js\n│   ├── LoginPage.js\n│   ├── InventoryPage.js\n│   ├── CartPage.js\n│   └── CheckoutPage.js\n├── tests/\n│   ├── login.spec.js\n│   ├── inventory.spec.js\n│   ├── cart.spec.js\n│   └── checkout.spec.js\n├── playwright.config.js\n├── .github/workflows/playwright.yml\n└── README.md</pre>',

'<h3>Test Cases cần viết</h3>',

'<h4>Login (5 test)</h4>',
'<ul><li>Login thành công → chuyển trang inventory</li><li>Sai password → hiện lỗi</li><li>Username trống → hiện lỗi</li><li>User bị khóa (locked_out_user) → hiện lỗi</li><li>Logout → về trang login</li></ul>',

'<h4>Inventory (4 test)</h4>',
'<ul><li>Hiển thị danh sách sản phẩm (>= 1)</li><li>Sắp xếp theo giá thấp → cao</li><li>Sắp xếp theo tên A → Z</li><li>Click sản phẩm → xem chi tiết</li></ul>',

'<h4>Cart (3 test)</h4>',
'<ul><li>Thêm sản phẩm → badge hiện số lượng</li><li>Xóa sản phẩm khỏi giỏ</li><li>Giỏ hàng hiện đúng tên + giá</li></ul>',

'<h4>Checkout (3 test)</h4>',
'<ul><li>Checkout thành công (điền info → finish)</li><li>Thiếu thông tin → hiện lỗi</li><li>Tổng tiền hiển thị đúng</li></ul>',

'<h2>Gợi ý LoginPage.js</h2>',
'<pre>const BasePage = require("./BasePage");\n\nclass LoginPage extends BasePage {\n  constructor(page) {\n    super(page);\n    this.username = page.locator("#user-name");\n    this.password = page.locator("#password");\n    this.loginBtn = page.locator("#login-button");\n    this.error = page.locator(\'[data-test="error"]\');\n  }\n\n  async goto() {\n    await this.page.goto("https://www.saucedemo.com");\n  }\n\n  async login(user, pass) {\n    await this.username.fill(user);\n    await this.password.fill(pass);\n    await this.loginBtn.click();\n  }\n}\nmodule.exports = LoginPage;</pre>',

'<h2>Hướng dẫn từng bước (cho người mới)</h2>',
'<div class="b info"><strong>Đừng hoảng!</strong> Làm theo từng bước dưới đây, mỗi ngày 1-2 bước.</div>',

'<h3>Ngày 1: Setup project</h3>',
'<pre># 1. Tạo thư mục và khởi tạo Playwright\nmkdir saucedemo-tests\ncd saucedemo-tests\nnpm init playwright@latest\n\n# 2. Tạo thư mục pages\nmkdir pages\n\n# 3. Mở VS Code\ncode .</pre>',

'<h3>Ngày 2: Viết BasePage + LoginPage</h3>',
'<pre>// 1. Tạo file pages/BasePage.js\nclass BasePage {\n  constructor(page) { this.page = page; }\n  async goto(url) { await this.page.goto(url); }\n}\nmodule.exports = BasePage;\n\n// 2. Tạo file pages/LoginPage.js (copy từ gợi ý ở trên)\n// 3. Chạy thử: npx playwright test --headed</pre>',

'<h3>Ngày 3-4: Viết Login tests</h3>',
'<pre>// tests/login.spec.js\nconst { test, expect } = require("@playwright/test");\nconst LoginPage = require("../pages/LoginPage");\n\ntest.describe("Login", () => {\n  let loginPage;\n\n  test.beforeEach(async ({ page }) => {\n    loginPage = new LoginPage(page);\n    await loginPage.goto();\n  });\n\n  test("Login thanh cong", async ({ page }) => {\n    await loginPage.login("standard_user", "secret_sauce");\n    await expect(page).toHaveURL(/inventory/);\n  });\n\n  test("Sai password", async () => {\n    await loginPage.login("standard_user", "wrong");\n    await expect(loginPage.error).toBeVisible();\n  });\n\n  // ... thêm 3 test nữa\n});</pre>',

'<h3>Ngày 5-6: InventoryPage + tests</h3>',
'<p>Tạo <code>pages/InventoryPage.js</code> với locator cho: product list, sort dropdown, product items. Viết 4 test.</p>',

'<h3>Ngày 7: CartPage + tests</h3>',
'<p>Tạo <code>pages/CartPage.js</code>. Viết 3 test.</p>',

'<h3>Ngày 8: CheckoutPage + tests</h3>',
'<p>Tạo <code>pages/CheckoutPage.js</code>. Viết 3 test.</p>',

'<h3>Ngày 9: Config + CI/CD</h3>',
'<p>Cấu hình multi-browser, screenshot on failure. Tạo GitHub Actions workflow.</p>',

'<h3>Ngày 10: Polish + Push</h3>',
'<p>Viết README.md, push lên GitHub, chạy CI kiểm tra.</p>',

'<hr class="sep">',

'<h2>Checklist hoàn thành</h2>',
'<table>',
'<tr><th>Hạng mục</th><th>Done?</th></tr>',
'<tr><td>POM cho tất cả trang</td><td>⬜</td></tr>',
'<tr><td>Login tests (5+)</td><td>⬜</td></tr>',
'<tr><td>Inventory tests (4+)</td><td>⬜</td></tr>',
'<tr><td>Cart tests (3+)</td><td>⬜</td></tr>',
'<tr><td>Checkout tests (3+)</td><td>⬜</td></tr>',
'<tr><td>Multi-browser config</td><td>⬜</td></tr>',
'<tr><td>Screenshot + video on failure</td><td>⬜</td></tr>',
'<tr><td>HTML report</td><td>⬜</td></tr>',
'<tr><td>GitHub Actions CI/CD</td><td>⬜</td></tr>',
'<tr><td>README.md (hướng dẫn setup + chạy)</td><td>⬜</td></tr>',
'</table>',

'<div class="b ok">🎉 <strong>Chúc mừng!</strong> Hoàn thành Capstone = bạn đã có đủ kỹ năng làm Automation Tester.<br><br><strong>Bước tiếp theo:</strong><br>1. Push project lên GitHub.<br>2. Thêm link GitHub vào CV.<br>3. Viết README.md thật đẹp (giới thiệu, hướng dẫn cài đặt, cách chạy test).<br>4. Tự tin đi phỏng vấn! 💪</div>',

'<hr class="sep">',
buildExam('exam_m12', 'Bài kiểm tra cuối khóa — Tổng hợp', 15, [
  {q:'<code>playwright.config.js</code> dùng để?', opts:['Viết test','Cấu hình: browser, timeout, retry, report...','Lưu test data','Deploy'], answer:1, explain:'Config file = "bảng điều khiển" thiết lập mọi thứ cho Playwright.'},
  {q:'<code>retries: 2</code> trong config nghĩa là?', opts:['Chạy 2 lần','Fail thì thử lại tối đa 2 lần','Chạy 2 browser','Timeout 2 giây'], answer:1, explain:'Test fail → Playwright tự chạy lại tối đa 2 lần. Nếu pass lần retry → coi như pass.'},
  {q:'GitHub Actions CI/CD chạy test khi nào?', opts:['Thủ công','Tự động mỗi lần push/PR','Mỗi ngày 1 lần','Khi deploy'], answer:1, explain:'CI/CD trigger khi push code hoặc tạo PR → tự động chạy test → báo pass/fail.'},
  {q:'Fixture trong Playwright dùng để?', opts:['Fix bug','Chia sẻ setup giữa các test','Chạy test nhanh hơn','Tạo report'], answer:1, explain:'Fixture = setup sẵn (login, tạo page object...) rồi truyền vào test.'},
  {q:'Visual testing so sánh gì?', opts:['Code','Screenshot trang web với ảnh chuẩn','Performance','API response'], answer:1, explain:'Chụp screenshot → so với baseline. Khác = UI đã thay đổi (có thể là bug).'},
  {q:'<code>let</code> khác <code>const</code> ở điểm nào?', opts:['Không khác','let gán lại được, const không','const nhanh hơn','let dùng trong hàm, const dùng ngoài'], answer:1, explain:'let = có thể gán lại. const = "khóa", không gán lại được.'},
  {q:'<code>[1,2,3].filter(n => n > 1)</code> trả về?', opts:['[1]','[2,3]','3','true'], answer:1, explain:'filter giữ lại phần tử thỏa điều kiện > 1.'},
  {q:'<code>async/await</code> dùng để?', opts:['Chạy code nhanh hơn','Viết code bất đồng bộ dễ đọc hơn','Tạo thread mới','Import module'], answer:1, explain:'async/await giúp code async trông giống sync — dễ đọc, dễ debug.'},
  {q:'Class dùng <code>extends</code> để?', opts:['Thêm method','Kế thừa từ class cha','Import file','Tạo instance'], answer:1, explain:'extends = class con thừa hưởng properties và methods từ class cha.'},
  {q:'Trong POM, locator nên đặt ở đâu?', opts:['Trong test','Trong Page class constructor','Trong config','Random'], answer:1, explain:'Gom locator vào Page class → UI đổi chỉ sửa 1 nơi.'},
  {q:'<code>expect(res.status()).toBe(200)</code> kiểm tra gì?', opts:['Response body','HTTP status code = 200 (OK)','URL','Header'], answer:1, explain:'status() trả về HTTP status code. 200 = request thành công.'},
  {q:'Mock API trả 500 dùng để test gì?', opts:['Happy path','UI hiển thị thông báo lỗi khi server down','Performance','Security'], answer:1, explain:'Giả lập server error để kiểm tra UI xử lý lỗi đúng (hiện thông báo, retry...).'}
]),
].join('\n')});

// =============================================
// MODULE 13 — TEST STRATEGY & BUG REPORTING
// =============================================
D.push({id:13,title:"Test Strategy & Bug Reporting",week:"Tuần 11",phase:3,html:[

'<h2>1. Tại sao cần Test Strategy?</h2>',
'<div class="b idea">💡 Code test mà không có chiến lược giống <strong>xây nhà không có bản vẽ</strong>. Bạn có thể viết 100 test nhưng bỏ sót bug nghiêm trọng vì không plan trước.</div>',

'<p>Trước khi viết code test, QA cần:</p>',
'<ol>',
'<li><strong>Đọc requirement/spec</strong> — hiểu tính năng cần test</li>',
'<li><strong>Viết test case</strong> — liệt kê kịch bản cần kiểm tra</li>',
'<li><strong>Phân loại test</strong> — positive, negative, edge case</li>',
'<li><strong>Viết code test</strong> — implement từng test case</li>',
'<li><strong>Report bug</strong> — khi tìm thấy lỗi</li>',
'</ol>',

'<hr class="sep">',

'<h2>2. Viết Test Case từ Requirement</h2>',
'<div class="b idea">💡 Test case = 1 kịch bản kiểm tra cụ thể. Mỗi test case trả lời: "NẾU user làm X THÌ hệ thống phải làm Y."</div>',

'<h3>2.1. Template Test Case</h3>',
'<table>',
'<tr><th>Field</th><th>Mô tả</th><th>Ví dụ</th></tr>',
'<tr><td><strong>ID</strong></td><td>Mã định danh</td><td>TC-LOGIN-001</td></tr>',
'<tr><td><strong>Title</strong></td><td>Mô tả ngắn</td><td>Login thành công với credentials đúng</td></tr>',
'<tr><td><strong>Precondition</strong></td><td>Điều kiện trước khi test</td><td>User đã đăng ký, đang ở trang login</td></tr>',
'<tr><td><strong>Steps</strong></td><td>Từng bước thực hiện</td><td>1. Nhập username 2. Nhập password 3. Click Login</td></tr>',
'<tr><td><strong>Expected Result</strong></td><td>Kết quả mong đợi</td><td>Chuyển sang trang Dashboard</td></tr>',
'<tr><td><strong>Priority</strong></td><td>Mức ưu tiên</td><td>High / Medium / Low</td></tr>',
'<tr><td><strong>Type</strong></td><td>Loại test</td><td>Positive / Negative / Edge</td></tr>',
'</table>',

'<h3>2.2. Ví dụ: Test Cases cho Login</h3>',
'<div class="b info"><strong>Requirement:</strong> Trang login có ô username, password, nút Login. Login đúng → vào Dashboard. Login sai → hiện lỗi.</div>',

'<table>',
'<tr><th>ID</th><th>Title</th><th>Type</th><th>Priority</th></tr>',
'<tr><td>TC-001</td><td>Login đúng username + password</td><td>🟢 Positive</td><td>High</td></tr>',
'<tr><td>TC-002</td><td>Login sai password</td><td>🔴 Negative</td><td>High</td></tr>',
'<tr><td>TC-003</td><td>Username trống</td><td>🔴 Negative</td><td>Medium</td></tr>',
'<tr><td>TC-004</td><td>Password có ký tự đặc biệt</td><td>🟡 Edge</td><td>Low</td></tr>',
'<tr><td>TC-005</td><td>SQL injection: admin\' OR 1=1--</td><td>🟡 Edge</td><td>High</td></tr>',
'</table>',

'<h3>2.3. Từ Test Case → Code Test</h3>',
'<pre>// TC-001: Login thành công\ntest("TC-001: Login thanh cong", async ({ page }) => {\n  await page.goto("https://www.saucedemo.com");\n  await page.fill("#user-name", "standard_user");\n  await page.fill("#password", "secret_sauce");\n  await page.click("#login-button");\n  await expect(page).toHaveURL(/inventory/);\n});\n\n// TC-002: Login sai password\ntest("TC-002: Sai password", async ({ page }) => {\n  await page.goto("https://www.saucedemo.com");\n  await page.fill("#user-name", "standard_user");\n  await page.fill("#password", "wrong");\n  await page.click("#login-button");\n  await expect(page.locator("[data-test=\\"error\\"]")).toBeVisible();\n});</pre>',

'<hr class="sep">',

'<h2>3. Phân loại Test</h2>',
'<h3>🟢 Positive Test — Happy path</h3>',
'<div class="term">Test với dữ liệu ĐÚNG, kiểm tra hệ thống hoạt động bình thường.</div>',
'<pre>// ✅ Login đúng → vào dashboard\n// ✅ Thêm sản phẩm → giỏ hàng tăng\n// ✅ Checkout thành công</pre>',

'<h3>🔴 Negative Test — Unhappy path</h3>',
'<div class="term">Test với dữ liệu SAI, kiểm tra hệ thống xử lý lỗi đúng.</div>',
'<pre>// ❌ Login sai password → hiện lỗi\n// ❌ Email sai format → validation\n// ❌ Truy cập admin khi chưa login → redirect</pre>',

'<h3>🟡 Edge Case — Trường hợp biên</h3>',
'<div class="term">Test dữ liệu ở ranh giới — nơi bug thường ẩn nấp.</div>',
'<pre>// 🟡 Input rỗng, cực dài (10000 chars)\n// 🟡 Ký tự đặc biệt, Unicode, emoji\n// 🟡 SQL injection, XSS\n// 🟡 Double-click submit, Back button sau submit</pre>',

'<div class="b warn"><strong>Quy tắc 80/20:</strong> 80% bug nằm ở negative + edge case. Viết negative test NHIỀU hơn positive!</div>',

'<hr class="sep">',

'<h2>4. Bug Report chuẩn</h2>',
'<div class="b idea">💡 Report bug tốt = dev fix nhanh. Report tệ = bug tồn tại mãi.</div>',

'<h3>Template</h3>',
'<table>',
'<tr><th>Field</th><th>Mô tả</th></tr>',
'<tr><td><strong>Title</strong></td><td>[Trang] — Hành vi sai</td></tr>',
'<tr><td><strong>Severity</strong></td><td>🔴 Critical / 🟠 Major / 🟡 Minor / ⚪ Trivial</td></tr>',
'<tr><td><strong>Steps</strong></td><td>Từng bước tái hiện (chi tiết!)</td></tr>',
'<tr><td><strong>Expected</strong></td><td>Hệ thống lẽ ra phải...</td></tr>',
'<tr><td><strong>Actual</strong></td><td>Hệ thống thực tế...</td></tr>',
'<tr><td><strong>Screenshot</strong></td><td>Playwright tự chụp!</td></tr>',
'</table>',

'<h3>Ví dụ bug report tốt</h3>',
'<div class="b err"><strong>Title:</strong> [Login] — Không hiện lỗi khi password sai<br><strong>Severity:</strong> 🟠 Major<br><strong>Steps:</strong> 1. Mở saucedemo.com 2. Nhập user: standard_user 3. Nhập pass: wrong 4. Click Login<br><strong>Expected:</strong> Hiện thông báo lỗi<br><strong>Actual:</strong> Trang đứng yên, không phản hồi</div>',

'<h3>Bug report TỆ</h3>',
'<div class="b warn">"Login không được" — ❌ Dev không hiểu gì!</div>',

'<hr class="sep">',

'<h2>5. Test Plan</h2>',
'<pre>## Test Plan: SauceDemo\n\n### Scope: Login, Product, Cart, Checkout\n### Out of Scope: Payment gateway, Email\n### Test Types:\n- Smoke: 10 critical cases (mỗi deploy)\n- Regression: 50 full cases (mỗi sprint)\n### Tools: Playwright, GitHub Actions\n### Schedule:\n- Week 1-2: Login + Product\n- Week 3-4: Cart + Checkout</pre>',

'<hr class="sep">',

'<h2>Bài tập cuối Module 13</h2>',

buildExercise('m13_ex1', 'green', 'Bài 1: Viết Test Cases',
  'Viết 5 test cases cho "Thêm sản phẩm vào giỏ hàng" trên saucedemo.com. Gồm: 2 positive, 2 negative, 1 edge case.',
  'Nghĩ: thêm 1 sản phẩm, thêm nhiều, xóa, thêm trùng, giỏ hàng sau logout...',
  '// TC-CART-001: ...\n// Type: Positive\n// Steps: ...\n// Expected: ...\n\n// TC-CART-002: ...\n',
  '// TC-CART-001: Thêm 1 sản phẩm\n// Type: Positive | Priority: High\n// Steps: Login → Click "Add to cart"\n// Expected: Badge hiện "1"\n\n// TC-CART-002: Thêm 3 sản phẩm khác nhau\n// Type: Positive | Priority: High\n// Expected: Badge hiện "3"\n\n// TC-CART-003: Xóa sản phẩm → Click "Remove"\n// Type: Negative | Priority: High\n// Expected: Badge biến mất\n\n// TC-CART-004: Thêm cùng SP 2 lần\n// Type: Negative | Priority: Medium\n// Expected: Không trùng hoặc tăng quantity\n\n// TC-CART-005: Giỏ hàng sau logout+login lại\n// Type: Edge | Priority: Low\n// Expected: Giỏ trống (session-based)',
  'Test case tốt cover cả happy path lẫn edge case. Priority dựa trên tần suất user sử dụng.',
  null, 10),

buildExercise('m13_ex2', 'yellow', 'Bài 2: Viết Bug Report',
  'Giả sử: sort "Price high to low" trên saucedemo.com KHÔNG sắp đúng. Viết bug report đầy đủ.',
  'Template: Title, Severity, Steps, Expected, Actual, Environment',
  '// Bug Report:\n// Title: \n// Severity: \n// Steps: 1. ... 2. ... 3. ...\n// Expected: \n// Actual: \n',
  '// Title: [Inventory] Sort "Price high to low" sai thứ tự\n// Severity: Minor | Priority: Medium\n// Steps: 1. Login saucedemo 2. Chọn sort "Price (high to low)" 3. Xem giá\n// Expected: Giá giảm dần $49.99 → $7.99\n// Actual: Giá lộn xộn\n// Environment: Chrome 120, Windows 11',
  'Bug report tốt = dev đọc 1 lần hiểu. Steps phải đủ chi tiết để TÁI HIỆN bug.',
  null, 8),

'<hr class="sep">',
buildExam('exam_m13', 'Bài kiểm tra Module 13 — Test Strategy', 8, [
  {q:'Trước khi viết code test, QA cần làm gì?', opts:['Code ngay','Đọc requirement → viết test case','Cài tool','Tạo repo'], answer:1, explain:'Hiểu requirement → viết test case → rồi mới code.'},
  {q:'Positive test kiểm tra gì?', opts:['Xử lý lỗi','Hệ thống hoạt động bình thường','Edge case','Performance'], answer:1, explain:'Positive = happy path: dữ liệu đúng → kết quả đúng.'},
  {q:'80% bug thường nằm ở đâu?', opts:['Positive test','Negative + Edge case','API test','UI test'], answer:1, explain:'Phần lớn bug ở negative/edge case!'},
  {q:'Severity "Critical" nghĩa là?', opts:['UI lệch','Hệ thống sập, mất data','Feature phụ hỏng','Typo'], answer:1, explain:'Critical = không dùng được, mất data. Fix ngay!'},
  {q:'Bug report thiếu gì thì dev không fix được?', opts:['Screenshot','Steps to Reproduce','Title','Priority'], answer:1, explain:'Không steps → không tái hiện → không fix.'},
  {q:'"Login không được" là report tốt hay tệ?', opts:['Tốt','Tệ — thiếu chi tiết','Bình thường','Tùy'], answer:1, explain:'Cần: account nào, trang nào, lỗi gì, expected gì.'},
  {q:'Smoke test chạy khi nào?', opts:['Mỗi deploy — test nhanh critical case','Cuối sprint','Khi có bug','Hàng tháng'], answer:0, explain:'Smoke = test nhanh 10-15 case quan trọng nhất sau deploy.'},
  {q:'Edge case cho ô email?', opts:['test@gmail.com','Email 255 ký tự + format sai','Bỏ trống','Cả B và C'], answer:3, explain:'Edge = ranh giới: quá dài, format sai, trống...'}
]),
].join('\n')});

// =============================================
// MODULE 14 — PLAYWRIGHT NÂNG CAO
// =============================================
D.push({id:14,title:"Playwright Nâng cao",week:"Tuần 12",phase:3,html:[

'<h2>1. Mobile & Responsive Testing</h2>',
'<div class="b idea">💡 60%+ user dùng điện thoại. Playwright giả lập mobile viewport mà không cần thiết bị thật.</div>',

'<h3>1.1. Test trên mobile</h3>',
'<pre>const { test, devices } = require("@playwright/test");\n\ntest.use(devices["iPhone 13"]);\n\ntest("Mobile: hamburger menu", async ({ page }) => {\n  await page.goto("https://example.com");\n  await expect(page.locator(".hamburger")).toBeVisible();\n  await expect(page.locator(".desktop-nav")).toBeHidden();\n});</pre>',

'<h3>1.2. Multi-device config</h3>',
'<pre>// playwright.config.js\nconst { devices } = require("@playwright/test");\nmodule.exports = defineConfig({\n  projects: [\n    { name: "Desktop", use: { ...devices["Desktop Chrome"] } },\n    { name: "iPhone", use: { ...devices["iPhone 13"] } },\n    { name: "iPad", use: { ...devices["iPad Pro 11"] } },\n  ],\n});</pre>',

'<hr class="sep">',

'<h2>2. storageState — Login 1 lần, dùng nhiều test</h2>',
'<div class="b idea">💡 50 test × 3s login = 150s lãng phí. storageState: login 1 lần → tất cả test dùng lại!</div>',

'<h3>Global Setup</h3>',
'<pre>// global-setup.js\nconst { chromium } = require("@playwright/test");\nasync function globalSetup() {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  await page.goto("https://www.saucedemo.com");\n  await page.fill("#user-name", "standard_user");\n  await page.fill("#password", "secret_sauce");\n  await page.click("#login-button");\n  await page.context().storageState({ path: "auth.json" });\n  await browser.close();\n}\nmodule.exports = globalSetup;</pre>',

'<pre>// playwright.config.js\nmodule.exports = defineConfig({\n  globalSetup: "./global-setup.js",\n  use: { storageState: "auth.json" }, // đã login sẵn!\n});</pre>',

'<pre>// Test KHÔNG cần login nữa!\ntest("Xem sản phẩm", async ({ page }) => {\n  await page.goto("https://www.saucedemo.com/inventory.html");\n  await expect(page.locator(".inventory_item")).toHaveCount(6);\n});</pre>',

'<hr class="sep">',

'<h2>3. Network Intercept</h2>',
'<h3>Chờ API response</h3>',
'<pre>test("Chờ API load", async ({ page }) => {\n  const res = page.waitForResponse("**/api/products");\n  await page.goto("https://example.com/shop");\n  expect((await res).status()).toBe(200);\n  await expect(page.locator(".product")).toHaveCount(10);\n});</pre>',

'<h3>Block resource</h3>',
'<pre>// Chặn ảnh → test nhanh hơn\nawait page.route("**/*.{png,jpg}", r => r.abort());</pre>',

'<hr class="sep">',

'<h2>4. Multiple Tabs</h2>',
'<pre>const [newPage] = await Promise.all([\n  context.waitForEvent("page"),\n  page.click("a[target=_blank]")\n]);\nawait newPage.waitForLoadState();\nconsole.log(await newPage.title());</pre>',

'<hr class="sep">',

'<h2>5. Playwright vs Selenium</h2>',
'<table>',
'<tr><th>Tiêu chí</th><th>Playwright</th><th>Selenium</th></tr>',
'<tr><td>Auto-wait</td><td>✅ Tự động</td><td>❌ Phải tự viết wait</td></tr>',
'<tr><td>Tốc độ</td><td>🚀 Nhanh 2-3x</td><td>🐢 Chậm hơn</td></tr>',
'<tr><td>API testing</td><td>✅ Có sẵn</td><td>❌ Cần thêm lib</td></tr>',
'<tr><td>Codegen</td><td>✅ Có</td><td>❌ Không</td></tr>',
'<tr><td>Trace Viewer</td><td>✅ Có</td><td>❌ Không</td></tr>',
'<tr><td>Mobile</td><td>✅ Emulation</td><td>Cần Appium</td></tr>',
'<tr><td>Cộng đồng</td><td>Mới, đang phát triển</td><td>Lớn, lâu đời</td></tr>',
'</table>',

'<div class="b ok"><strong>Phỏng vấn:</strong> "Playwright auto-wait giảm flaky test, nhanh hơn Selenium 2-3x, có Codegen + Trace Viewer tích hợp sẵn."</div>',

'<hr class="sep">',

'<h2>6. Tips phỏng vấn</h2>',
'<div class="b ok"><strong>Câu hỏi thường gặp:</strong><br>1. Auto-wait hoạt động thế nào? → Chờ visible, stable, enabled<br>2. POM là gì? → Gom locator vào Page class<br>3. Flaky test? → Dùng auto-wait, retries, tránh hardcoded wait<br>4. API vs UI test? → API nhanh hơn, UI sát user hơn<br>5. CI/CD pipeline? → Push → auto test → report → block merge nếu fail</div>',

'<hr class="sep">',

'<h2>Bài tập cuối Module 14</h2>',

buildExercise('m14_ex1', 'yellow', 'Bài: Config multi-device',
  'Viết <code>playwright.config.js</code> chạy test trên Desktop Chrome, iPhone 13, iPad Pro. Screenshot + trace on failure.',
  'Dùng <code>devices</code> import từ @playwright/test',
  'const { defineConfig, devices } = require("@playwright/test");\nmodule.exports = defineConfig({\n  // TODO\n});',
  'const { defineConfig, devices } = require("@playwright/test");\nmodule.exports = defineConfig({\n  testDir: "./tests",\n  retries: 1,\n  projects: [\n    { name: "Desktop", use: { ...devices["Desktop Chrome"] } },\n    { name: "iPhone", use: { ...devices["iPhone 13"] } },\n    { name: "iPad", use: { ...devices["iPad Pro 11"] } },\n  ],\n  use: { screenshot: "only-on-failure", trace: "retain-on-failure" }\n});',
  'devices chứa preset viewport + userAgent. Spread ...devices["iPhone 13"] kế thừa tất cả.',
  null, 8),

'<hr class="sep">',
buildExam('exam_m14', 'Bài kiểm tra cuối khóa — Tổng hợp', 10, [
  {q:'devices["iPhone 13"] dùng để?', opts:['Kết nối iPhone','Giả lập viewport iPhone 13','Cài app','Test cloud'], answer:1, explain:'Emulate device: viewport, userAgent, touch — không cần thiết bị thật.'},
  {q:'storageState dùng để?', opts:['Lưu file','Lưu cookies/session tái sử dụng','Backup DB','Cache'], answer:1, explain:'Login 1 lần → lưu state → tất cả test dùng lại.'},
  {q:'globalSetup chạy khi nào?', opts:['Mỗi test','1 lần TRƯỚC tất cả test','Sau test','Khi fail'], answer:1, explain:'1 lần duy nhất trước toàn bộ suite.'},
  {q:'Playwright nhanh hơn Selenium nhờ?', opts:['Java','Auto-wait + protocol trực tiếp','Plugin','Cộng đồng'], answer:1, explain:'CDP protocol trực tiếp, auto-wait giảm flaky.'},
  {q:'Flaky test là gì?', opts:['Luôn pass','Luôn fail','Lúc pass lúc fail','Chạy chậm'], answer:2, explain:'Không ổn định, kết quả khác mỗi lần. Nguyên nhân: timing, network.'},
  {q:'Cách giảm flaky test?', opts:['sleep(5000)','Auto-wait + retry + tránh hardcoded wait','Ít test hơn','Không test'], answer:1, explain:'Auto-wait chờ đúng điều kiện. KHÔNG dùng sleep.'},
  {q:'Block resource dùng để?', opts:['Download file','Chặn load ảnh/video → test nhanh hơn','Hack','Cache'], answer:1, explain:'Chặn resource không cần → trang load nhanh → test nhanh.'},
  {q:'page.waitForResponse dùng khi?', opts:['Chờ trang','Chờ API trả về trước khi assert UI','Gọi API','Mock'], answer:1, explain:'Đảm bảo data đã load trước khi kiểm tra UI.'},
  {q:'Negative test kiểm tra gì?', opts:['Happy path','Hệ thống xử lý dữ liệu sai đúng cách','Edge case','Speed'], answer:1, explain:'VD: login sai → phải hiện lỗi, không crash.'},
  {q:'Khi phỏng vấn hỏi "Tại sao Playwright?", đáp?', opts:['Vì dễ','Auto-wait, nhanh, API testing + Codegen sẵn','Microsoft','Free'], answer:1, explain:'Nhấn mạnh: auto-wait, nhanh 2-3x, tooling mạnh.'}
]),
].join('\n')});

