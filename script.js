let tahminiSayi = 20;
let puan = 10;
let enYuksekPuan = 0;

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector(".puan").textContent = "🏆 Puan: " + puan;
  document.querySelector(".mesaj").textContent = "Tahmin Başlıyor!";
  tahminiSayi = Math.floor(Math.random() * 20 + 1);
  document.querySelector(".sayi").textContent = "?";
  document.querySelector(".kayit").textContent = "⛳ Yüksek Puan: " + 0;
  console.log(tahminiSayi);
});

document.querySelector(".kontrol-btn").addEventListener("click", function () {
  let sayiGir = document.querySelector(".tah-sayi").value;
  console.log(sayiGir === tahminiSayi);
  console.log(tahminiSayi);
  if (sayiGir == tahminiSayi) {
    document.querySelector(".mesaj").textContent = "Tebrikler Bildiniz!";
    document.querySelector(".sayi").textContent = tahminiSayi;
    document.querySelector("body").style.backgroundColor = "#00b33c";
    if (puan > enYuksekPuan) {
      document.querySelector(".kayit").textContent = "⛳ Yüksek Puan: " + puan;
    }
    return;
  } else if (sayiGir < tahminiSayi) {
    document.querySelector(".mesaj").textContent = "⏫ Sayıyı Arttır";
    puan--;
  } else {
    document.querySelector(".mesaj").textContent = "⏬ Sayılı Azalt";
    puan--;
  }
  document.querySelector(".puan").textContent = "🏆 Puan: " + puan;
});

document.querySelector(".tekrar-btn").addEventListener("click", function () {
  puan = 10;
  tahminiSayi = Math.floor(Math.random() * 20 + 1);
  document.querySelector(".puan").textContent = "🏆 Puan: " + puan;
  document.querySelector(".mesaj").textContent = "Tahmin Başlıyor!";
  document.querySelector(".sayi").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#2d3436";
});
