import React from "react";
import { Header } from "./";
import {
  YAxis,
  XAxis,
  ReferenceLine,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 350, pv: 1800, amt: 2000 },
  { name: "Page C", uv: 200, pv: 2400, amt: 2400 },
  { name: "Page D", uv: 350, pv: 1800, amt: 2000 },
  { name: "Page E", uv: 900, pv: 2400, amt: 2400 },
  { name: "Page F", uv: 150, pv: 1800, amt: 2000 },
  { name: "Page G", uv: 600, pv: 2400, amt: 2400 },
  { name: "Page H", uv: 50, pv: 1800, amt: 2000 },
];
function Main({ isMenuOpen }) {
  return (
    // <div>
    <div className={`${isMenuOpen && "w-full hidden sm:flex sm:flex-col"}`}>
      <Header title="overview" />
      {/* Charts */}
      <div className="w-full flex flex-col sm:flex-row">
        <div className="rounded shadow-lg m-4 flex-1">
          <ResponsiveContainer width={700} height="80%">
            <AreaChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
              <ReferenceLine
                y={4000}
                label="Max"
                stroke="red"
                strokeDasharray="3 3"
              />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Charts end */}
    </div>
  );
}

export default Main;
