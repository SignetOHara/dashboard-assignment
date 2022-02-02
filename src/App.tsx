import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Page } from './components/common/Page';
import { Home } from './pages/Home';
import { AddUserContainer as AddUser } from './containers/AddUserContainer';
import { EditUser } from './pages/EditUser';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <Page>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/update/:id" element={<EditUser />} />
      </Routes>
    </Page>
  );
};

export default App;
