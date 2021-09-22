import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Header} from "./Header";
import {NavigationBar} from "./NavigationBar";
import {MainBody} from "./MainBody";

ReactDOM.render(
  <React.StrictMode>
      <Header />
      <NavigationBar/>
      <MainBody/>,
  </React.StrictMode>,
  document.getElementById('root')
);
