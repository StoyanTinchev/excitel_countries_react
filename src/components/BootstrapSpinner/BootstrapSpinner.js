import React from 'react'
import {Spinner} from 'react-bootstrap'
import './BootstrapSpinner.css'

function BootstrapSpinner() {
	return (
		<div className='spinnerContainer'>
			<Spinner
				className='bootstrapSpinner'
				as="span"
				variant="warning"
				size="sm"
				role="status"
				aria-hidden="true"
				animation="grow"/>
		</div>
	)
}

export default BootstrapSpinner