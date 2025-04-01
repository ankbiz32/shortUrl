import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UrlShortener from "./components/UrlShortener";
import RedirectHandler from "./components/RedirectHandler";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UrlShortener />} />
                <Route path="/:shortUrl" element={<RedirectHandler />} />
            </Routes>
        </Router>
    );
}

export default App;