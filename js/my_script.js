const generaTabellone = function () {
  const tabellone = document.getElementById("tabellone");
  let contatore = 1;

  for (let i = 0; i < 10; i++) {
    let riga = tabellone.insertRow();
    for (let j = 0; j < 10; j++) {
      if (contatore === 91) {
        break;
      }
      let cella = riga.insertCell();
      cella.innerText = contatore++;
    }
  }
};
const generaNumRandom = function () {
  return Math.floor(Math.random() * 90) + 1;
};

const illuminaCella = function () {
  const numeroRadom = generaNumRandom();
  const tabellone = document.getElementById("tabellone");
  const celle = tabellone.getElementsByTagName("td");
  for (let i = 0; i < celle.length; i++) {
    const numCella = parseInt(celle[i].innerText, 10);
    if (numeroRadom === numCella) {
      celle[i].classList.add("illumina-numero");
    }
  }
};
generaTabellone();
