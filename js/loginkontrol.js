
 window.addEventListener('DOMContentLoaded', () => {

//yanlış girilirse bölümü
    const hataDiv = document.getElementById('hataMesaji');
    // URL de yazanı urlparam objectine atar
    const urlparam1 = new URLSearchParams(window.location.search);

    // error=1 ise çalıştırır
    if (urlparam1.get('error') === '1') {
        hataDiv.style.display = 'block';
        setTimeout(() => {  //setTimeOut bir fonksiyon ve bir de zaman parametresi alır ilk fonksiyonumuz 3000 milisaniye geçtikten sonra çalıçacak demek oluyor
        hataDiv.style.display = 'none';
        }, 3000); // 3 saniye sonra kaybolur
    }
   

//doğru girilirse bölümü
    const urlparam2 = new URLSearchParams(window.location.search);
    const hosgeldinDiv = document.getElementById('hosgeldinMesaji');

    // URL'den kullanıcı adını al ve localStorage'a kaydet
    const ad = urlparam2.get('ad');
    if (ad) {
        localStorage.setItem('kullaniciAdi', ad);
    }

    // localStorage'dan kullanıcı adını al
    const kullaniciAdi = localStorage.getItem('kullaniciAdi');

    // welcome=1 ise mesajı göster
    if (urlparam2.get('welcome') === '1' && kullaniciAdi) {
        hosgeldinDiv.innerText = `Hoş geldiniz, ${kullaniciAdi}!`;
        hosgeldinDiv.style.display = 'block';

        setTimeout(() => {
            hosgeldinDiv.style.display = 'none';
        }, 3000);
    }


     const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("sifre");

  form.addEventListener("submit", function (e) {
    // Önceki hataları temizle
    document.querySelectorAll(".error-msg").forEach(el => el.remove());

    let valid = true;

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    function showError(input, message) {
      const div = document.createElement("div");
      div.className = "text-danger error-msg mt-1";
      div.innerText = message;
      input.parentNode.appendChild(div);
      valid = false;
    }

    if (email === "") {
      showError(emailInput, "Email boş bırakılamaz.");
    } else if (!/^[\w\.-]+@org\.sakarya\.edu\.tr$/.test(email)) {
      showError(emailInput, "Email '@org.sakarya.edu.tr' formatında olmalı.");
    }

    if (password === "") {
      showError(passwordInput, "Şifre boş bırakılamaz.");
    }

    if (!valid) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" }); // yukarı kay
    }
  });

     });


  
