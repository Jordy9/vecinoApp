import React, { useState } from 'react'
import { Button, Dropdown, OverlayTrigger, Popover } from 'react-bootstrap'
import { useResponsive } from '../../../hooks/useResponsive'
import { CardFilter } from '../cardsAfterBanner/CardFilter'
import { ModalFilters } from '../modalFilters/ModalFilters'
import buildings from '../../../assets/buildings.svg'

export const RentaPorFiltro = () => {

    const [searchState, setSearchState] = useState('')

    const [ respWidth ] = useResponsive()

    const [show, setShow] = useState(false)

    const [changeIcon, setChangeIcon] = useState('minInputDown')

    const [changeIconMax, setChangeIconMax] = useState('maxInputDown')

    const [checkPrices, setCheckPrices] = useState(false)

    const [check, setCheck] = useState(false)

    const [checkBed, setCheckBed] = useState(false)

    const [checkBath, setCheckBath] = useState(false)

    const [checkOptions, setCheckOptions] = useState('Todas')

    const [checkBedOptions, setCheckBedOptions] = useState('Todas')

    const [checkBathOptions, setCheckBathOptions] = useState('Todos')

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
    
    const popover = (
        <Popover id="popover-basic" className='py-4' style = {{height: '250px', overflowY: 'auto', display: 'grid', gridTemplateColumns: 'auto auto'}}>
            {
                propertys.map(e => {
                    return (
                        <Popover.Body key={e.label} style={{padding: 0, height: 0}}>
                            <div style = {{color: (checkOptions === e.label) && 'red'}} onClick = {() => setCheckOptions(e.label)} className = 'col-12 d-flex align-items-center typeProperty'>
                                <div style={{width: '50px', height: '50px', borderRadius: '50%', border: '1px solid', position: 'relative'}}></div>
                                <img className='img-fluid' style={{width: '25px', position: 'absolute', top: 0, marginLeft: '12px', marginTop: '12px'}} src={buildings} alt="" />
                                <div className='mx-1' style={{fontSize: '14px'}}>{e.label}</div>
                                {
                                    (checkOptions === e.label)
                                        &&
                                    <i style={{position: 'absolute', top: 30, marginLeft: '33px'}} className="bi bi-check-circle-fill"></i>
                                }
                            </div>
                        </Popover.Body>
                    )
                })
            }
        </Popover>
    );

    const popoverBed = (
        <Popover id="popover-basic" className='py-4' style = {{display: 'flex'}}>
            {
                ['Todas', '1', '2', '3', '4', '5'].map(e => {
                    return (
                        <div key={e} className = 'mx-2 typeProperty' style = {{color: (checkBedOptions === e) && 'red'}} onClick = {() => setCheckBedOptions(e)}>
                            <div className='d-flex align-items-center justify-content-center' style={{width: '50px', height: '50px', borderRadius: '50%', border: '1px solid'}}>    
                                <div style={{fontSize: '14px'}}>{(e !== 'Todas') ? `${e}+` : e}</div>
                                {
                                    (checkBedOptions === e)
                                        &&
                                    <i style={{position: 'absolute', top: 55, marginLeft: '33px'}} className="bi bi-check-circle-fill"></i>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </Popover>
    );

    const popoverBath = (
        <Popover id="popover-basic" className='py-4' style = {{display: 'flex'}}>
            {
                ['Todos', '1', '2', '3', '4', '5'].map(e => {
                    return (
                        <div key={e} className = 'mx-2 typeProperty' style = {{color: (checkBathOptions === e) && 'red'}} onClick = {() => setCheckBathOptions(e)}>
                            <div className='d-flex align-items-center justify-content-center' style={{width: '50px', height: '50px', borderRadius: '50%', border: '1px solid'}}>    
                                <div style={{fontSize: '14px'}}>{(e !== 'Todos') ? `${e}+` : e}</div>
                                {
                                    (checkBathOptions === e)
                                        &&
                                    <i style={{position: 'absolute', top: 55, marginLeft: '33px'}} className="bi bi-check-circle-fill"></i>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </Popover>
    );

    const popoverPrices = (
        <Popover id="popover-basic" className='pt-3' style = {{display: 'flex'}}>
            <div className = 'row px-2'>
                <div className = 'col-6'>
                    <div className="form-group">

                        <div class="input-group mb-3">
                            <span class="input-group-text bg-white" id="basic-addon1"><i className="bi bi-currency-dollar"></i></span>
                            <input onClick={() => setChangeIcon('minInputUp')} onBlur = {() =>setChangeIcon('minInputDown')} style={{borderLeft: 'none'}} type="text" list='minInputLabels' placeholder='Mínimo' className='form-control minInput' aria-describedby="basic-addon1" />
                            <span class="input-group-text bg-white" id="basic-addon1">
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

                <div className = 'col-6'>
                    <div className="form-group">

                        <div class="input-group mb-3">
                            <span class="input-group-text bg-white" id="basic-addon1"><i className="bi bi-currency-dollar"></i></span>
                            <input onClick={() => setChangeIconMax('maxInputUp')} onBlur = {() =>setChangeIconMax('maxInputDown')} style={{borderLeft: 'none'}} type="text" list='maxInputLabel' placeholder='Máximo' className='form-control minInput' aria-describedby="basic-addon1" />
                            <span class="input-group-text bg-white" id="basic-addon1">
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
        </Popover>
    );

    const onPrices = () => {
        setCheckPrices(!checkPrices)
    }

    const onProperty = () => {
        setCheck(!check)
    }

    const onBed = () => {
        setCheckBed(!checkBed)
    }

    const onBath = () => {
        setCheckBath(!checkBath)
    }

    let serachFilterToMap = []

    serachFilterToMap = ['Hola que tal', 'Como estas', 'Todo bien', 'Todo nice']?.filter(e => (searchState === '') ? e : (e.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(searchState.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,""))) && e)

    const [showCustomDatalist, setshowCustomDatalist] = useState(false)

    const handleClick = (e) => {
        setSearchState(e)
        setshowCustomDatalist(false)
    }

    const handleCustomDatalist = () => {
        setshowCustomDatalist(true)
    }

  return (
    <div className='cardContainerFilter mt-4'>
        <div className = 'row cardContainerFilter1'>
           <div className = {`${(respWidth < 992 && 'col-9')} col-xs-10 col-sm-10 col-md-9 col-lg-3 col-xl-3 col-xxl-3`}>
                <form style={{position: 'relative'}} className="d-flex" role="search">
                    <input onClick={handleCustomDatalist} className="form-control searchFormFilter" value={searchState} onChange={({ target }) => setSearchState(target.value)} type="text" placeholder="Address, School, City, Zip or Neighborhood" aria-label="Search" />
                    {
                        (searchState !== '')
                            &&
                        <i onClick={() => setSearchState('')} style={{position: 'absolute', color: 'black', fontSize: '18px', right: 45, marginTop: '8.5px', cursor: 'pointer'}} className="bi bi-x-lg searchX"></i>
                    }
                    <button type='buttom' style={{position: 'absolute', color: 'red', right: 0, marginTop: '2px'}} className='btn btn-search-danger'>
                        <i className="bi bi-search text-white"></i>
                    </button>

                    {
                        (showCustomDatalist && searchState?.length !== 0)
                            &&
                        <div
                            style={{
                                backgroundColor: 'white', 
                                color: 'black', 
                                width: '100%', 
                                position: 'absolute', 
                                border: '1px solid black', 
                                borderRadius: '20px', 
                                top: 65,
                                zIndex: 1047,
                                maxHeight: '300px'
                            }}
                        >
                            {
                                serachFilterToMap.map(e => {
                                    return (
                                        <div className='customDatalist px-2 my-2' onClick={() => handleClick(e)} key={e}>{e}</div>
                                    )
                                })
                            }
                        </div>
                    }
                </form>
           </div>
           <div className = {`${(respWidth < 992 && 'col-3')} col-xs-2 col-sm-2 col-md-3 col-lg-8 col-xl-8 col-xxl-8 d-flex align-items-center`}>
                {
                    (respWidth < 992)
                        ?
                    <button onClick={() => setShow(true)} type='button' style={{backgroundColor: 'red', color: 'white'}} className='btn form-control'>Filtrar</button>
                        :
                    <>

                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                            <Button onClick={onProperty} className='mx-2' variant="outline-secondary">
                                Tipo de propiedad
                                {
                                    (check === true)
                                        ?
                                    <i className="bi bi-caret-up-fill ml-2"></i>
                                        :
                                    <i className="bi bi-caret-down-fill ml-2"></i>
                                }
                            </Button>
                        </OverlayTrigger>

                        <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBed}>
                            <Button onClick={onBed} className='mx-2' variant="outline-secondary">
                                Habitaciones
                                {
                                    (checkBed === true)
                                        ?
                                    <i className="bi bi-caret-up-fill ml-2"></i>
                                        :
                                    <i className="bi bi-caret-down-fill ml-2"></i>
                                }
                            </Button>
                        </OverlayTrigger>

                        <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBath}>
                            <Button onClick={onBath} className='mx-2' variant="outline-secondary">
                                Baños
                                {
                                    (checkBath === true)
                                        ?
                                    <i className="bi bi-caret-up-fill ml-2"></i>
                                        :
                                    <i className="bi bi-caret-down-fill ml-2"></i>
                                }
                            </Button>
                        </OverlayTrigger>

                        <OverlayTrigger trigger="click" placement="bottom" overlay={popoverPrices}>
                            <Button onClick={onPrices} className='mr-2' variant="outline-secondary">
                                Precios
                                {
                                    (checkPrices === true)
                                        ?
                                    <i className="bi bi-caret-up-fill ml-2"></i>
                                        :
                                    <i className="bi bi-caret-down-fill ml-2"></i>
                                }
                            </Button>
                        </OverlayTrigger>
                    </>
                }
           </div>
        </div>
        <CardFilter />
        <CardFilter />
        <CardFilter />
        <CardFilter />

        <ModalFilters show={show} setShow={setShow} respWidth = {respWidth} />
    </div>
  )
}
