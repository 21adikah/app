import Image from "next/image";
import { FC } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IProduct } from "../store/items/types";
const ListItem: FC<{ product: IProduct }> = ({ product }) => {
  const { addItem } = useActions();
  const { cart } = useTypedSelector((state) => state);
  const isInCart = cart.some((p) => p.id === product.id);
  return (
    <div
      style={{ width: "48%", backgroundColor: "#51669c" }}
      className="rounded-xl mb-5 p-3 shadow-sm"
    >
      <div className="text-center">
        <Image
          src={product.image}
          alt={product.title}
          width="100"
          height="143"
          className="rounded-xl"
        />
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="text-green-500 font-medium text-sm overflow-hidden text-ellipsis whitespace-nowrap mr-5">
          {product.title}
        </div>
        <div className="text-sm text-green-500">${product.price}</div>
      </div>
      <button
        className="text-sm mt-3 bg-blue-500 rounded-xl w-3/4 mx-auto block p-1 hover:bg-green-500"
        onClick={() => !isInCart && addItem(product)}
      >
        {isInCart ? "Already in Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ListItem;
