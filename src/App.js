import Topbar from './components/Topbar';
import HomePage from './pages/HomePage'
import SinglePage from './pages/SinglePage';
import Write from './pages/Write';
import './App.css';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Write/>
    </div>
  );
}

export default App;
