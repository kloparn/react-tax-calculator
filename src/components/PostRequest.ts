import axios from "axios";

const PostRequest = async (
  amountProp: number,
  taxProp: number,
  amountAfterProp: number
) => {
  const res = await axios.post(
    "https://tax-backend-api.herokuapp.com/api/HistoryItems",
    {
      Amount: amountProp.toString(),
      Tax: taxProp.toString(),
      AmountAfter: amountAfterProp.toString(),
    }
  );

  return res.status.toString();
};

export default PostRequest;
