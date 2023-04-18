import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "1", price: 6, title: "book", description: "yay bus" },
  { id: "2", price: 9, title: "hampter", description: "yay hampy" },
  { id: "3", price: 12, title: "lamb", description: "yay lamb" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(products => (<ProductItem
          key={products.id}
          id={products.id}
          title={products.title}
          price={products.price}
          description={products.description}
        />))}
        
      </ul>
    </section>
  );
};

export default Products;
