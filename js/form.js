let jsValid = false;
let vueValid = false;
let butonaBasildi = false;

function jsiledogrula() {
  const ad = document.getElementById("ad");
  const soyad = document.getElementById("soyad");
  const telefon = document.getElementById("telefon");
  const email = document.getElementById("email");
  const yas = document.getElementById("yas");
  const konu = document.getElementById("konu");
  const cinsiyet = document.querySelector('input[name="cinsiyet"]:checked');
  let isValid = true;
  butonaBasildi = true;

  document.querySelectorAll(".error-msg").forEach(el => el.remove());

  function showError(input, message) {
    const div = document.createElement("div");
    div.className = "text-danger error-msg";
    div.innerText = message;
    input.parentNode.appendChild(div);
    isValid = false;
  }

  if (ad.value.trim() === "") showError(ad, "Ad boş bırakılamaz.");
  if (soyad.value.trim() === "") showError(soyad, "Soyad boş bırakılamaz.");
  if (!/^05\d{9}$/.test(telefon.value)) showError(telefon, "Telefon 05 ile başlamalı ve 11 haneli olmalı.");
  if (!/^[\w\.-]+@org\.sakarya\.edu\.tr$/.test(email.value)) showError(email, "Mail '@org.sakarya.edu.tr' formatında olmalı.");
  if (yas.value <= 0 || yas.value > 120) showError(yas, "Geçerli bir yaş gir.");
  if (konu.value.trim() === "") showError(konu, "Konu boş bırakılamaz.");
  if (!cinsiyet) showError(document.querySelector('input[name="cinsiyet"]').parentNode, "Cinsiyet seçiniz.");

    // Gönder butonunu aktif/pasif yap
  if (isValid) {
    gonderBtn.removeAttribute("disabled");
  } else {
    gonderBtn.setAttribute("disabled", "disabled");
  }

  return isValid;
}



  //vue js ile dogrulama

const app = new Vue({
  el: '#iletisimID',
  data: {
    form: {
      ad: '',
      soyad: '',
      telefon: '',
      email: '',
      yas: '',
      aciliyet: 5,
      basvuruNedeni: 'oneri',
      cinsiyet: '',
      kodlama: [],
      renk: '#000000',
      tarih: '',
      saat: '',
      dosya: null,
      konu: ''
    },
    errors: {}
  },
  computed: {
    isValid() {
      this.errors = {};

      if (!this.form.ad.trim()) this.errors.ad = 'Ad boş bırakılamaz.';
      if (!this.form.soyad.trim()) this.errors.soyad = 'Soyad boş bırakılamaz.';
      if (!/^05\d{9}$/.test(this.form.telefon)) this.errors.telefon = 'Telefon 05 ile başlamalı ve 11 haneli olmalı.';
      if (!/^[\w\.-]+@org\.sakarya\.edu\.tr$/.test(this.form.email)) this.errors.email = "Mail '@org.sakarya.edu.tr' formatında olmalı.";
      if (!this.form.yas || this.form.yas <= 0 || this.form.yas > 120) this.errors.yas = 'Geçerli bir yaş gir.';
      if (!this.form.cinsiyet) this.errors.cinsiyet = 'Cinsiyet seçiniz.';
      if (!this.form.konu.trim()) this.errors.konu = 'Konu boş bırakılamaz.';

      return Object.keys(this.errors).length === 0;
    }
  },
  methods: {
    vueiledogrula() {
      if (!this.isValid) {
        alert(Object.values(this.errors).join('\n'));
        vueValid = false;
      } else {
        vueValid = true;
      }
      this.toggleGonderBtn();
    },

    toggleGonderBtn() {
      const gonderBtn = document.getElementById("gonderBtn");
      if (jsValid || vueValid) {
        gonderBtn.removeAttribute("disabled");
      } else {
        gonderBtn.setAttribute("disabled", "disabled");
      }
    },

    onFileChange(e) {
      this.form.dosya = e.target.files[0];
    }
  },

  inputDegisti() {
    // Input değişince butonu kapat, valid durumları sıfırla
    jsValid = false;
    vueValid = false;
    this.toggleGonderBtn();
  }
});


//her kutucuğu ellediğimizde gonder buttonu tekrar kapanıyor
const inputs = [
  document.getElementById("ad"),
  document.getElementById("soyad"),
  document.getElementById("telefon"),
  document.getElementById("email"),
  document.getElementById("yas"),
  document.getElementById("konu"), 
];

inputs.forEach(input => {
  input.addEventListener("input", () => {
    jsValid = false;
    vueValid = false;
    const gonderBtn = document.getElementById("gonderBtn");
    gonderBtn.setAttribute("disabled", "disabled");
  });
});
