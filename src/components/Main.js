import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    let fidelis = this;
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log("data: " + data.length);
        // do stuff with `data`, call second `fetch`
        for (var i = 0; i < data.length; i++) {
          console.log(i);
          fetch(
            "https://hacker-news.firebaseio.com/v0/item/" +
              data[i] +
              ".json?print=pretty"
          )
            .then(function(response) {
              return response.json();
            })
            .then(function(data) {
              console.log(data);
              // do stuff with `data`
              fidelis.setState({
                // items: data.concat(data),
                items: fidelis.state.items.concat(data),
                isLoaded: true
              });
            });
        }
      })
      .catch(function(error) {
        console.log("Requestfailed", error);
      });
  }
  render() {
    var { items, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <main className="container">
            <ul>
              {items.map(item => (
                <li key={item.id} className="listContainer">
                  <a href="{item.url}"> {item.title}</a>
                  {/* <small class="lista" style="font-size:12px; margin-top:7px">`+e.score+` points by `+e.by+` `+timeSince(e.score)+`&nbsp;|&nbsp;<span style="color:green"> `+e.kids.length+` comments</span></small> */}
                </li>
              ))}
            </ul>
          </main>
        </div>
      );
    }
  }
}

export default Main;
