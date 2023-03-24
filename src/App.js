import logo from './logo.svg';
import './App.css';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const router=useRoutes(routes)
  return (
    <div className="App">
      <Sidebar />
      <div className="sitebody">
        <Header />
        {router}
      </div>
    </div>
  );
}

export default App;
