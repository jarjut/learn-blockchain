const Blockchain = require('./blockchain-data-structure/Blockchain');
const Block = require('./blockchain-data-structure/Block');

blockchain = new Blockchain();
blockchain.addBlock(new Block("Dan"));
blockchain.addBlock(new Block("Peter"));
blockchain.addBlock(new Block("James"));

console.log(blockchain.isValid()); // true