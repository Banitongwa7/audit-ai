"use client";
import testimo from "@/public/images/testimo.svg"
import Image from "next/image";
import Link from "next/link";

export default function Describe() {


  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-10">
        <div className="py-12 md:py-20 animate-fade-in">
          <div className="space-y-8 text-center">
            <Image
                src={testimo}
                alt="KPMG Audit AI"
                width={800}
                height={800}
                className="mb-10"
              />
            <h2 className="text-4xl font-extrabold text-gray-900">
              KPMG Audit AI
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              KPMG Audit AI est une solution innovante boostée par l'intelligence artificielle qui révolutionne le secteur de l'audit. Grâce à des algorithmes avancés et à une analyse approfondie des données, KPMG Audit AI permet aux entreprises de gagner en efficacité, en précision et en rapidité dans leurs processus d'audit.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              En intégrant des technologies de pointe telles que l'apprentissage automatique et l'analyse prédictive, KPMG Audit AI offre une vision claire et précise des opérations financières, permettant ainsi aux entreprises de prendre des décisions éclairées et stratégiques.
            </p>
            <Link
              className="inline-block px-6 py-3 text-white bg-blue-600 font-medium text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              href="#"
            >
              En savoir plus sur KPMG Audit AI
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}