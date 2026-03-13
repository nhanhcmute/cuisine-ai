# Recipe AI Backend (.NET 8)

Backend ASP.NET Core Web API, cấu trúc multi-project, tách biệt hoàn toàn với frontend.

## Cấu trúc solution

- **RecipeAi.sln** – Solution chính
- **recipe_ai.app.web** – ASP.NET Core Web API (Controllers, không dùng Swagger)
- **recipe_ai.app.data** – Class Library (DataAccess, Models)

## Cấu trúc thư mục

### recipe_ai.app.web

- `Controller/` – API controllers
- `Services/` – Business logic
- `Repositories/` – Data access
- `Infrastructure/` – Options, Middlewares, Routing
- `Partial/` – Partial classes (dùng sau)

### recipe_ai.app.data

- `DataAccess/` – Data access layer
- `Models/` – Domain/entity models

## Yêu cầu

- .NET 8 SDK

## Chạy dự án

```bash
cd backend
dotnet restore
dotnet build
dotnet run --project recipe_ai.app.web
```

API chạy tại **http://localhost:5080** (HTTP).

## Cấu hình (appsettings + env)

Ưu tiên **biến môi trường** nếu có:

| Env var        | appsettings section | Mô tả          |
|----------------|---------------------|-----------------|
| `MONGO_URI`    | Mongo:Uri           | MongoDB URI     |
| `MONGO_DB`     | Mongo:Database      | Tên database    |
| `JWT_SECRET`   | Jwt:Secret          | Secret JWT      |
| `AI_PROVIDER_KEY` | Ai:ProviderKey   | Key AI provider |

Options class: `Infrastructure/Options/MongoOptions.cs`, `JwtOptions.cs`, `AiOptions.cs`.

## CORS

- Cho phép origin: `http://localhost:4200`
- Cho phép mọi header, mọi method (cho frontend Angular).

## Route format (controller.ctr)

- Convention: tên controller PascalCase → route **snake_case** + `.ctr`
- Ví dụ:
  - `SysUserController` → `/sys_user.ctr`
  - `DashboardController` → `/dashboard.ctr`
- Action: `/sys_user.ctr/getUserLogin`, `/dashboard.ctr/getOverview`

## Test bằng Postman

| Method | URL |
|--------|-----|
| GET | http://localhost:5080/health |
| GET | http://localhost:5080/sys_user.ctr/getUserLogin |
| GET | http://localhost:5080/dashboard.ctr/getOverview |

Kết quả mong đợi:

- **GET /health** → `{ "status": "ok" }`
- **GET /sys_user.ctr/getUserLogin** → `{ "user_id": "demo", "display_name": "Demo User" }`
- **GET /dashboard.ctr/getOverview** → `{ "status": "ok" }`

## Global exception handling

Mọi exception được bắt bởi `GlobalExceptionMiddleware`, trả JSON:

```json
{
  "error": {
    "message": "...",
    "code": "UNHANDLED_ERROR",
    "traceId": "..."
  }
}
```

HTTP status mặc định: **500**.

## Không dùng Swagger

- Không cài Swashbuckle
- Không map endpoint Swagger
