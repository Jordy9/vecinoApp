import React, { useState } from 'react'

export const SearchFilter = () => {

    const [searchState, setSearchState] = useState('')

  return (
    <div style={{height: '100%', color: 'white'}} className='d-flex justify-content-center align-items-center'>
        <div>
            <h1 className='text-center'>To each their home.®</h1>

            <p className='text-center' style={{fontSize: '20px'}}>
                Let’s find a home that’s perfect for you
            </p>
    
            <p className='text-center' style={{fontSize: '20px'}}>
                <strong>
                    BUY, RENT, SELL, PRE-APPROVAL, JUST SOLD, HOME VALUE
                </strong>
            </p>

            <form style={{position: 'relative'}} className="d-flex" role="search">
                <input className="form-control searchForm" value={searchState} onChange={({ target }) => setSearchState(target.value)} type="text" placeholder="Address, School, City, Zip or Neighborhood" aria-label="Search" />
                {
                    (searchState !== '')
                        &&
                    <i onClick={() => setSearchState('')} style={{position: 'absolute', color: 'black', fontSize: '24px', right: 70, marginTop: '11px', cursor: 'pointer'}} className="bi bi-x-lg searchX"></i>
                }
                <button type='buttom' style={{position: 'absolute', color: 'red', fontSize: '24px', right: 0}} className='btn btn-search-danger mr-2 mt-1'>
                    <i className="bi bi-search text-white"></i>
                </button>
            </form>
        </div>
    </div>
  )
}
