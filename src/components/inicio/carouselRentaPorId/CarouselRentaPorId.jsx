import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./StyleCarousel.css";

import { FreeMode, Navigation, Thumbs } from "swiper";
import { NavLink, useNavigate } from 'react-router-dom';
import { ModalToShare } from './ModalToShare';
import { ModalLoginCreateAccount } from './ModalLoginCreateAccount';
import { useResponsive } from '../../../hooks/useResponsive';
import { ModalShowSearchFilter } from '../modalFilters/ModalShowSearchFilter';

export const CarouselRentaPorId = () => {

  const [searchState, setSearchState] = useState('')

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const arregloImagenes = [
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-2.jpg',
  'https://swiperjs.com/demos/images/nature-3.jpg',
  'https://swiperjs.com/demos/images/nature-4.jpg',
  'https://swiperjs.com/demos/images/nature-5.jpg',
  'https://swiperjs.com/demos/images/nature-6.jpg',
  'https://swiperjs.com/demos/images/nature-7.jpg',
  'https://swiperjs.com/demos/images/nature-8.jpg',
  'https://swiperjs.com/demos/images/nature-9.jpg',
  'https://swiperjs.com/demos/images/nature-10.jpg',
  ]

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const [show, setShow] = useState(false)
  const [showLoginCreate, setShowLoginCreate] = useState(false)

  let serachFilterToMap = []

  serachFilterToMap = ['Hola que tal', 'Como estas', 'Todo bien', 'Todo nice']?.filter(e => (searchState === '') ? e : (e.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(searchState.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,""))) && e)

  const [showCustomDatalist, setshowCustomDatalist] = useState(false)

  const handleClick = (e) => {
    setSearchState(e)
    setshowCustomDatalist(false)
  }

  const [ respWidth ] = useResponsive()

  const [showModalSearchFilter, setShowModalSearchFilter] = useState(false)

  const handleCustomDatalist = () => {
    setshowCustomDatalist(true)
    if (respWidth < 992) {
      setShowModalSearchFilter(true)
    }
  }

  return (
    <div className='p-4'>
      <div className = 'row mb-3'>
         <div className = 'col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4'>
            <form className="d-flex align-items-center" role="search">
              <div onClick={goBack} className='goBack mr-5' style={{display: 'flex', alignItems: 'center'}}>
                <i style={{fontSize: '22px'}} className="bi bi-chevron-left"></i>
                <span>Atras</span>
              </div>

              <div style={{position: 'relative'}}>

                <input onClick={handleCustomDatalist} className="form-control searchFormFilter" value={searchState} onChange={({ target }) => setSearchState(target.value)} type="text" placeholder="Address, School, City, Zip or Neighborhood" aria-label="Search" />
                  {
                    (searchState !== '')
                        &&
                    <i onClick={() => setSearchState('')} style={{position: 'absolute', color: 'black', fontSize: '18px', right: 45, top: 9, cursor: 'pointer'}} className="bi bi-x-lg searchX"></i>
                  }
                <button type='buttom' style={{position: 'absolute', color: 'red', right: 0, top: 2}} className='btn btn-search-danger'>
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
              </div>
            </form>
         </div>
      </div>

      <div className="row">
        <div className = 'col-xs-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 col-xxl-8'>
          <div className = 'row'>
             <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                    userSelect: 'none',
                    height: '400px',
                  }}
                  slidesPerView={1}
                  navigation
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  {
                    arregloImagenes.map(e => {
                      return (
                        <SwiperSlide key={e} style = {{position: 'relative'}}>
                          <img src={e} style = {{height: '100%', width: '100%'}} alt='' />
                        </SwiperSlide>
                      )
                    })
                  }
                </Swiper>

                <div 
                  onClick={() => setShowLoginCreate(true)}
                  className='d-flex align-items-center justify-content-center optionsCarousel' 
                  style={{
                    position: 'absolute', 
                    zIndex: 1046, 
                    bottom: -25, 
                    right: 100, 
                    backgroundColor: 'white', 
                    height: '45px', 
                    width: '45px', 
                    borderRadius: '50%',
                    cursor: 'pointer'
                  }}
                >
                  <i className="bi bi-heart"></i>
                </div>

                <div 
                  onClick={() => setShow(true)}
                  className='d-flex align-items-center justify-content-center optionsCarousel' 
                  style={{
                    position: 'absolute', 
                    zIndex: 1046, 
                    bottom: -25, 
                    right: 40, 
                    backgroundColor: 'white', 
                    height: '45px', 
                    width: '45px', 
                    borderRadius: '50%',
                    cursor: 'pointer'
                  }}
                >
                  <i className="bi bi-share"></i>
                </div>

                <Swiper
                    onClick={setThumbsSwiper}
                    onSwiper = {setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                  >
                  {
                    arregloImagenes.map(e => {
                      return (
                        <SwiperSlide key={e}>
                          <img src={e} alt='' />
                        </SwiperSlide>
                      )
                    })
                  }
                </Swiper>
             </div>
          </div>

          <div className = 'row'>
            <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
             <div 
                style={{borderBottomLeftRadius: '4px'}}
              >
                <div className='mt-2 pb-2'>
                  <div style={{display: 'flex', alignItems: 'center', fontSize: '18px'}}>
                      <span className='badgee2'></span>

                      For Rent
                  </div>
                  
                  <NavLink>Get Moving Quotes</NavLink>

                  <div className='my-2'>
                    <strong style={{fontSize: '30px'}}>$479,000</strong>
                  </div>

                  <div>
                    3 bed 2 bath 1564 sqft
                  </div>

                  <br />

                  <div style={{lineHeight: '18px'}}>
                      <div className='mb-2' style={{fontWeight: 'bold', fontSize: '22px'}}>
                        1513 Mooreland Blvd
                      </div>

                      <div className='text-muted' style={{fontSize: '22px'}}>
                        Brentwood, TN 37027
                      </div>
                  </div>
                </div>
              </div>
             </div>
          </div>
        </div>

        <div className = 'col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 shadow' style={{borderRadius: '4px', height: '530px'}}>
          <div className='my-4'>
            <h4>Para más información</h4>
            <div>
              <i className="bi bi-telephone-fill mr-1"></i>
              (609) 213-1996
            </div>

            <div className="row">
              <div className="col-12 form-group">
                <div class="input-group" style={{border: '1px solid black', borderRadius: '4px'}}>
                  <span style={{border: 'none'}} className="input-group-text bg-white" id="basic-addon1"><i style={{color: 'black'}} className="bi bi-person"></i></span>
                  <input style={{border: 'none'}} type="text" className="form-control" placeholder="Nombre completo" aria-label="Username" aria-describedby="basic-addon1" />
                </div>  
              </div>

              <div className="col-12 form-group">
                <div class="input-group" style={{border: '1px solid black', borderRadius: '4px'}}>
                  <span style={{border: 'none'}} className="input-group-text bg-white" id="basic-addon1"><i style={{color: 'black'}} className="bi bi-envelope-fill"></i></span>
                  <input style={{border: 'none'}} type="text" className="form-control" placeholder="Correo electrónico" aria-label="Username" aria-describedby="basic-addon1" />
                </div>  
              </div>

              <div className="col-12 form-group">
                <div class="input-group" style={{border: '1px solid black', borderRadius: '4px'}}>
                  <span style={{border: 'none'}} className="input-group-text bg-white" id="basic-addon1"><i style={{color: 'black'}} className="bi bi-telephone-fill"></i></span>
                  <input style={{border: 'none'}} type="text" className="form-control" placeholder="Correo electrónico" aria-label="Username" aria-describedby="basic-addon1" />
                </div>  
              </div>

              <div className="col-12 form-group">
                <div class="input-group" style={{border: '1px solid black', borderRadius: '4px'}}>
                  <input style={{border: 'none'}} type="date" className="form-control" placeholder="Correo electrónico" aria-label="Username" />
                </div>  
              </div>

              <div className="col-12 form-group">
                <label>Mensaje</label>
                <textarea placeholder="Estoy interesado" style={{resize: 'none', border: '1px solid black', borderRadius: '4px'}} name="" id="" cols="30" rows="2" className="form-control"></textarea>
              </div>

              <div className="col-12 form-group">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label">Enviarme promociones a mi correo electrónico</label>
                </div>
                <button className='btn btn-button-login form-control'>Enviar correo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalToShare show = {show} setShow = {setShow} />
      <ModalLoginCreateAccount showLoginCreate = {showLoginCreate} setShowLoginCreate = {setShowLoginCreate} />
      {
        (showModalSearchFilter)
          &&
        <ModalShowSearchFilter
          show = { showModalSearchFilter } 
          setShow = { setShowModalSearchFilter }
          navigate = {navigate}
          respWidth = {respWidth}
          searchState = {searchState}
          setSearchState = {setSearchState}
          serachFilterToMap = {serachFilterToMap}
          handleClick = {handleClick}
        />
      }
    </div>
  )
}
