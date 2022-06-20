import { Routes, Route } from 'react-router-dom';
import Cafes from '../components/Cafes/Cafes';
import UpdateCafe from '../components/Cafes/UpdateCafe';
import Employees from '../components/Employees/Employees';
import UpdateEmployee from '../components/Employees/UpdateEmployee';


export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Cafes />} />
            <Route path="employees" element={<Employees />} />
            <Route path="employees/:cafeId" element={<Employees />} />
            <Route path="update-cafe/:id" element={<UpdateCafe />} />
            <Route path="update-employee/:id" element={<UpdateEmployee />} />
        </Routes>
    );
}

export default MainRoutes;