import{Routes, Route} from 'react-router-dom'
import Topbar from './components/Topbar';
import HomePage from './pages/HomePage'
import SinglePage from './pages/SinglePage';
import Create from './pages/Create';
import Auth from './pages/Auth';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Topbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/post/:id' element={<SinglePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
