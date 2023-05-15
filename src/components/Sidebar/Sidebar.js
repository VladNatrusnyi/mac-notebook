import {useContext} from "react";
import Context from "../../Context";
import {List} from "../List/List";
import {BurgerButton} from "../UI/BurgerButton/BurgerButton";
import styles from './Sidebar.module.css'
import {SearchInput} from "../SearchInput/SearchInput";
import {useMediaQuery} from "@material-ui/core";

export const Sidebar = () => {
  const {
    isMobile,
    handleSidebarToggle,
    showSidebar,
    posts
  } = useContext(Context)

  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  return (
    <div className={`${styles.sidebar} ${showSidebar ? styles.show : ''}`}>
      {isMobile && (
        <div className={styles.burgerBtn}>
          { isSmallScreen && <SearchInput /> }
          <BurgerButton onClick={handleSidebarToggle} />
        </div>
      )}

      {
        posts && posts.length ? <List posts={posts}/> : <div style={{textAlign: 'center'}}>You have no notes yet</div>
      }

    </div>
  )
}
