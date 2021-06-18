import http from "../http-common";

const getAll = () => {
  return http.get("/projeto");
};

const get = id => {
  return http.get(`/projeto/${id}`);
};

const create = data => {
  return http.post("/projeto", data);
};

const update = (id, data) => {
  return http.put(`/projeto/${id}`, data);
};

const remove = id => {
  return http.delete(`/projeto/${id}`);
};
//Nao tem esse endpoint no mockAPI
const removeAll = () => {
  return http.delete(`/projeto`);
};


const findByProjectName = name => {
  return http.get(`/projeto?projectname=${name}`);
};


export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByProjectName
};