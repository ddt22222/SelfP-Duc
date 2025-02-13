const express = require("express");
const mysql = require("mysql");
const app = express();

app.use(express.json()); // Cho phép Express đọc dữ liệu JSON

// Kết nối MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});
db.connect();

// API nhận dữ liệu và lưu vào database
app.post("/save", (req, res) => {
  const { name, email } = req.body;
  const sql = "INSERT INTO users (word, explain) VALUES (?, ?)";
  db.query(sql, [name, email], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Lưu thành công!" });
  });
});

// Chạy server
app.listen(3000, () => console.log("Server chạy tại http://localhost:3000"));


var form = document.getElementById('contactForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('input1').value;
    var email = document.getElementById('input2').value;
    alert("C\u1EA3m \u01A1n ".concat(name, "! Ch\u00FAng t\u00F4i s\u1EBD li\u00EAn h\u1EC7 v\u1EDBi b\u1EA1n qua email: ").concat(email, "."));
});


var form = document.getElementById('contactForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    alert("Cảm ơn ".concat(name, "! Chúng tôi sẽ liên hệ với bạn qua email: ").concat(email, "."));
});

document.getElementById('add-word-btn').addEventListener('click', function () {
    addNewWord();
});

// Cho phép nhấn Enter để thêm từ mới
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && event.ctrlKey) {  // Nhấn Ctrl + Enter để thêm nhanh
        event.preventDefault();
        addNewWord();
    }
});

function addNewWord() {
    const vocabList = document.getElementById('vocab-list');

    const input1 = document.getElementById('input1').value.trim();
    const input2 = document.getElementById('input2').value.trim();

    if (input1 === '' || input2 === '') {
        alert('Vui lòng nhập đầy đủ Từ vựng và Giải nghĩa!');
        return;
    }

    // Tạo thẻ hiển thị từ vựng đã nhập
    // Tạo thẻ chứa từ vựng và giải nghĩa
    const wordItem = document.createElement('div');
    wordItem.className = 'word-item';

    // Tạo hai thẻ div riêng biệt cho input1 và input2
    const wordDiv = document.createElement('textarea');
    wordDiv.className = 'word';
    wordDiv.value = input1; // Dùng .value thay vì .textContent để gán giá trị cho textarea
    
    const meaningDiv = document.createElement('textarea');
    meaningDiv.className = 'meaning';
    meaningDiv.textContent = input2;
    

    // Thêm hai thẻ div vào trong word-item
    wordItem.appendChild(wordDiv);
    wordItem.appendChild(meaningDiv);

    // Kiểm tra xem vocabList có phần tử con không
    if (vocabList.firstChild) {
        vocabList.insertBefore(wordItem, vocabList.firstChild); // Thêm vào đầu danh sách
    } else {
        vocabList.appendChild(wordItem); // Nếu không có phần tử con, thêm vào cuối
    }

    // Xóa ô nhập cũ và tạo ô nhập mới
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('input1').focus();
}
