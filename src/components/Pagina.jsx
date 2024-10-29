// src/components/Paginapdf.jsx
import React, { forwardRef, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Link } from 'react-router-dom'; 
import '../css/Pagina.css'; // Importa el nuevo archivo CSS

// Componente de página
const Page = forwardRef((props, ref) => {
    return (
      <div className="demoPage" ref={ref}>
        <img src={props.image} alt={`Page ${props.number}`} style={{ width: '100%', height: '100%' }} />
      </div>
    );
  });

const Pagina = () => {
    const bookRef = useRef();
    const images = [
        { front: '/images/11.png', back: '/images/44.png' },
        { front: '/images/22.png', back: '/images/33.png' },
        { front: '/images/33.png', back: '/images/22.png' },
        { front: '/images/44.png', back: '/images/11.png' },
    ];
    
    const nextPage = () => {
        if (bookRef.current) {
            bookRef.current.pageFlip().flipNext();
        }
    };

    const prevPage = () => {
        if (bookRef.current) {
            bookRef.current.pageFlip().flipPrev();
        }
    };

    return (
        <div className="flipbook-container">
            <Link to="/modelo" className="nav-button home-button">
                Volver al Inicio
            </Link>
            <div className="flipbook-content">
                <button onClick={prevPage} className="nav-button prev-button">Anterior</button>
                <div className="card1">
                    <HTMLFlipBook 
                        width={300} 
                        height={400} 
                        ref={bookRef}
                        onFlip={(e) => console.log('Current page: ', e.data)}
                    >
                        {images.flatMap((image, index) => [
                            <Page key={`front-${index}`} number={index * 2 + 1} image={image.front} />,
                            <Page key={`back-${index}`} number={index * 2 + 2} image={image.back} />,
                        ])}
                    </HTMLFlipBook>
                </div>
                <button onClick={nextPage} className="nav-button next-button">Siguiente</button>
            </div>
        </div>
    );
};
    


export default Pagina; // Asegúrate de que estás exportando por defecto
