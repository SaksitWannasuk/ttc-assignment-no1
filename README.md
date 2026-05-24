# Technical Assignment

## Stack

- Angular 21
- Angular Material
- Tailwind CSS
- ASP.NET Core (.NET 10)
- SQL Server
- Docker Compose

---

## Run with Docker

Requirement:
- Docker Desktop

Run:

```bash
docker compose up --build
```

Services:

| Service | URL |
|---|---|
| Frontend | http://localhost:4200 |
| Swagger | http://localhost:7232/swagger |
| SQL Server | localhost:1433 |

Stop container:

```bash
docker compose down
```

Remove volume:

```bash
docker compose down -v
```

SQL Server:

| | |
|---|---|
| Username | sa |
| Password | SqlServer@123 |
| Database | ttc-assignment-no1 |

---

## Run Backend Manual

Configure connection string in:

```text
backend/appsettings.json
```

Example:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=ttc-assignment-no1;Trusted_Connection=True;TrustServerCertificate=True;"
  }
}
```

Run migration:

```bash
cd backend
dotnet ef database update
```

Run API:

```bash
dotnet run
```

Swagger:

```text
http://localhost:7232/swagger
```

---

## Run Frontend Manual

Install package:

```bash
cd frontend
npm install
```

Start project:

```bash
npm start
```

Frontend URL:

```text
http://localhost:4200
```

---

## API

| Method | Endpoint |
|---|---|
| GET | `/api/Person/GetAllPerson` |
| POST | `/api/Person/CreatePerson` |

---

## Features

- Person list table
- Create person dialog
- Form validation
- Age calculation from birth date

---

## Database

Table: `Persons`

| Column | Type |
|---|---|
| ID | int |
| FirstName | nvarchar(200) |
| LastName | nvarchar(200) |
| Address | nvarchar(4000) |
| BirthDate | datetime |
| IsActive | bit |
| CreatedTime | datetime |
| UpdatedTime | datetime |

---

## Structure

```text
backend/
frontend/
docker-compose.yml
README.md
```