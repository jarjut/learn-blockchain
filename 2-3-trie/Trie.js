const TrieNode = require('./TrieNode');

class Trie {
  constructor() {
    this.root = new TrieNode(null)
  }

  insert(word) {
    let lastNode = this.root
    for (const char of word) {
      if (lastNode.children[char]) {
        lastNode = lastNode.children[char]
      } else {
        const node = new TrieNode(char)
        lastNode.children[char] = node
        lastNode = node
      }
    }
    lastNode.isWord = true
  }

  contains(word) {
    let lastNode = this.root
    for (const char of word) {
      if (lastNode.children[char]) {
        lastNode = lastNode.children[char]
      } else {
        return false
        break
      }
    }

    return lastNode.isWord
  }
}

module.exports = Trie;