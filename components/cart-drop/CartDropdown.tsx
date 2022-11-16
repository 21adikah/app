import Image from "next/image";
import { FC } from "react";
import { BsCart, BsTrash, BsX } from "react-icons/bs";
import { useActions } from "../../hooks/useActions";
import { useOutside } from "../../hooks/useOutside";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useGetItemsQuery } from "../../store/items/ItemsApi";
import PlaceOrder from "./PlaceOrder";

const CartDropdown: FC = () => {
  const { ref, isShow: isShown, setIsShow: setIsShown } = useOutside(false);

  const { cart } = useTypedSelector((state) => state);

  const { deleteItem } = useActions();

  return (
    <>
      <button
        className="bg-blue-500 rounded-full text-white p-2 block hover:bg-green-500"
        onClick={() => setIsShown(!isShown)}
      >
        {isShown ? <BsX /> : <BsCart />}
      </button>

      {isShown && (
        <div
          className="bg-white rounded-t-xl shadow-2xl fixed bottom-0 left-0 anim-cart z-10 py-7 px-5 w-full"
          style={{ minHeight: "45%" }}
          ref={ref}
        >
          {cart.length ? (
            <>
              {cart.map((product) => (
                <div
                  key={`Cart item: ${product.id}`}
                  className="flex items-center justify-between bg-blue-200 rounded-lg p-4 mb-4"
                >
                  <div className="w-3/4 flex items-center">
                    <div className="mr-4">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width="33"
                        height="48"
                        className="rounded-lg"
                        layout="fixed"
                      />
                    </div>
                    <div className="text-sm mr-4 w-3/4 ">
                      <div className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-green-500 mb-1">
                        {product.title}
                      </div>
                      <div className="text-green-500">${product.price}</div>
                    </div>
                  </div>
                  <button onClick={() => deleteItem({ id: product.id })}>
                    <BsTrash className="text-blue-600" />
                  </button>
                </div>
              ))}
              <PlaceOrder />
            </>
          ) : (
            <div className="text-align: center text-green-500">
              <a className="text-align: center">Cart is empty</a>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CartDropdown;
