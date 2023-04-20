
import './App.css';
import Login from './components/Login';
import {Routes, Route} from 'react-router-dom'
import Signup from './components/Signup';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { UserAuthContextProvider } from './context/UserAuthContext';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
   <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
         <Routes>
           <Route path="/login" element={<Login/>}></Route>
           <Route path="/" element={<Signup/>}></Route>
           <Route path="/home" element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
           }></Route>
         </Routes>
         </UserAuthContextProvider>
        </Col>


      </Row>

   </Container>
  );
}

export default App;
