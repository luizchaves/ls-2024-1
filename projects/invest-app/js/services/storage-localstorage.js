import { v4 as uuidv4 } from 'uuid';

function storageInsert(key, data) {
  if (typeof data === 'object') {
    data = JSON.stringify(data);
  }

  localStorage.setItem(`@invest-app:${key}`, data);
}

function storageSelect(key, isJSON = true) {
  let data = localStorage.getItem(`@invest-app:${key}`);

  if (isJSON) {
    data = JSON.parse(data);
  }

  return data;
}

function load(resource, data) {
  if (storageSelect('loaded', false) !== 'ok') {
    storageInsert(resource, data);

    storageInsert('loaded', 'ok');
  }
}

function create(resource, data) {
  const datas = storageSelect(resource);

  data = { ...data, id: uuidv4() };

  storageInsert(resource, [...datas, data]);

  return data;
}

function read(resource, id) {
  const datas = storageSelect(resource);

  if (id) {
    return datas.find((data) => data.id === id);
  } else {
    return datas;
  }
}

function update(resource, id, data) {
  const datas = storageSelect(resource);

  const index = datas.findIndex((data) => data.id === id);

  if (index >= 0) {
    data = { id, ...data };

    datas[index] = { ...datas[index], ...data };

    storageInsert(resource, datas);

    return data;
  } else {
    return false;
  }
}

function remove(resource, id) {
  const datas = storageSelect(resource);

  const index = datas.findIndex((data) => data.id === id);

  if (index >= 0) {
    datas.splice(index, 1);
  }

  storageInsert(resource, datas);
}

export default { load, create, read, update, remove };
