import { createContext, useState } from "react"

export const newsContext = createContext();
const ContextWrapper = ({children}) => {
    const [newsData,setNewsData] = useState([]);
    const [query,setQuery] = useState('India');
    const [loading,setLoading] = useState(false);
    const [pagination,setPagination] = useState(1);
  return (
    <newsContext.Provider
    value={{
        newsData,setNewsData,
        query,setQuery,
        loading,setLoading,
        pagination,setPagination
    }}
    >
        {children}
    </newsContext.Provider>
  )
}

export default ContextWrapper