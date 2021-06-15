import http from "../http-common";

const getAll = () => {
  return http.get("/usuario");
};

const get = id => {
  return http.get(`/usuario/${id}`);
};

const create = data => {
  return http.post("/usuario", data);
};

const update = (id, data) => {
  return http.put(`/usuario/${id}`, data);
};

const remove = id => {
  return http.delete(`/usuario/${id}`);
};
//Nao tem esse endpoint no mockAPI
const removeAll = () => {
  return http.delete(`/usuario`);
};

const findByName = name => {
  return http.get(`/usuario?name=${name}`);
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