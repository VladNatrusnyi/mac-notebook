import {useContext, useEffect, useState} from "react";
import Context from "../../Context";
import styles from './SearchInput.module.css'

export const SearchInput = () => {
  const {setPosts, posts, postsFromDB} = useContext(Context)

  const searchPost = (searchText) => {
    if (searchText) {
      if (posts) {
        const results = posts.filter(obj => obj.body.toLowerCase().includes(searchText.trim().toLowerCase()));
        setPosts(results)
      }
    } else {
      setPosts(postsFromDB)
    }
  };


  const [text, setText] = useState('')

  useEffect(() => {
    searchPost(text)
  }, [text])


  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Пошук"
        className={styles.input}
      />
      {text && (
        <button
          onClick={() => setText('')}
          className={styles.clearBtn}
        >
          <i className="bi bi-x-circle"></i>
        </button>
      )}
    </div>
  );
}
