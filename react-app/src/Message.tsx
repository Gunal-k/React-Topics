//PascalCasing
function Message(){
    //JSX : JavaScript XML
    //React.createElement('div', null, React.createElement('h1', null, 'Hello, World'))
    const name = "Gunal";
            if (name) {
                return <h1>Hello, {name}</h1>;
            } else {
                return <h1>Hello, World</h1>;
            }
}

export default Message;
// This code defines a React functional component named `Message` that returns a JSX element.