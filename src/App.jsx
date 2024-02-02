import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";
import Download from "./pages/Download/Download";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/download" element={<Download />} />
        </Routes>
      </Router>
      {/* <HomePage /> */}

    </div>
  );
}

export default App;
