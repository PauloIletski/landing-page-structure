import React from 'react';
import { Description } from './components/Description';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import './styles/global.scss'

function App() {
  return (
   <>
    <Header/>
    <Description/>
    <Introduction/>
   </>
  );
}

export default App;
