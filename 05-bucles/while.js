"use strict";

var year = 2018;

while (year <= 2051) {
  console.log("Estamos en el año: " + year);
  year++;
}

while (year !== 1991) {
  console.log("Estamos en el año: " + year);

  if (year === 2000) {
    break;
  }

  year--;
}
