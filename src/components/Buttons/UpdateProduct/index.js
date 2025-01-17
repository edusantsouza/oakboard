import { useRegisterContext } from "@/context/RegisterModalContext";

export default function UpdateProductBtn({ id }) {
  const { updateProduct } = useRegisterContext();

  return (
    <button
      className="p-2"
      id="update-button"
      onClick={() => updateProduct(id)}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.33341 10.6666L2.66675 13.3333L5.33341 12.6666L13.0574 4.94263C13.3074 4.69259 13.4478 4.35351 13.4478 3.99996C13.4478 3.64641 13.3074 3.30733 13.0574 3.05729L12.9427 2.94263C12.6927 2.69267 12.3536 2.55225 12.0001 2.55225C11.6465 2.55225 11.3075 2.69267 11.0574 2.94263L3.33341 10.6666Z"
          stroke="#1C791C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.33341 10.6667L2.66675 13.3333L5.33341 12.6667L12.0001 6L10.0001 4L3.33341 10.6667Z"
          fill="#1C791C"
        />
        <path
          d="M10.0001 4L12.0001 6M8.66675 13.3333H14.0001"
          stroke="#1C791C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
