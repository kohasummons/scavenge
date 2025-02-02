import WalletManager from "../Helpers/WalletManager";

interface AddWalletModalProps {
  handleClose: () => void;
}

const AddWalletModal = ({ handleClose }: AddWalletModalProps) => {
  return (
    <div className="absolute inset-0 backdrop-blur-sm bg-gray-200/60 flex items-center overflow-hidden justify-center z-50">
      <WalletManager handleClose={handleClose} />
    </div>
  );
};

export default AddWalletModal;
