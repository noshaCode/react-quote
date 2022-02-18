import './App.css';
import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello React</h1>
//     </div>
//   );
// }



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isShowing: false,
      title : ""
    }
    
  }

  getQuote = () => {
    fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
    .then(response => response.json())
    .then(data => this.setState({ title: data.data[0].quoteText }));
  }
  
  componentDidMount(){
    this.getQuote()
  }

  clickHandler = () => {
    this.getQuote()
  }

  render() {
    return (
      <div className="App">
        <h1>Word of the day</h1>
        
        <p>{this.state.title}</p>

        
        
        <button onClick={this.clickHandler}>show me</button>

      </div>
    );
  }

}


export default App
