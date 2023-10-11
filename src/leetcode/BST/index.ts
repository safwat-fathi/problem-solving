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
