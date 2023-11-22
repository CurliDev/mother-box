import React from "react";
import AccentInput from "../common/Form/AccentInput";
import RadioGroup from "../common/Buttons/RadioGroup";
import Wallet from "./Wallet";
import Paypal from "@/statics/logos/paypal_small.png";
import vaaps from "@/statics/logos/vaaps_small.png";

let options = [
  { id: "unlimited", label: "Unlimited" },
  { id: "targetAmount", label: "Enter the target gift amount" },
];

function WhishlistCashFundForm() {
  return (
    <>
      <AccentInput
        title="Title"
        placeholder="Title"
        value={""}
        onChange={() => {}}
      />
      <RadioGroup name="favoriteThing" options={options} />
      <div className="flex gap-x-2 w-full">
        <Wallet walletCompany={Paypal} walletNumber={1090} />
        <Wallet walletCompany={vaaps} walletNumber={2390} />
      </div>
      <AccentInput
        title="Fund amount"
        placeholder="Fund amount"
        value={""}
        onChange={() => {}}
      />
    </>
  );
}

export default WhishlistCashFundForm;
