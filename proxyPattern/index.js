// Proxy and Reflect Pattern

// PROXY------------------------------------------------------------------------------
// -> Proxy acts as in interceptor or intermidiator.
// Pross
// -> it is primarly used for validation, logging, formatting, debugging, notification.
// -> We Can proxy as middlewares .
// Cons
// -> Executing Hanlder on every object interaction may lead to performance issue.

// REFLECT----------------------------------------------------------------------------
// -> Reflext is an namespace object that provides default behaviour methods of an object of how js handle 


const person = {
    name:"Prasoon Asati",
    age:20
}

const proxyPerson = new Proxy(person,{
    get:(target,prosperty)=>{
        if(prosperty in target) return Reflect.get(target,prosperty)
        return false
    },
    set(target,prosperty,value){
        if(!(prosperty in  target))  {
            throw(new Error(`${prosperty} does not exists in ${target}`))
        }
        switch(prosperty){
            case 'name':
                if(typeof value !== 'string'){
                    throw(new Error('name must be string'))
                }
                break
            case 'age':
                if(typeof value !== 'number'){
                    throw(new Error('age must be number'))
                }
                break
        }
        return Reflect.set(target,prosperty,value)
    }
})


// It Throws erros because name must be string that is being validaing in proxy
proxyPerson['name'] = 20
console.log(proxyPerson)
