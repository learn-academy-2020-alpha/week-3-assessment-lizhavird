// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1.
    
  //this sets the default state of all variables. in this case, the only variable is userInput which is set to an empty string (value).
  
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2.
    
  //this is setting the state of userInput to an event which occurs when a user types a value.
  
    this.setState({ userInput: e.target.value})
  }

  render(){
    // 3.
    
    // this is deconstructing the value of userInput, so we do not have to continuously recall this.state.userInput.
    
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. */}
          //
          onChange={ this.robot }
          {/* 5. */}
          
          //indicates the value of the input in the text box is what the user is typing. 
          
          value={ userInput }
        />

        <div>
          {/* 6. */}
          
          //creating a new div to render robot's output. 
          
          <GoodRobot
            {/* 7. */}
            
            //passes the deconstructed component of userInput (what user's have typed) to the child component of GoodRobot. 
            
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8.
      
      //creates a division on the page where certain elements can be displayed.
      
      <div>
        <h3>Good Robot</h3>
        {/* 9. */}
        
        //renders text on the page which says "I hear you saying"_____ (___= input which user has typed). "Is that correct?"
        
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10.

  //exports GoodRobot to other components
  
export default GoodRobot
