import React from 'react';
import { ArrowRight, CheckCircle, Award, Briefcase, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-loko-blue text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
            style={{ backgroundImage: 'url("https://picsum.photos/1920/1080?grayscale&blur=2")' }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Excellence & <span className="text-loko-accent">Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light text-gray-100">
            S'inscrire à l'UTT-LOKO, c'est garantir sa formation en vue d'une réalisation professionnelle réussie.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/services" className="bg-white text-loko-blue px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition shadow-lg flex items-center justify-center gap-2">
              Découvrir nos offres <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="bg-loko-accent text-loko-blue px-8 py-3 rounded-md font-bold hover:bg-yellow-400 transition shadow-lg">
              S'inscrire maintenant
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition: BTS vs Licence */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi choisir la Licence Professionnelle (L3) ?</h2>
            <div className="w-24 h-1 bg-loko-blue mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Être titulaire du BTS c'est bien, mais être titulaire de la Licence Professionnelle, c'est mieux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card 
              icon={<Globe size={40} className="text-loko-blue" />}
              title="Reconnue Internationalement"
              description="La Licence Professionnelle L3 (Bac+3) vous ouvre les portes du marché mondial."
            />
            <Card 
              icon={<Briefcase size={40} className="text-loko-blue" />}
              title="Plus Qualifiante"
              description="La L3 est plus cotée auprès des entreprises pour une meilleure insertion professionnelle."
            />
            <Card 
              icon={<Award size={40} className="text-loko-blue" />}
              title="Accréditée CAMES"
              description="Nos diplômes sont reconnus par les 19 pays membres du CAMES."
            />
            <Card 
              icon={<CheckCircle size={40} className="text-loko-blue" />}
              title="Passerelle vers le Master"
              description="La L3 est la voie royale vers le Master, équivalent aux diplômes des Universités Publiques."
            />
          </div>
        </div>
      </section>

      {/* LMD System Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/800/600" 
              alt="Students studying" 
              className="rounded-lg shadow-2xl object-cover h-[400px] w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Le Système LMD à l'UTT-LOKO</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Il vaut mieux s'inscrire dans le système Licence – Master – Doctorat (LMD) à l'UTT-LOKO qu'ailleurs.
            </p>
            <ul className="space-y-4">
              <ListItem text="Structure L1 – L2 – L3 – MASTER - DOCTORAT identique aux Universités Publiques" />
              <ListItem text="Application intégrale et rigoureuse du LMD" />
              <ListItem text="Programmes de qualité très professionnalisants" />
              <ListItem text="Calendrier académique rigoureusement exécuté" />
              <ListItem text="Haute qualification du corps enseignant" />
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-loko-blue text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Rejoignez l'élite de demain</h2>
          <p className="mb-8 max-w-2xl mx-auto text-blue-100">
            Intégrez un groupe fort de 18 établissements et de décennies d'expérience dans l'enseignement.
          </p>
          <Link to="/contact" className="inline-block bg-white text-loko-blue font-bold px-8 py-3 rounded-full hover:bg-loko-accent transition duration-300">
            Postuler maintenant
          </Link>
        </div>
      </section>
    </div>
  );
};

const Card: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
    <div className="mb-6 bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const ListItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start gap-3">
    <div className="mt-1 bg-green-100 p-1 rounded-full">
        <CheckCircle size={16} className="text-green-600" />
    </div>
    <span className="text-gray-700 font-medium">{text}</span>
  </li>
);