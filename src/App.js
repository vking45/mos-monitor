import logo from './logo.svg';
import Splash from './screens/Splash';
import './App.css';

function App() {
  return (
    <div className="flex">
      <aside className="flex justify-start h-full">
          <Splash />
      </aside>
    </div>
  );
}

export default App;
