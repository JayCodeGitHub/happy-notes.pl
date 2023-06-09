import { useState } from "react";
import Form from "./form";

interface AddNewProps {
  type: "note" | "site" | "todo";
}

export default function AddNew({ type }: AddNewProps) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button
        aria-label="Add New Item"
        onClick={() => setVisible(true)}
        className="fixed transition-all bg-green-500 rounded-full md:w-16 md:h-16 h-14 w-14 bottom-6 right-6 hover:bg-green-600"
      >
        <span className="absolute z-10 w-1 h-8 rotate-90 -translate-x-1/2 -translate-y-1/2 bg-white rounded-sm top-1/2 left-1/2"></span>
        <span className="absolute w-1 h-8 -translate-x-1/2 -translate-y-1/2 bg-white rounded-sm top-1/2 left-1/2"></span>
      </button>
      {visible ? (
        <span>
          <span
            onClick={() => setVisible(false)}
            className={`fixed top-0 left-0 w-full h-full z-20 transition-all ${
              visible
                ? " bg-background-visible visible"
                : " bg-background-invisible invisible "
            }`}
          />
          <Form type={type} setVisible={setVisible} />
        </span>
      ) : null}
    </>
  );
}
