class MerkleTree {
  constructor(leaves, concat) {
      this.leaves=leaves,
      this.concat=concat
  }
  getRoot() {
      let leaves = [...this.leaves]

      while (leaves.length > 1) {
          const temp = []
          for(let i = 0; i < leaves.length; i +=2) {
              if (leaves[i+1]) {
                  temp.push(this.concat(leaves[i],leaves[i+1]))
              } else {
                  temp.push(leaves[i])
              }
          }
          leaves = temp
      }

      return leaves[0]
  }

  getProof(index) {
      const proof = []
      let proofIndex = index

      let leaves = [...this.leaves]

      while (leaves.length > 1) {
          if (proofIndex % 2 === 1) {
              proof.push({
                data: leaves[proofIndex - 1],
                left: true
              })
          } else {
            if (leaves[proofIndex + 1]) {
              proof.push({
                data: leaves[proofIndex + 1],
                left: false
              })
            }
          }

          proofIndex = Math.floor(proofIndex / 2)

          const temp = []
          for(let i = 0; i < leaves.length; i +=2) {
              if (leaves[i+1]) {
                  temp.push(this.concat(leaves[i],leaves[i+1]))
              } else {
                  temp.push(leaves[i])
              }
          }
          leaves = temp
      }

      return proof
  }
}

module.exports = MerkleTree;