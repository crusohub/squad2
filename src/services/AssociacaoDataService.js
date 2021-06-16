import http from "../http-common";

const getAll = () => {
  return http.get("/associacao");
};

const get = id => {
  return http.get(`/associacao/${id}`);
};

const create = data => {
  return http.post("/associacao", data);
};

const update = (id, data) => {
  return http.put(`/associacao/${id}`, data);
};

const remove = id => {
  return http.delete(`/associacao/${id}`);
};
//Nao tem esse endpoint no mockAPI
const removeAll = () => {
  return http.delete(`/associacao`);
};

const findByName = name => {
  return http.get(`/associacao?name=${name}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName
};