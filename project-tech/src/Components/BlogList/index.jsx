
import React from 'react'
import './Blog.css'

const BlogList = ({Image, ImageTitle, title, name, date,
    description}) => {
  return (
    <div className='blog_list'>
      <img 
      src={Image}
      alt={ImageTitle}
      />
      <div>{title}</div>
      <div>{date} by {name}</div>
      <p>{description}</p>
    </div>
  )
}

export default BlogList
