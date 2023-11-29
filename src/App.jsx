import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { PLUS_ONE, MINUS_ONE } from "./redux/modules/counter";
import {
  plusOne,
  MinusOne,
  plusN,
  minusN,
  __addNumber,
} from "./redux/modules/counter";

function App() {
  const [number, setNumber] = useState(0);
  // 여기에서 store에 접근하여, counter의 값을 읽어오고 싶다!
  // userSelector
  const counter = useSelector((state) => {
    return state.counter;
  });

  useEffect(() => {
    console.log("number->", number);
  }, [number]);

  // dispatch를 가져와보자
  const dispatch = useDispatch();

  console.log("data: ", counter);

  return (
    <>
      <div>현재 카운트 : {counter.number}</div>
      <div>
        <input
          type="number"
          value={number}
          onChange={(event) => {
            const { value } = event.target;
            setNumber(+value);
          }}
        />
      </div>
      <button
        onClick={() => {
          // + 1을 해주는 로직을 써주면 된다.
          dispatch(__addNumber(number));
          // dispatch(plusN(number));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          // - 1을 해주는 로직을 써주면 된다.
          dispatch(MinusOne(1));
          // dispatch(minusN(number));
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
