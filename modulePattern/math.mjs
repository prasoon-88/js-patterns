const secret = 'xyz' // Provide Encapsulation .. this is not accessible out of module scope 


// The Below func are explictly exported using 'export' keyword
export function add(...args){
    return args.reduce((acc,val)=>acc+val)
}
 
export function subtract(...args){
     return args.reduce((acc,val)=>acc-val)
}
 
export function multiply(...args){
     return args.reduce((acc,val)=>acc*val,1)
}