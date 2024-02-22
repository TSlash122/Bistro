
import LoginForm from './LoginForm';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";


import './App.css';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';

function App() {

    return (
            <Router>
                        <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={<About/>} />
          <Route path="/contact" exact component={Contact} />
                </Routes>
            </Router>
    );
}

export default App;
