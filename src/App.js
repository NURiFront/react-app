import './App.css';
import { Moviess } from './Components/Moviess/Moviess';
import { Header } from './Components/header/Header';
import Main from './Components/main/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Moviess/>
      <Main/>
    </div>
  );
}

export default App;
