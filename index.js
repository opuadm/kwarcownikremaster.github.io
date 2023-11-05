var button = document.getElementById("kwarcownik"),
count = 0;
let kasa = 1;
button.onclick = function() {
  count += kasa;
  document.getElementById("score").innerHTML = "KWARC: " + count;
};
let kwarcownik = "artoks";
const kwarcownicy = ["Baza1", "Baza2", "Wagner", "Artoks", "Naczi", "Artoks2", "Artoks3"];
const kwarcownicykasa = [10, 50, 120, 250, 520, 750, 835];
let potrzebna = kwarcownicykasa[0];
let obecny = 0;
var sklep = document.getElementById("sklep");
sklep.onclick = function() {
  if (count >= potrzebna) {
    count = count - potrzebna;
    obecny += 1;
    document.getElementById("sklep").innerHTML = "KUP: " + kwarcownicy[obecny + 1] + ", " + kwarcownicykasa[obecny];
  }
  else {
    alert("masz za malo kwarcu");
  }
  document.getElementById("obecny").innerHTML = "OBECNY KWARCOWNIK: " + kwarcownicy[obecny];
  potrzebna = kwarcownicykasa[obecny];
  document.getElementById("score").innerHTML = "SCORE: " + count;
  if (obecny == 1) {
    document.getElementById("kwarc").src = "assets/kwarcownik_rl_1.png";
    kasa = 1.5;
  }
  else if (obecny == 2) {
    document.getElementById("kwarc").src = "assets/Zrzut_ekranu_465.png";
    kasa = 2;
  }
  else if (obecny == 3) {
    document.getElementById("kwarc").src = "assets/kwarcownik_artoks.png";
    kasa = 3.5;
  }
  else if (obecny == 4) {
    document.getElementById("kwarc").src = "assets/kwarcownik_naczi.png";
    kasa = 5;
  }
  else if (obecny == 5) {
    document.getElementById("kwarc").src = "assets/3dgifmaker27058.gif";
    kasa = 8;
  }
  else if (obecny == 5) {
    document.getElementById("kwarc").src = "assets/3dgifmaker04823.gif";
    kasa = 10;
  }
  else {
    alert("wystąpił błąd (skill issue)")
  }
};
