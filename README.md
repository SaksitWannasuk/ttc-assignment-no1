## Stack

Frontend Angular 21, Angular Material, Tailwind CSS
Backend .NET 10 
Database SQL Server

---

## Requirement

ก่อนรันโปรเจค Install :

- Node.js
- .NET 10 SDK
- SQL Server
- Angular CLI

---

## Install and Run

### 1. ตั้งค่า Backend

#### 1.1 แก้ไข Connection String

เปิดไฟล์ `backend/appsettings.json` แล้วแก้ไข Connection String ให้ตรงกับ SQL Server:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=ttc-assignment-no1;Trusted_Connection=True;TrustServerCertificate=True;"
  }
}
```

#### 1.2 สร้างฐานข้อมูล (Migration)

```bash
cd backend
dotnet ef database update
```

#### 1.3 รัน Backend

```bash
dotnet run
```

สามารถเปิด Swagger UI เพื่อทดสอบ API ได้ที่:
```
https://localhost:<port>/swagger
```

---

### 2. ตั้งค่า Frontend

#### 2.1 ติดตั้ง Dependencies

```bash
cd frontend
npm install
```

#### 2.2 รัน Frontend

```bash
npm start
```

Frontend จะรันที่ `http://localhost:4200`

---

## API Endpoints

| `GET` | `/api/Person/GetAllPerson` | ดึงข้อมูลบุคคลทั้งหมด |

| `POST` | `/api/Person/CreatePerson` | สร้างข้อมูลบุคคล |

### ตัวอย่าง Request Body สำหรับ CreatePerson

```json
{
  "firstName": "สมชาย",
  "lastName": "ใจดี",
  "address": "123 ถนนสุขุมวิท กรุงเทพฯ",
  "birthDate": "1990-01-15T00:00:00"
}
```

---

## ฟีเจอร์หลัก

- **แสดงรายการบุคคล** — ตารางแสดงข้อมูลบุคคลทั้งหมดในระบบ
- **เพิ่มบุคคลใหม่** — กรอกฟอร์ม ชื่อ / นามสกุล / ที่อยู่ / วันเกิด
- **ดูรายละเอียด** — เปิด dialog แสดงข้อมูลพร้อมคำนวณอายุอัตโนมัติ

---

## โครงสร้างฐานข้อมูล

ตาราง `Persons`

| คอลัมน์ | ประเภท | คำอธิบาย |
|---------|--------|----------|
| ID | int | รหัสหลัก (Auto Increment) |
| FirstName | nvarchar(200) | ชื่อ |
| LastName | nvarchar(200) | นามสกุล |
| Address | nvarchar(4000) | ที่อยู่ |
| BirthDate | datetime | วันเกิด |
| IsActive | bit | สถานะ Active |
| CreatedTime | datetime | วันที่สร้าง |
| UpdatedTime | datetime | วันที่แก้ไขล่าสุด |
