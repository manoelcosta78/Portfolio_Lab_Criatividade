import React, { useState } from 'react';
import { BookOpen, Lightbulb, BrainCircuit, Recycle, Building2, User, ChevronLeft, ChevronRight } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('zine');
  const [currentZinePage, setCurrentZinePage] = useState(0);

  // Dados das atividades
  const activities = [
    { id: 'zine', name: 'Zine: O Exorcista', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'invencao', name: 'Invenção', icon: <Lightbulb className="w-5 h-5" /> },
    { id: 'mapa', name: 'Mapa da Mente', icon: <BrainCircuit className="w-5 h-5" /> },
    { id: 'brinquedo', name: 'Brinquedo Reciclado', icon: <Recycle className="w-5 h-5" /> },
    { id: 'bairro', name: 'Bairro de Papel', icon: <Building2 className="w-5 h-5" /> },
    { id: 'sobre', name: 'Sobre o Autor', icon: <User className="w-5 h-5" /> }, // A 6ª "atividade" / conclusão
  ];

  // Imagens do Zine enviadas
  const zinePages = [
    { src: '16.03.26.portfolio.001.lab_page-0001.jpg', alt: 'Capa O Exorcista' },
    { src: '20260316_142728.jpg', alt: 'Página 1 - A Menina' },
    { src: '16.03.26.portfolio.001.lab_page-0003.jpg', alt: 'Página 2 - O Padre' },
    { src: '20260316_143045.jpg', alt: 'Página 3 - O Exorcismo' },
    { src: '20260316_143133.jpg', alt: 'Créditos' },
  ];

  const nextZinePage = () => {
    setCurrentZinePage((prev) => (prev === zinePages.length - 1 ? 0 : prev + 1));
  };

  const prevZinePage = () => {
    setCurrentZinePage((prev) => (prev === 0 ? zinePages.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-neutral-100 font-sans text-neutral-800">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-6 shadow-md">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Portfólio Criativo</h1>
            <p className="text-indigo-200 mt-1">Laboratório de Criatividade - Profª Pâmela Oliveira</p>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <p className="font-medium text-lg">Manoel Costa</p>
            <p className="text-indigo-200 text-sm">UFC • SMD • 2026.1</p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto mt-8 p-4 flex flex-col md:flex-row gap-8">
        
        {/* Menu de Navegação Lateral */}
        <aside className="md:w-64 flex-shrink-0">
          <nav className="flex flex-row md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 hide-scrollbar">
            {activities.map((act) => (
              <button
                key={act.id}
                onClick={() => setActiveTab(act.id)}
                className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl transition-all whitespace-nowrap md:whitespace-normal font-medium ${
                  activeTab === act.id
                    ? 'bg-indigo-600 text-white shadow-lg scale-105'
                    : 'bg-white hover:bg-indigo-50 text-neutral-600 shadow-sm'
                }`}
              >
                {act.icon}
                {act.name}
              </button>
            ))}
          </nav>
        </aside>

        {/* Área de Conteúdo Dinâmico */}
        <section className="flex-1 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-neutral-200 min-h-[600px]">
          
          {/* Aba: Zine */}
          {activeTab === 'zine' && (
            <div className="animate-fade-in">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-indigo-900 border-b-2 border-indigo-200 pb-2 inline-block">
                  Atividade 1: Zine "O Exorcista"
                </h2>
                <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-bold">
                  Contém Spoilers
                </span>
              </div>
              <p className="text-neutral-600 mb-6">
                Um conto macabro e rimado sobre a luta entre a fé e o tinhoso. Folheie as páginas abaixo:
              </p>

              {/* Leitor de Zine */}
              <div className="relative bg-neutral-50 rounded-xl p-4 flex flex-col items-center justify-center border border-neutral-200 shadow-inner">
                
                <div className="relative w-full max-w-md aspect-[3/4] bg-white shadow-xl rounded-sm overflow-hidden flex items-center justify-center transition-all">
                  <img 
                    src={zinePages[currentZinePage].src} 
                    alt={zinePages[currentZinePage].alt}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex items-center gap-4 mt-6">
                  <button 
                    onClick={prevZinePage}
                    className="p-2 bg-indigo-100 text-indigo-700 hover:bg-indigo-600 hover:text-white rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <span className="font-medium text-neutral-500">
                    Página {currentZinePage + 1} de {zinePages.length}
                  </span>
                  <button 
                    onClick={nextZinePage}
                    className="p-2 bg-indigo-100 text-indigo-700 hover:bg-indigo-600 hover:text-white rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Aba: Invenção */}
          {activeTab === 'invencao' && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-indigo-900 border-b-2 border-indigo-200 pb-2 inline-block mb-6">
                Atividade 2: Invenção Baseada no Zine
              </h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 text-yellow-800">
                <strong>Ideia de Implementação:</strong> Aqui você colocará fotos, rascunhos ou um vídeo da invenção que você criou baseada no universo de "O Exorcista".
              </div>
              <div className="w-full h-64 bg-neutral-100 rounded-xl border-2 border-dashed border-neutral-300 flex items-center justify-center text-neutral-400">
                [Substitua por foto da Invenção]
              </div>
            </div>
          )}

          {/* Aba: Mapa da Mente */}
          {activeTab === 'mapa' && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-indigo-900 border-b-2 border-indigo-200 pb-2 inline-block mb-6">
                Atividade 3: Mapa da Mente
              </h2>
              <p className="text-neutral-600 mb-6">
                Uma exploração visual dos meus bloqueadores e desbloqueadores criativos.
              </p>
              <div className="w-full h-80 bg-neutral-100 rounded-xl border-2 border-dashed border-neutral-300 flex flex-col items-center justify-center text-neutral-400 gap-2">
                <BrainCircuit className="w-12 h-12 opacity-50" />
                <span>[Substitua pela imagem do Mapa Mental]</span>
              </div>
            </div>
          )}

          {/* Aba: Brinquedo */}
          {activeTab === 'brinquedo' && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-indigo-900 border-b-2 border-indigo-200 pb-2 inline-block mb-6">
                Atividade 4: Brinquedo Reciclado
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="w-full h-64 bg-neutral-100 rounded-xl border-2 border-dashed border-neutral-300 flex items-center justify-center text-neutral-400">
                   [Foto do Brinquedo]
                </div>
                <div>
                  <h3 className="font-bold text-lg text-neutral-800 mb-2">Sobre o Brinquedo</h3>
                  <p className="text-neutral-600">
                    Descreva aqui os materiais recicláveis utilizados, o processo de montagem e como o brinquedo funciona.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Aba: Bairro de Papel */}
          {activeTab === 'bairro' && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-indigo-900 border-b-2 border-indigo-200 pb-2 inline-block mb-6">
                Atividade 5: Bairro de Papel
              </h2>
              <p className="text-neutral-600 mb-6">
                Nossa construção colaborativa (ou individual) de um espaço urbano utilizando técnicas de papercraft.
              </p>
              <div className="w-full h-80 bg-neutral-100 rounded-xl border-2 border-dashed border-neutral-300 flex items-center justify-center text-neutral-400">
                [Adicione uma galeria de fotos do Bairro de Papel aqui]
              </div>
            </div>
          )}

          {/* Aba: Sobre */}
          {activeTab === 'sobre' && (
            <div className="animate-fade-in flex flex-col items-center text-center p-8">
              <div className="w-32 h-32 bg-indigo-100 rounded-full flex items-center justify-center mb-6 shadow-md">
                <User className="w-16 h-16 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-neutral-800">Manoel Costa</h2>
              <p className="text-indigo-600 font-medium mb-4">Estudante de Sistemas e Mídias Digitais</p>
              <p className="text-neutral-600 max-w-md">
                Portfólio desenvolvido como requisito final para a disciplina de Laboratório de Criatividade, ministrada pela Profª Pâmela Oliveira na Universidade Federal do Ceará (UFC), semestre 2026.1.
              </p>
            </div>
          )}

        </section>
      </main>
      
      {/* Footer */}
      <footer className="mt-12 py-6 text-center text-neutral-500 text-sm">
        <p>© 2026 Manoel Costa. Todos os direitos reservados.</p>
        <p>Criado com React e Tailwind CSS.</p>
      </footer>

      {/* Adicionando uma pequena animação de fade no CSS via style tag para manter tudo num arquivo */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
};

export default App;
