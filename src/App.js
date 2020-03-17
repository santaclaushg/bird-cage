import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("BirdStore")
@observer
class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.bird.value);
    const bird = this.bird.value;
    console.log(bird);
    const { BirdStore } = this.props;
    BirdStore.addBird(bird);
    this.bird.value = "";
  };

  render() {
    const { BirdStore } = this.props;
    console.log(BirdStore.birds);
    return (
      <div className="App">
        <h2>You have {BirdStore.birdCount} birds.</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            placeholder="Enter bird"
            ref={input => (this.bird = input)}
          />
          <button>Add bird</button>
        </form>
        <ul>
          {BirdStore &&
            BirdStore.birds.map(birdStore => (
              <li key={birdStore}>{birdStore}</li>
            ))}
        </ul>
      </div>
    );
  }
}

export default App;
