# HWExpressJS

Nama : Rizki Rifani (FSWD 5A)

Program ini akan berjalan di port sesuai dengan yang ditentukan (misalnya, port 3000). Program dapat diakses dengn endpoint-endpoint berikut:

- Untuk menampilkan semua actor: `http://localhost:3000/api/actor`
- Untuk menampilkan semua film: `http://localhost:3000/api/film`
- Untuk menampilkan film tertentu berdasarkan ID: `http://localhost:3000/api/film/{film_id}`
- Untuk menampilkan semua kategori: `http://localhost:3000/api/categories`
- Untuk menampilkan film berdasarkan kategori: `http://localhost:3000/api/film/category/{nama_kategori}`

## Persyaratan

Sebelum dapat menjalankan aplikasi, pastikan telah memenuhi persyaratan berikut:

- Node.js
- PostgreSQL
- Browser
- Postman

## Instalasi

1. Clone repositori ini ke komputer:

   ```bash
   git clone https://github.com/rizkirifandi7/HW-ExpressJS.git

2. Pindah ke direktori projek

   ```bash
   cd HW-ExpressJS

3. Install depedensi

   ```bash
   npm install

4. Import sample data `dvdrental.tar` ke database PostgreSQL

5. Proses selesai

## Demo Program

Masukkan endpoint berikut ke dalam url browser untuk menampilkan semua actor:

- `http://localhost:3000/api/actor`

Maka akan muncul seperti berikut:

![Actor](./public/assets/actor.jpeg)

Masukkan endpoint berikut ke dalam url browser untuk menampilkan semua list film:

- `http://localhost:3000/api/film`

Maka akan muncul seperti berikut:

![Film](./public/assets/listfilm.jpeg)

Masukkan endpoint berikut ke dalam url browser untuk menampilkan film tertentu berdasarkan id:

- `http://localhost:3000/api/film/{film_id}`

Contoh: `http://localhost:3000/api/film/1`

Maka akan muncul seperti berikut:

![FilmId](./public/assets/film-id.jpeg)

Masukkan endpoint berikut ke dalam url browser untuk menampilkan semua list kategori:

- `http://localhost:3000/api/categories`

Maka akan muncul seperti berikut:

![Categories](./public/assets/categories.jpeg)

Masukkan endpoint berikut ke dalam url browser Untuk menampilkan film berdasarkan kategori:

- `http://localhost:3000/api/film/category/{nama_kategori}`

Contoh: `http://localhost:3000/api/film/category/Horror`

Maka akan muncul seperti berikut:

![FilmCategory](./public/assets/film-categories.jpeg)
