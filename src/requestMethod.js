import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjBmZjhkNWM2MDIzZTMyM2ZlMzk0MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTA0NzAxMywiZXhwIjoxNjUxMzA2MjEzfQ.4R6metGFIaO7LKXAEPJzL0_-VEQJhLp8htkeJakGDCA';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
