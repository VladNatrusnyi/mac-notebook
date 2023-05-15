import {useContext} from "react";
import Context from "../../Context";
import {ControlButton} from "../UI/ControlButtton/ControlButton";
import {BurgerButton} from "../UI/BurgerButton/BurgerButton";
import {SearchInput} from "../SearchInput/SearchInput";
import {useMediaQuery} from "@material-ui/core";

export const Header = () => {
  const {
    isMobile,
    handleSidebarToggle,
    activePostId,
    setIsEditing,
    addData,
    deleteData,
  } = useContext(Context)

  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  return (
    <div className="header">
      {isMobile && (
        <BurgerButton onClick={handleSidebarToggle} />
      )}

      <div className='header-controls-btn-wrapper'>
        <ControlButton onClick={addData} icon={'bi-plus'}/>
        <ControlButton onClick={() => deleteData(activePostId)} icon={'bi-trash3'} disabled={!activePostId}/>
        <ControlButton onClick={() => setIsEditing(true)} icon={'bi-pencil-square'} disabled={!activePostId}/>
      </div>

      { !isSmallScreen && <SearchInput /> }

    </div>
  )
}
