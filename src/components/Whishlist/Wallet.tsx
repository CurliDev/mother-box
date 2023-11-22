import CardIcon from "@/statics/icons/card";
import React from "react";

function Wallet({ walletNumber, walletCompany }) {
  console.log(walletCompany);
  return (
    <div className="flex flex-col border-2 border-lightgray rounded-[10px] py-2 px-2">
      <div className="pb-6">
        <CardIcon />
      </div>
      <div className="flex items-center justify-between w-40">
        <p className="text-black font-urbanist font-semibold text-sm">
          •• {walletNumber}
        </p>
        <img src={walletCompany.src} alt={"wallet"} />
      </div>
    </div>
  );
}

export default Wallet;
