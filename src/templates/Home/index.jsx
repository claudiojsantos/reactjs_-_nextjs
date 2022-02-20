import { Component } from "react";

import { loadPost } from "../../utils/load-posts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";

import "./styles.css";

export class Home extends Component {
  state = {
    counter: 0,
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 6,
  };
  timeoutUpdate = null;

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPost();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;

    const nextpage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextpage, nextpage + postsPerPage);

    posts.push(...nextPosts);

    this.setState({ posts, page: nextpage });
  };

  render() {
    const { posts, page, postsPerPage, allPosts } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    return (
      <section className='container'>
        <Posts posts={posts} />
        <div className='button-container'>
          <Button
            text={"Recarregar mais 6"}
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          />
        </div>
      </section>
    );
  }
}
