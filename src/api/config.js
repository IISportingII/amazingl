import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api-stage.wentronic.com",
  headers: { "Content-Type": "application/json" },
});
