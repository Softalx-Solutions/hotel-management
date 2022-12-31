import { Chart, Card } from "../components";
import { hotels } from "../data";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Dashboard() {
  return (
    <>
      {/* <div className="bg-white flex flex-col sm:flex-row sm:flex-wrap  sm:basis-3 justify-center items-center "> */}
      {/* <div className="sm:items-center h-96 flex flex- flex-wrap md:basis-3 bg-white">
        {hotels.map((hotel) => (
          <Card
            key={hotel.id}
            className="mobile-chart desktop-chart"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={400}
                data={hotels}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="natural"
                  dataKey="numberOfRooms"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        ))}
      </div> */}
      <div className="px-3 md:px-8 mt-0">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-3">
            <div className="xl:col-start-1 xl:col-end-4 px-4 md:mb-14">
              <Card className="w-full md:w-[33.3%] xl:w-[25%] h-48 md:my-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    width={500}
                    height={400}
                    data={hotels}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="natural"
                      dataKey="rooms.booked"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Card>
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
              <Card className='w-full md:w-[33.3%] xl:w-[25%] h-48 my-4'>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    width={500}
                    height={400}
                    data={hotels}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="natural"
                      dataKey="rooms.booked"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Card>
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
              <Card className='w-full md:w-[33.3%] xl:w-[25%] h-48 my-4'>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    width={500}
                    height={400}
                    data={hotels}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="natural"
                      dataKey="numberOfRooms"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
