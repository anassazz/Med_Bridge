import React from "react";
import Footer from "./Footer";

import { Link } from "react-router-dom"; // ou `next/link` si tu utilises Next.js

export default function WelcomePage() {
  return (
    <>
      <div className="fixed inset-0 box-border overflow-auto bg-white">
        {/* Fond divisé en deux couleurs sur desktop */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-white z-0 hidden md:block" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-br from-blue-300 to-sky-500 z-0 hidden md:block" />

        {/* Contenu principal */}
        <div className="relative z-10 max-w-7xl mx-auto min-h-screen flex flex-col justify-center px-4 py-10">
          {/* En-tête */}
          <div className="text-center mb-10">
            <div className="bg-white rounded-lg shadow-lg p-4 inline-block max-w-md w-full mx-auto">
              <h1 className="text-3xl font-bold mb-2">
                <span className="text-blue-600">Rāqib</span>
                <span className="text-blue-800">Med</span>
              </h1>
              <h2 className="text-lg text-gray-700 font-semibold mb-1">
                Dossier Médical Électronique
              </h2>
              <p className="text-gray-500 text-sm">
                Accédez aux données médicales de vos patients,
                <br />
                sécurisées et accessibles en un clic
              </p>
            </div>
          </div>

          {/* Info mobile */}
          <p className="text-center text-sm text-gray-500 mb-6 md:hidden">
            Choisissez un espace pour commencer :
          </p>

          {/* Sections cliquables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Section professionnels */}
            <Link
              to="/login/professionnel"
              className="flex flex-col items-center relative h-[350px] sm:h-[400px] hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-11/12 max-w-xs h-40 bg-blue-400 rounded-xl z-0" />
              <div className="absolute top-10 z-30">
                <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Équipe médicale"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute top-48 sm:top-56 bg-gray-400 px-4 py-3 rounded-xl shadow text-center w-11/12 max-w-xs border border-red-200 z-10">
                <p className="mt-12 text-white font-bold text-lg">
                  Bienvenue dans l’espace des
                  <br /> professionnels de santé
                </p>
              </div>
            </Link>

            {/* Section patients */}
            <Link
              to="/register"
              className="flex flex-col items-center relative h-[350px] sm:h-[400px] hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-11/12 max-w-xs h-40 bg-blue-200 rounded-xl z-0" />
              <div className="absolute top-10 z-20">
                <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Patient souriant"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute top-48 sm:top-56 bg-gradient-to-r from-sky-400 to-blue-700 px-4 py-3 rounded-xl shadow text-center w-11/12 max-w-xs z-10">
                <p className="mt-12 text-white font-bold text-lg">
                  Bienvenue dans l’espace des
                  <br /> patients
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t p-2 px-4 md:px-44 z-50">
        <Footer />
      </div>
    </>
  );
}
