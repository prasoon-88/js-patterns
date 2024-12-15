const observers = new Set();

const observable = {
    notify:(data)=>{
        observers.forEach((observer)=>observer(data))
    },
    subscribe:(func)=>{
        observers.add(func)
    },
    unsubscribe:(func)=>{
        if(observers.has(func)){
            observers.delete(func)
        } else{
            throw new Error(`${func ?? 'Function'} is not curr subscirbed'`)
        }
    }
}

export default Object.freeze(observable)