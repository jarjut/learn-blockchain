class Tree {
  constructor() {
      this.root = null
  }

  addNode(node, parent = this.root) {
      if (this.root == null) {
          this.root = node
          return
      }

      if (node.data > parent.data) {
          parent.right ? this.addNode(node, parent.right) : parent.right = node
      } else {
          parent.left ? this.addNode(node, parent.left) : parent.left = node
      }
  }

  hasNode(data, parent = this.root) {
      if (this.root == null) return false

      if (parent == null) return false

      if (data === parent.data) return true

      if (data > parent.data) {
          return this.hasNode(data, parent.right)
      } else {
          return this.hasNode(data, parent.left)
      }
  }
}

module.exports = Tree;