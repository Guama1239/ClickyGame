import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import Navbar from "./components/Navbar";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
  };
  correctGuesses =0;
  record =0;
  score=0

  removeFriend = id => {
    this.setState({clicked:true});
   //console.log(this.state.friends);
    // Filter this.state.friends for friends with an id not equal to the id being removed
   if(!this.state.friends.clicked){
     // this.setState.friends.clicked({clicked : true});
      const score = this.score++;console.log(score);
    const friends= this.state.friends.sort(()=>(Math.random()-0.5));
    //const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
    console.log(friends);
  }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Navbar />
      <Wrapper>
        <Title>Click only once on any image's x to score, click twice on the same image you lose!</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            clicked={friend.clicked}
            //clicked={friend.clicked=true}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
