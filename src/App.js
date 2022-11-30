import logo from './logo.svg';
import Sidebar from './components/Sidebar';
import './App.css';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <div className="flex bg-gray-900">
      <aside className="flex justify-start h-full">
          <Sidebar />
          <Searchbar />
      </aside>
    </div>
  );
}

export default App;
