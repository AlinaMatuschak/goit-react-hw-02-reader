import React from 'react';
import './Publication.module.css';

const Publication = ({ publication, number }) => {
  const { title, text } = publication;
  return (
    <article className="publication">
      <h2>
        {number}. {title}
      </h2>
      <p>{text}</p>
    </article>
  );
};

export default Publication;
