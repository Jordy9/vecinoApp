import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import buildings from '../../../assets/buildings.svg'
import "swiper/css/pagination";
import 'swiper/css';

export const ModalFilters = ({ show, setShow, respWidth }) => {

    const handleClose = () => {
        setShow(false)
    }

    const [changeIcon, setChangeIcon] = useState('minInputDown')

    const [changeIconMax, setChangeIconMax] = useState('maxInputDown')

    const [check, setCheck] = useState('Todas')

    const [checkBed, setCheckBed] = useState('Todas')

    const [checkBath, setCheckBath] = useState('Todos')

    const propertys = [
        {
            label: 'Todas',
            icon: buildings
        },
        {
            label: 'Villa',
            icon: buildings
        },
        {
            label: 'Casa',
            icon: buildings
        },
        {
            label: 'Casa simple',
            icon: buildings
        },
        {
            label: 'Apartamento',
            icon: buildings
        },
    ]

    useEffect(() => {
      if (respWidth > 991) {
        setShow(false)
      }
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
                <h5>Precios</h5>
                <div className = 'col-6 mt-2'>
                    <div className="form-group">

                        <div className="input-group mb-3">
                            <span className="input-group-text bg-white" id="basic-addon1"><i className="bi bi-currency-dollar"></i></span>
                            <input onClick={() => setChangeIcon('minInputUp')} onBlur = {() =>setChangeIcon('minInputDown')} style={{borderLeft: 'none'}} type="text" list='minInputLabels' placeholder='Mínimo' className='form-control minInput' aria-describedby="basic-addon1" />
                            <span className="input-group-text bg-white" id="basic-addon1">
                                {
                                    (changeIcon === 'minInputUp')
                                        ?
                                    <i className="bi bi-caret-up-fill"></i>
                                        :
                                    <i className="bi bi-caret-down-fill"></i>
                                }
                            </span>
                        </div>

                        <datalist id='minInputLabels'>
                            <option value="$250"></option>
                            <option value="$500"></option>
                            <option value="$750"></option>
                            <option value="$1000"></option>
                            <option value="$1250"></option>
                            <option value="$1500"></option>
                            <option value="$1750"></option>
                        </datalist>

                    </div>
                </div>

                <div className = 'col-6 mt-2'>
                    <div className="form-group">

                        <div className="input-group mb-3">
                            <span className="input-group-text bg-white" id="basic-addon1"><i className="bi bi-currency-dollar"></i></span>
                            <input onClick={() => setChangeIconMax('maxInputUp')} onBlur = {() =>setChangeIconMax('maxInputDown')} style={{borderLeft: 'none'}} type="text" list='maxInputLabel' placeholder='Máximo' className='form-control minInput' aria-describedby="basic-addon1" />
                            <span className="input-group-text bg-white" id="basic-addon1">
                                {
                                    (changeIconMax === 'maxInputUp')
                                        ?
                                    <i className="bi bi-caret-up-fill"></i>
                                        :
                                    <i className="bi bi-caret-down-fill"></i>
                                }
                            </span>
                        </div>

                        <datalist id='maxInputLabel'>
                            <option value="$1200"></option>
                            <option value="$1450"></option>
                            <option value="$1700"></option>
                            <option value="$1950"></option>
                            <option value="$2200"></option>
                            <option value="$2450"></option>
                            <option value="$2700"></option>
                        </datalist>

                    </div>
                </div>
            </div>

            <div className = 'row mt-2'>
                <h5>Tipo de propiedad</h5>
                {/* <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    pagination
                    modules={[Pagination]}
                    className = 'mt-2'
                > */}
                    {
                        propertys.map(e => {
                            return (
                                // <SwiperSlide key={e}>
                                    <div style = {{color: (check === e.label) && 'red'}} onClick = {() => setCheck(e.label)} className = 'col-2 mt-2 typeProperty'>
                                        <div className='d-flex justify-content-center mx-auto' style={{width: '50px', height: '50px', borderRadius: '50%', border: '1px solid'}}>
                                            <img className='img-fluid' style={{width: '25px'}} src={buildings} alt="" />
                                            {
                                                (check === e.label)
                                                    &&
                                                <i style={{position: 'absolute', top: 30, marginLeft: '33px'}} className="bi bi-check-circle-fill"></i>
                                            }
                                        </div>
                                        <div className={`${(respWidth > 600) ? 'text-center' : 'd-flex justify-content-center text-center'}`} style={{fontSize: '14px'}}>{e.label}</div>
                                    </div>
                                // </SwiperSlide>
                            )
                        })
                    }
                    
                {/* </Swiper> */}
            </div>

            <div className = 'row'>
                <h5>Habitaciones</h5>
                {
                    ['Todas', '1', '2', '3', '4', '5'].map(e => {
                        return (
                            <div key={e} className = 'col-2 mt-2 typeProperty' style = {{color: (checkBed === e) && 'red'}} onClick = {() => setCheckBed(e)}>
                                <div className='d-flex align-items-center justify-content-center mx-auto' style={{width: '50px', height: '50px', borderRadius: '50%', border: '1px solid'}}>    
                                    <div style={{fontSize: '14px'}}>{(e !== 'Todas') ? `${e}+` : e}</div>
                                    {
                                        (checkBed === e)
                                            &&
                                        <i style={{position: 'absolute', top: 30, marginLeft: '33px'}} className="bi bi-check-circle-fill"></i>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className = 'row mt-4'>
                <h5>Baños</h5>
                {
                    ['Todos', '1', '2', '3', '4', '5'].map(e => {
                        return (
                            <div key={e} className = 'col-2 mt-2 typeProperty' style = {{color: (checkBath === e) && 'red'}} onClick = {() => setCheckBath(e)}>
                                <div className='d-flex align-items-center justify-content-center mx-auto' style={{width: '50px', height: '50px', borderRadius: '50%', border: '1px solid'}}>    
                                    <div style={{fontSize: '14px'}}>{(e !== 'Todos') ? `${e}+` : e}</div>
                                    {
                                        (checkBath === e)
                                            &&
                                        <i style={{position: 'absolute', top: 30, marginLeft: '33px'}} className="bi bi-check-circle-fill"></i>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn-button-login px-5 py-2' onClick={handleClose}>
            Ver 65 Resultados
          </Button>
        </Modal.Footer>
    </Modal>
  )
}
