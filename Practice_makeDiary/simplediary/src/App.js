import React, { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const create_date = new Date().getTime();
      const newItem = {
        ...action.data,
        create_date,
      };
      return [newItem, ...state];
    }
    case "REMOVE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    case "EDIT": {
      return state.map((it) => (it.id === action.targetId ? { ...it, content: action.newContent } : it));
    }
    default:
      return state;
  }
};

export const DiarySteteContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const App = () => {
  // const [data, setData] = useState([]);
  const [data, dispatch] = useReducer(reducer, []); //reducer 함수는 직접구현해야함

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments").then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });

    dispatch({ type: "INIT", data: initData });
    // setData(initData);
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1500);
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
    dispatch({ type: "CREATE", data: { author, content, emotion, id: dataId.current } });

    // const created_date = new Date().getTime();
    // const newItem = {
    //   author,
    //   content,
    //   emotion,
    //   created_date,
    //   id: dataId.current,
    // };
    dataId.current += 1;
    // setData([newItem, ...data]);
  }, []);

  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });

    // const newDiaryList = data.filter((it) => it.id !== targetId);
    // setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    dispatch({ type: "EDIT", targetId, newContent });

    // setData(data.map((it) => (it.id === targetId ? { ...it, content: newContent } : it)));
  };

  const memoizedDispatches = useMemo(() => {
    return { onCreate, onRemove, onEdit };
  }, []);

  const getDiaryAnalysis = useMemo(() => {
    if (data.length === 0) {
      return { goodcount: 0, badCount: 0, goodRatio: 0 };
    }

    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100.0;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <DiarySteteContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={memoizedDispatches}>
        <div className="App">
          <DiaryEditor />
          <div>전체 일기 : {data.length}</div>
          <div>기분 좋은 일기 개수 : {goodCount}</div>
          <div>기분 나쁜 일기 개수 : {badCount}</div>
          <div>기분 좋은 일기 비율 : {goodRatio}</div>
          <DiaryList />
        </div>
      </DiaryDispatchContext.Provider>
    </DiarySteteContext.Provider>
  );
};
export default App;
