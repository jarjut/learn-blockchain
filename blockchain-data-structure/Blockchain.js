const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [ new Block('genesis') ];
    }

    addBlock(block) {
        const lastBlock = this.chain[this.chain.length - 1]
        block.setPreviousHash(lastBlock.toHash())
        this.chain.push(block)
    }

    isValid() {
        let valid = true
        for (let i = this.chain.length - 1; i > 0; i--) {
            const block = this.chain[i]
            const previousBlock = this.chain[i-1]
            if (block.previousHash.toString() !== previousBlock.toHash().toString()) {
                valid = false
            }
        }
        return valid
    }
}

module.exports = Blockchain;