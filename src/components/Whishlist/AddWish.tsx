"use client";
import GalleryIcon from "@/statics/icons/gallery";
import Unsplash from "@/statics/logos/unsplash_small.png";
import Image from "next/image";

function AddWhish() {
  return (
    <>
      <div className="flex justify-start items-center">
        <div>
          <div className=" flex items-center justify-center flex-col w-64 h-80 border-2 border-dashed border-lilacPurple w-[28rem] h-[28rem]">
            <div className="flex items-center justify-center flex-col w-64">
              <div className="text-4xl rounded-[10px] bg-lilacPurple bg-opacity-30 p-[12px]">
                <GalleryIcon />
              </div>
              <div className="w-56">
                <p className="text-lilacPurple font-urbanist font-bold text-xl/8 text-center  ">
                  Click to upload the image
                </p>
                <p className="text-black font-urbanist text-xl/8 text-center">
                  or drag and drop the file{" "}
                </p>
              </div>
            </div>
            <p className="text-graydark text-xl">Or</p>

            <div>
              <button
                className="flex items-center justify-center rounded-[8px] border-2 border-lightgray gap-x-4"
                style={unsplashButton}
              >
                <Image src={Unsplash.src} alt="unsplash" />
                <p className="font-urbanist text-lg	 text-black font-semibold">
                  Log in for Unsplash
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const unsplashButton = {
  padding: "15px 48px 15px 48px",
};

export default AddWhish;
