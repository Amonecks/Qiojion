import { useSelector } from "react-redux";
import { StateType } from "../types/types";

const useAuth = () => {

  const profile = useSelector((state: StateType) => state.profileSlice);

  if (profile._id) return true;

  return false;

}

export default useAuth;