import React, { useState, useEffect, useRef } from "react";
import {
  useGetItemsQuery,
  useLazyGetItemsQuery,
} from "../store/items/ItemsApi";
import ListItem from "./ListItem";
import CartDropdown from "./cart-drop/CartDropdown";
const Home: React.FC = () => {
  const [limit, setLimit] = useState(4);
  const { data, isLoading, error } = useGetItemsQuery(limit);
  const lastElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 1,
      rootMargin: "20px",
    };
    const observer = new IntersectionObserver((entries) => {
      const isIntersecting = entries[0]?.isIntersecting ?? false;
      if (isIntersecting) setLimit((current) => current + 1);
    }, options);
    if (lastElement.current) {
      observer.observe(lastElement.current);
    }
  }, [lastElement]);
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl text--900 font-medium">Observe the Store</h1>
        <CartDropdown />
      </div>
      {isLoading ? (
        "Loading..."
      ) : error ? (
        <div className="text-red"></div>
      ) : (
        <div className="flex flex-wrap justify-between">
          {data?.map((product: any) => (
            <ListItem key={product.id} product={product} />
          ))}
        </div>
      )}
      <div ref={lastElement} />
    </div>
  );
};

export default Home;
