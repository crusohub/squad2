import http from "../http-common";

const getAll = () => {
  return http.get("/conexao");
};

const get = id => {
  return http.get(`/conexao/${id}`);
};

const create = data => {
  return http.post("/conexao", data);
};

const update = (id, data) => {
  return http.put(`/conexao/${id}`, data);
};

const remove = id => {
  return http.delete(`/conexao/${id}`);
};
//Nao tem esse endpoint no mockAPI
const removeAll = () => {
  return http.delete(`/conexao`);
};

const findById = id => {
  return http.get(`/conexao?name=${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByid
};