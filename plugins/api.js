export default function ({ $axios }, inject) {
  const token = localStorage.getItem("user_token");
  // Create a custom axios instance

  const api = $axios.create({
    headers: {
        authorization: `Bearer ${token || ""}`,
      },
  });

  // Set baseURL to something different
  api.setBaseURL('http://localhost:8045')

  // Inject to context as $api
  inject("api", api);
}
