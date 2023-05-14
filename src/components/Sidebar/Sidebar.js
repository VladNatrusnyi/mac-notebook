import {useContext} from "react";
import Context from "../../Context";
import {List} from "../List/List";
import {BurgerButton} from "../UI/BurgerButton/BurgerButton";

export const Sidebar = () => {
  const {isMobile, handleSidebarToggle, showSidebar, posts} = useContext(Context)

  return (
    <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
      {isMobile && (
        <BurgerButton onClick={handleSidebarToggle} />
      )}

      {
        posts && posts.length ? <List posts={posts}/> : <div>У вас покищо немає нотаток</div>
      }

    </div>
  )
}
