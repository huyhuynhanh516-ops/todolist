// @ts-ignore
import "./css/App.css";
import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {

  const [job, setJob] = useState("");
  // @ts-ignore
  const [datas, setDatas] = useState(() => JSON.parse(localStorage.getItem("jobs")) ?? []);

  const getIsDone = () => {
    // @ts-ignore
    return datas?.map((item, index) => (item.isDone === true ? index : null)).filter(i => i !== null);
  }

  // @ts-ignore
  const [isDone, setIsDone] = useState(() => getIsDone());

  const handleSubmit = () => {
    if (job.trim()) {
      // @ts-ignore
      setDatas(prev => {

        // @ts-ignore
        const data = [...prev, { name: job, isDone: false }];
        localStorage.setItem("jobs", JSON.stringify(data));
        return data;
      });
      setJob("");
    } 
  }

  // @ts-ignore
  const handleDelete = (index) => {
    setDatas(() => {
      // @ts-ignore
      const newData = datas.filter((_, i) => i !== index);
      localStorage.setItem("jobs", JSON.stringify(newData))
      return newData;
    });
  }

  // @ts-ignore
  const handleCheck = (index) => {
    // @ts-ignore
    setIsDone(prev => {
      // @ts-ignore
      if (isDone.includes(index)) {
        datas[index].isDone = false;
        localStorage.setItem("jobs", JSON.stringify(datas))
        // @ts-ignore
        return isDone.filter(item => item !== index);
      } else {
        datas[index].isDone = true;
        localStorage.setItem("jobs", JSON.stringify(datas))
        // @ts-ignore
        return [...prev, index];
      }
    })
  }

  return (
    <div className="App">
      <Header />
      <Content 
        inputJob={job} 
        // @ts-ignore
        onChange={e => setJob(e.target.value)} 
        onClick={handleSubmit} datas={datas}
        handleDelete={handleDelete}
        // @ts-ignore
        isDone={isDone}
        handleCheck={handleCheck}
      />
      <Footer isDone={isDone}/>
    </div>
  );
}

export default App;
