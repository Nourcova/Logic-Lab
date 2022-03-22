// Problem 1
const getProperties = (args) => {
    let keys = Object.keys(args);
    return keys;
}
console.log(getProperties({
    'name': 'Codi',
    'email': 'codi@email.com'
}));


// Problem 2
const isPlainObject = (args) => {
    if (typeof (args) == 'object') {
        if (Array.isArray(args) === false && args !== null) {
            return true
        }
    }
    return false;
}
console.log(isPlainObject({ 'name': 'name' }));


//Problem 3
const modifyObject = (object, func) => {
    object['isObject'] = isPlainObject(object);

    object['getPropertiesNb'] = getProperties(object).length;

    return object;
}
console.log(modifyObject({ 'name': 'codi', 'email': 'code.tech' }));


//Problem 4
const makePairs = (obj) => {
    let array = [];
    for (const [key, value] of Object.entries(obj)) {
        array.push([key, value]);
    }
    return array;
}
console.log(makePairs({ a: 1, b: 2 }));


//Problem 5
const without = (object, properties) => {
    properties.map((property) => {
        delete object[property];
    })
    return object;
}
console.log(without({ a: 1, b: 2, c: 3 }, ['a', 'b']));


//Problem 6
const isEmpty = (object) => {
    if (isPlainObject(object) && Object.keys(object).length === 0) {
        return true
    }
    return false;
}
console.log(isEmpty({ a: 1 }))


//Problem 7
const isEqual = (obj1, obj2) => {

    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
       return true;
    }
   return false;
}
const obj2 = { a: 1, b: 2, c: 3 };
const obj1 = { a: 1, b: 2, c: 3 };
console.log(isEqual(obj1,obj2));


//Problem 8
const object1 = {a:1,b:2};
const object2 = {c:1,b:2};

const newObject1 = makePairs(object1);
const newObject2 = makePairs(object2);

newObject1.map((element1)=>{
    newObject2.map((element2)=>{
        if(isEqual(element1,element2)){
            delete newObject1[element1[0]];
        }
    })
})

