import React from "react";
import Modal from "react-modal";

export default function Installment_Modal({ open, setOpen }) {
  return (
    <div className="">
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        className="w-1/3 mx-auto mt-20 bg-white p-6 rounded-lg shadow-lg"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50"
        contentLabel="Installment Plan Modal"
      >
        <h2 className="text-xl font-semibold mb-4">Choose Installment Plan</h2>
        <div className="flex flex-col space-y-4">
          <button className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            3 Month Installment
          </button>
          <button className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            6 Month Installment
          </button>
          <button className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            12 Month Installment
          </button>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="mt-6 text-red-500 hover:underline"
        >
          Close
        </button>
      </Modal>
    </div>
  );
}
