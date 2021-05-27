


class Node {
  constructor(color, number, next = null) {
    this.color = color;
    this.number = number;
    this.next = next;
  }
  getData() {
     return `${this.color} - ${this.num}`;
  }
}

class Stack{
    constructor (limit =20){
        this.top = null
        this.limit = limit 
        this.size = 0

    }
    isEmpty = () => this.size === 0

    isFull = () => this.size === this.limit
    
    peek = () => this.top.getData()

    pop = () => {
        if (this.isEmpty())
        console.log("the stack is empty ")
        else {
            const removedNode = this.top
            this.top = removedNode.next
            this.size--
            return removedNode.data
        }
    
    }
     push = (color,number)=> {
         if (this.isFull())
         console.log ("full stack")
         else {
             const newNode = new Node(color,number)
             newNode.next = this.top
             this.top = newNode
             this.size++
         }
     }
     displayData= () => {
         let currentNode = this.top
         while(currentNode){
             console.log(`number : ${currentNode.number} , color : ${current.Node.color}`)
         }
     }
}
const colors = ["red", "blue", "green", "yellow"];
const numbers = [ 1,2,3,4,5,6,7,8,9]
const random = (array)=> {
    const index = Math.floor(Math.random() * array.length)
    return array [index]

}
const cardsStack = new Stack(20)
const cardsArray = []
const cards = new Stack (20)

while (!cards.isFull () ){
    const number = random(numbers)
    const color = random(colors)
    if(!cardsArray.includes(`${color},${number}`)) {
        cardsStack.push(color,number)
        cardsArray.push (`${color},${number}`)
    }
}
console.log ("Deck :")
cardsStack.displayData()
let palyer1 = []
let palyer2 =[]

let i = 0

while (i<5){

    player1.push(cardsStack.pop())
    player2.push(cardsStack.pop())
    i++
}

console.log ("player cards:" ,player1)
console.log ("player cards:",player2)
