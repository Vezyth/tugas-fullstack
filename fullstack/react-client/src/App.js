
import Home from './Component/home';
import Login from './Component/login';
import Dashboard from './Component/dashboard/index';
import Register from './Component/register';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home title='Home Page' />}/>
        <Route path='/dashboard' element={<Dashboard title='Dashboard ' />}/>
        <Route path='/login' element={<Login title='Login Page' description='Mini Absensi Apps'/>}/>
        <Route path='/register' element={<Register title='Register Page' description='Mini Absensi Apps'/>}/>
        
        <Route path='*' element={<h1>PAGE NOT FOUND</h1>}/>
      </Routes>
    </Router>
  );
}

export default App;
