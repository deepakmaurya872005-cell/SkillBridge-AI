import API from "./api";

// ================= START MOCK INTERVIEW =================

export const startMockInterview = async (targetJob) => {
    const token = localStorage.getItem("token");

    const res = await API.post(
        "/mock-interview/start",
        {
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

// ================= SUBMIT ANSWER =================

export const submitMockAnswer = async (
    interviewId,
    answerData
) => {
    const token = localStorage.getItem("token");

    const res = await API.post(
        `/mock-interview/${interviewId}/answer`,
        answerData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return res.data;
};

// ================= COMPLETE INTERVIEW =================

export const completeMockInterview = async (interviewId) => {
    const token = localStorage.getItem("token");

    const res = await API.put(
        `/mock-interview/${interviewId}/complete`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return res.data;
};

// ================= GET INTERVIEW HISTORY =================

export const getMockInterviewHistory = async () => {
    const token = localStorage.getItem("token");

    const res = await API.get(
        "/mock-interview/history",
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return res.data;
};

// ================= DELETE INTERVIEW =================

export const deleteMockInterview = async (id) => {
    const token = localStorage.getItem("token");

    const res = await API.delete(
        `/mock-interview/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return res.data;
};