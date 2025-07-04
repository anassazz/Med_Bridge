import React, { useState } from 'react';
import { Shield, Zap, Brain, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [activeTab, setActiveTab] = useState('inscription');
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: 'anaes@gmail.com',
    password: 'fffff',
    confirmPassword: '........'
  });
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex">
      {/* Left Side - Registration Form */}
      <div className="w-1/2 bg-white p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-600 mb-2">RâqibMed</h1>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Dossier Médical Électronique</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Accédez aux données médicales de vos patients,<br />
              sécurisées et accessibles en un clic
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('connexion')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'connexion'
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
           <Link to ="/login" >   Connexion</Link>   
            </button>
            <button
              onClick={() => setActiveTab('inscription')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'inscription'
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Inscription
            </button>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Créer un compte</h3>
            <p className="text-gray-600 text-sm mb-6">Remplissez le formulaire ci-dessous pour vous inscrire</p>

            <div className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                  <input
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleInputChange}
                    placeholder="Prénom"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    placeholder="Nom"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirmer le mot de passe</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  J'accepte les{' '}
                  <a href="#" className="text-blue-600 hover:underline">
                    conditions d'utilisation
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Créer un compte
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Features Showcase */}
      <div className="w-1/2 bg-gradient-to-br from-blue-400 to-blue-600 p-12 flex flex-col justify-center text-white">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Votre pratique médicale,<br />
            simplifiée
          </h1>
          <p className="text-blue-100 mb-12 text-lg leading-relaxed">
            MediWise vous permet de gérer tous vos dossiers patients<br />
            dans un environnement sécurisé accessible depuis<br />
            n'importe où.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Secure Access */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors">
              <Shield className="w-8 h-8 mb-4 text-blue-200" />
              <h3 className="font-semibold mb-2">Accès sécurisé</h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Vos données sont cryptées et<br />
                protégées selon les standards RGPD<br />
                et HIPAA
              </p>
            </div>

            {/* All-in-One */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors">
              <Zap className="w-8 h-8 mb-4 text-blue-200" />
              <h3 className="font-semibold mb-2">Tout-en-un</h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Consultations, analyses, imagerie et<br />
                prescriptions dans une interface<br />
                unifiée
              </p>
            </div>

            {/* Intelligence */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors">
              <Brain className="w-8 h-8 mb-4 text-blue-200" />
              <h3 className="font-semibold mb-2">Intelligence</h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Assistance IA pour l'analyse des<br />
                résultats et le suivi des tendances
              </p>
            </div>

            {/* Collaboration */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors">
              <Users className="w-8 h-8 mb-4 text-blue-200" />
              <h3 className="font-semibold mb-2">Collaboration</h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Partagez les informations médicales<br />
                avec les autres professionnels de<br />
                santé
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}