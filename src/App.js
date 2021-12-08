import Photo from './component/profile/ProfilePhoto';
import Name from './component/profile/FullName';
import Adresse from './component/profile/adresse';
import './App.css';

function App() {
  return (
    <div className="App">
     <Photo/> 
        <Name/>
        <Adresse/>
    </div>
  );
}

export default App;
