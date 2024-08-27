import axios from 'axios';

const API_KEY = import.meta.env.VITE_APP_SUPABASE_KEY;
const API_URL = import.meta.env.VITE_APP_SUPABASE_URL + '/rest/v1';

const API = axios.create({
  baseURL: API_URL,
  headers: {
    common: {
      apikey: API_KEY,
      Authorization: `Bearer ${API_KEY}`,
    },
    post: {
      Prefer: 'return=representation',
    },
    patch: {
      Prefer: 'return=representation',
    },
  },
});

async function create(resource, data) {
  const { data: createdData } = await API.post(resource, data);

  return createdData?.[0];
}

async function read(resource) {
  const { data } = await API.get(resource);

  return data;
}

async function update(resource, id, data) {
  resource = `${resource}?id=eq.${id}`;

  const { data: updatedData } = await API.patch(resource, data);

  return updatedData?.[0];
}

async function remove(resource, id) {
  resource = `${resource}?id=eq.${id}`;

  const { error } = await API.delete(resource);

  if (error) {
    throw error;
  } else {
    return true;
  }
}

export default { create, read, update, remove };
