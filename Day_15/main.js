'use strict';

class Root extends React.Component{
    constructor(props){
        super(props);
        this.state = {text:"Hello World!"}
    }

    render(){
        return React.createElement('h1', null, this.state.text);
    }
}

const domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(Root), domContainer);