import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { cartActions } from "../store/cart/CartSlice";

const allActions = {
  ...cartActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
