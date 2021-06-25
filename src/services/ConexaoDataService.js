import http from "../http-commonAlternativoConexao";

const getConexaoAll = () => {
  return http.get("/conexao");
};
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

const findByUserIdOutro = id => {
  return http.get(`/conexao?userid=${id}`);
};

const conexaoForIdUse = (id) => {
    console.log(id+" id do usuario")
    return http.get(`/conexao?userid=${id}`);
};

export default {
  get,
  create,
  update,
  remove,
  removeAll,
  findById,
  conexaoForIdUse,
  findByUserIdOutro,
  getConexaoAll,
  getAll
};