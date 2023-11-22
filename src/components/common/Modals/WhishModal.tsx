import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ButtonBox from "../Buttons/ToggleButton";
import AddWhish from "@/components/Whishlist/AddWish";
import ThemeButton from "../Buttons/ThemeButton";
import ProductForm from "@/components/Whishlist/WhishlistProductForm";
import WhishlistCashFundForm from "@/components/Whishlist/WhishlistCashFundForm";

export default function WhishModal() {
  let [isOpen, setIsOpen] = useState(true);
  const [currentTab, setCurrentTab] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const toggleCurrentTab = (value: string) => {
    setCurrentTab(value === "left");
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-lilacPurple dark:text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="transform overflow-hidden bg-white dark:bg-boxdark text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h1"
                    style={lightBorder}
                    className="text-2xl font-medium font-libre-carlson leading-6 text-gray-900 text-black dark:text-white p-6"
                  >
                    Add Wish
                  </Dialog.Title>
                  {/* <div className="button-box">
                    <div className="bg-midnightIndigo" style={toggleButton} />
                    <button type="button">Product</button>
                    <button type="button">Cash Fund</button>
                  </div> */}

                  <div
                    style={lightBorder}
                    className="flex flex-row gap-x-8 px-10 mt-10 mb-5 pb-10 "
                  >
                    <div className="flex-1">
                      <div className="pl-6">
                        <ButtonBox
                          leftButtonLabel="Product"
                          rightButtonLabel="Cash Fund"
                          onToggle={toggleCurrentTab}
                        />
                      </div>

                      {currentTab ? (
                        <div className="flex flex-col pl-6 pb-4 gap-y-4 h-full items-center justify-evenly max-h-[400px] w-[450px]">
                          <ProductForm />
                        </div>
                      ) : (
                        <div className="flex flex-col pl-6 h-full items-center gap-y-5 max-h-[400px] w-[450px]">
                          <WhishlistCashFundForm />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <AddWhish />
                    </div>
                  </div>

                  <div className="flex items-center justify-end pb-5 pr-10">
                    <div className="flex gap-x-4">
                      <ThemeButton
                        text={"Abort"}
                        onClick={() => {}}
                        isAccent={false}
                      />
                      <ThemeButton
                        text={"Save"}
                        onClick={() => {}}
                        isAccent={true}
                      />
                    </div>
                  </div>
                  {/* <div className="mt-2">
                    <p className="text-sm text-lilacPurple dark:text-white">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

const lightBorder = {
  borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
};
