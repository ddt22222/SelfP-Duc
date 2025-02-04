const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Kết nối đến cơ sở dữ liệu MySQL
const db = mysql.createConnection({
    host: 'localhost',    // Thay đổi nếu bạn đang sử dụng host khác
    user: 'root',         // Tên người dùng MySQL
    password: '',         // Mật khẩu người dùng MySQL
    database: 'dictionary_db' // Tên cơ sở dữ liệu của bạn
});

// Kiểm tra kết nối
db.connect((err) => {
    if (err) throw err;
    console.log('Đã kết nối tới cơ sở dữ liệu MySQL!');
});

// API để lưu từ và nghĩa vào DB
app.post('/save-word', (req, res) => {
    const { word, meaning } = req.body;

    // Truy vấn SQL để lưu từ và nghĩa vào DB
    const query = 'INSERT INTO words (word, meaning) VALUES (?, ?)';
    db.query(query, [word, meaning], (err, result) => {
        if (err) {
            res.status(500).send('Lỗi khi lưu từ vào cơ sở dữ liệu!');
        } else {
            res.status(200).send('Từ đã được lưu thành công!');
        }
    });
});

// Bắt đầu server
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
