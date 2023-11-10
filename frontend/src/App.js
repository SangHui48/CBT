import './App.css';
import Login from './form/Login';
import Register from './form/Register';
import Forgot from './form/Forgot';

function App() {
  return (
    <div className='min-h-screen bg-[#bce6ff] flex justify-center items-center'>
      <div className='py-12 px-12 bg-white rounded-2xl shadow-xl z-20'>
        <Forgot/>
      </div>
    </div>
  );
}

export default App;
