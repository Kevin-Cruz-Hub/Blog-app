import Topbar from './components/Topbar';
import HomePage from './pages/HomePage'
import SinglePage from './pages/SinglePage';
import Write from './pages/Write';
import './App.css';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <LoginPage/>
    </div>
  );
}

export default App;
