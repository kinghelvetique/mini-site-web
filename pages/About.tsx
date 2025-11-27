import React from 'react';
import { Clock, Building, User, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-loko-blue py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">À Propos de Nous</h1>
          <p className="text-xl text-blue-100">Une histoire d'excellence qui s'écrit depuis 1948.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Founder Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-gray-200 min-h-[400px] relative">
               <img 
                src="https://picsum.photos/600/800?grayscale" 
                alt="M. LOKO José Dominique" 
                className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                 <h3 className="text-xl font-bold">M. LOKO José Dominique</h3>
                 <p className="text-sm opacity-90">Président-Fondateur</p>
                 <p className="text-xs text-yellow-400 mt-1">Commandeur dans l’Ordre National</p>
               </div>
            </div>
            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-loko-blue mb-6">Le mot du Fondateur</h2>
              <blockquote className="text-xl text-gray-700 italic border-l-4 border-loko-accent pl-6 mb-6">
                "Notre groupe est l’œuvre de toute une vie. Tout est parti d’un premier maillon posé en 1948/49. C'est assurément une véritable épopée."
              </blockquote>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Des milliers de femmes et d'hommes de plusieurs générations successives ont été formés dans nos établissements. Ils ont réussi leur insertion professionnelle en Côte d'Ivoire, en Afrique, en Europe et en Amérique.
              </p>
              <p className="text-gray-600 leading-relaxed">
                L'histoire du Groupe LOKO figure en bonne place dans celle de l'Ecole Ivoirienne, de la période coloniale à nos jours.
              </p>
            </div>
          </div>
        </div>

        {/* History & Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Clock className="text-loko-blue" /> Notre Histoire
                </h2>
                <div className="bg-white p-6 rounded-lg shadow-md prose max-w-none text-gray-600">
                    <p className="mb-4">
                        À partir du premier maillon de la chaîne, année par année et pièce par pièce, le Groupe a été construit avec une stratégie basée sur deux orientations :
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>
                            <strong className="text-gray-900">L'extension :</strong> Accroître le nombre de filières selon les besoins des entreprises et de la demande sociale.
                        </li>
                        <li>
                            <strong className="text-gray-900">L'expansion :</strong> Construire et ouvrir de nouveaux établissements dans différents quartiers d'Abidjan pour se rapprocher des apprenants.
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Building className="text-loko-blue" /> Structure du Groupe
                </h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="mb-6 text-gray-600">
                        Le groupe compte aujourd'hui <strong>18 établissements</strong> agréés par l'État de Côte d'Ivoire, répartis comme suit :
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <StatBox value="4" label="Secondaire Technique & Pro" />
                        <StatBox value="4" label="Secondaire Général" />
                        <StatBox value="9" label="Grandes Écoles" />
                        <StatBox value="1" label="Université (UTT-LOKO)" />
                    </div>
                </div>
            </div>
        </div>

        {/* Alumni Section */}
        <div className="mt-16 text-center">
             <div className="inline-block p-4 rounded-full bg-blue-50 text-loko-blue mb-4">
                <Users size={48} />
             </div>
             <h2 className="text-2xl font-bold text-gray-900 mb-4">Un Réseau d'Anciens Puissant</h2>
             <p className="max-w-3xl mx-auto text-gray-600">
                 Ce sont des milliers d'hommes et de femmes qui ont reçu leurs formations dans les différents établissements du Groupe et qui occupent aujourd'hui des postes clés à travers le monde.
             </p>
        </div>
      </div>
    </div>
  );
};

const StatBox: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="bg-gray-50 p-4 rounded text-center border border-gray-100">
        <span className="block text-3xl font-bold text-loko-blue mb-1">{value}</span>
        <span className="text-sm text-gray-600 font-medium">{label}</span>
    </div>
);