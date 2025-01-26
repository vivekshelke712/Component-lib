import React from "react";

const DataGrid = () => {
  // Define columns and data within the component
  const columns = [
    { field: "id", header: "ID" },
    { field: "name", header: "Name" },
    { field: "email", header: "Email" },
    { field: "role", header: "Role" },
  ];

  const data = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "Editor" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", role: "Viewer" },
    { id: 4, name: "Bob Brown", email: "bob.brown@example.com", role: "Editor" },
  ];

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border border-gray-300 bg-white rounded-lg">
        {/* Table Header */}
        <thead className="bg-gray-100 border-b border-gray-300">
          <tr>
            {columns.map((col) => (
              <th
                key={col.field}
                className="text-left py-3 px-5 font-medium text-gray-600"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="even:bg-gray-50 hover:bg-gray-100 transition"
            >
              {columns.map((col) => (
                <td
                  key={col.field}
                  className="py-3 px-5 text-gray-800 border-t border-gray-300"
                >
                  {row[col.field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataGrid;