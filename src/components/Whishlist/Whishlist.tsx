"use client";

// import useRippleEffect from "@/hooks/useRippleEffect";
import AddIcon from "@/statics/icons/add";
import "@/statics/styles/whishlist.module.css";
import WhishModal from "../common/Modals/WhishModal";

function Whishlist() {
  // const createRipple = useRippleEffect();

  return (
    <>
      <div className="flex justify-start items-center">
        <div>
          <button className=" flex items-center justify-center flex-col w-64 h-80 border-2 border-dashed border-lilacPurple">
            <div
              // onClick={createRipple}
              className="text-4xl font-semibold text-gray-700"
            >
              <AddIcon />
            </div>
            <p className="text-lilacPurple font-libre-carlson italic font-bold text-xl">
              Add Your First Whish!
            </p>
          </button>
          <WhishModal />
        </div>
      </div>
    </>
  );
}

export default Whishlist;
