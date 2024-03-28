import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { Login } from './Login';
import { Reg } from './Reg';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Content } from './Content';
import { About } from './About';
import { Home } from './Home';
import { Main } from './Main';
import { Profile } from './Profile';
import { Provider } from 'react-redux';
import { store } from './Store';
import { Edit } from './Edit';
import { Post } from './Post';
import { Explore } from './Explore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Content />} />
            <Route path='Reg' element={<Reg />} />
            <Route path='Login' element={<Login />} />
            <Route path='About' element={<About />} />
          </Route>
          <Route path='/user' element={<Home />}>
            <Route index element={<Main />} />
            <Route path='Profile' element={<Profile />} />
            <Route path='Edit/:id' element={<Edit />} />
            <Route path='Post' element={<Post/>}/>
            <Route path='Explore' element={<Explore/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
