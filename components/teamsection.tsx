import Image from "next/image";

export default function TeamSection() {
    const teamMembers = [
        {
          name: "Gloire Butumbi",
          role: "Membre de l'équipe de gestion de projet",
          description: "Etudiant en Bachelor 3 gestion des entreprises à l'ESMK",
          image: "/images/team/gloire.jpeg"
        },
        {
          name: "Marie-Antoinette Kajangu",
          role: "Membre de l'équipe de gestion de projet",
          description: "Etudiante en Bachelor 3 gestion des entreprises à l'ESMK",
          image: "/images/team/marie.jpeg" 
        },
        {
          name: "Diana Nyota",
          role: "Membre de l'équipe de gestion de projet",
          description: "Etudiante en Bachelor 3 gestion des entreprises à l'ESMK",
          image: "/images/team/diana.jpeg" 
        }
      ];
  return (
    <section className="bg-gray-50 md:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Notre Équipe de Réalisation
          </h2>
          <p className="text-gray-500">
            Les talents derrière KPMG Audit AI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
