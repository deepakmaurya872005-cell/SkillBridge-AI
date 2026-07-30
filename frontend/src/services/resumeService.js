import api from "./api";

export const getMyResumes = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get("/resume/my-resumes", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const deleteResume = async (id) => {

  const token = localStorage.getItem("token");

  const response = await api.delete(`/resume/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;

};