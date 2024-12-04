import React from 'react'

export default function Equipment() {
  return (
    {equipment.map((item) => (
        <tr key={item.id} className="border-b hover:bg-gray-50">
          <td className="px-4 py-2">{item.name}</td>
          <td className="px-4 py-2">{item.category}</td>
          <td className="px-4 py-2">${item.price}</td>
          <td className="px-4 py-2 text-center">
            <button
              onClick={() => handleViewDetails(item.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              View Details
            </button>
          </td>
        </tr>
      ))}
  )
}
