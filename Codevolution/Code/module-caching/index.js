const superHero = require('./super-hero');

const batman = new superHero('Batman', 'Martial Arts');
batman.display();

const superman = new superHero('Superman', 'Flight');
superman.display();

const newSuperHero = require('./super-hero');
const wonderWoman = new newSuperHero('Wonder Woman', 'Super Strength');
wonderWoman.display();

console.log('Module Caching Example Completed');