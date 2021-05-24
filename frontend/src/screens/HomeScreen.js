import Shirt from '../components/Shirt' 
import Shoe from '../components/Shoe' 
import { useEffect, useState } from 'react'; 
import axios from 'axios';
import MessageBox from '../components/MessageBox'; 
import LoadingBox from '../components/LoadingBox';  

export default function HomeScreen(){    
    const [shirts,setShirts] = useState([]);
    const [loading1,setLoading1] = useState(false);
    const [error1,setError1] = useState(false);
    useEffect(()=>{
      const fetchData= async()=>{
      try {
        
          setLoading1(true);
          const {data} = await axios.get('/api/shirts');
          setLoading1(false);
          setShirts(data);
        
        } catch (error) {
          setLoading1(false);
          setError1(error.message);
        }
      };
    fetchData();
    },[]) 
      
    const [shoes,setShoes] = useState([]);
    const [loading2,setLoading2] = useState(false);
    const [error2,setError2] = useState(false);
    useEffect(()=>{
      const fetchData= async()=>{
      try {
        
          setLoading2(true);
          const {data} = await axios.get('/api/shoes');
          setLoading2(false);
          setShoes(data);
        
        } catch (error) {
          setLoading2(false);
          setError2(error.message);
        }
      };
    fetchData();
    },[]) 
    return(
        <div>
            <h1 className="row mshirts">Men Shirts</h1>
            {loading1? (<LoadingBox></LoadingBox>
            ):
            error1 ? (                        ///agr error aye to error wala syntax hatadio bss
              <MessageBox variants="danger">{error1}</MessageBox>   /// +delete MessageBox
            ):(
            <div className="row center shirts" id="ac1">
              {
                  shirts.map((shirt)=>(
                    <Shirt key={shirt._id} shirt={shirt}></Shirt>
                  ))
              }
            </div> )
            }

            <h1 className="row mshoes">Men Shoes</h1>
            {loading2? (<LoadingBox></LoadingBox>
            ):
            error2 ? (                                                 ///agr error aye to error wala syntax hatadio bss
              <MessageBox variants="danger">{error2}</MessageBox>       ///+delete MessageBox
            ):(
            <div className="row center shoes" id="ac2">
              {
                  shoes.map((shoe)=>(
                    <Shoe key={shoe._id} shoe={shoe}></Shoe>
                  ))
              }
            </div>)
            }
            

        </div>
    );
}