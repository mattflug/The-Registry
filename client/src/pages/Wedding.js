import React from "react";
import WishListItems from "../components/helpers/WishListItems";
import { WishListList } from "../components/helpers/WishListList";
import retaillinks from "../components/helpers/Retaillinks";
import givemoney from "../components/helpers/Givemoney";
import { useQuery } from "@apollo/client";
import { QUERY_GIFT, QUERY_ALLGIFTS } from "../utils/queries";

import "./styles/wedding.css";

function Wedding() {
  // const { loading, error, data } = useQuery(QUERY_GIFT, {
  //   variables: { _id: "6349d26b9a0c4fc685a941f4" },
  // });
  const { loading, error, data } = useQuery(QUERY_ALLGIFTS);
  const gifts = data?.gifts || [];
  console.log(gifts);
  // console.log(error);

  return (
    <div>
      <div className="retaillinks">
        <h1>the Retail Stores we've Registered at</h1>
      </div>
      <div className="wedding">
        <h1>Our Wish List Items</h1>
        <div className="wishListList">
          {/* {WishListList.map((wedding, idx) => { */}
          {/* return ( */}
          <WishListItems
          // id={idx}
          // name={wedding.name}
          // image={wedding.image}
          />
          {/* );
          })} */}
        </div>
      </div>
      <div className="givemoney">
        <h1>...or you can just give money</h1>
      </div>
    </div>
  );
}

export default Wedding;
