import {Component} from "react";
import "./App.css";





class App extends Component {
  constructor(props) {
    super(props);

    let first = [];

    let numBoxes = 24;
    
    for (let i = 0; i <= numBoxes; i++) 
{
 first.push({
  id: i,
  color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
}) 
}
    // set default state

this.state = { boxes: first}



    // bind methods to this

   this.handleBoxClick = this.handleBoxClick.bind(this);

  }

  getRandomColor() {
    return Math.round(Math.random() * 255) }
    
    handleBoxClick(event) {
      let newBoxes = this.state.boxes.map((box) =>{
        if (box.id == event.target.id) {
          box.color = this.getRandomColor()
        }
   return box 
      })
      this.setState({boxes: newBoxes})
    }

  render() {
    
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>React: State and Props</h1>
        <div className="App">
          
          { 
          this.state.boxes.map((box) => {
            return <button id={box.id} key={box.id} onClick={this.handleBoxClick}> {box.color}</button>
          }) 
          
          }</div>
      </main>
    );
  }
}

export default App;
