import api from "./api";

export const analyzeResume = async (resumeId, targetJob) => {

  const token = localStorage.getItem("token");

  const response = await api.post(
    "/skill-gap/analyze",
    {
      resumeId,
      targetJob,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const getAnalysisHistory = async () => {

  const token = localStorage.getItem("token");

  const response = await api.get("/skill-gap/history", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};