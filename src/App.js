import './App.css';
import './style.css';
import Numcounter from './componets/numcounter';
import Pro2 from './componets/props';
import Calc from './componets/calc';
import Tic_tec_toi from './componets/tic_tec_toi';
import Numpuzzle from './componets/num_puzzl';
import Todo from './componets/todolist';
import Result from './componets/result';
import Result_o from './componets/resulto';
import Api from './componets/api_normal';
import Dj_api from './componets/dummy_jeson_api';
import Rick_and_motry from './componets/rick_and_motry_api';
import { Route, Router, Routes } from 'react-router-dom';
import Productview from './componets/productview';
import Cart from './componets/cart';
import Log_in from './componets/login_page';
import New_account from './componets/new_account';
import Next_step from './componets/next_step_create_account';
import Login from './componets/log_in';
import CreateAccount from './componets/create_ac';
import Home from './componets/home';
import Updat from './componets/updetdata';

function App() {
  return (
    <div className="App">
      {/* <Numcounter/> */}
      {/* <Pro2 name={[10,12,13,45,67]}  /> */}
      {/* <Calc/> */}
      {/* <Tic_tec_toi/> */}
      {/* <Numpuzzle/> */}
      {/* <Todo/> */}
      {/* <Result/> */}
      {/* <Result_o/> */}
      {/* <Api/> */}
        {/* <Routes>
          <Route path='/' element={<Log_in/>}/>
          <Route path='/new_account' element={<New_account/>}/>
          <Route path='/next' element={<Next_step/>}/>
          <Route path='/home' element={<Dj_api/>}/>
          <Route path='/product/:id' element={<Productview/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes> */}
        <Routes>
          <Route path='/'  element={<Login/>}/>
          <Route path='/create_account' element={<CreateAccount/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/updat' element={<Updat/>}/>
        </Routes>
      {/* <Rick_and_motry/> */}
    </div>
  );
} 

export default App;