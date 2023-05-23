import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { api } from "../../api";

function Products() {

  const [products, setProducts] = useState([]);

  // Callings
  useEffect(() => {
    fetchProducts();
  }, []);

  // Defines
  let fetchProducts = () => {
    api
      .get("products")
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data, "ddd");
          setProducts(response.data);
        }
      })
      .catch((error) => {});
  };

  const productImageTemplate = (product) => {
    return <img src={product.images[0].src} alt={product.alt} width={96} height={50} className="w-3rem h-auto shadow-2 border-round" />;
  };

  return (
    <div className="container">
      <DataTable value={products} header="Products" paginator rows={15} rowsPerPageOptions={[5, 10, 25, 50]}>
        <Column sortable field="id" header="ID" />
        <Column body={productImageTemplate} header="image" />
        <Column sortable field="name" header="Name" />
        <Column sortable field="price" header="Price" />
      </DataTable>
    </div>
  );
}

export default Products;