export default function PatientRecord() {
  const diagnostics = [
    {
      title: "Meniscal Tear (Right Knee)",
      date: "08/10/2023",
      severity: "Moderate",
      status: "Active",
      description: "MRI confirms small tear in the medial meniscus of the right knee, likely due to sports injury.",
      treatment: "Physical therapy 2x weekly for 6 weeks. Anti-inflammatory medication as needed. Reevaluate in 2 months.",
      doctor: "Dr. Amélie Bernard"
    },
    {
      title: "Hypertension",
      date: "10/06/2022",
      severity: "Moderate",
      status: "Chronic",
      description: "Patient presents with consistently elevated blood pressure readings over multiple visits.",
      treatment: "Prescribed lisinopril 10mg daily. Recommended dietary changes and regular exercise.",
      doctor: "Dr. Driss Omarj"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white font-sans">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-2">RāqibMed</h1>
        <div className="flex gap-4 text-gray-600">
          <span>Imagerie</span>
          <span>Résultats</span>
          <span>Diagnostics</span>
        </div>
      </div>

      {/* Patient Info */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Ayacha Hamou</h2>
          <p className="text-gray-600">12/05/1975 · 49 ans · Fernelle</p>
          <div className="mt-4 space-y-1">
            <p><span className="font-semibold">Groupe Sanguin:</span> O+</p>
            <p><span className="font-semibold">Morphologie:</span> 178 cm, 75 kg</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-200 pl-4">
            <h3 className="font-semibold mb-2">Conditions chroniques</h3>
            <ul className="list-disc pl-4 text-gray-600">
              <li>Hypertension</li>
              <li>Asthma</li>
            </ul>
          </div>

          <div className="border-l-4 border-red-200 pl-4">
            <h3 className="font-semibold mb-2">Allergies</h3>
            <ul className="list-disc pl-4 text-gray-600">
              <li>Penicillin</li>
              <li>Pollen</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="mb-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold mb-2">Contact d'urgence</h3>
        <p className="text-gray-600">Lahcen Alt-outri (Spouse)</p>
        <p className="text-gray-600">+212 6 12 34 56 78</p>
        <p className="text-gray-600">lahcen.aitourir@gmail.com</p>
        <p className="text-gray-600">123 Ayat AtabAzilal Béni Mellal-Khénifra</p>
      </div>

      {/* Diagnostics */}
      <div className="space-y-6">
        {diagnostics.map((diagnostic, index) => (
          <div key={index} className="border-t-2 border-gray-100 pt-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg">{diagnostic.title}</h3>
                <p className="text-gray-500 text-sm">{diagnostic.date}</p>
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                  {diagnostic.severity}
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  {diagnostic.status}
                </span>
              </div>
            </div>
            <p className="text-gray-600 mb-3">{diagnostic.description}</p>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-semibold text-sm mb-1">Traitement</p>
              <p className="text-gray-600 text-sm">{diagnostic.treatment}</p>
            </div>
            <p className="text-gray-500 text-sm mt-2">Diagnostic établi par {diagnostic.doctor}</p>
          </div>
        ))}
      </div>

      {/* Medical Imaging */}
      <div className="mt-8">
        <h3 className="font-semibold mb-4">Imagerie médicale récente</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>MRI - Knee</li>
          <li>X-Ray - Chest</li>
          <li>MRI - Knee</li>
        </ul>
      </div>
    </div>
  );
}