import API from "./api";

export const analyzeResume = async (resumeId, targetJob) => {
    const token = localStorage.getItem("token");

    const res = await API.post(
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

    return res.data;
};