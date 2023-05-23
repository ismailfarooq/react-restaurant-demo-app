import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <Link to={"/"}>Go Back to base</Link>
      <ul className="products">
        <li>
          <Link to="product-1">Product 1</Link>
        </li>
        <li>
          <Link to="product-2">Product 2</Link>
        </li>
        <li>
          <Link to="product-3?color=green">Product 3 with param color</Link>
        </li>
      </ul>
    </div>
  );
}