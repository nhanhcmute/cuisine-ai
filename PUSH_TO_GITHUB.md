# Đẩy project lên GitHub

## Bước 1: Tạo repository trên GitHub

1. Vào https://github.com/new
2. Đặt tên repo (ví dụ: `recipe-ai` hoặc `am-thuc`)
3. **Không** chọn "Add a README" (repo để trống)
4. Create repository

## Bước 2: Kết nối và đẩy code

Trong terminal, mở thư mục project rồi chạy (thay `USERNAME` và `REPO` bằng tên GitHub và tên repo của bạn):

```bash
cd "c:\Users\Public\Ẩm Thực"

git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main
```

Ví dụ nếu repo là `https://github.com/myuser/recipe-ai`:

```bash
git remote add origin https://github.com/myuser/recipe-ai.git
git branch -M main
git push -u origin main
```

Nếu dùng SSH:

```bash
git remote add origin git@github.com:USERNAME/REPO.git
git branch -M main
git push -u origin main
```

Sau lần push đầu, chỉ cần `git push` cho các lần sau.
