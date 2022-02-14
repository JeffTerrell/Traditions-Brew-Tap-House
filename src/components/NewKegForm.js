import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, 
                            brewery: event.target.brewery.value, 
                            type: event.target.type.value, 
                            abv: event.target.abv.value, 
                            price: event.target.price.value,
                            pints: event.target.pints.value, 
                            id: v4()
                          });
  }
    
  return (
    <React.Fragment>
      <div id="new-keg-form">
        {/* <div class="form-control"> */}
        <h3>Add Keg</h3>
        <form onSubmit={handleNewKegFormSubmission}>
          <div class="form-control">
            <input
                type='text'
                name='name'
                placeholder='Keg Name'
                required
            />
            <input
                type='text'
                name='brewery'
                placeholder='Brewery'
                required
            />
            <input
                type='text'
                name='type'
                placeholder='Type: (e.g. IPA)'
                required
            />      
            <hr />
            <input
              type='number' step="any" 
              name='abv'
              placeholder='%ABV'
              required 
            />
            <input
                type='number'
                name='price'
                placeholder='Price'
                required
            />
            <input
                type='number'
                name='pints'
                placeholder='Pints'
                max='140'
                required
            />         
            <Button type='submit' variant="dark">Add Keg</Button>
          </div>
        </form>
        {/* </div> */}
      </div>  
    </React.Fragment>
  )
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;;