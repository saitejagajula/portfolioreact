import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

import Body from './Body.js/Body';
function App() {
  return (<>
  <Header/>
  <Body/>
  </>
  );
}

export default App;
