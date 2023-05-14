import {useContext} from "react";
import Context from "../../Context";
import {ControlButton} from "../UI/ControlButtton/ControlButton";
import {BurgerButton} from "../UI/BurgerButton/BurgerButton";

export const Header = () => {
  const {isMobile, handleSidebarToggle, activePostId, setIsEditing, addData, deleteData} = useContext(Context)

  function searchPosts(input, arrayOfObjects) {
    const results = [];

    for (let i = 0; i < arrayOfObjects.length; i++) {
      const object = arrayOfObjects[i];

      if (object.hasOwnProperty('body') && object.body === input) {
        results.push(object);
      }
    }

    return results;
  }


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

    </div>
  )
}
