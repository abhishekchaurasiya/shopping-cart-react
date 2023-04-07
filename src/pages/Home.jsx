import { useEffect, useState } from "react";
import { baseUrl } from "../baseUrl"
import Spinner from "../components/Spinner";
import Product from "../components/Product";


const Home = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(baseUrl);
      const data = await response.json();
      setItems(data)
    } catch (error) {
      console.log(error.message)
      setItems([])
    }
    setLoading(false)
  };

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div>
        {
          loading ? (<Spinner />) :
            items.length > 0 ?
              (<div className=" grid xs:grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl p-2 m-auto space-x-5 space-y-10 min-h-[80vh]">
                {
                  items.map((item, id) => (
                    <Product key={id} item={item} />
                  ))
                }
              </div>) :
              (<div className=" flex justify-center items-center">
                Not found product data...
              </div>)
        }
      </div>
    </div>
  );
};

export default Home;
