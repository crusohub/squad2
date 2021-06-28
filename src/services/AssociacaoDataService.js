import http from "../http-common";

const getAll = () => {
    return http.get("/associacao");
};

const get = (id) => {
    return http.get(`/associacao/${id}`);
};

const create = (data) => {
    return http.post("/associacao", data);
};

const update = (id, data) => {
    return http.put(`/associacao/${id}`, data);
};

const remove = (id) => {
    return http.delete(`/associacao/${id}`);
};
//Nao tem esse endpoint no mockAPI
const removeAll = () => {
    return http.delete(`/associacao`);
};

const findByUsername = (username) => {
    return http.get(`/associacao?username=${username}`);
};

const findByProject = (project) => {
    return http.get(`/associacao?projectname=${project}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByUsername,
    findByProject,
};
