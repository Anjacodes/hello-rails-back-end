// Start with your code from last challenge.
class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  // setup head and tail
constructor() {
  this.head=null; 
  this.tail=null;
  this.length=0;
}
  
 add(number) {
        let newNode = new Node(number);

        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next_node = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

  get(index) {
        if(index < 0 || index >= this.length) return null;

        let counter = 0;
        let current = this.head;

        while(counter !== index) {
            current =current.next_node;
            counter++;
        }
        return current.value;
    }
  
  addAt(index, item) {
    if(index>0 && index >= this.length) return null;
        if(index == 0) {
            this.head = new Node(item, this.head);
            return;
        }

        let newNode = new Node(item);
        let current, previous;

        current = this.head;
        let count = 0;
        while(count < index) {
            previous = current;
            count++;
            current = current.next_node;
        }

        newNode.next_node = current;
        previous .next_node = newNode;

        this.length++;
    }
  remove(index) {
        if (index > 0 && index > this.length) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        if(index === 0) {
            this.head = current.next_node;
        } else {
            while(count < index) {
                count++;
                previous = current;
                current = current.next_node;
            }
            previous.next_node = current.next_node;
        }
        this.length--;
    }
}

const list = new LinkedList()

list.add(3)
list.add(5)
list.addAt(1, 11)
list.addAt(0, 13)

console.log(list.get(2))
// => 11

console.log(list.get(3))
// => 5

module.exports = LinkedList
