import PropTypes from 'prop-types'
import React from 'react'

const Permature = ({content, signature}) => {
  return (
    <>
      <article className='permature'>
        <p>{content}</p>
        <div className='signature-wrapper'>
          <span className='signature'>{signature}</span>
        </div>
      </article>
    </>
  );
};

Permature.propTypes = {
  content: PropTypes.string.isRequired,
  signature: PropTypes.string.isRequired,
}

export default Permature;
