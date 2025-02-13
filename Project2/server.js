import express from "express";
import mysql from "mysql2";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

// Kết nối MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",  
    // password: "",
    database: "mydb",
    multipleStatements: true
});

// Kết nối tới MySQL
db.connect(err => {
    if (err) {
        console.error("Lỗi kết nối MySQL: " + err.message);
    } else {
        console.log("Kết nối MySQL thành công!");
    }
});

// API thêm user vào database
app.post("/add_user", (req, res) => {
    const { name, email } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({ message: "Vui lòng nhập đầy đủ thông tin" });
    }

    const query = "INSERT INTO users (name, email) VALUES (Duc, Duc@gmail.com)";
    db.query(query, [name, email], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Lỗi khi thêm user", error: err.message });
        }
        res.json({ message: "User đã được thêm!", userId: result.insertId });
    });
});

// Chạy server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
