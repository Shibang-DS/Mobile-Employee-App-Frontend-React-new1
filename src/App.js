import EmployeeList from './components/EmployeeList';
import LoginPage from './components/LoginPage';
import EmpProd from './components/EmpProd';
import {Route,Routes} from "react-router-dom"


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/EmpProd' element={<EmpProd/>}/>
        <Route path='/EmployeeList.js' element={<EmployeeList/>}/>
        <Route path='/EmpProd.js' element={<EmpProd/>}/>
      </Routes>
    </>
  );
}

export default App;
