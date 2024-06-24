import { useSelector, useDispatch } from "react-redux";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { Button } from "@mui/material";
import {
  increase,
  decrease,
  handleMode,
} from "./redux-app/features/counter/counterSlice";
const App = () => {
  const count = useSelector((state) => state.count.value);
  const mode = useSelector((state) => state.count.mode);
  const dispatch = useDispatch();
  return (
    <div className={`wrapper ${!mode && "dark"}`}>
      <div className="container">
        <Button
          onClick={() => dispatch(increase())}
          variant="contained"
          color="success"
        >
          <FaPlus />
        </Button>
        <Button
          onClick={() => dispatch(decrease())}
          variant="outlined"
          color="error"
        >
          <FaMinus />
        </Button>
        <h1>{count}</h1>

        <Button onClick={() => dispatch(handleMode())} variant="contained">
          Mode
        </Button>
      </div>
    </div>
  );
};
export default App;
