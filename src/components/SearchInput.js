import {useContext, useEffect, useState} from "react";
import Context from "../Context";

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
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Пошук"
        style={{
          borderRadius: '15px',
          padding: '10px 20px',
          backgroundColor: '#f2f2f2',
          border: 'none',
          outline: 'none',
          width: '100%',
          boxSizing: 'border-box',
          textAlign: 'center'
        }}
      />
      {text && (
        <button
          onClick={() => setText('')}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            outline: 'none'
          }}
        >
          <i className="bi bi-x-circle"></i>
        </button>
      )}
    </div>
  );
}
