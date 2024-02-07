import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import Handlesubmit from "./handleSubmit";
const Form = async({desiredlink}) => {
  return (
    <>
     <form
            className="flex flex-col items-center  gap-8 mt-20"
            action={Handlesubmit}
          >
            <input
              type="text"
              name="username"
              placeholder="Link"
              className="p-3 text-black w-1/4 text-center "
              defaultValue={desiredlink}
            />
            
            <button
              className=" w-1/4 bg-emerald-600 px-5 p-3 text-black border-none select-none border-r-2 flex flex-row gap-2 justify-center"
              type="submit"
            >
              Claim Your link{" "}
              <FontAwesomeIcon
                className="w-6 h-6 items-center"
                icon={faHandPointer}
              />
            </button>
          </form>
    </>
  )
}

export default Form