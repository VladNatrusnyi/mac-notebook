import {useEffect, useState} from "react";
import Context from "./Context";
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {MainContent} from "./components/MainContent/MainContent";

import db from "./db";
import {generateUniqueId} from "./helpers/idGenerator";
import {useLiveQuery} from "dexie-react-hooks";
function App() {
  /////////////////////////////////////////////////////////////////
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };
////////////////////////////////////////////////////

  const [posts, setPosts] = useState([]);
  const [activePostId, setActivePostId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const postsFromDB = useLiveQuery(() => db.myStore.toArray(), []);

  useEffect(() => {
    setPosts(postsFromDB)
  }, [postsFromDB])

  const addData = async () => {
    const newData = {
      id: generateUniqueId(),
      body: '',
      date: new Date()
    };
    try {
      await db.myStore.add(newData);
      console.log('New data added');
      setActivePostId(newData.id)
      setIsEditing(true)
    } catch (error) {
      console.error('Error adding new data:', error);
    }
  };

  const updateData = async (postId, body) => {
    const updatedData = {
      body,
      date: new Date()
    };

    try {
      await db.myStore.update(postId, updatedData);
      console.log('Data updated');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const deleteData = async (postId) => {
    const result = window.confirm('Are you sure you want to delete the note?');

    if (result) {
      try {
        await db.myStore.delete(postId);
        console.log('Data deleted');
        setActivePostId(null)
        setIsEditing(false)
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    }
  };


  const contextValue = {
    isMobile,
    handleSidebarToggle,
    showSidebar,
    posts,
    setPosts,
    postsFromDB,
    activePostId,
    setActivePostId,
    isEditing,
    setIsEditing,

    updateData,
    addData,
    deleteData
  }

  return (
    <Context.Provider value={contextValue}>
      {isMobile && (
        <div
          className={`backdrop ${showSidebar ? "show" : ""}`}
          onClick={handleSidebarToggle}
        />
      )}

      <div className="container">
        <Header />

        <Sidebar />

        <MainContent />

      </div>
    </Context.Provider>
  );
}

export default App;
