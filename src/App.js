import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, SingleBlogPage } from "./Pages/index" 
import { Navbar } from "./Components/Navbar/Navbar";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <>

    <BrowserRouter>
    
    <Navbar/>
    <Sidebar/>


    <Routes>

      <Route path="/" element={<HomePage/>}/>
      <Route path="/blog/:id" element={<SingleBlogPage/>}/>

    </Routes>
    <Footer/>
    
    </BrowserRouter>

    </>
  );
}

export default App;
