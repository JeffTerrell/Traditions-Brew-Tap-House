import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, 
                            brewery: event.target.brewery.value, 
                            type: event.target.type.value, 
                            abv: event.target.price.value, 
                            price: event.target.abv.value,
                            pints: event.target.pints.value, 
                            id: v4()
                          });
  }
  
    
  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
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
          type='number' step="any"
          name='abv'
          placeholder='ABV' 
        />  
        <input
            type='number'
            name='price'
            placeholder='Price'
        />
        <input
            type='number'
            name='pints'
            placeholder='124'
        />         
        <button type='submit'>Add Keg</button>
      </form>
    </React.Fragment>
  )
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;;