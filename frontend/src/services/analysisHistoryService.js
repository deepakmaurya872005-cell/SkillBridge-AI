import API from "./api";

export const getHistory = async () => {

    const res =
        await API.get("/skill-gap/history");

    return res.data;

};