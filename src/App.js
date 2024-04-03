
import './assets/App.scss';
import Test from './components/Test.jsx';
import Introduction from './components/Introduction.jsx';
import Projects from './components/Projects.jsx';


function App() {
  return (
    <div className='sectionsContainers'>
      <Introduction/>
      <Projects/>
    </div>
    
  );
}

export default App;
