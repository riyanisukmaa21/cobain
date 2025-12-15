import React from 'react';
import { HashRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import Layout from './components/Layout';
import { Rocket, ChevronRight, ChevronLeft, ArrowLeft } from 'lucide-react';
import { TOPICS } from './constants';
import { TopicId } from './types';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, AreaChart, Area, CartesianGrid } from 'recharts';

// --- Components defined in App.tsx to keep file count within limits while maintaining separation ---

// 1. Home View
const Home: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center p-6 text-center">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <h1 className="relative font-display text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 mb-2">
          GALAKSI KALKULUS
        </h1>
      </div>
      
      <p className="mt-6 text-lg md:text-xl text-blue-200 max-w-2xl font-light">
        Jelajahi alam semesta matematika dan temukan keajaiban kalkulus di antara bintang-bintang.
      </p>

      <Link 
        to="/materi" 
        className="mt-12 group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-transparent font-display tracking-widest uppercase border-2 border-white rounded-full hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
      >
        <span className="mr-2">START MISSION</span>
        <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

// 2. Menu View
const TopicMenu: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-start pt-20 pb-12 px-4">
      <div className="w-full max-w-6xl">
        <div className="flex items-center mb-10">
           <Link to="/" className="text-gray-400 hover:text-white transition-colors mr-4">
              <ArrowLeft size={24} />
           </Link>
           <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Pilih Destinasi Materi</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOPICS.map((topic) => (
            <Link 
              key={topic.id} 
              to={`/materi/${topic.id}`}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-md p-6 flex flex-col"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <topic.icon size={100} />
              </div>
              
              <div className="relative z-10 flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-300">
                   <topic.icon size={32} />
                </div>
                <ChevronRight className="text-gray-500 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="relative z-10 font-display text-2xl font-bold text-white mb-2">{topic.title}</h3>
              <p className="relative z-10 text-gray-400 text-sm">{topic.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// 3. Detail View
const TopicDetail: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const [activeTab, setActiveTab] = React.useState<'materi' | 'contoh'>('materi');

  const topic = TOPICS.find(t => t.id === topicId);

  if (!topic) {
    return (
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Materi tidak ditemukan</h2>
          <Link to="/materi" className="text-blue-400 hover:underline">Kembali ke Menu</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-grow flex flex-col pt-20 pb-12 px-4 max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Link to="/materi" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
            <ChevronLeft className="text-white" />
          </Link>
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white flex items-center gap-3">
              <topic.icon className="text-blue-400 hidden md:block" size={40} />
              {topic.title}
            </h2>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="bg-slate-900/50 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl flex flex-col md:flex-row min-h-[500px]">
        
        {/* Sidebar Tabs (Desktop) / Top Tabs (Mobile) */}
        <div className="md:w-64 bg-black/20 border-b md:border-b-0 md:border-r border-white/10 p-4 flex md:flex-col gap-2">
          <button 
            onClick={() => setActiveTab('materi')}
            className={`flex-1 md:flex-none p-4 rounded-xl text-left transition-all duration-200 font-bold ${
              activeTab === 'materi' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            Penjelasan Materi
          </button>
          <button 
            onClick={() => setActiveTab('contoh')}
            className={`flex-1 md:flex-none p-4 rounded-xl text-left transition-all duration-200 font-bold ${
              activeTab === 'contoh' 
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/50' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            Contoh & Grafik
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 md:p-10 overflow-y-auto max-h-[70vh]">
          {activeTab === 'materi' ? (
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-display font-bold text-blue-300 mb-6 border-b border-white/10 pb-4">
                Dasar Teori
              </h3>
              <div className="prose prose-invert prose-lg max-w-none leading-relaxed">
                {topic.material}
              </div>
            </div>
          ) : (
            <div className="animate-fadeIn space-y-12">
              {/* Chart Section */}
              {topic.chartConfig && (
                <div className="bg-black/30 rounded-2xl p-6 border border-white/5">
                  <h4 className="text-xl font-display font-bold text-purple-300 mb-4">Visualisasi Grafik</h4>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      {topic.chartConfig.type === 'line' ? (
                        <LineChart data={topic.chartConfig.dataGenerator()}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                          <XAxis dataKey="name" stroke="#ffffff60" fontSize={12} />
                          <YAxis stroke="#ffffff60" fontSize={12} domain={topic.chartConfig.domainY || ['auto', 'auto']} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }} 
                            itemStyle={{ color: '#fff' }}
                          />
                          <Line 
                            type="monotone" 
                            dataKey={topic.chartConfig.dataKey} 
                            stroke={topic.chartConfig.color} 
                            strokeWidth={3} 
                            dot={false} 
                            name={topic.chartConfig.label}
                          />
                        </LineChart>
                      ) : (
                        <AreaChart data={topic.chartConfig.dataGenerator()}>
                           <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                           <XAxis dataKey="name" stroke="#ffffff60" fontSize={12} />
                           <YAxis stroke="#ffffff60" fontSize={12} />
                           <Tooltip 
                            contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }} 
                            itemStyle={{ color: '#fff' }}
                          />
                           <Area 
                            type="monotone" 
                            dataKey={topic.chartConfig.dataKey} 
                            stroke={topic.chartConfig.color} 
                            fill={topic.chartConfig.color} 
                            fillOpacity={0.3}
                            name={topic.chartConfig.label}
                          />
                        </AreaChart>
                      )}
                    </ResponsiveContainer>
                  </div>
                  <p className="text-center text-sm text-gray-400 mt-2 italic">Grafik: {topic.chartConfig.label}</p>
                </div>
              )}

              {/* Examples Section */}
              <div>
                <h3 className="text-2xl font-display font-bold text-blue-300 mb-6 border-b border-white/10 pb-4">
                  Contoh Soal
                </h3>
                <div className="grid gap-6">
                  {topic.examples.map((example, idx) => (
                    <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-2 mb-3">
                         <span className="bg-blue-600 text-xs font-bold px-2 py-1 rounded text-white">Soal {idx + 1}</span>
                      </div>
                      <p className="text-lg font-semibold text-white mb-4">{example.question}</p>
                      <div className="bg-black/40 rounded-lg p-4 text-gray-300 border-l-4 border-green-500">
                        <p className="text-sm text-green-400 font-bold mb-2 uppercase tracking-wider">Penyelesaian:</p>
                        {example.solution}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Main App Component with Routes
function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/materi" element={<TopicMenu />} />
          <Route path="/materi/:topicId" element={<TopicDetail />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;