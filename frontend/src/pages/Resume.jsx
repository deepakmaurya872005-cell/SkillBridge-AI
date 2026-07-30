
import api from "../services/api";
import { useEffect, useState } from "react";
import { getMyResumes, deleteResume } from "../services/resumeService";
const Resume = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [resumes, setResumes] = useState([]);

  const uploadResume = async () => {
    if (!file) {
      alert("Please select a PDF.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("resume", file);

      const token = localStorage.getItem("token");

      const res = await api.post("/resume/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert(res.data.message);

      setFile(null);

      loadResumes();

    } catch (err) {
      alert(err.response?.data?.message || "Upload Failed");
    } finally {
      setLoading(false);
    }
  };
  const loadResumes = async () => {
  try {
    const data = await getMyResumes();
    setResumes(data.resumes);
  } catch (error) {
    console.log(error);
  }
};

const handleDelete = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this resume?"
  );

  if (!confirmDelete) return;

  try {

    const data = await deleteResume(id);

    alert(data.message);

    loadResumes();

  } catch (error) {

    alert(error.response?.data?.message || "Delete Failed");

  }

};

useEffect(() => {
  loadResumes();
}, []);

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">

      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-xl">

        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          📄 Upload Resume
        </h1>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full border rounded-lg p-3"
        />

        {file && (
          <p className="mt-4 text-gray-600">
            Selected: <strong>{file.name}</strong>
          </p>
        )}

        <button
          onClick={uploadResume}
          disabled={loading}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          {loading ? "Uploading..." : "Upload Resume"}
        </button>

      </div>

      {/* Uploaded Resumes */}

<div className="mt-10">

  <h2 className="text-2xl font-bold text-slate-700 mb-4">
    📄 My Uploaded Resumes
  </h2>

  {
    resumes.length === 0 ? (

      <div className="bg-slate-50 rounded-xl p-6 text-center text-gray-500">

        No Resume Uploaded Yet

      </div>

    ) : (

      <div className="space-y-4">

        {
          resumes.map((resume) => (

            <div
              key={resume._id}
              className="bg-slate-50 border rounded-xl p-4 flex justify-between items-center hover:shadow-md transition"
            >

              <div>

                <h3 className="font-semibold text-lg">
                  {resume.originalName}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Uploaded :
                  {" "}
                  {new Date(resume.createdAt).toLocaleDateString()}
                </p>

              </div>
                
               <div className="flex gap-3">

  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
    PDF
  </span>

  <button
    onClick={() => handleDelete(resume._id)}
    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg transition"
  >
    Delete
  </button>

</div> 

            </div>

          ))
        }

      </div>

    )
  }

</div>

    </div>
  );
};

export default Resume;