import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
// import Blogs from "./components/Blogs";

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     meaningOfLife: 0,
  //   person: 'me',
  //   };
  // }

  // handleClick = () => {
  //   this.setState({ meaningOfLife: this.state.meaningOfLife + 1 });
  // };
  // reduceState = () => {
  //   this.setState({ meaningOfLife: this.state.meaningOfLife - 1 });
  // };
  // handlePerson = (e) => {
  //   this.setState({ person: e.target.value });
  // };



  render() {
    return (
      <div className='App'>
        <NavBar />
        <div className='content'>
          <Home />
          {/* <Blogs /> */}
        </div>
      </div>
    );
  }
}

export default App;
