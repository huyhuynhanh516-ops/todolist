// @ts-ignore
import "./css/App.css";
import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Alert from "./Alert";
import Confirm from "./Confirm";

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

  // Alert,Confirm
  const [notification, setNotification] = useState({ show: false, message: "", type: "info", autoHide: false });
  const [showConfirm, setShowConfirm] = useState(false);
  const [notificationConfirm, setNotificationConfirm] = useState("");
  const [confirmData, setConfirmData] = useState({}); 


  // @ts-ignore
  const showAlert = (msg, type = "success", autoHide) => {
    setNotification({ show: true, message: msg, type, autoHide });
  };

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
      showAlert("Thêm thành công", "success", true);
    } else {
      showAlert("Vui lòng nhập task", "warning", false);
    }
  }

  // @ts-ignore
  const handleDelete = (index) => {
    setNotificationConfirm("Bạn có chắc chắn muốn xóa không?");
    setConfirmData({
      action: () => {
        setDatas(() => {
          // @ts-ignore
          const newData = datas.filter((_, i) => i !== index);
          localStorage.setItem("jobs", JSON.stringify(newData))
          return newData;
        })
      }
    });
    setShowConfirm(true);
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

  const handleConfirm = () => {
    // @ts-ignore
    confirmData?.action();
    setShowConfirm(false);
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  return (
    <div className="App">
      <Header />
      <Content 
        inputJob={job} 
        // @ts-ignore
        onChange={e => setJob(e.target.value)} 
        onClick={handleSubmit} datas={datas}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
      <Footer isDone={isDone}/>
      <Alert
        message={notification.message}
        type={notification.type}
        show={notification.show}
        onClose={() => setNotification({ ...notification, show: false })}
        duration={1000} // tự ẩn sau 2 giây
        autoHide={notification.autoHide}
      />
      
      <Confirm
        show={showConfirm}
        message={notificationConfirm}
        type="warning"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
}

export default App;
