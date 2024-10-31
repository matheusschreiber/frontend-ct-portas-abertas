import styles from "../styles/components/Carousel.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Image from "next/image";


export function CarouselTop() {
  var items = [
    { "id": 1, "title": "", "imageUrl": "/Fotos-2023-1.jpeg" },
    { "id": 2, "title": "", "imageUrl": "/Fotos-2023-7.jpeg" },
    { "id": 3, "title": "", "imageUrl": "/Fotos-2023-3.jpeg" },
    { "id": 4, "title": "", "imageUrl": "/Fotos-2023-4.jpeg" },
    { "id": 5, "title": "", "imageUrl": "/Fotos-2023-5.jpeg" },
    { "id": 6, "title": "", "imageUrl": "/Fotos-2023-6.jpeg" }

  ]

  return (
    <div className={styles.mainContainer}>
      <Carousel>
        {
          items.map((photo, idx)=>(
            <div key={idx} className={styles.card}>
              <img src={photo.imageUrl} className={styles.card}/>
              {/* <p>{photo.title}</p> */}
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}


