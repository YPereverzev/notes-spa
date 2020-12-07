import './App.css';
import NotesTitle from './components/notestitle';
import {fixture} from './fixture';


function App() {
  return (
    <div>
      <NotesTitle />
      {fixture.map(item => (
        <div>
          <p>
            {item.title}
          </p>
          <p>
            {item.text}
          </p>

        </div>
      ))}
    </div>
  );
}

export default App;
