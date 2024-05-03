import ProductsCarousel from './carousel';
import useSwr from 'swr';
import axios from 'axios';

const ProductsFeatured = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data } = useSwr('https://localhost:7206/api/UserAPI/GetProducts', fetcher);

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Selected just for you</h3>
          <a href="/products" className="btn btn--rounded btn--border">Show All</a>
        </header>

        <ProductsCarousel products={data} />
      </div>
    </section>
  )
};

export default ProductsFeatured