import React from 'react';
import { BookOpen, Award, Layers, ShieldCheck } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/1920/600')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-4xl font-bold mb-4">Nos Offres de Formation</h1>
          <p className="text-xl text-gray-300">De la 6ème au Doctorat (Bac+8)</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Accreditation Banner */}
        <div className="bg-blue-50 border-l-4 border-loko-blue p-6 rounded-r-lg mb-16 flex items-start gap-4">
            <ShieldCheck className="text-loko-blue w-12 h-12 flex-shrink-0" />
            <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Accréditation CAMES</h3>
                <p className="text-gray-700">
                    Concernant les filières de 2ème et 3ème cycles universitaires de notre Université (UTT-LOKO), 
                    <strong> 29 Diplômes</strong> ont reçu la reconnaissance du Conseil Africain et Malgache pour l'Enseignement Supérieur (CAMES).
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Secondary Education */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-loko-light transition-colors">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                    <BookOpen size={28} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Enseignement Secondaire</h2>
                <p className="text-gray-600 mb-6">
                    Nous préparons nos élèves à la réussite dès le premier cycle avec un encadrement rigoureux.
                </p>
                <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div>Brevet d’Etude du Premier Cycle (BEPC)</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div>Brevet d’Etude Professionnel (BEP)</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div>Brevet Professionnel (BP)</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div>Baccalauréats (Séries A, C, D, F, G)</li>
                </ul>
            </div>

            {/* Higher Education - BTS */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-loko-light transition-colors">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-6">
                    <Layers size={28} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Brevet de Technicien Supérieur</h2>
                <p className="text-gray-600 mb-6">
                    Une formation courte et professionnalisante pour une insertion rapide sur le marché du travail.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                    <span className="text-3xl font-bold text-orange-600 block mb-1">22</span>
                    <span className="font-medium text-gray-700">Filières tertiaires et technologiques disponibles</span>
                </div>
            </div>

            {/* University - LMD */}
            <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-loko-blue transform lg:-translate-y-4">
                <div className="absolute top-0 right-0 bg-loko-accent text-loko-blue text-xs font-bold px-3 py-1 rounded-bl-lg">
                    RECOMMANDÉ
                </div>
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-loko-blue mb-6">
                    <Award size={28} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Système LMD (UTT-LOKO)</h2>
                <p className="text-gray-600 mb-6">
                    La voie de l'excellence académique reconnue internationalement.
                </p>
                <ul className="space-y-4">
                    <DegreeItem title="Licence (L1, L2, L3)" desc="Plus qualifiante et cotée auprès des entreprises." />
                    <DegreeItem title="Master" desc="Contresigné par le MES/RS et équivalent aux diplômes publics." />
                    <DegreeItem title="Doctorat" desc="Le sommet de la réussite universitaire." />
                </ul>
            </div>
        </div>

        {/* Why LMD Section Details */}
        <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir le cycle LMD à l'UTT ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-gray-700">1</div>
                    <div>
                        <h4 className="text-xl font-bold mb-2">Reconnaissance Officielle</h4>
                        <p className="text-gray-600">Diplômes contresignés par le Ministère de l’Enseignement Supérieur et de la Recherche Scientifique (MES/RS).</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-gray-700">2</div>
                    <div>
                        <h4 className="text-xl font-bold mb-2">Mobilité Internationale</h4>
                        <p className="text-gray-600">Accréditation CAMES valable dans 19 pays, facilitant la poursuite d'études à l'étranger.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-gray-700">3</div>
                    <div>
                        <h4 className="text-xl font-bold mb-2">Pédagogie Rigoureuse</h4>
                        <p className="text-gray-600">Respect strict du calendrier académique et programmes professionnalisants.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-gray-700">4</div>
                    <div>
                        <h4 className="text-xl font-bold mb-2">Employabilité</h4>
                        <p className="text-gray-600">La Licence (L3) est plus appréciée par les recruteurs modernes que le simple BTS.</p>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const DegreeItem: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
    <div className="border-b border-gray-100 pb-3 last:border-0">
        <h4 className="font-bold text-loko-blue text-lg">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
);