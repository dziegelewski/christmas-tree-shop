import React, { Component } from 'react';
import ShippingForm from './ShippingForm';
import Title from '../styled/Title';


class ShippingData extends Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return (
    	<React.Fragment>
				<Title>Enter shipment address</Title>
	    	<ShippingForm onSubmit={this.submit} />
    	</React.Fragment>
    	)
  }

}

export default ShippingData;