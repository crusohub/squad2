import http from "../http-commonAlternativoConexao";

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

const findByUserId = id => {
  return http.get(`/conexao?userid=${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findById,
  findByUserId
};