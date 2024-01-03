import React from 'react'
import Content from './Content';

const Templates = () => {
  return (
    <>
      {Content.map((item) => (
        <img 
          loading="lazy"
          key={item.id}
          src={item.image}
          alt={`Template ${item.id}`}
          style={{
            width: "90%",
            marginBottom: "3em",
          }}
        />
      ))}
    </>
  )
}

export default Templates