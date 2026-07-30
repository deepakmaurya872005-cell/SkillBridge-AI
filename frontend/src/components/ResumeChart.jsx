import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", resumes: 2 },
  { month: "Feb", resumes: 4 },
  { month: "Mar", resumes: 3 },
  { month: "Apr", resumes: 5 },
  { month: "May", resumes: 6 },
  { month: "Jun", resumes: 8 },
];

const ResumeChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-5">
        📈 Resume Upload Analytics
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="resumes"
            stroke="#2563eb"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResumeChart;