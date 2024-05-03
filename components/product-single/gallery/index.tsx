import { isArray } from "lodash";

type GalleryProductType = {
  images: string[]
}

const Gallery = ({ images }: GalleryProductType) => {
  console.log(images);
  if (!isArray(images)) {
    images = [images];
  }

  return (
    <section className="product-gallery">
      <div className="product-gallery__thumbs">
        {images.map(image => (
          <div key={image} className="product-gallery__thumb">
            <img src={`data:image/jpeg;base64,${images}`} alt="" />
          </div>
        ))}
      </div>

      <div className="product-gallery__image">
        <img src={`data:image/jpeg;base64,${images}`} alt="" />
      </div>
    </section>
  );
};
  
export default Gallery;