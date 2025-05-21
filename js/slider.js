  // slider.js

  document.addEventListener("DOMContentLoaded", function () {
    const etkinlikBilgileri = [
      {
        baslik: "29 Ekim Cumhuriyet Koşusu",
        aciklama: "Geçen yıl Seka Parkta 11.si düzenlenen uluslararası maraton büyük bir katılımla gerçekleşti. Kocaeli  Büyükşehir Belediyesi'nin düzenlediği ve Sekapark Uçurtma Tepesi'nde start aldığı koşuya yüzlerce kişi katıldı. Koşu 3 kilometrelik halk maratonu ve 10 kilometre koşusu olmak üzere 2 kategoride gerçekleştirildi.",
      },
      {
        baslik: "Kocaeli Kitap Fuarı",
        aciklama: "Her yıl artan bir ilgiyle yoluna devam eden bir çok konuk ismin de katıldığı 14. Kocaeli Kitap Fuarı’nı 1 milyon 23 bin 514 kişi ziyaret etti. Fuar böylece Türkiye’nin en büyük kitap fuarı olma unvanını bir kez daha taçlandırdı. Fuara katılan yayınevleri de Kocaeli Kitap Fuarının tek büyük kitap fuarı olduğunu ifade ediyor",
      },
      {
        baslik: "Kocaeli EnFest",
        aciklama: "Kocaeli Büyükşehir Belediyesi’nin 19 Mayıs Atatürk’ü Anma, Gençlik ve Spor Bayramı kapsamında gerçekleştirdiği EnFest Gençlik Festivali tüm hızıyla devam ediyor. Etkinliklere katılan gençler muhteşem ortamda, unutulmaz anlar yaşıyor.",
      },
      {
        baslik: "Marmara Kariyer Fuarı",
        aciklama: "Genç yeteneklerle iş dünyası arasında güçlü bir köprü kurmayı amaçlayan MARMARAKAF Kocaeli Üniversitesi'nin ev sahipliğinde Kocaeli Kongre Merkezi'nde düzenlenen törenlerle kapılarını açtı.",
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