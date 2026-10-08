# TUGAS Week 4 : Kalkulator Sederhana

![alt text](image.png)

Tugas meminta kita untuk membuat kalkulator berbasis js sederhana. Saya membuat fungsi untuk menghitung dan menggunakan listener di tombol <code>Hitung</code>.

Fungsi yang ada di Js sangat Simpel, berikut codenya : 
```js
function kalkulator(a, b, operator) {
    if (operator === "/" && b === 0) {
        return "Error: Pembagian dengan 0 tidak diperbolehkan!";
    }

    if (operator === "+") return a + b;
    else if (operator === "-") return a - b;
    else if (operator === "*") return a * b;
    else if (operator === "/") return a / b;
    else return "Error: Operator tidak valid";
}
```
Fungsi menerima 3 parameter : 
- <code>a</code> sebagai input angka pertama
- <code>b</code> sebagai input angka kedua
- <code>operator</code> sebagai input operator apa yang ingin dipakai

Fungsi juga melakukan handler error secara sederhana ketika pembagian dengan angka 0 dan operator yang tidak valid.
