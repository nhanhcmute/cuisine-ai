# Recipe AI Web (Angular Frontend)

Frontend Angular cho ứng dụng Recipe AI, tách biệt hoàn toàn với backend.

## Yêu cầu

- Node.js 16.14+ (khuyến nghị 18+)
- npm

## Chạy dự án

```bash
npm install
npm start
```

Ứng dụng chạy tại **http://localhost:4200** (port mặc định).

## Cấu trúc thư mục

- `src/app/core` – services (Auth, Api), guards, interceptors
- `src/app/shared` – components dùng chung, pipes, models
- `src/app/features` – các trang theo tính năng (login, register, dashboard, recipes, pantry, dish-to-recipe, shopping-list)

## Các route

| Path | Mô tả |
|------|--------|
| `/login` | Đăng nhập |
| `/register` | Đăng ký |
| `/dashboard` | Trang chủ |
| `/recipes` | Công thức |
| `/pantry` | Tủ đồ ăn |
| `/dish-to-recipe` | Món ăn → Công thức |
| `/shopping-list` | Danh sách mua sắm |

## API

- Base URL mặc định (dev): `http://localhost:5080` (cấu hình trong `src/environments/environment.ts`).
- Mọi request HTTP đều gắn header `Authorization: Bearer <token>` nếu có token (qua `AuthService` và interceptor).

## Build production

```bash
npm run build
```

Output trong `dist/recipe-ai-web/`. Cấu hình production dùng `src/environments/environment.prod.ts` (cần set `apiBaseUrl` khi deploy).
