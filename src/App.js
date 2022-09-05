
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Layouts from "./components/Layouts";
import AllList from './components/viewAll/AllList'



function App() {
    return (
        <BrowserRouter>
        <Header></Header>
            <Routes>
                <Route path="/" element={<Layouts></Layouts>}></Route>
                <Route path="/viewall" element={<AllList></AllList>}></Route>
            </Routes>
            <Footer></Footer>
            </BrowserRouter>
            
    );
}

export default App;
