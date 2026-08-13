import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <SideBar />
      <MainContent />
    </div>
  );
}

export default App;
