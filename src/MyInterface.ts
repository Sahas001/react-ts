interface MyInterface {
    name: string;
    num: number;
}


const echo = <Value>(v: Value): void => {
    
    return console.log(v);
}

echo('Hello World')

const echoLength = <Value extends {length: number}>(v: Value) => {
    console.log(v.length)
    return v.length;
}



echoLength('Hello');
echoLength('');

// echoLength(2);
// echoLength({});
