function verifyProof(proof, node, root, concat) {
  let rootToVerify = node;
  for (const {data, left} of proof) {
    rootToVerify = left ? concat(data, rootToVerify) : concat(rootToVerify, data);
  }

  return rootToVerify === root;
}

module.exports = verifyProof;
