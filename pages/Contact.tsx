import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen">
       <div className="bg-loko-blue py-16 text-center text-white">
          <h1 className="text-4xl font-bold">Contactez-nous</h1>
          <p className="mt-2 text-blue-100">Une question sur nos formations ? Besoin d'informations pour l'inscription ?</p>
       </div>

       <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Contact Info */}
            <div className="lg:w-1/3">
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Nos Coordonnées</h3>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-loko-blue flex-shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Adresse</h4>
                                <p className="text-gray-600 text-sm">
                                    Siège Abidjan, Côte d'Ivoire.<br/>
                                    Nous disposons de 18 établissements dans différents quartiers.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-loko-blue flex-shrink-0">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Téléphone</h4>
                                <p className="text-gray-600 text-sm">+225 27 21 24 00 00</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-loko-blue flex-shrink-0">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Email</h4>
                                <p className="text-gray-600 text-sm">info@utt-loko.ci</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-2">Horaires d'ouverture</h4>
                        <p className="text-sm text-gray-600">Lundi - Vendredi: 08:00 - 17:00</p>
                        <p className="text-sm text-gray-600">Samedi: 08:00 - 12:00</p>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>
                    
                    {formStatus === 'success' ? (
                        <div className="bg-green-100 border border-green-200 text-green-800 p-4 rounded-lg text-center">
                            Message envoyé avec succès ! Nous vous recontacterons bientôt.
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                                    <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-loko-blue focus:border-transparent outline-none transition" placeholder="Votre nom" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input required type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-loko-blue focus:border-transparent outline-none transition" placeholder="votre@email.com" />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-loko-blue focus:border-transparent outline-none transition">
                                    <option>Renseignements Généraux</option>
                                    <option>Inscription BTS</option>
                                    <option>Inscription Licence/Master (LMD)</option>
                                    <option>Partenariats</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea required rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-loko-blue focus:border-transparent outline-none transition" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={formStatus === 'submitting'}
                                className="w-full bg-loko-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                                {formStatus === 'submitting' ? 'Envoi...' : <>Envoyer le message <Send size={18} /></>}
                            </button>
                        </form>
                    )}
                </div>
            </div>
          </div>
       </div>
    </div>
  );
};