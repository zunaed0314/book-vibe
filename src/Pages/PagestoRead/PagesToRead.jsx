import React, { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	Line,
	LineChart,
	PieChart,
	Pie,
	Sector,
	RadarChart,
	Radar,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	AreaChart,
	Area,
	RadialBarChart,
	RadialBar,
	ScatterChart,
	Scatter,
	ComposedChart,
	Treemap,
	FunnelChart,
	Funnel,
	LabelList,
} from "recharts";

const COLORS = [
	"#3b82f6",
	"#10b981",
	"#f59e0b",
	"#ef4444",
	"#8b5cf6",
	"#ec4899",
];

const PagesToRead = () => {
	const { storedBooks } = useContext(BookContext);

	const data = storedBooks.map((book, index) => ({
		name: book.bookName,
		pages: book.totalPages,
		fill: COLORS[index % COLORS.length], // ← add fill directly
		fullMark: Math.max(...storedBooks.map((b) => b.totalPages)),
	}));

	const radialData = storedBooks.map((book, index) => ({
		name: book.bookName,
		pages: book.totalPages,
		fill: COLORS[index % COLORS.length],
	}));

	const scatterData = storedBooks.map((book, index) => ({
		name: book.bookName,
		index: index + 1,
		pages: book.totalPages,
	}));
	const avg = data.reduce((s, d) => s + d.pages, 0) / data.length;
	const composedData = data.map((d) => ({ ...d, average: avg }));

	const treemapData = storedBooks.map((book, index) => ({
		name: book.bookName,
		size: book.totalPages,
		fill: COLORS[index % COLORS.length],
	}));

	const funnelData = storedBooks
		.map((book, index) => ({
			name: book.bookName,
			value: book.totalPages,
			fill: COLORS[index % COLORS.length],
		}))
		.sort((a, b) => b.value - a.value); // boro theke chhoto
	return (
		<div className="mt-30">
			<ResponsiveContainer width="100%" height={400}>
				<FunnelChart>
					<Tooltip />
					<Funnel dataKey="value" data={funnelData} isAnimationActive>
						<LabelList
							position="right"
							fill="#000"
							stroke="none"
							dataKey="name"
						/>
					</Funnel>
				</FunnelChart>
			</ResponsiveContainer>

			<ResponsiveContainer width="100%" height={350}>
				<BarChart
					data={data}
					margin={{ top: 20, right: 20, left: 0, bottom: 60 }}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" angle={-30} textAnchor="end" interval={0} />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="pages" fill="#3b82f6" name="Pages" />
				</BarChart>
			</ResponsiveContainer>

			<ResponsiveContainer width="100%" height={350}>
				<LineChart
					data={data}
					margin={{ top: 20, right: 20, left: 0, bottom: 60 }}
				>
					<CartesianGrid strokeDasharray="2 2" />
					<XAxis dataKey="name" angle={-30} textAnchor="end" interval={0} />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line
						type="monotone"
						dataKey="pages"
						stroke="#10b981"
						strokeWidth={2}
						dot={{ r: 4 }}
						activeDot={{ r: 6 }}
						name="Pages"
					/>
				</LineChart>
			</ResponsiveContainer>

			<ResponsiveContainer width="100%" height={400} className="border">
				<PieChart>
					<Pie
						data={data}
						dataKey="pages"
						nameKey="name"
						cx="50%"
						cy="50%"
						outerRadius={120}
						innerRadius={60}
						label={({ name, pages }) => `${name}: ${pages}`}
					/>
					<Tooltip />
					<Legend />
				</PieChart>
			</ResponsiveContainer>

			<ResponsiveContainer width="100%" height={400}>
				<RadarChart data={data}>
					<PolarGrid />
					<PolarAngleAxis dataKey="name" />
					<PolarRadiusAxis />
					<Tooltip />
					<Legend />
					<Radar
						name="Pages"
						dataKey="pages"
						stroke="#8b5cf6"
						fill="#8b5cf6"
						fillOpacity={0.4}
					/>
				</RadarChart>
			</ResponsiveContainer>

			<ResponsiveContainer width="100%" height={350}>
				<AreaChart
					data={data}
					margin={{ top: 20, right: 20, left: 0, bottom: 80 }}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" angle={-30} textAnchor="end" interval={0} />
					<YAxis />
					<Tooltip />
					<Legend />
					<Area
						type="monotone"
						dataKey="pages"
						stroke="#f59e0b"
						fill="#f59e0b"
						fillOpacity={0.3}
						name="Pages"
					/>
				</AreaChart>
			</ResponsiveContainer>

			<ResponsiveContainer width="100%" height={400}>
				<RadialBarChart
					data={radialData}
					cx="50%"
					cy="50%"
					innerRadius="20%"
					outerRadius="90%"
					startAngle={180}
					endAngle={0}
				>
					<RadialBar
						dataKey="pages"
						label={{ position: "insideStart", fill: "#fff" }}
						background
					/>
					<Tooltip />
					<Legend
						iconSize={10}
						layout="vertical"
						verticalAlign="middle"
						align="right"
					/>
				</RadialBarChart>
			</ResponsiveContainer>

			<ResponsiveContainer width="100%" height={350}>
				<ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
					<CartesianGrid />
					<XAxis type="number" dataKey="index" name="Book #" />
					<YAxis type="number" dataKey="pages" name="Pages" />
					<Tooltip cursor={{ strokeDasharray: "3 3" }} />
					<Scatter name="Pages" data={scatterData} fill="#ef4444" />
				</ScatterChart>
			</ResponsiveContainer>

			<ResponsiveContainer width="100%" height={350}>
				<ComposedChart
					data={composedData}
					margin={{ top: 20, right: 20, left: 0, bottom: 80 }}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" angle={-30} textAnchor="end" interval={0} />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="pages" fill="#3b82f6" name="Pages" />
					<Line
						type="monotone"
						dataKey="average"
						stroke="#ef4444"
						strokeWidth={2}
						name="Average"
						dot={false}
					/>
				</ComposedChart>
			</ResponsiveContainer>

			<ResponsiveContainer width="100%" height={400}>
				<Treemap
					data={treemapData}
					dataKey="size"
					nameKey="name"
					stroke="#fff"
					aspectRatio={4 / 3}
				>
					<Tooltip />
				</Treemap>
			</ResponsiveContainer>
		</div>
	);
};

export default PagesToRead;
