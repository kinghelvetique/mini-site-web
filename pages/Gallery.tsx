import React from 'react';

export const Gallery: React.FC = () => {
  // Using picsum with specific seeds to keep images consistent
  const images = [
    { src: "https://picsum.photos/seed/loko1/800/600", category: "Campus" },
    { src: "https://picsum.photos/seed/loko2/800/800", category: "Étudiants" },
    { src: "https://picsum.photos/seed/loko3/800/600", category: "Laboratoires" },
    { src: "https://picsum.photos/seed/loko4/600/800", category: "Cérémonies" },
    { src: "https://picsum.photos/seed/loko5/800/600", category: "Salles de cours" },
    { src: "https://picsum.photos/seed/loko6/800/800", category: "Vie étudiante" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white shadow-sm py-12">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Galerie Photos</h1>
            <p className="text-gray-600">Découvrez la vie au sein du Groupe LOKO</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer h-72">
                    <img 
                        src={img.src} 
                        alt={img.category} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            {img.category}
                        </span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};