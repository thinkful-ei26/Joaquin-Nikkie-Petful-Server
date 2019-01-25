'use strict';
//Creates a node containing the data and a reference to the next item
class _Node {
  constructor(value) {
    (this.value = value), (this.next = null), (this.prev = null);
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    //create a node with the data that you want to add to the queue
    const node = new _Node(data);

    //if the queue is empty,
    //make the node the first node on the queue
    if (this.first === null) {
      this.first = node;
    }
    //if there is something on the queue already
    //then take the node that is currently at the end of the queue
    //and link it to the new node
    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    //make the first item on the queue to be the
    //the item that is next on the line
    // the item after the current first item

    const node = this.first;
    this.first = node.prev;

    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }

    // return;
  }
}
// *********HELPER FUNCTIONS
function peek(queue) {
  let node = queue.first;
  return node.value;
}
function isEmpty(queue) {
  //helper function to check if queue is empty
  let top = queue.first;
  if (!top) return true;
  else return false;
}
// function display(queue) {
//   let newqueue = queue;
//   //to display the queue
//   while (!isEmpty(newqueue)) {
//     console.log(newqueue.pop());
//   }
// }

function main() {
  let dogQ = new Queue();
  let catQ = new Queue();
  dogQ.enqueue({
    imageURL:
      'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription:
      'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  });
  dogQ.enqueue({
    imageURL:
      'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription:
      'A smiling golden-brown golden retreiver listening to music.',
    name: 'Mr Dog',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  });
  catQ.enqueue({
    imageURL:
      'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription:
      'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  });
  catQ.enqueue({
    imageURL:
      'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription:
      'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Stuffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  });
  console.log(dogQ.dequeue());
  console.log(peek(dogQ));
  console.log(peek(catQ));
  console.log(isEmpty(dogQ));
}

main();

module.exports = {Queue, peek, isEmpty};
