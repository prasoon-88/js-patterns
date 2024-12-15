let instance = null

// A common class for creating counting instances
class Couter{
    constructor(){
        if(instance){
            throw new Error('You can only create a single instance of counter')
        }
        this.counter = 0
        instance = true;
    }

    getCount(){
        return this.counter
    }

    increment(){
        return ++this.counter
    }

    decrement(){
        return --this.counter
    }
}

// For Stooping Modifiablity
const singletonCounter = Object.freeze(new Couter())

export default singletonCounter;