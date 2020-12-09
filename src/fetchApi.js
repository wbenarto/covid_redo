// // https://randomuser.me/api

// import React, {useState, useEffect} from 'react';
// import axios from 'axios';

// const fetchRandomApi = () => {
//   return axios.get('https://randomuser.me/api')
//     .then( ({ data }) => {
//       console.log(data);
//       return data;
//     })
//     .catch((err) => console.error(err))
// }

// const getUserName = (data) => {
//   const {name: {first, last}} = data; 
//   return `${first} ${last}`
// }

// export default function App() {
//   const [counter, setCounter] = useState(0);
//   const [randomData, setRandomData] = useState('');
//   const [userInfo, setUserInfos] = useState('')


//   useEffect(()=> {
//     fetchRandomApi().then((result) => {
      
//       setRandomData(result)
//       setUserInfos(result.results);
      
//     })
    

    
//   }, [])

//   return (
//     <div>
//       <h1>Hello React World!</h1>
//       <h2>Counter: {counter}</h2> 
//       <button onClick={()=>{
//         setCounter(counter + 1)
//       }}>Click me to add $</button>
//       <h3>{randomData}</h3>
    
//       <image>Picture here</image>

//       {userInfo.map((e,i)=> (
        
//         <p>{getUserName(e)}</p>
        
//       ))}
      
//     </div>
//   )
// }