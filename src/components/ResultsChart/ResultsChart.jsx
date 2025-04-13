import React from "react";
import { Line, LineChart, XAxis, YAxis, ZAxis } from "recharts";

const resultData = [
  {
    id: 1,
    name: "Ayan Ahmed",
    physics: 85,
    chemistry: 78,
    math: 92,
  },
  {
    id: 2,
    name: "Sara Rahman",
    physics: 91,
    chemistry: 88,
    math: 95,
  },
  {
    id: 3,
    name: "Rifat Hossain",
    physics: 72,
    chemistry: 69,
    math: 80,
  },
  {
    id: 4,
    name: "Mim Chowdhury",
    physics: 89,
    chemistry: 94,
    math: 90,
  },
  {
    id: 5,
    name: "Tanvir Hasan",
    physics: 76,
    chemistry: 83,
    math: 87,
  },
  {
    id: 6,
    name: "Nadia Islam",
    physics: 82,
    chemistry: 79,
    math: 88,
  },
  {
    id: 7,
    name: "Farhan Kabir",
    physics: 95,
    chemistry: 90,
    math: 96,
  },
  {
    id: 8,
    name: "Jannat Akter",
    physics: 68,
    chemistry: 72,
    math: 70,
  },
  {
    id: 9,
    name: "Ovi Rahman",
    physics: 78,
    chemistry: 85,
    math: 84,
  },
  {
    id: 10,
    name: "Mahin Sarker",
    physics: 88,
    chemistry: 91,
    math: 89,
  },
];

const ResultsChart = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={resultData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="physics"></Line>
        <Line dataKey={"chemistry"} stroke="red"></Line>
      </LineChart>
    </div>
  );
};

export default ResultsChart;
