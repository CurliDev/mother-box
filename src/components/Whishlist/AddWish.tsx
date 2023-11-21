"use client";
import AddIcon from "@/statics/icons/add";

function AddWhish() {
  return (
    <>
      <div className="flex justify-start items-center">
        <div>
          <button className=" flex items-center justify-center flex-col w-64 h-80 border-2 border-dashed border-lilacPurple flex justify-center items-center w-[28rem] h-[28rem]">
            <div className="text-4xl font-semibold text-gray-700">
              <AddIcon />
            </div>
            <div className="w-56">
              <p className="text-lilacPurple font-urbanist font-bold text-xl/8  ">
                Click to upload the image
              </p>
              <p className="text-black font-urbanist text-xl/8">
                or drag and drop the file{" "}
              </p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default AddWhish;
