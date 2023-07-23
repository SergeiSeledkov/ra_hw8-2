import './App.css';
import Data from './components/Data/Data';
import Loading from './components/Loading/Loading';
import Error from './components/Error/Error';

function App() {
  return (
    <div>
      <Data></Data>
      <Error></Error>
      <Loading></Loading>
    </div>
  );
}

export default App;
