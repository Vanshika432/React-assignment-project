import FirstPage from './components/FirstPage'
import SecondPage from './components/SecondPage';
import PrivateRoute from './utils/PrivateRoute';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <FirstPage/> } />
        <Route path="/SecondPage" element={<PrivateRoute><SecondPage/></PrivateRoute> } />
      </Routes>
      </BrowserRouter>
  )
}

export default App
