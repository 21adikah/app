import { NextPage } from "next";
import Link from "next/link";

const Checkout: NextPage = () => {
  return (
    <>
      <h1 className="text-2xl">Thanks for order!</h1>
      <Link href="/" legacyBehavior={true}>
        <a className="text-blue-500">Back to catalog</a>
      </Link>
    </>
  );
};

export default Checkout;
