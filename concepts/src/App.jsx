import './App.css';
import Header from './components/Header';
import Router from './pages';

const App = () => {
  return (
    <div>
      <Header />
      <Router />
    </div>
  );
}

export default App;