import { useParams, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

function Product() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [queryParams] = useSearchParams();
  const selectedColor = queryParams.get("color");

  function handleGoToHome() {
    navigate("/");
  }

  function handleGoBack() {
    navigate(-1);
  }

  function handleGoForward() {
    navigate(1);
  }

  return (
    <div className="product">
      <h2>Name of Product: {productId}</h2>
      {selectedColor && (
        <h3 style={{ color: selectedColor }}>
          Cor selecionada: {selectedColor}
        </h3>
      )}

      <div className="actions">
        <button onClick={handleGoBack}>Go Back</button>
        <button onClick={handleGoForward}>Go Next</button>
        <button onClick={handleGoToHome}>Go home</button>
      </div>
    </div>
  );
}

export default Product;