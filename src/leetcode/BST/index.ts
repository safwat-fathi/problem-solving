interface CompareFunction<T> {
  (a: T, b: T): number;
}

interface ITreeNode<T> {
  data: T;
  left: ITreeNode<T> | null;
  right: ITreeNode<T> | null;
}

class TreeNode<T> implements ITreeNode<T> {
  data: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(data: T, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

export class BST<T> {
  root: ITreeNode<T> | null;

  private compare: CompareFunction<T>;

  constructor(compareFn: CompareFunction<T>) {
    this.root = null;

    this.compare = compareFn;
  }

  public isEmpty() {
    return this.root === null;
  }

  // insertion
  public insert(value: T) {
    const newNode = new TreeNode(value);
    let currNode = this.root;

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      // walk down the tree to find a place to set the new node
      while (currNode !== null) {
        if (this.compare(value, newNode.data) < 0) currNode = currNode.left;
        else currNode = currNode.right;
      }

      currNode = newNode;

      // if (currNode.data !== newNode.data) return newNode;
    }
  }

  // private insertNode(value: T) {
  // 	let newNode: TreeNode<T> | null = null;
  // 	// const newNode = new TreeNode(value)
  // 	let currNode = this.root;

  //   // // if tree has no root yet
  //   // if (currNode === null) {
  //   //   this.root = new TreeNode(value);
  //   //   return;
  //   // }

  //   // walk down the tree until current node pointer is null
  //   while (currNode !== null) {
  // 		newNode = currNode

  //     if (this.compare(value, currNode.data) < 0) currNode = currNode.left ;
  //     else currNode = currNode.right;
  //   }

  // }
}
