export default function ConfirmAction() {
  const showModal = () => {
    if (deleteModal) {
      return (
        <div className="wrapper overflow-scroll pt-[250px] sm:pt-0 p-6 md:overflow-auto fixed inset-0 z-50 flex items-center justify-center bg-[var(--backdrop-color)] text-white backdrop-blur-sm">
          <div className="w-[300px] h-[150px] bg-[var(--green-500)]"></div>
        </div>
      );
    }

    if (updateModal) {
      return (
        <div className="wrapper overflow-scroll pt-[250px] sm:pt-0 p-6 md:overflow-auto fixed inset-0 z-50 flex items-center justify-center bg-[var(--backdrop-color)] text-white backdrop-blur-sm">
          <div className="w-[300px] h-[150px] bg-[var(--green-500)]"></div>
        </div>
      );
    }

    return;
  };

  return showModal();
}
