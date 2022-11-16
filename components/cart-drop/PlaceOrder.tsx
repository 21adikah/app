import Link from "next/link";
import { FC } from "react";

const PlaceOrder: FC = () => {
  return (
    <Link href="checkout" legacyBehavior={true}>
      <a className="bg-blue-400 shadow-md shadow-green-100 rounded-xl block text-center p-3 text-white w-3/5 mx-auto mt-5 hover:bg-green-500 duration-300 transition-colors ease-in">
        Place order
      </a>
    </Link>
  );
};

export default PlaceOrder;
