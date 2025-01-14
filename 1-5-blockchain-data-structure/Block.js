const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(data, previousHash) {
        this.data = data
        this.previousHash = previousHash
    }

    setPreviousHash(hash) {
        this.previousHash = hash
    }

    toHash() {
        let dataHash = this.data
        if (this.previousHash) dataHash += this.previousHash
        return SHA256(dataHash)
    }
}

module.exports = Block;
