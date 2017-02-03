const Node = require('./node');

class LinkedList {
    constructor() {
	    this.length = 0;
	    this._head = null;
	    this._tail = null;		    
    }

    append(data) {
        var node = new Node(data); 
        
        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }
        
        this.length++;
        return this;	    
    }

    head() {
	    return this._head.data;
    }

    tail() {
	    return this._tail.data;
    }

    at(index) {
	    var currentNode = this._head;
        var count = 0;
        
        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode.data;	    
    }

    insertAt(index, data) {
        var node = new Node(data);
        var count = 0;
        
        var currentNode = this._head;
        while (count < index -1) {
            currentNode = currentNode.next;
            count++;
        }
        
        if (currentNode != null)
        {
            if (currentNode == this._tail)
            {
                this._tail.next = node;
                node.prev = this._tail;
                this._tail = node;
            }
            currentNode.next.prev = node;
            node.next = currentNode.next;
            
            currentNode.next = node;
            node.prev = currentNode;
        }
        else
        {
            this._head = node;
            this._tail = node;
        }
        return this;	    
    }

    isEmpty() {
	    if (this.length == 0){
		    return true;
	    }
	    else{
		    return false;
	    }	    
    }

    clear() {
	    this.length = 0;
	    this._head.data = null;
	    this._tail.data = null;
	    return this;	    
    }

    deleteAt(index) {
        if (this.length > 1)
        {
            if (index == 0)
            {
                this._head = currentNode.next;
            }
            else
            {
                var currentNode = this._head;
                var count = 0;
                
                while (count < index)
                {
                    currentNode = currentNode.next;
                    count++;
                }
                
                if (currentNode == this._tail)
                {
                    currentNode.next = null;
                    this._tail = currentNode.prev;
                }
                else if (currentNode != null)
                {
                    currentNode.prev.next = currentNode.next;
                    currentNode.next.prev = currentNode.prev;
                }
            }
        } 	
        return this;	    
    }

    reverse() {
        if (this.length > 1){
            var count = 0;
            
            var currentNodeStart = this._head;
            var currentNodeEnd = this._tail;
            
            while (count < this.length/2) {
                
                var tempData = currentNodeStart.data;
                currentNodeStart.data = currentNodeEnd.data;
                currentNodeEnd.data = tempData;
                
                currentNodeStart = currentNodeStart.next;
                currentNodeEnd = currentNodeEnd.prev;
                count++;
            }
        }
        return this;	    
    }

    indexOf(data) {
	    var currentNode = this._head;
        var count = 0;
        
        while (count < this.length) {
          if  (currentNode.data == data) {
	          return count;
          }
          else {
	          currentNode = currentNode.next;
              count++;
           } 
          
        }
        return -1;		    
    }
}

module.exports = LinkedList;
