class Transaction {
  constructor(inputUTXOs, outputUTXOs) {
    this.inputUTXOs = inputUTXOs;
    this.outputUTXOs = outputUTXOs;
  }

  execute() {
    const inputAmount = this.inputUTXOs.reduce((acc, inputUTXO) => acc + inputUTXO.amount, 0);
    const outputAmount = this.outputUTXOs.reduce((acc, outputUTXO) => acc + outputUTXO.amount, 0);
    if (inputAmount < outputAmount) {
      throw new Error("Insufficient funds!");
    }

    for (const inputUTXO of this.inputUTXOs) {
      if (inputUTXO.spent) {
        throw new Error("Input UTXO is already spent!");
      }
      inputUTXO.spend();
    }

    this.fee = inputAmount - outputAmount;
  }
}

module.exports = Transaction;