import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
// import ImageUpload from './ImageUpload';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            avatar: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName
          })
        );
      } else {
        dispatch(logout());
      }
    })
  }, [dispatch])

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Sidebar />
          <Feed />
          <Widgets />
          {/* <ImageUpload userName={user.displayName} /> */}
        </>
      )}
    </div>
  );
}

export default App;
