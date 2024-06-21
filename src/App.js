import { useContext, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import { newsContext } from "./lib/ContextWrapper";
import Loader from "./components/Loader";
import Newscard from "./components/Newscard";
import Hottopic from "./components/Hottopic";
import Pagination from "./components/Pagination";
function App() {
  const { query, newsData, setNewsData, setLoading, loading, pagination } =
    useContext(newsContext);
  const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=92e06427cc1d4178a01646d7e70bbfd0&pageSize=10&page=${pagination}`;
  useEffect(() => {
    const fetchingData = async () => {
      try {
        setLoading(true);
        const data = await axios.get(url);
        setNewsData(data?.data?.articles);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchingData();
  }, [query, pagination, query]);
  return (
    <div className="h-screen flex flex-col gap-4">
      <Header />
      <Hottopic />
      <div className="p-4 h-[80%] overflow-y-auto flex gap-4 flex-wrap justify-center items-center">
        {!loading ? (
          newsData?.map((data, idx) => <Newscard data={data} key={idx} />)
        ) : (
          <Loader />
        )}
      </div>
      <Pagination />
    </div>
  );
}

export default App;
