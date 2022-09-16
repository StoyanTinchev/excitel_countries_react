import React, {useEffect, useState} from 'react'
import './Pager.css'

function Pager({initialCountries, setCountries}) {
	const [pageNumber, setPageNumber] = useState(1)

	useEffect(() => {
		setCountries(initialCountries.slice(pageNumber - 1, pageNumber * 10))
	}, [initialCountries])

	return (
		<div>
			<button
				className="pager-button"
				onClick={() => {
					if (pageNumber > 1) {
						setCountries(initialCountries.slice((pageNumber - 2) * 10, (pageNumber - 1) * 10))
						setPageNumber(pageNumber - 1)
					}
				}}>
				Previous
			</button>

			<button
				className="pager-button"
				onClick={() => {
					if (pageNumber < Math.ceil(initialCountries.length / 10)) {
						setCountries(initialCountries.slice(pageNumber * 10, (pageNumber + 1) * 10))
						setPageNumber(pageNumber + 1)
					}
				}}>
				Next
			</button>
		</div>
	)
}

export default Pager