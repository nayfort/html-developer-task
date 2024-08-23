import { Routes, Route } from 'react-router-dom';
import './App.css'
import {AdsTape, Footer, Header, Navbar} from "./components/index.jsx";
import {Home, About, Services} from "./pages/index.jsx";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
            </Routes>
            <AdsTape/>
            <Footer />
        </div>
    );
};

export default App;
