import Whishlist from "@/components/Whishlist/Whishlist";
import { headerTextAtom } from "@/store/jotai";
import { atom, useAtom, useSetAtom } from "jotai";
// import { useEffect } from "react";

function WhishList() {
  const setHeaderText = useSetAtom(headerTextAtom);
  setHeaderText("Whishlist");
  // useEffect(() => {
  // }, [setHeaderText]);

  return <Whishlist />;
}

export default WhishList;
