import React, { useEffect } from 'react'
import { Modal } from 'react-bootstrap'

export const ModalShowSearchFilter = ({ show, setShow, respWidth, searchState, setSearchState, navigate, serachFilterToMap, handleClick }) => {

    const handleClose = () => {
        setShow(false)
    }

    useEffect(() => {
      if (respWidth > 992) {
        setShow(false)
      }

      return () => respWidth

    }, [respWidth])
    
  return (
    <Modal fullscreen show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div onClick={handleClose} className='goBack' style={{display: 'flex', alignItems: 'center'}}>
                <i style={{fontSize: '22px'}} className="bi bi-chevron-left"></i>
                <span style={{fontSize: '18px'}} className='ml-1'>Atras</span>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className = 'row'>
               <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center'>      
                    <form style={{position: 'relative', width: (respWidth < 650) ? 'auto' : '650px'}} className="d-flex" role="search">
                        <input autoFocus className="form-control searchFormModal" value={searchState} onChange={({ target }) => setSearchState(target.value)} type="text" placeholder="Address, School, City, Zip or Neighborhood" aria-label="Search" />
                        {
                            (searchState !== '')
                                &&
                            <i onClick={() => setSearchState('')} style={{position: 'absolute', color: 'black', fontSize: '20px', right: 55, marginTop: '7.5px', cursor: 'pointer'}} className="bi bi-x-lg searchX"></i>
                        }
                        <button onClick={() => navigate('/rentar-busqueda')} type='buttom' style={{position: 'absolute', color: 'red', fontSize: '18px', right: 0, marginTop: '0.10rem', marginRight: 1}} className='btn btn-search-danger'>
                            <i className="bi bi-search text-white"></i>
                        </button>

                        <div
                            className='my-3'
                            style={{
                                color: 'black', 
                                width: '100%', 
                                maxHeight: '300px',
                                position: 'absolute', 
                                top: 65,
                            }}
                        >
                            {
                                serachFilterToMap.map(e => {
                                    return (
                                        <div className='customDatalist p-3' onClick={() => handleClick(e)} key={e}>{e}</div>
                                    )
                                })
                            }
                        </div>
                    </form>
               </div>
            </div>
        </Modal.Body>
    </Modal>
  )
}
