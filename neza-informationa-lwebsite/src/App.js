// import logo from './logo.svg';
import './App.css';
// import {Routes,Route} from 'react-router-dom'
import Layout from './components/Layout';
import TheTeam from './components/team';
import Product from './components/Product';
import Home from './components/Home';
import Slideshow from './components/Slideshow';
import Role from './components/NgoRoles';




function App() {
  return (
    <div className='App'>
      <Layout>
      <Home/>
     
            <Product/>
            <Slideshow/>
            <Role/>
       <TheTeam/>
    </Layout>
    </div>
   
  );
}

export default App;
