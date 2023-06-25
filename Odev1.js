let isimgir = prompt("Lütfen İsminizi Giriniz: ")
let myName = document.querySelector("#myName");
myName.innerHTML = `${isimgir}`




function saatGuncelle() {
  var saatDiv = document.getElementById("saat");
  var tarih = new Date();

  var saat = tarih.getHours();
  var dakika = tarih.getMinutes();
  var saniye = tarih.getSeconds();

  var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  var gun = gunler[tarih.getDay()];

  var zaman = `${saat}:${dakika}:${saniye},${gun}`

  saatDiv.innerHTML =zaman;

  setTimeout(saatGuncelle, 1000); // Her 1 saniyede bir güncelle
}

saatGuncelle();
