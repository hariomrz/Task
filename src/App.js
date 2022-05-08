import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ValidForm from './component/Home';
import DetailsPage from './component/Details';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path='/' element={<ValidForm />} />
        <Route path='/detailspage' element={<DetailsPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
