import ProductCard from "./ui/product-card";


type Product = {
  title: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  badge?: string;
  image?: string;
};

type ProductListProps = {
  products: Product[];
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
      {products.map((product, idx) => (
        <ProductCard key={idx} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
