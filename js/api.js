const API_KEY = "33e90c56a74544eba7d39655b4f111e8";

fetch(`https://api.rawg.io/api/games?search=hollow knight&key=${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    const oyun = data.results[0];
    const html = `
      <h2 class="text-center header2Custom">${oyun.name}</h2> 
       <p><strong>Çıkış:</strong> ${oyun.released} - Puan: ${oyun.rating}/5</p>
      <img src="${oyun.background_image}" class="mx-4 yumusakResimCustom" width="90%" width="300" height="225"d><br/>
     <br>

    `;
    document.getElementById("oyunApi").innerHTML = html;
  })
  .catch(err => {
    document.getElementById("oyunApi").innerText = "Hata oluştu: " + err;
  });


  
 // ilgi alanım sayfası için
     //tüm isimleri bir diziye atar
     const oyunIsimleri = [
      "The Witcher 3: Wild Hunt",
      "Celeste",
      "League Of Legends",
      "Everhood",
      "Undertale",
      "Cuphead",
      "Age of Empires II: Definitive Edition",
      "Terraria",
      "Titan Souls",
      "R.E.P.O.",
      "Lethal Company",
      "Left 4 Dead 2",
      "Inside",
      "Valheim",
      "Minecraft"
      


    ];

    //oyunlarApi olan elemanı bulur ve oyunlarDiv objectine atar
    const oyunlarDiv = document.getElementById("oyunlarApi");

    //sayfa yüklendikten sonra, parametre almadan gider oyunIsımleri arrayinin tüm elemanları için oyunBilgisiGetir fonksiyonunu çalıştırır
    window.addEventListener("DOMContentLoaded", () => {
      oyunIsimleri.forEach(oyunAdi => oyunBilgisiGetir(oyunAdi)); //foreach döngüsü gibi çalışır her bir eleman için aynı işi yapar
      setTimeout(() => {
        oyunlarDiv.innerHTML = "";
    }, 420); //0.42 saniye sonra txt yi siler
    });
    

    function oyunBilgisiGetir(oyunAdi) {
      const url = `https://api.rawg.io/api/games?search=${encodeURIComponent(oyunAdi)}&key=${API_KEY}`;

      fetch(url) //sayfaya http isteği gönderir 
        .then(res => res.json()) //json formatına çevirir
        .then(data => {
          const oyun = data.results[0];  //arama sonuçlarındaki (api sitesindeki) ilk sıradaki elemanı veirr
          if (oyun) {
            const kart = document.createElement("div");
            kart.classList.add("oyun-karti");
            kart.innerHTML = `
              <img src="${oyun.background_image}" alt="${oyun.name}">
              <h3>${oyun.name}</h3>
              <p><strong>Çıkış:</strong> ${oyun.released}</p>
              <p><strong>Puan:</strong> ${oyun.rating}/5</p>
            `;
            oyunlarDiv.appendChild(kart);
          } else {
            const hataKart = document.createElement("div");
            hataKart.classList.add("oyun-karti");
            hataKart.innerHTML = `<p><strong>"${oyunAdi}"</strong> oyunu bulunamadı.</p>`;
            oyunlarDiv.appendChild(hataKart);
          }
        })
        .catch(err => {
          const hataKart = document.createElement("div");
          hataKart.classList.add("oyun-karti");
          hataKart.innerHTML = `<p><strong>"${oyunAdi}"</strong> için hata oluştu.</p>`;
          oyunlarDiv.appendChild(hataKart);

          
        });
    }