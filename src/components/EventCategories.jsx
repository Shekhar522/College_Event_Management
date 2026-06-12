import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Technical", value: 45, color: "#8b5cf6" },
//   { name: "Cultural", value: 25, color: "#3b82f6" },
//   { name: "Sports", value: 20, color: "#22c55e" },
//   { name: "Workshops", value: 10, color: "#f59e0b" },
// ];

const COLORS = ["#8b5cf6", "#3b82f6", "#22c55e", "#f59e0b"];

function EventCategories({ events }) {
  const categories = ["Technical", "Sports", "Cultural", "Workshop"];

  const categoryColors = {
  Technical: "#8b5cf6",
  Cultural: "#22c55e",
  Sports:  "#3b82f6",
  Workshop: "#f59e0b",
};
  const data = categories.map((category) => ({
    name: category,
    value: events.filter((event) => event.category === category).length,
    color: categoryColors[category],
  }));
  return (
    <div className="bg-white rounded-lg shadow p-1">
      <h2 className="text-sm font-bold p-1">Event Categories</h2>

      <div className="flex  items-center justify-around">
        <div className="h-[80px] w-[80px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={20}
                outerRadius={40}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-1 text-[10px] font-medium pr-2">
          {data.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-center gap-1"
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color}}
              ></div>
              <span>{item.name}</span>
              <span>{item.value} events</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventCategories;
