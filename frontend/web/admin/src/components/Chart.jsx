import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Area,
} from "recharts";

function Chart({data, dataKey, strokeDasharray="3 3"}) {
  return (
    <ResponsiveContainer width={700} height="80%">
      <AreaChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis dataKey={dataKey} />
        <YAxis />
        <CartesianGrid strokeDasharray={strokeDasharray}/>
        <Tooltip />
        {/* <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
        <ReferenceLine
          y={4000}
          label="Max"
          stroke="red"
          strokeDasharray="3 3"
        /> */}
        <Area type="monotone" dataKey="numberOfRooms" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Chart;
