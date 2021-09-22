const {connect} = require('./client');
const {setupInput} = require('./input');

console.log("Conecting ...");
connect();


setupInput();