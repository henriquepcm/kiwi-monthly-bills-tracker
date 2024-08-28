import { toast } from "react-toastify";

export const useNotify = () => {
     const notify = (message: string, options = {}) => {
          toast(message, options);
     };

     const notifyTheUser = (message: string) => {
          notify(message, {
               position: "bottom-right",
               autoClose: 1250,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "dark",
          });
     };

     return {
          notifyTheUser,
     };
};
