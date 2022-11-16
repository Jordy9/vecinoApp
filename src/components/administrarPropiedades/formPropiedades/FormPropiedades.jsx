import React, { useState } from 'react'
import { useResponsive } from '../../../hooks/useResponsive'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow, Navigation } from "swiper";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { useNavigate } from 'react-router-dom';

export const FormPropiedades = () => {

  const tipoPropiedad = ['Villa', 'Apartamento', 'Casa', 'Casa simple']

  const imageSelect = () => {
    document.getElementById('file-Images-Select').click()
  }

  const [ respWidth ] = useResponsive()

  const [images, setImages] = useState([])

  const [previewImages, setPreviewImages] = useState([])

  const onSeletedImages = (imgs) => {
    const selectedFilesArray = Array.from(imgs)

    const imagesArray = selectedFilesArray.map(file => {
      return URL.createObjectURL(file)
    })

    const allFilesArray = [...previewImages, ...imagesArray]

    setPreviewImages(allFilesArray)
  }

  const removeImage = (img) => {
    setPreviewImages(previewImages?.filter(image => image !== img))
  }

  const navigate = useNavigate()

  const goBack = () => {
    navigate('/administrarPropiedades')
  }

  return (
    <div className='p-4'>
      <div onClick={goBack} className='goBack' style={{display: 'flex', alignItems: 'center', width: '50px'}}>
        <i style={{fontSize: '30px'}} className="bi bi-chevron-left"></i>
        <span>Atras</span>
      </div>
      <h1>Crear Propiedad</h1>

      <form>
        <div className = 'row'>
           <div className = 'col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 form-group'>
              <label>Titulo de la propiedad</label>
              <input type="text" placeholder='Villa elegante' className='form-control' />
           </div>

           <div className = 'col-xs-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 col-xxl-2 form-group'>
              <label>Tipo de propiedad</label>
              <select name="" id="" className='form-select'>
                <option value="">Seleccione una opción</option>
                {
                  tipoPropiedad.map(e => {
                    return (
                        <option key={e} value={e}>{e}</option>
                      )
                    })
                }
              </select>
           </div>

           <div className = 'col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2 form-group'>
              <label>Subir imagenes</label>
              <button type='button' onClick={imageSelect} className='btn btn-primary d-block'><i className="bi bi-upload"></i></button>
              <input onChange={({target}) => onSeletedImages(target?.files)} hidden id='file-Images-Select' type="file" multiple />
           </div>
        </div>

        <div className = 'row'>
           <div className = 'col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 form-group'>
              <label>Descripción</label>
              <textarea style={{resize: 'none'}} name="" id="" cols="30" rows="3" className='form-control'></textarea>
           </div>
        </div>

        <div className = 'row'>
          <div className = 'col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 form-group'>

            {
              (respWidth < 992)
                ?
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop = {(previewImages?.length > 2) ? true : false}
                slidesPerView={1.5}
                initialSlide = {1}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                // pagination={true}
                modules={[EffectCoverflow]}
                // className="mySwiper"
              >
                {
                  previewImages?.map((e) => {
                    return (
                      <SwiperSlide key={e} className = 'my-3 cardMouse'>
                        <img key={e} src={e} alt="" className='img-fluid' style={{width: '100px', height: '100px', position: 'relative'}} />
                        <i onClick={() => removeImage(e)} style={{position: 'absolute', top: 0, right: 5, fontSize: '20px', cursor: 'pointer'}} className="bi bi-x-circle-fill text-danger"></i>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
                :
              <Swiper
                style={{
                  "--swiper-navigation-color": "black",
                  "--swiper-pagination-color": "black",
                  userSelect: 'none',
                }}
                spaceBetween={20}
                slidesPerView={4}
                navigation
                modules={[Navigation]}
              >
                {
                  previewImages?.map((e) => {
                    return (
                      <SwiperSlide key={e} className = 'my-3 px-5 cardMouse'>
                        <img key={e} src={e} alt="" className='img-fluid' style={{height: '100px', position: 'relative'}} />
                        <i onClick={() => removeImage(e)} style={{position: 'absolute', top: 0, right: 5, fontSize: '20px', cursor: 'pointer'}} className="bi bi-x-circle-fill text-danger"></i>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            }
           </div>
        </div>

        <div className='text-center'>
          <button className='btn btn-primary' style={{width: '200px'}}>Guardar</button>
        </div>
      </form>
    </div>
  )
}
