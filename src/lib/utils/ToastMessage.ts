import { toast, type TypeOptions } from "react-toastify";

const createToastMessage = (message: string, type: TypeOptions = 'success') => {
  return toast(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    type: type,
  } );
};

export { createToastMessage };
