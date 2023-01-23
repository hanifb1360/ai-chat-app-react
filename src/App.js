import './App.css';
import OptionSelection from './components/OptionSelection';
import { arrayItems } from './AIOptions';

function App() {
  const selectOption = (option) => {
    console.log(option);
  };
  return (
    <div className="App">
      <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
    </div>
  );
}

export default App;
