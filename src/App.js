import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Post 1",
        body: "Conteudo 1",
      },
      {
        id: 2,
        title: "Post 2",
        body: "Conteudo 2",
      },
      {
        id: 3,
        title: "Post 3",
        body: "Conteudo 3",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        {this.state.posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
