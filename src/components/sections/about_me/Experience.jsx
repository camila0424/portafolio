function Experience() {
  return (
    <section className="bg-black text-white flex flex-col items-center px-4 pt-2">
      <h3 className="text-2xl italic bg-gradient-to-r from-purple-700 via-indigo-400 to-purple-700 bg-clip-text text-transparent mb-7 text-center max-w-3xl">
        Otras Áreas de experiencia
      </h3>

      <div className="max-w-7xl w-full flex flex-wrap justify-center gap-4">
        {[
          {
            period: "Academia Jhon Philip Sousa 2/217 - 11/2018",
            role: "Docente de canto e iniciacion musical",
          },
          {
            period:
              "El Club de Música S.A.S. - Academia TUTEMPO 6/2019 - 3/2020",
            role: "Docente de canto.",
          },
          {
            period: "Teachers Group 3/2019 - 9/2020",
            role: "Docente de ukulele.",
          },
          {
            period: "Escuela de Artes OPRA 9/2020- 8/2021",
            role: "Docente de canto y guitarra infantil.",
          },
          {
            period: "Coach Vocal Freelance Online 2017/2025",
            role: "Docente particular de canto, piano, guitarra y ukulele.",
          },
        ].map(({ period, role }, i) => (
          <div
            key={i}
            className="w-full sm:w-60 px-4 py-3 bg-gray-950 rounded-lg border border-gray-900 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40 transition-shadow duration-300 text-sm"
          >
            <p className="text-gray-400 leading-relaxed mb-1">{period}</p>
            <p>{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
