import { useEffect, useRef } from 'react'

export const useInfiniteScroll = () => {

    const refElement = useRef()

    useEffect(() => {
        
        window.addEventListener('scroll', () => {
    
            if ((window.innerHeight + window.scrollY + 500) >= refElement.current.offsetHeight){
    
                console.log('LLegamos al final del bloque');
    
            }
        });

    }, [])

  return {
    refElement
  }
}
