import Context from "../../Context";
import {useContext, useMemo} from "react";
import {MarkdownEditor} from "../MarkdownEditor";
import parse from 'html-react-parser';
import {CustomBtn} from "../UI/CustonBtn/CustomBtn";


export const MainContent = () => {
  const {
    activePostId,
    posts,
    isEditing,
    setIsEditing
  } = useContext(Context)

  const postData = useMemo(() => {
    if (posts) {
      return posts.find(el => el.id === activePostId)
    }
  }, [activePostId, posts])

  return (
    <div className="main">
      {
        postData ?
          isEditing
            ?
            <>
              <CustomBtn title={'Завершити редагування'} onClick={() => setIsEditing(false)}/>
              <MarkdownEditor body={postData.body} postId={postData.id}/>
            </>
            :
            <div>
              {postData && parse(postData.body)}
            </div>
          :
          <div>Select a note</div>
      }
    </div>
  )
}
