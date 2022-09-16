import React, {useEffect, useState} from 'react'
import './Pager.css'

function Pager({initialCountries, setCountries}) {
	const [pageNumber, setPageNumber] = useState(1)

	useEffect(() => {
		setCountries(initialCountries.slice(pageNumber - 1, pageNumber * 10))
	}, [initialCountries])

	const checkPagerEnd = () => {
		return Math.ceil(initialCountries.length / 10)
	}

	const showPrevBtnOnly = () => {
		return (<button
			className="pagerBtnPrev"
			onClick={() => {
				if (pageNumber > 1) {
					setCountries(initialCountries.slice((pageNumber - 2) * 10, (pageNumber - 1) * 10))
					setPageNumber(pageNumber - 1)
				}
			}}>
			&#8249;
		</button>)
	}

	const showNextBtnOnly = () => {
		return (<button
			className="pagerBtnNext"
			onClick={() => {
				if (pageNumber < checkPagerEnd()) {
					setCountries(initialCountries.slice(pageNumber * 10, (pageNumber + 1) * 10))
					setPageNumber(pageNumber + 1)
				}
			}}>
			&#8250;
		</button>)

	}

	const showBtns = () => {
		if (pageNumber === 1 && pageNumber !== checkPagerEnd()) {
			return showNextBtnOnly()
		} else if (pageNumber > 1 && pageNumber < checkPagerEnd()) {
			return (<>
				{showPrevBtnOnly()}
				{showNextBtnOnly()}
			</>)
		} else if (pageNumber !== 1 && pageNumber === checkPagerEnd()) {
			return showPrevBtnOnly()
		}
	}

	return (
		<div className="pagerBtnsLayout">
			{showBtns()}
		</div>
	)
}

export default Pager