import { UploadInvoidIcon } from "@/assets/Icons/UploadInvoidIcon";

const CreateInvoice = () => {
  return (
    <div className=" space-y-2 cursor-pointer bg-[#F2F2F2] px-4 py-6 rounded-4x flex flex-col justify-center items-center rounded-3xl ">
      <UploadInvoidIcon />
      <div className="flex space-y-2 flex-col">
        <span className="text-2xl font-roboto font-bold bg-gradient-to-b from-[#DD2A7B] via-[#9747FF] to-[#334CCA] text-transparent bg-clip-text">
          Create New Invoice
        </span>
        <span className="text-[#999999] text-xs">
          Start by creating and sending new invoice
        </span>
      </div>
    </div>
  );
};

export default CreateInvoice;
