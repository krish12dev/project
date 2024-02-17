import React, { useEffect, useState } from 'react'
import './Blogs.css'
import card from '../../assets/Card 1.png'
import BlogList from '../../Components/BlogList'

const Blogs = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const getBlog = async () => {
          try {
            const response = await fetch('http://3.7.81.243:3253/api/blog/', {
              method: 'GET',
              headers: {
                'Content-type': 'application/json'
              }
            });
            const result = await response.json();
            setData(result?.data);
          } catch (error) {
            console.error('Error fetching blog data:', error);
          }
        };
        getBlog();
      
      },[]);
      


  return (
    <div className='blogContainer'>
        <div className='text-container'>
      <h3>Testimonial</h3>
      <div className='img-container'>
        <div>
            <img src={card} alt='person1'/>
        </div>
        <div>
        <img src={card} alt='person2'/>
        </div>
      </div>
            <h4>Blog</h4>
        <div className='blogContainerlist'>
            {data?.slice(0,3)?.map((item, index)=>{
                return(
                    <BlogList
                    Image={`${item.image_url}`}
                    ImageTitle={item.image}
                    name={item.seo_title}
                    date={item.slug}
                    description={item.short_description}
                    />
                )
            })}
        </div>
        </div>
    </div>
  )
}

export default Blogs
