import React from "react";
import "./chart.scss";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
// chart Data
const data: { name: string; Total: number }[] = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 900 },
    { name: "March", Total: 1500 },
    { name: "April", Total: 1300 },
    { name: "May", Total: 1250 },
    { name: "June", Total: 1700 },
    { name: "sep", Total: 1300 },
];
//props interface
interface propType {
    aspect: number;
    title: string;
}
const Chart: React.FC<propType> = ({ aspect, title }) => {
    return (
        <div className="chart">
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <AreaChart
                    width={730}
                    height={250}
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="rgb(240, 154, 16)" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="rgb(240, 154, 16)" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="gray" />
                    <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="Total"
                        stroke="rgb(255, 132, 0)"
                        fillOpacity={1}
                        fill="url(#total)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
