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
    document.getElementById("sonuc").innerHTML = html;
  })
  .catch(err => {
    document.getElementById("sonuc").innerText = "Hata oluştu: " + err;
  });