export default function Pricing() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800">Nos Tarifs</h2>
          <p className="text-lg text-gray-600 mt-4">
            Trouvez le plan parfait pour vos besoins et commencez dès aujourd'hui.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Plan 1 */}
          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">Basique</h3>
            <p className="text-gray-600 mt-2">Idéal pour les petites équipes.</p>
            <div className="mt-6">
              <span className="text-5xl font-bold text-gray-800">$19</span>
              <span className="text-gray-600 text-lg">/mois</span>
            </div>
            <ul className="mt-8 space-y-4 text-gray-600">
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✔</span> Accès à l'assistant IA
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✔</span> Support par email
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✔</span> 1 utilisateur
              </li>
            </ul>
            <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
              Choisir
            </button>
          </div>
          {/* Plan 2 */}
          <div className="p-8 bg-blue-600 text-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border-4 border-blue-700">
            <h3 className="text-2xl font-semibold">Pro</h3>
            <p className="mt-2">Parfait pour les équipes moyennes.</p>
            <div className="mt-6">
              <span className="text-5xl font-bold">$49</span>
              <span className="text-lg">/mois</span>
            </div>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center">
                <span className="mr-2">✔</span> Accès à l'assistant IA
              </li>
              <li className="flex items-center">
                <span className="mr-2">✔</span> Support prioritaire
              </li>
              <li className="flex items-center">
                <span className="mr-2">✔</span> 5 utilisateurs
              </li>
            </ul>
            <button className="mt-8 w-full bg-white text-blue-600 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300">
              Choisir
            </button>
          </div>
          {/* Plan 3 */}
          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">Entreprise</h3>
            <p className="text-gray-600 mt-2">Pour les grandes équipes.</p>
            <div className="mt-6">
              <span className="text-5xl font-bold text-gray-800">Contactez nous</span>
          
            </div>
            <ul className="mt-8 space-y-4 text-gray-600">
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✔</span> Accès à l'assistant IA
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✔</span> Support dédié
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✔</span> Plus
              </li>
            </ul>
            <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
                Choisir
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}