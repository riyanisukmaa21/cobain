import React from 'react';
import { TopicContent, TopicId } from './types';
import { Calculator, Activity, TrendingUp, Divide, Box } from 'lucide-react';

// Helper to generate chart data
const generateData = (fn: (x: number) => number, start: number, end: number, step: number = 0.5) => {
  const data = [];
  for (let x = start; x <= end; x += step) {
    data.push({ name: x.toFixed(1), value: parseFloat(fn(x).toFixed(2)) });
  }
  return data;
};

export const TOPICS: TopicContent[] = [
  {
    id: TopicId.TURUNAN,
    title: 'Turunan',
    description: 'Pelajari bagaimana fungsi berubah seiring perubahan nilai input.',
    icon: TrendingUp,
    chartConfig: {
      type: 'line',
      label: 'f(x) = x²',
      color: '#f472b6', // pink-400
      dataGenerator: () => generateData((x) => x * x, -5, 5),
      dataKey: 'value'
    },
    material: (
      <div className="space-y-4 text-gray-200">
        <p>
          Turunan adalah konsep inti dalam kalkulus yang mengukur seberapa sensitif perubahan nilai fungsi (nilai keluaran) terhadap perubahan nilai inputnya (variabel bebas).
        </p>
        <p>
          Secara grafis, turunan di suatu titik adalah gradien garis singgung kurva di titik tersebut. Jika fungsi naik, turunannya positif. Jika fungsi turun, turunannya negatif.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Notasi umum: f'(x) atau dy/dx.</li>
          <li>Aturan pangkat dasar: Jika f(x) = axⁿ, maka f'(x) = n·axⁿ⁻¹.</li>
        </ul>
      </div>
    ),
    examples: [
      {
        title: 'Contoh Soal 1',
        question: 'Tentukan turunan dari fungsi: f(x) = 4x²',
        solution: (
          <div>
            <p>Turunan dari x² adalah 2x, sehingga:</p>
            <p className="font-mono mt-1 text-yellow-300">f'(x) = 4 · 2x = 8x</p>
          </div>
        ),
      },
      {
        title: 'Contoh Soal 2',
        question: 'Hitung turunan dari: f(x) = 3x³ − 5x',
        solution: (
          <div>
            <p>Turunan 3x³ adalah 9x²</p>
            <p>Turunan −5x adalah −5</p>
            <p className="mt-1">Hasilnya:</p>
            <p className="font-mono text-yellow-300">f'(x) = 9x² − 5</p>
          </div>
        ),
      },
    ],
  },
  {
    id: TopicId.ALJABAR,
    title: 'Aljabar',
    description: 'Manipulasi simbol matematika dan aturan operasinya.',
    icon: Calculator,
    chartConfig: {
      type: 'line',
      label: 'f(x) = 2x + 1',
      color: '#60a5fa', // blue-400
      dataGenerator: () => generateData((x) => 2 * x + 1, -5, 5),
      dataKey: 'value'
    },
    material: (
      <div className="space-y-4 text-gray-200">
        <p>
          Aljabar adalah cabang matematika yang mempelajari simbol-simbol matematika dan aturan untuk memanipulasi simbol-simbol tersebut.
        </p>
        <p>
          Dalam kalkulus, aljabar sangat penting untuk menyederhanakan persamaan sebelum dilakukan proses turunan atau integral.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Variabel: Simbol (biasanya huruf) yang mewakili angka yang belum diketahui.</li>
          <li>Koefisien: Angka yang mengalikan variabel.</li>
          <li>Faktorisasi: Menguraikan bilangan atau ekspresi menjadi faktor-faktor perkalian.</li>
        </ul>
      </div>
    ),
    examples: [
      {
        title: 'Contoh Soal 1',
        question: 'Sederhanakan ekspresi berikut: 2x + 7x − 3',
        solution: (
          <div>
            <p>Gabungkan suku sejenis:</p>
            <p>2x + 7x = 9x</p>
            <p className="mt-1">Sehingga hasil akhirnya adalah:</p>
            <p className="font-mono text-yellow-300">9x − 3</p>
          </div>
        ),
      },
      {
        title: 'Contoh Soal 2',
        question: 'Faktorkan bentuk aljabar berikut: x² + 5x + 6',
        solution: (
          <div>
            <p>Carilah dua bilangan yang jumlahnya 5 dan hasil kali 6, yaitu 2 dan 3.</p>
            <p className="mt-1">Sehingga bentuk faktornya adalah:</p>
            <p className="font-mono text-yellow-300">(x + 2)(x + 3)</p>
          </div>
        ),
      },
    ],
  },
  {
    id: TopicId.TRIGONOMETRI,
    title: 'Trigonometri',
    description: 'Hubungan antara sudut dan sisi segitiga.',
    icon: Activity,
    chartConfig: {
      type: 'line',
      label: 'f(x) = sin(x)',
      color: '#34d399', // emerald-400
      dataGenerator: () => {
        // Generate sin wave in degrees converted to radians for js Math.sin
        const data = [];
        for (let x = 0; x <= 360; x += 15) {
           // x is degrees
           const rad = x * (Math.PI / 180);
           data.push({ name: `${x}°`, value: Math.sin(rad) });
        }
        return data;
      },
      dataKey: 'value',
      domainY: [-1.5, 1.5]
    },
    material: (
      <div className="space-y-4 text-gray-200">
        <p>
          Trigonometri mempelajari hubungan yang melibatkan panjang dan sudut segitiga. Fungsi trigonometri dasar meliputi sinus (sin), kosinus (cos), dan tangen (tan).
        </p>
        <p>
          Dalam kalkulus, fungsi trigonometri sering digunakan untuk memodelkan fenomena periodik seperti gelombang suara atau cahaya.
        </p>
      </div>
    ),
    examples: [
      {
        title: 'Contoh Soal 1',
        question: 'Hitung nilai sin 30°.',
        solution: (
          <div>
            <p>Nilai sin 30° adalah <span className="font-mono text-yellow-300">1/2</span></p>
          </div>
        ),
      },
      {
        title: 'Contoh Soal 2',
        question: 'Tentukan nilai cos 60°.',
        solution: (
          <div>
            <p>cos 60° memiliki nilai <span className="font-mono text-yellow-300">1/2</span></p>
          </div>
        ),
      },
    ],
  },
  {
    id: TopicId.LIMIT,
    title: 'Limit',
    description: 'Nilai yang didekati oleh fungsi saat input mendekati nilai tertentu.',
    icon: Divide,
    chartConfig: {
      type: 'line',
      label: 'f(x) = x + 1',
      color: '#facc15', // yellow-400
      dataGenerator: () => generateData((x) => x + 1, 0, 6),
      dataKey: 'value'
    },
    material: (
      <div className="space-y-4 text-gray-200">
        <p>
          Limit menceritakan perilaku suatu fungsi saat input (x) mendekati nilai tertentu, tanpa harus benar-benar mencapai nilai tersebut.
        </p>
        <p>
          Limit adalah pondasi dari kalkulus. Baik turunan maupun integral didefinisikan menggunakan konsep limit.
        </p>
      </div>
    ),
    examples: [
      {
        title: 'Contoh Soal 1',
        question: 'Hitung nilai limit berikut: lim x → 3 (2x + 1)',
        solution: (
          <div>
            <p>Substitusikan x = 3:</p>
            <p>2(3) + 1 = 7</p>
            <p className="mt-1 font-mono text-yellow-300">Maka nilai limitnya adalah 7.</p>
          </div>
        ),
      },
      {
        title: 'Contoh Soal 2',
        question: 'Hitung limit: lim x → 2 (x² − 4)',
        solution: (
          <div>
            <p>Substitusikan x = 2:</p>
            <p>2² − 4 = 4 − 4 = 0</p>
            <p className="mt-1 font-mono text-yellow-300">Hasilnya adalah 0.</p>
          </div>
        ),
      },
    ],
  },
  {
    id: TopicId.INTEGRAL,
    title: 'Integral',
    description: 'Menghitung luas daerah di bawah kurva dan volume benda putar.',
    icon: Box,
    chartConfig: {
      type: 'area', // Use area chart to visualize integration
      label: 'Luas dibawah y = x',
      color: '#a78bfa', // violet-400
      dataGenerator: () => generateData((x) => x, 0, 4),
      dataKey: 'value'
    },
    material: (
      <div className="space-y-4 text-gray-200">
        <p>
          Integral adalah kebalikan dari turunan (antiturunan). Integral digunakan untuk menghitung akumulasi jumlah, seperti luas di bawah kurva grafik atau volume benda yang diputar.
        </p>
        <p>
          Ada dua jenis integral utama: Integral Tentu (memiliki batas) dan Integral Tak Tentu (tanpa batas).
        </p>
      </div>
    ),
    examples: [
      {
        title: 'Contoh Soal 1 (Luas Daerah)',
        question: 'Hitung luas di bawah kurva y = x dari x = 0 sampai x = 3.',
        solution: (
          <div>
            <p>Integral dari x adalah x²/2</p>
            <p>Evaluasi dari 0 sampai 3:</p>
            <p>(3² / 2) − (0² / 2) = 9/2</p>
            <p className="mt-1 font-mono text-yellow-300">Jadi luas daerahnya adalah 4,5 satuan luas.</p>
          </div>
        ),
      },
      {
        title: 'Contoh Soal 2 (Volume Benda Putar)',
        question: 'Hitung volume benda yang terbentuk ketika kurva y = x diputar terhadap sumbu x dari x = 0 sampai x = 2.',
        solution: (
          <div>
            <p>Volume dihitung dengan rumus: V = π ∫ y² dx</p>
            <p>Karena y = x, maka y² = x²</p>
            <p>Integral x² adalah x³/3</p>
            <p className="mt-2">Masukkan batas 0 sampai 2:</p>
            <p>(2³ / 3) − (0³ / 3) = 8/3</p>
            <p className="mt-2 font-mono text-yellow-300">Volume: V = π · (8/3) = 8π/3</p>
          </div>
        ),
      },
    ],
  },
];
