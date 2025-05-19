// slider.js

document.addEventListener("DOMContentLoaded", function () {
  const etkinlikBilgileri = [
    {
      baslik: "29 Ekim Cumhuriyet Koşusu",
      aciklama: "Geçen yıl Seka Parkta 11.si düzenlenen uluslararası maraton büyük bir katılımla gerçekleşti.",
    },
    {
      baslik: "Kocaeli Kitap Fuarı",
      aciklama: "Türkiye’nin en büyük kitap fuarlarından biri olan bu etkinlik her yıl onbinlerce ziyaretçiyi ağırlar.",
    },
    {
      baslik: "Kocaeli Bilim Şenliği",
      aciklama: "Genç mucitlerin projelerini tanıttığı ve bilim atölyeleriyle dolu bir etkinliktir.",
    },
    {
      baslik: "Kocaeli Film Günleri",
      aciklama: "Kültürel çeşitliliği sinema ile buluşturan bu organizasyon sanatseverleri bir araya getiriyor.",
    },
  ];

  const baslikElementi = document.getElementById("etkinlikBaslik");
  const aciklamaElementi = document.getElementById("etkinlikAciklama");

  const carouselElement = document.getElementById("etkinlikSlider");

  carouselElement.addEventListener("slid.bs.carousel", function (event) {
    const aktifIndex = event.to;
    const bilgi = etkinlikBilgileri[aktifIndex];

    baslikElementi.textContent = bilgi.baslik;
    aciklamaElementi.textContent = bilgi.aciklama;
  });

  // İlk yüklemede gösterilecek bilgi
  baslikElementi.textContent = etkinlikBilgileri[0].baslik;
  aciklamaElementi.textContent = etkinlikBilgileri[0].aciklama;
});