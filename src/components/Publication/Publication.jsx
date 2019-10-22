import React from 'react';
import { publications } from './Publication.module.css';

const Publication = ({ publication, number }) => {
  const { title, text } = publication;
  return (
    <article className={publications}>
      <h2>
        {number}. {title}
      </h2>
      <p>{text}</p>
    </article>
  );
};

export default Publication;
