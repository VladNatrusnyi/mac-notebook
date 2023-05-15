import {ListItem} from "../ListItem/ListItem";

export const List = ({posts}) => {
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
