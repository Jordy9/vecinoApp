import React from 'react'

export const ModalInformacionGeneral = () => {
  return (
    <>
        <h3>Información general</h3>

        <div className="row px-2">

            <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 shadow rounded'>
                <div className = 'row my-4'>
                <div className = 'col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4'>
                    <input type="text" readOnly value={'Total de propiedades rentadas'} className = 'form-control' />
                </div>

                <div className = 'col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4'>
                    <input type="text" readOnly value={'Total de propiedades actualmente rentadas'} className = 'form-control' />
                </div>

                <div className = 'col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4'>
                    <input type="text" readOnly value={'Total de propiedades disponibles'} className = 'form-control' />
                </div>
                </div>
            </div>
        </div>
    </>
  )
}
