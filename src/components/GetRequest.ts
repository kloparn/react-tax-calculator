import axios from "axios";
const GetRequest = async () => {
  const res = await axios.get(
    "https://tax-backend-api.herokuapp.com/api/HistoryItems",
    {}
  );
  return res.data;
};

export default GetRequest;
