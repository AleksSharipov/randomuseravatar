import React, {useState, useEffect} from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';
import Login from '../Login/Login';
import Main from '../Main/Main';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    password: '',
  });
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/main')
    }
  }, [isLoggedIn]);

  function onLogin(data){
    const name = data.name;
    const password = data.password;
    setUserInfo({name, password})
    setIsLoggedIn(true);
  }

  function apiGetUser(){
    return fetch(`https://randomuser.me/api/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`Шэф, усё пропало ${res.status}`))
      })
  }

  const [currentUser, setCurrentUser] = useState({});

  useEffect(()=>{
    apiGetUser()
    .then((res)=>{
      setCurrentUser(...res.results)
    })
    .catch(err=>console.log(err))
  
  }, [])

  return (
    <div className="main">
      {/* <Login/> */}
      <Switch>
        <ProtectedRoute
          path="/main"
          isLoggedIn={isLoggedIn}
          userInfo={userInfo}
          component={Main}
          currentUser={currentUser}
        />
        <Route path='/'>
          <Login onLogin={onLogin}/>
        </Route>
        <Route>
            {isLoggedIn ? <Redirect to="/main" /> : <Redirect to="/" />}
          </Route>
      </Switch>
    </div>
  );
}

export default App;
