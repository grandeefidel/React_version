import React from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Main from "./components/Main";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Main />
        <Footer />
      </div>
    );
  }
}
export default App;
