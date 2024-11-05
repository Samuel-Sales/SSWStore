import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/Register' element={<Register />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    )
}