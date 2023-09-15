import React from 'react';

const Article = ({ title, titleLink, imgURL, content }) => {
  const articleStyle = {
    color: 'black' // Define the color property within the style object
  };

  return (
    <div style={articleStyle}>
      <div className="ipl_article flexbox">
        <a href={titleLink}>
          <div className='ipl_article-img'>
            <img src={imgURL} alt="nothing to show" />
          </div>
          <div className='ipl_article-content'>
            <div>
              <h2>{title}</h2>
              <p>{content}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Article;


// import React from 'react'

// const Article = ({title,titleLink,imgURL,content}) => {
//   return (
//     <div>
//       <div className="ipl_article flexbox">
//       <a href={titleLink}>
//         <div className='ipl_article-img'>
//           <img src={imgURL} alt="nothing to show"/>
//         </div>
//         <div className='ipl_article-content'>
//           <div><h2>{title}</h2>
//           <p>{content}</p>
//           </div>
    
//         </div>
//         </a>
//       </div>
//     </div>
//   )
// }

// export default Article;
