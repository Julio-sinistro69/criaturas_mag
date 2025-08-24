const Fada = require('./Fada');
const Dragao = require('./Dragao');
const Gnomo = require('./Gnomo');
const Slime = require('./Slime');

const fada = new Fada("Luminária");
const dragao = new Dragao("Smaug");
const gnomo = new Gnomo("Trufinha");
const slime = new Slime("Gloob");

console.log("=== Ação das Criaturas ===");
fada.agir();
dragao.agir();
gnomo.agir();
slime.agir();

console.log("\n=== Descanso das Criaturas ===");
fada.descansar();
dragao.descansar();
gnomo.descansar();
slime.descansar();
