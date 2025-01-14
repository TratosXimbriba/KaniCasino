interface ModalProps {
  children: any;
  isVisible: boolean;
  onClose: any;
}

const Modal: React.FC<ModalProps> = ({ children, isVisible, onClose }) => {
  if (!isVisible) return null;

  /* function to close when clicking outside modal */
  const handleClose = (e: any) => {
    if (e.target.id === "wrapped") onClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
      id="wrapped"
      onClick={handleClose}
    >
      <div className="w-[600px] flex flex-col">
        {/* X button to close modal */}
        <button
          className="flex-grow p-2 text-3xl text-red-500 border-none place-self-end bg-inherit focus:outline-none"
          onClick={() => onClose()}
        ></button>

        {/* all Modal content */}
        <div className="p-6 text-white rounded bg-[#19172D]">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
