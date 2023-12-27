import { ElMessageBox } from "element-plus";
import axios from "axios";
const service = axios.create({
  baseURL: "/api",
  timeout: 5000,
});
service.interceptors.request.use((config) => {
  if (config) config.headers["lanuage"] = "CN";
  //  do something
});
service.interceptors.response.use((response) => {
  const res = response.data;
  if (res.code == 400) {
    // do something
    ElMessageBox.alert("出错啦！");
  }
});
