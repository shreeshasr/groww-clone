import './App.css';
import Articles from './Articles/Articles';
import Introduction from './Components/Introduction/Introduction';
import Navbar from './Components/Navbar/Navbar';
import OurProducts from './Components/OurProducts/OurProducts';
import Trusted from './Components/Trusted/Trusted';
import InThePress from './InThePress/InThePress';
import Review from './Review/Review';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Introduction/>
        <OurProducts/>
        <Trusted/>
        <Articles/>
        <InThePress/>
        <Review/>
    </div>
  );
}

export default App;
