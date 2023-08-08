import "./App.css";
import HomePage from "./home/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SinglePage from "./components/watch/SinglePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/singlepage/:id" element={<SinglePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
