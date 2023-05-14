import styles from './ListItem.module.css'
import {TimeAgo} from "../TimeAgo/TimeAgo";
import Context from "../../Context";
import {useContext} from "react";
import {getPostBody, getPostTitle} from "../../helpers/getPostTitle";
import parse from "html-react-parser";
export const ListItem = ({post, idx}) => {
  const {activePostId, setActivePostId, posts, setIsEditing} = useContext(Context)

  const title = getPostTitle(post.body, idx)

  const postHandler = () => {
    setIsEditing(false)
    setActivePostId(post.id)
  }

  return (
    <div onClick={postHandler} className={styles.wrapper} style={{background: post.id === activePostId ? 'gray' : ''}}>
      <div className={`${styles.text} ${styles.title}`}>{title}</div>
      <div className={styles.bottomWrapper}>
        <div className={styles.time}>
          <TimeAgo myTime={post.date}/>
          {/*{post.date.toLocaleDateString()}*/}
        </div>
        <div className={styles.text}>
          {getPostBody(post.body)}
        </div>
      </div>
    </div>
  )
}
