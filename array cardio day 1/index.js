const investors = [
	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ first: 'Isacc', last: 'Newton', year: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
	{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = [
	'Beck, Gleen',
	'Becker, Carl',
	'Beckett, Samuel',
	'Beddoes, Mick',
	'Beecher, Henry',
	'Beethoven, Ludwig',
	'Begin, Menachem',
	'Belloc, Hilaire',
	'Bellow, Saul',
	'Benchley, Robert',
	'Benenson, Peter',
	'Ben-Gurion, David',
	'Benjamin, Walter',
	'Benn, Tony',
	'Bennington, Chester',
	'Benson, Leana',
	'Bent, Silas',
	'Bentsen, Lloyd',
	'Berger, Ric',
	'Bergman, Ingmar',
	'Berio, Luciano',
	'Berle, Milton',
	'Berlin, Irving',
	'Berne, Eric',
	'Bernhard, Sandra',
	'Berra, Yogi',
	'Berry, Halle',
	'Berry, Wendell',
	'Bethea, Erin',
	'Bevan, Aneurin',
	'Bevel, Ken',
	'Biden, Joseph',
	'Bierce, Ambrose',
	'Biko, Steve',
	'Billings, Josh',
	'Biondo, Frank',
	'Birrel, Augustine',
	'Black, Elk',
	'Blair, Robert',
	'Blair, Tony',
	'Blake, William',
];

// Investors that were born in the 1500

const invertors1500 = investors.filter(
	(investor) => investor.year >= 1500 && investor.year <= 1600
);
console.log(invertors1500);

// Array of firt and last names of inventors

const fullName = investors.map((name) => ({
	first: name.first,
	last: name.last,
}));

console.log(fullName);

// sort the investors by birthdate, oldest to youngest

const sortOfAge = investors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(sortOfAge);

const howLongTheyLive = investors.reduce((acc, item) => {
	const object = {
		firts: item.first,
		last: item.last,
		lived: item.passed - item.year,
	};

	acc.push(object);

	return acc;
}, []);

console.log(howLongTheyLive);

const ordered = howLongTheyLive.sort((a, b) => (a.lived > b.lived ? 1 : -1));
console.table(ordered);
