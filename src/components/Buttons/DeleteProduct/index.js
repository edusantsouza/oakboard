export default function DeleteProductBtn({ id }) {
  return (
    <button
      className="p-2"
      id="delete-button"
      onClick={() => console.log("Item número ", id, " deletado com sucesso.")}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.83325 17.5C5.37492 17.5 4.9827 17.3369 4.65659 17.0108C4.33047 16.6847 4.16714 16.2922 4.16659 15.8333V5H3.33325V3.33333H7.49992V2.5H12.4999V3.33333H16.6666V5H15.8333V15.8333C15.8333 16.2917 15.6702 16.6842 15.3441 17.0108C15.018 17.3375 14.6255 17.5006 14.1666 17.5H5.83325ZM7.49992 14.1667H9.16658V6.66667H7.49992V14.1667ZM10.8333 14.1667H12.4999V6.66667H10.8333V14.1667Z"
          fill="#832424"
        />
      </svg>
    </button>
  );
}