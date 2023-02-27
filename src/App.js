import logo from './logo.svg';
import Home from  './Home';
import Order from './food-comp1/Order';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/order" element={<Order/>}/>
</Routes>
</div>
  )

 
}

export default App;
