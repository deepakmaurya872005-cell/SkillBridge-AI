import API from "./api";

export const getHistory = async () => {
    const token = localStorage.getItem("token");

    const res = await API.get("/skill-gap/history", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res.data;
};

export const deleteAnalysis = async (id) => {
    const token = localStorage.getItem("token");

    const res = await API.delete(`/skill-gap/history/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res.data;
};