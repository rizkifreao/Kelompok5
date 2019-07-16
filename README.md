# KELOMPOK5 3IFP-02
Tugas besar membuat Node.js REST API di mata kuliah Pemograman Web3 LPKIA, untuk memenuhi UAS

![image](https://user-images.githubusercontent.com/48593616/60925848-fc37f880-a2ce-11e9-8582-833c44b9fead.png)

**Anggota**
1. Rizki
2. Fajri
3. Ilham

## Required
Dibutuhkan **Mysql** untuk bisa terkoneksi dengan database.

Module third-party yang digunakan yaitu `express`, `nodemon`, `sequelize`, `bycrptjs`, `mysql2`, `jsonwebtoken` dan `dotenv` dengan menggunkan `express-generator`

## Instalation

1. **Install migration dan express generator**

    Untuk dapat menjalankan migrasi table anda dapat mengikuti perintah npm, instal `sequelize-cli` dan `express-generator` secara global. Ini berarti Anda dapat mengakses dari mana saja melalui terminal.

    `$ npm install -g sequelize-cli express-generator`

2. **Install Project**

    Selanjutnya anda dapat clone menggunakan git atau download sebagai zip. Setelah selesai diunduh lalu jalankan perintah ini pada terminal anda:

    **`$ npm install`**

    >Fungsi ini untuk memasang semua module yang ada _dependencies_ pada file **`package.json`** dan akan disimpan pada direktori **root** project anda dengan nama folder `node-modules` ex: `Kelompok5\node-modules`

3. **Menginisialisasi Sequelize**

    Setelah instalasi, gunakan CLI untuk menghasilkan migrasi, seeder, config dan direktori model dan file config.

    **`$ sequelize init`**

    >Untuk membuat sebuah migrasi atau model anda dapat menggunakan perintah `$ sequelize model:create`
    pada CLI anda.
    **contoh**: `$ sequelize model:create --name User --attributes username:string,password:string` atau anda dapat mengunjungi deokumentasi Sequelize pada link ini [Sequelize migration](http://docs.sequelizejs.com/manual/migrations.html)

4. **Jalankan Migrations**

    Anda dapat membuat tabel database dengan menjalankan migrasi:

    **`$ sequelize db:migrate`**

    >Sekarang Anda dapat memeriksa database Anda, Anda harus dapat melihat tabel baru di database Anda.

5. **Import sql file**

    Setelah instalasi selesai maka selanjutnya import file **kelompok5.sql** ke database server anda.

6. **Jalankan aplikasi anda**

    Tuliskan kode berikut menggunakan CLI atau Comand prompt

    **`$ npm start`**

    >Ketika dijalankan maka tampilan CLI anda akan tampak seperti gambar berikut: ![image](https://user-images.githubusercontent.com/48593616/60929177-79b53600-a2da-11e9-9993-7205b5d7f50b.png)


## Fitur pada aplikasi

lihat pada issue [SOAL](https://github.com/rizkifreao/Kelompok5/issues/4#issue-466026446)

## Dokumentasi API

Anda dapat menguji API dengan memasukkan header  `Auth-Key` dengan nilai `aplication/json` & `simplerestapi` dalam setiap permintaan

Untuk **API** kecuali login Anda harus memasukkan token yang Anda dapatkan setelah berhasil login. Header untuk keduanya terlihat Otorisasi ini

Anda dapat melihat dokumentasi di [POSTMAN](https://documenter.getpostman.com/view/6954079/SVSKM944)

