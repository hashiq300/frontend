import { useQuery } from "react-query";
import axios from "axios";

function ProductPage() {
  const { data } = useQuery(["products"], {
    queryFn: () => {
      return axios.get(import.meta.env.VITE_SERVER_URL + "/data/products.json");
    },
  });
  return (
    <main>
      <h1>{JSON.stringify(data?.data)}</h1>
    </main>
  );
}

export default ProductPage;
