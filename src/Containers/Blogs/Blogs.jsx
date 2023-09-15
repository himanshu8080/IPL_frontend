// import React,{useEffect,useState} from 'react'
// import axios from 'axios'
// import Article from '../../Component/Article/Article'

// function Blogs () {
//   const [iplData,setIpldata]=useState([]);
//   const [isLoading,setIsLoading]=useState(true);

 
//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://ipl-api-9en7.onrender.com/fetch');
//       setIpldata(response.data); // Corrected this line
//       setIsLoading(false);
//     } catch {
//       console.log("Unable to fetch data. Please check your code without wasting time.");
//     }
//   };

// useEffect(()=>{
//   fetchData();
// },[]);

//   return (
//     <div className='ipl_blog'>
//       <div className='ipl_blog_container'>
//         {isLoading ? (
//           <p> Loading data....</p>
//         ):(
//           iplData.length > 0 ? (
//             iplData.map((item,index) =>(
//               <Article
//                 key={index}
//                 imgURL={item.imgURL}
//                 text={item.title}
//                 link={item.titleLink}
//                 />
//             )
//           )
//         ):(<p>No Data Available</p>)
//         )}
//       </div>
//     </div>
//   );
// }

// export default Blogs
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Article from '../../Component/Article/Article';

function Blogs() {
  const [iplData, setIplData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://ipl-api-9en7.onrender.com/fetch'); // Replace with your server's URL
      setIplData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log('Unable to fetch data. Please check your code without wasting time.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='ipl_blog'>
      <div className='ipl_blog_container'>
        {isLoading ? (
          <p>Loading data....</p>
        ) : iplData.length > 0 ? (
          iplData.map((item, index) => (
            <Article
              key={index}
              imgURL={item.imgURL}
              title={item.title}
              titleLink={item.titleLink}
              content={item.content}
            />
          ))
        ) : (
          <p>No Data Available</p>
        )}
      </div>
    </div>
  );
}

export default Blogs;
