// Huiswerk Koos Dorssers
// Gebruik array methoden voor alle onderstaande opdrachten

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 }
];

// 1. Filter de lijst op uitvinders die geboren zijn in de 16e eeuw
// Verwachte uitkomst:
// [{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }, { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }]

console.log("Opdracht 1:")
console.log("---------------------------------------------------------")
console.log(" ")

const inventors16Century = inventors.filter((inventor) => {
  return inventor.year >= 1500 && inventor.year < 1600;
})
console.log(inventors16Century);

console.log("---------------------------------------------------------")
console.log(" ")

// 2. Maak een array met daarin alle geboortejaren van de uitvinders
// Verwachte uitkomst: [1879, 1643, 1564, 1867, 1571, 1473, 1858, 1898, 1815, 1855, 1878, 1847];

console.log("Opdracht 2:")
console.log("---------------------------------------------------------")
console.log(" ")

const inventorsBirthyear = inventors.map((inventor) => {
  return inventor.year;
})
console.log(inventorsBirthyear);

console.log("---------------------------------------------------------")
console.log(" ")

// 3. Maak een array met daarin alle volledige namen van de uitvinders (dus voor- en achternaam als één string)
// Verwachte uitkomst: [ 'Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Marie Curie', 'Johannes Kepler', 'Nicolaus Copernicus', 'Max Planck', 'Katherine Blodgett', 'Ada Lovelace', 'Sarah E. Goode', 'Lise Meitner', 'Thomas Edison']

console.log("Opdracht 3:")
console.log("---------------------------------------------------------")
console.log(" ")

const inventorsFirstLastname = inventors.map((inventor) => {
  return inventor.first + ' ' + inventor.last;
})
console.log(inventorsFirstLastname);


console.log("---------------------------------------------------------")
console.log(" ")

// 4. Sorteer de uitvinders op geboortejaar, oplopend van oudste naar jongste uitvinder
// Verwachte uitkomst:
// [
//   { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//   { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//   { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//   { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//   { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 },
//   { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//   { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//   { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//   { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//   { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//   { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }
// ]

console.log("Opdracht 4:")
console.log("---------------------------------------------------------")
console.log(" ")

const inventorsSortBirthyear = inventors.sort((a, b) => a.year - b.year)
console.log(inventorsSortBirthyear);

console.log("---------------------------------------------------------")
console.log(" ")

// 5. Sorteer de uitvinders op hoeveel jaren ze geleefd hebben, van langste leven naar kortste leven
// Verwachte uitkomst:
// [
// { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
// { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
// { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
// { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 },
// { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
// { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
// { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
// { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
// { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
// { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
// { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
// { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 }
// ]

console.log("Opdracht 5:")
console.log("---------------------------------------------------------")
console.log(" ")
// als test de leeftijd van de inventors nog niet gesorteerd :
const inventorsAge = inventors.map((inventor) => {
  return inventor.first + ' ' + inventor.last + ' was ' + (inventor.passed - inventor.year) + ' jaar oud.';
})
console.log(inventorsAge)

// op leeftijd gesorteerd :
const inventorsSortAge = inventors.sort((a, b) => {
  return (b.passed - b.year) - (a.passed - a.year);
});
console.log(inventorsSortAge);

// zo kan het ook :
// inventors.sort((a,b) => {return (a.passed - a.year) - (b.passed - b.year)});
// console.log(inventors);


console.log("---------------------------------------------------------")
console.log(" ")


// 6. Vind de gegevens over de uitvinder wiens achternaam 'Edison' is.
// Verwachte uitkomst: { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 }

console.log("Opdracht 6:")
console.log("---------------------------------------------------------")
console.log(" ")

const edisonLastname = inventors.find((inventor) => {return inventor.last === "Edison"});
console.log(edisonLastname);

console.log("---------------------------------------------------------")
console.log(" ")