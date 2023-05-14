import {ListItem} from "../ListItem/ListItem";
import Context from "../../Context";
import {useContext} from "react";

export const List = ({posts}) => {
  const {setActivePostId} = useContext(Context)
  return (
    <>
      {
        posts.sort((a, b) => b.date - a.date).map((post, idx) => {
          return (
            <ListItem  key={post.id} post={post} idx={idx + 1} />
          )
        })
      }
    </>
  )
}
