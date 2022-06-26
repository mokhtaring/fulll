import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './components/Users/Users';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
         <Navbar/>
         <Users />
    </div>
  );
}

export default App;
