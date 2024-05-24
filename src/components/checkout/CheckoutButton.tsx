import React from "react";

interface CheckoutButtonProps {
  isAnyItemSelected: boolean;
  handleCheckout: () => void;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({
  isAnyItemSelected,
  handleCheckout,
}) => {
  return (
    <div className="fixed h-[5rem] bottom-0 z-10 py-6 px-8 w-full border-dashed flex justify-end gap-4 items-center border-t-4 border-black bg-ivory">
      <p className="text-red-400">*Add Total Amount here*</p>
      <button
        onClick={handleCheckout}
        disabled={!isAnyItemSelected}
        className={`btn__blue ${
          !isAnyItemSelected && "opacity-50 cursor-not-allowed"
        }`}
      >
        Checkout
      </button>
    </div>
  );
};

export default CheckoutButton;