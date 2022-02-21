import { useCallback, useEffect, useState } from "react";

import { loadPost } from "../../utils/load-posts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";

import "./styles.css";
import { TextInput } from "../../components/TextInput";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(6);
  const [searchValue, setSearchValue] = useState("");

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = !!searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPost();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, 0, postsPerPage]);

  const loadMorePosts = () => {
    const nextpage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextpage, nextpage + postsPerPage);

    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextpage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <section className='container'>
      <div className='search-container'>
        {!!searchValue && <h1>Search value: {searchValue}</h1>}
        <TextInput
          className='text-input'
          searchValue={searchValue.toLowerCase()}
          handleChange={handleChange}
        />
      </div>

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

      {filteredPosts.length === 0 && <p>Não existem posts</p>}

      <div className='button-container'>
        {!searchValue && (
          <Button
            text={"Recarregar mais 6"}
            onClick={loadMorePosts}
            disabled={noMorePosts}
          />
        )}
      </div>
    </section>
  );
};
// export class Home2 extends Component {
//   state = {
//     counter: 0,
//     posts: [],
//     allPosts: [],
//     page: 0,
//     postsPerPage: 6,
//     searchValue: "",
//   };
//   timeoutUpdate = null;

//   async componentDidMount() {
//     await this.loadPosts();
//   }

//   loadPosts = async () => {
//     const { page, postsPerPage } = this.state;

//     const postsAndPhotos = await loadPost();
//     this.setState({
//       posts: postsAndPhotos.slice(page, postsPerPage),
//       allPosts: postsAndPhotos,
//     });
//   };

//   loadMorePosts = () => {
//     const { page, postsPerPage, allPosts, posts } = this.state;

//     const nextpage = page + postsPerPage;
//     const nextPosts = allPosts.slice(nextpage, nextpage + postsPerPage);

//     posts.push(...nextPosts);

//     this.setState({ posts, page: nextpage });
//   };

//   handleChange = (e) => {
//     const { value } = e.target;
//     this.setState({ searchValue: value });
//   };

//   render() {
//     const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
//     const noMorePosts = page + postsPerPage >= allPosts.length;

//     const filteredPosts = !!searchValue
//       ? allPosts.filter((post) => {
//           return post.title.toLowerCase().includes(searchValue.toLowerCase());
//         })
//       : posts;

//     return (
//       <section className='container'>
//         <div className='search-container'>
//           {!!searchValue && <h1>Search value: {searchValue}</h1>}
//           <TextInput
//             className='text-input'
//             searchValue={searchValue.toLowerCase()}
//             handleChange={this.handleChange}
//           />
//         </div>

//         {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

//         {filteredPosts.length === 0 && <p>Não existem posts</p>}

//         <div className='button-container'>
//           {!searchValue && (
//             <Button
//               text={"Recarregar mais 6"}
//               onClick={this.loadMorePosts}
//               disabled={noMorePosts}
//             />
//           )}
//         </div>
//       </section>
//     );
//   }
// }
