import React from 'react';

// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class Option extends React.Component {
    changeData = () => {
        
    }
    render() {
    return (  
        <li><a onClick = {()=>this.props.changeFilter(this.props.type, this.props.name)} className={"dropdown-item"} href={"#"}>{this.props.name}</a></li>
    )
    }
}


export default Option;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
