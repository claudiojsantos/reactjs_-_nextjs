import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    counter: 0,
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
  timeoutUpdate = null;

  componentDidMount() {
    this.handleTimeout();
  }

  componentDidUpdate() {
    this.handleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = "O titulo mudou";

    this.settimeoutUpdate = setTimeout(() => {
      this.setState({ counter: counter + 1 });
    }, 1000);
  };

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <p>{counter}</p>
        {posts.map((post) => (
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
