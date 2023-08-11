import { createContext, useContext } from "react"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export const MessageContext = createContext()

export const ToastTypes = {
    SUCCESS: "SUCCESS",
    ERROR: "ERROR",
    WARNING: "WARNING",
    INFO: "INFO"
}

const MessageProvider = ({children}) => {


    const showToast = (toastMsg, type) => {

        switch(type){
            case ToastTypes.SUCCESS: {
                toast.success(toastMsg, {
                    position: toast.POSITION.TOP_RIGHT
                })
                break;
            }
            case ToastTypes.ERROR: {
                toast.error(toastMsg, {
                    position: toast.POSITION.TOP_RIGHT
                })
                break;
            }
            case ToastTypes.WARNING: {
                toast.warning(toastMsg, {
                    position: toast.POSITION.TOP_RIGHT
                })
                break;
            }
            case ToastTypes.INFO: {
                toast.info(toastMsg, {
                    position: toast.POSITION.TOP_RIGHT
                })
                break;
            }
            default: {
                toast(toastMsg, {
                    position: toast.POSITION.TOP_RIGHT
                })
            }
        }
    }

    return (
        <MessageContext.Provider value={{showToast}}>
            {children}
            <ToastContainer />
        </MessageContext.Provider>
    )
}

export const useMessage = () => useContext(MessageContext) 

export default MessageProvider;