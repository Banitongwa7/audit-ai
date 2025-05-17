"use client";
import { useState } from "react";

export default function LargeTestimonial() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-10">
        <div className="py-12 md:py-20 animate-fade-in">
          <div className="space-y-8 text-center">
            <div className="relative inline-flex justify-center">
              <button
                onClick={openModal}
                className="focus:outline-none"
                aria-label="Play Video"
              >
                <img
                  src="https://img.youtube.com/vi/5IvQ3fYKnfM/0.jpg"
                  alt="KPMG Audit AI Video Thumbnail"
                  className="rounded-lg shadow-lg w-full max-w-4xl border-4 border-gray-200 cursor-pointer"
                />
              </button>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900">
              KPMG Audit AI
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              KPMG Audit AI est un outil avancé conçu pour révolutionner le
              processus d'audit. Grâce à l'intelligence artificielle, il
              améliore l'analyse des risques, simplifie les procédures d'audit
              et fournit des insights exploitables, garantissant précision et
              efficacité dans chaque mission.
            </p>
            <a
              className="inline-block px-6 py-3 text-white bg-blue-600 font-medium text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              En savoir plus sur KPMG Audit AI
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Close Modal"
            >
              ✕
            </button>
            <iframe
              className="rounded-lg w-full aspect-video"
              src="https://www.youtube.com/embed/5IvQ3fYKnfM"
              title="KPMG Audit AI Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
}