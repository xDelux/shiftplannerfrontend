import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Header} from "./Header";
import {NavigationBar} from "./NavigationBar";
import {MainBody} from "./MainBody";

ReactDOM.render(
  <React.StrictMode >
      <main className="min-h-screen flex flex-col">
          <Header />
      <div class="flex flex-row">
      <NavigationBar/>
          <MainBody/>
      </div>
      </main>
  </React.StrictMode>,
  document.getElementById('root')
);
