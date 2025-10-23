import React from "react";

export default function StudentsCouncil() {
  const studentsCouncil = [
    { role: "Head Boy", name: "Mr. Seiminlal Haokip", classRoll: "Class X - B, Roll No. 42" },
    { role: "Head Girl", name: "Miss L. Tabitha Kimneihat Mate", classRoll: "Class X - B, Roll No. 15" },
    { role: "Asst. Head Boy", name: "Mr. Alfred Lunginkai", classRoll: "Class IX - A, Roll No. 27" },
    { role: "Asst. Head Girl", name: "Miss Nancy Chinneilam", classRoll: "Class IX - B, Roll No. 12" },
  ];

  const allHouseLeadersRows = [
    { house: "Red Hawks", color: "bg-red-400/50", rows: [
      { role: "Captain", boy: "Mangminlal Singson", girl: "Esther Cinglun" },
      { role: "Assistant Captain", boy: "Thangtinlun", girl: "Nengneiching" },
    ]},
    { house: "Green Sentinals", color: "bg-green-300/50", rows: [
      { role: "Captain", boy: "Thangtunglian Ngaihte", girl: "Hoineithem" },
      { role: "Assistant Captain", boy: "Khaigoulen", girl: "Lhingneichoi" }, 
    ]},
    { house: "Yellow Gryphons", color: "bg-yellow-300/50", rows: [
      { role: "Captain", boy: "Thanggoulal Kipgen", girl: "Jenny Lamkholhing" },
      { role: "Assistant Captain", boy: "Lalgoulun", girl: "Maria Neihoikim" },
    ]},
    { house: "Blue Phoenix", color: "bg-blue-300/50", rows: [
      { role: "Captain", boy: "Sonminlen", girl: "Selena Nemneilam" },
      { role: "Assistant Captain", boy: "Demgoulen", girl: "Celena Chingjoujam" },
    ]},
  ];

  return (
    // Max width set to 7xl, mt-32 for nav bar clearance
    <div className="p-4 space-y-8 max-w-7xl mx-auto mt-32"> 
      {/* Main Heading */}
      <h1 className="text-4xl font-extrabold text-[#00796E] mb-8 text-center underline decoration-[#00796E]">
        School Leadership Structure
      </h1>
      
      {/* Grid container for side-by-side on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LEFT COLUMN: Students Council Table */}
        {/* Added pr-2 to ensure the right border doesn't hug the edge/gap */}
        <div className="overflow-x-auto pr-2"> 
          <h2 className="text-2xl font-bold text-[#00796E] mb-2 text-center">
            Students Council
          </h2>
          <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg border-collapse"> 
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-1 border border-gray-300 text-left whitespace-nowrap text-sm">Role</th>
                <th className="py-3 px-2 border border-gray-300 text-left text-sm">Name</th>
                <th className="py-3 px-2 border border-gray-300 text-left whitespace-nowrap text-sm">Class & Roll No.</th>
              </tr>
            </thead>
            <tbody>
              {studentsCouncil.map((member, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="py-2 px-1 border border-gray-300 whitespace-nowrap text-sm">{member.role}</td>
                  <td className="py-2 px-2 border border-gray-300 text-sm">{member.name}</td>
                  <td className="py-2 px-2 border border-gray-300 whitespace-nowrap text-sm">{member.classRoll}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RIGHT COLUMN: House Leaders Table */}
        <div className="overflow-x-auto">
          <h2 className="text-2xl font-bold text-[#00796E] mb-2 text-center">
            House Leaders
          </h2>
          <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg border-collapse">
            <tbody>
              {allHouseLeadersRows.map((houseBlock) => (
                <React.Fragment key={houseBlock.house}>
                  {/* House Name Row */}
                  <tr>
                    <td colSpan="3" className={`py-2 px-2 border border-gray-300 font-bold text-center text-sm ${houseBlock.color}`}>
                      {houseBlock.house}
                    </td>
                  </tr>
                  
                  {/* Captain and Assistant Captain Rows */}
                  {houseBlock.rows.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-2 px-2 border border-gray-300 whitespace-nowrap text-sm">{row.role}</td>
                      <td className="py-2 px-2 border border-gray-300 text-sm">{row.boy}</td>
                      <td className="py-2 px-2 border border-gray-300 text-sm">{row.girl}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}