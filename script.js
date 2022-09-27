//LinkedList factory, which will represent the full list.
function linkedListFactory() {
  let headNode = null;
  const tail = () => {
    let pointer = headNode;
      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      return pointer;
  }
  let length = 0;

  return {
    append(value) {
      length++;
      const newNode = nodeFactory(value)
      if (headNode === null) {
        headNode = newNode
        return newNode;
      }
      let tailNode = tail()
      tailNode.nextNode = newNode;
      return newNode;
    },

    prepend(value) {
      length++;
      let temp = headNode;
      headNode = nodeFactory(value, temp)
      return headNode;
    },

    size() {
      return length;
    },

    head() {
      return headNode;
    },

    tail,

    at(index) {
      let pointer = headNode;
      for (i = 0; i < index; i++) {
        pointer = headNode.nextNode;
      }
      return pointer;
    },

    pop() {
      length--;
      let pointer = headNode;
      while (pointer.nextNode.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = null;
    },

    contains(value) {
      let pointer = headNode;
      while (pointer.nextNode !== null) {
        if (pointer.value() === value) {
          return true 
        }
        pointer = pointer.nextNode;
      }
      return false
    },

    find(value) {
      let pointer = headNode;
      let index = 0;
      while (pointer.nextNode !== null) {
        if (pointer.value() === value) {
          return index;
        }
        index++;
        pointer = pointer.nextNode;
      }
      return null
    },

    toString() {
      let pointer = headNode;
      let message = '';
      while (pointer.nextNode !== null) {
        message += `( ${pointer.value()} ) -> `
        pointer = pointer.nextNode;
      }
      message += `( ${pointer.value()} )`
      
      return message
    } 

  }
}

//Node factory, containing a value function and a link to the nextNode, set both as null by default.
function nodeFactory(value = null, nextNode = null) {
  return {
    value() {
      return value;
    },
    nextNode: nextNode
  }
}