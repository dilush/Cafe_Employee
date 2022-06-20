import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const MainNav = () => {
    return (
        <Header className="main-header">
            <div className="logo-text">
                Cafe Employee
            </div>
            <Menu className="menu-items" theme="dark" mode="horizontal"
                items={[
                    { label: <Link to="/">Cafes</Link>, key: 'Cafes' },
                    { label: <Link to="employees">Employees</Link>, key: 'Employees' }
                ]}>
            </Menu>
        </Header>
    );
}

export default MainNav;