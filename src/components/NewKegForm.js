import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props) {

    
  return (
    <React.Fragment>
      <form>
        <input
            type='text'
            name='name'
            placeholder='Your name'
        />
        <input
            type='text'
            name='brewery'
            placeholder='Brewery'
        />
        <input
            type='text'
            name='type'
            placeholder='ex: IPA'
        />
        <input
            type='number'
            name='price'
            placeholder='Price'
        />
        
        <input
          type='number'
          name='abv'
          placeholder='ABV' 
        />
      
        <button type='submit'>Add Keg</button>
      </form>
    </React.Fragment>
  )
}

NewKegForm.propTypes = {
  
}

export default NewKegForm;;