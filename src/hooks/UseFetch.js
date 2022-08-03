// get from localhost:3000/api/banner

import axios from "axios";
import { useEffect, useState } from "react";

function UseFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  const fetchData = async () => {
    // fetch using axios
    const response = await axios.get(process.env.REACT_APP_SERVER_URL + url);
    setData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    fetchData();
  }, [url]);

  return [loading, data?.docs || [], data];
}

export default UseFetch;
