
import { Button } from 'react-bootstrap';
import { UserUserAuth } from '../context/UserAuthContext';

import { useNavigate } from 'react-router-dom';



const Home =()=>{
 const {logOut} = UserUserAuth();
 const navigate = useNavigate();

    const handleOut =async()=>{
        try{
          await logOut()
         
          navigate("/")
        
        }catch(err){
        console.log(err);
        }
       }

    return(
        <>
        <div className='p-4 box mt-3 text-center' >

            <h1 style={{color:'red', marginTop:'100px'}}>Hello Welcome</h1>
             <p> <Button variant="primary" onClick={handleOut}>Log Out</Button></p>
        </div>
        
        </>
    );
};

export default Home;