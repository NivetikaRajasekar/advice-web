import axios from 'axios';
import React from 'react';
import './App.css';
class App extends React.Component{
    state = {advice: ''}; 

    componentDidMount(){
        // do its operation after react dom is mounted
        this.fetchAdvice(); //this - because its a method belongs to this class
    }
    fetchAdvice = () =>{
        axios.get("https://api.adviceslip.com/advice")
        .then((response) =>{ //response we are going to get
            // destructuring
            const {advice} = response.data.slip;
             this.setState({advice});
        })
        .catch((error) =>{ //error message 
            console.log(error);
        })
    }
    render(){
        const {advice}= this.state;
        return(
            <div className="app">
                <div className="card">
                    <h1 className="heading">
                        {advice}
                    </h1>
                    <button className='button' onClick={
                        this.fetchAdvice
                    }>
                        <span>GIVE ME ADVICE!</span>
                    </button>
                </div>

            </div>
        )
    }
}

export default App;

//there are some lifecycle methods in render, one of them
//is componentDidMount() which runs simulatenously with render;
/*The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM (Document Object Model).
 This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered */
 //axios is for getting data by api

 // above there advice have a local scope,
 // so we made it to a global scope by assigning that
 // to a state by setstate
 // trick: when the variable name and assigned value name
 // are same, we can use only one;