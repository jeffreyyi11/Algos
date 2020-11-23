// https://www.cs.usfca.edu/~galles/visualization/BST.html

class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

BST.insert(new BSTNode(10));

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    };

    // recursive
    insert(node, tree){
        if(tree === undefined){
            tree = this.root;
        };

        // tree is null, which means the tree is empty (move root)
        if (tree === null) {
            this.root = node;
            return;
        }
        // find leaf node and add
        if (tree.val > node.val) {
            if(tree.left === null) {
                tree.left = node;
                return;
            } else {
                return this.insert(node, tree.left);
            }
        } else if (tree.val < node.val) {
            if(tree.right === null) {
                tree.right = node;
                return;
            } else {
                return this.insert(node, tree.right);
            }
        }
    };

    getLargestFromSubtree(tree){
        // if no tree, tree is root
        if(tree === undefined){
            tree = this.root;
        }

        // ...
    }

    getSmallestFromSubtree(tree){
        // if no tree, tree is root
        if(tree === undefined){
            tree = this.root;
        }

        // ...
    }
};