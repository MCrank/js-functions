const printToDom = (stringToPrint, divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += stringToPrint;
};

let bandNumber = 1;

const takeNumber = bandName => {
  /*
    Write your awesome code here. See comments
    below for what should be returned.
  */

  printToDom(`<p>${bandNumber}. ${bandName}</p>`, 'bandlist'); // you should already have this function written from the class lecture
  bandNumber++;
};

takeNumber('Galactic Scum'); // This should display "1. Galactic Scum" in the DOM
takeNumber('Underdogs'); // This should display "2. Underdogs" in the DOM
takeNumber('Pink Floyd');
takeNumber('Butthole Surfers');
takeNumber('AC/DC');
takeNumber('Def Leppard');
