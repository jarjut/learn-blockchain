const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(data,previousHash) {
        this.data = data
        this.previousHash = previousHash
    }

    setPreviousHash(hash) {
        this.previousHash = hash
    }

    toHash() {
        return SHA256(this.data + this.previousHash)
    }
}

module.exports = Block;
