import {
  ObjectiveItem,
  InstructionStep,
  MaterialContent,
  QuizQuestion,
  GalleryItem,
  MatchingItem,
  CrosswordClue,
  ReflectionOption,
  CharacterMessagePledge,
} from '@/types';

export const APP_METADATA = {
  subject: 'IPAS',
  grade: 'Kelas V SD/MI',
  phase: 'Fase C (Kurikulum Merdeka)',
  topic: 'Peninggalan Sejarah Indonesia',
  title: 'CROSSWORD PUZZLE',
  subtitle: 'Peninggalan Sejarah Indonesia',
  tagline: 'Belajar Sambil Bermain',
  totalPages: 30,
};

export const LEARNING_OBJECTIVES: ObjectiveItem[] = [
  {
    id: 'obj-1',
    text: 'Menjelaskan pengertian peninggalan sejarah.',
    icon: '📜',
  },
  {
    id: 'obj-2',
    text: 'Mengidentifikasi jenis-jenis peninggalan sejarah.',
    icon: '🔍',
  },
  {
    id: 'obj-3',
    text: 'Menyebutkan contoh peninggalan sejarah di Indonesia.',
    icon: '🏯',
  },
  {
    id: 'obj-4',
    text: 'Menjelaskan manfaat mempelajari peninggalan sejarah.',
    icon: '❤️',
  },
  {
    id: 'obj-5',
    text: 'Menyelesaikan permainan Crossword Puzzle dengan benar.',
    icon: '🧩',
  },
];

export const INSTRUCTION_STEPS: InstructionStep[] = [
  { step: 1, text: 'Klik tombol "Mulai".', icon: '▶️' },
  { step: 2, text: 'Pelajari seluruh materi yang tersedia.', icon: '📚' },
  { step: 3, text: 'Amati gambar dan baca penjelasannya.', icon: '👀' },
  { step: 4, text: 'Kerjakan permainan Crossword Puzzle.', icon: '🧩' },
  { step: 5, text: 'Klik tombol "Cek Jawaban".', icon: '✅' },
  { step: 6, text: 'Lihat hasil belajarmu.', icon: '🏆' },
];

export const APERSEPSI_DATA = {
  title: 'Tahukah Kamu?',
  question: 'Apakah kamu pernah melihat bangunan seperti gambar di bawah ini?',
  buildings: [
    { name: 'Candi Borobudur', icon: '🏯', location: 'Magelang, Jawa Tengah' },
    { name: 'Candi Prambanan', icon: '🛕', location: 'Sleman, D.I. Yogyakarta' },
    { name: 'Keraton Yogyakarta', icon: '👑', location: 'Kota Yogyakarta' },
    { name: 'Masjid Agung Demak', icon: '🕌', location: 'Demak, Jawa Tengah' },
  ],
  followUpQuestion: 'Menurutmu, bangunan tersebut dibuat pada ....',
  options: [
    { id: 'opt-1', text: 'Zaman dahulu', isCorrect: true },
    { id: 'opt-2', text: 'Zaman sekarang', isCorrect: false },
  ],
  feedbackSuccess: {
    title: 'Hebat!',
    message: 'Bangunan tersebut merupakan peninggalan sejarah yang harus kita lestarikan.',
  },
  feedbackError: {
    title: 'Tidak apa-apa.',
    message: 'Mari kita pelajari bersama pada materi berikutnya.',
  },
};

export const MATERIALS: Record<number, MaterialContent> = {
  1: {
    id: 'mat-1',
    pageNumber: 5,
    badge: 'Materi 1',
    title: 'Apa itu Peninggalan Sejarah?',
    icon: '📜',
    overview:
      'Peninggalan sejarah adalah segala sesuatu yang diwariskan oleh generasi terdahulu dan memiliki nilai sejarah, budaya, serta ilmu pengetahuan.',
    points: [
      'Peninggalan sejarah menjadi bukti kehidupan masyarakat pada masa lampau.',
      'Harus dijaga dan dilestarikan oleh seluruh masyarakat.',
    ],
    subsections: [
      {
        title: 'Contoh Peninggalan Sejarah',
        examples: [
          '🏯 Candi',
          '🕌 Masjid Bersejarah',
          '👑 Keraton',
          '🗿 Arca',
          '🪨 Prasasti',
          '📖 Naskah Kuno',
        ],
      },
    ],
    didYouKnow:
      'Semakin tua usia suatu peninggalan sejarah, semakin tinggi nilai sejarah yang dimilikinya.',
  },
  2: {
    id: 'mat-2',
    pageNumber: 6,
    badge: 'Materi 2',
    title: 'Ciri-Ciri Peninggalan Sejarah',
    icon: '🔍',
    overview:
      'Suatu benda atau bangunan dapat disebut peninggalan sejarah apabila memiliki ciri-ciri berikut:',
    points: [
      'Berasal dari masa lampau.',
      'Memiliki nilai sejarah.',
      'Dapat dipelajari sebagai sumber pengetahuan.',
      'Harus dijaga dan dilestarikan.',
    ],
    subsections: [
      {
        title: 'Ilustrasi Peninggalan',
        examples: [
          '📜 Buku kuno',
          '🏯 Candi',
          '🪨 Prasasti',
          '👑 Keraton',
        ],
      },
    ],
    activity: {
      title: 'Ayo Mengamati!',
      prompt:
        'Perhatikan gambar di atas. Menurutmu, mengapa peninggalan sejarah harus dijaga?',
    },
  },
  3: {
    id: 'mat-3',
    pageNumber: 7,
    badge: 'Materi 3',
    title: 'Jenis-Jenis Peninggalan Sejarah',
    icon: '🏛',
    overview:
      'Peninggalan sejarah di Indonesia dapat dikelompokkan menjadi beberapa jenis:',
    subsections: [
      {
        title: '1. Bangunan',
        examples: ['Candi', 'Masjid', 'Keraton'],
      },
      {
        title: '2. Benda',
        examples: ['Arca', 'Prasasti', 'Gamelan'],
      },
      {
        title: '3. Tradisi dan Budaya',
        examples: ['Tari Saman', 'Upacara Sekaten', 'Tari Piring'],
      },
      {
        title: '4. Naskah Kuno',
        examples: ['Negarakertagama', 'Babad Tanah Jawi'],
      },
    ],
    conclusion:
      'Peninggalan sejarah tidak hanya berupa bangunan, tetapi juga benda, tradisi, dan naskah kuno.',
  },
  4: {
    id: 'mat-4',
    pageNumber: 8,
    badge: 'Materi 4',
    title: 'Bangunan Bersejarah',
    icon: '🏯',
    subsections: [
      {
        title: '🏯 Candi',
        description: 'Tempat ibadah agama Hindu dan Buddha.',
        examples: ['Borobudur (Buddha)', 'Prambanan (Hindu)'],
      },
      {
        title: '🕌 Masjid Bersejarah',
        description: 'Tempat ibadah umat Islam yang memiliki nilai sejarah.',
        examples: ['Masjid Agung Demak'],
      },
      {
        title: '👑 Keraton',
        description:
          'Tempat tinggal raja sekaligus pusat pemerintahan kerajaan.',
        examples: ['Keraton Yogyakarta', 'Keraton Surakarta'],
      },
    ],
    didYouKnow:
      'Banyak bangunan bersejarah saat ini dijadikan tempat wisata edukasi.',
  },
  5: {
    id: 'mat-5',
    pageNumber: 11,
    badge: 'Materi 5',
    title: 'Peninggalan Sejarah Berupa Benda',
    icon: '🗿',
    overview:
      'Selain bangunan, peninggalan sejarah juga dapat berupa benda yang digunakan oleh masyarakat pada masa lampau.',
    subsections: [
      {
        title: '1. Arca',
        description:
          'Arca adalah patung yang dibuat untuk menggambarkan tokoh tertentu atau dewa pada masa Hindu dan Buddha.',
        examples: ['Arca Ganesha', 'Arca Durga'],
      },
      {
        title: '2. Prasasti',
        description:
          'Prasasti adalah tulisan yang dipahat pada batu atau logam yang berisi informasi penting tentang suatu kerajaan.',
        examples: ['Prasasti Ciaruteun', 'Prasasti Kedukan Bukit'],
      },
      {
        title: '3. Gamelan',
        description:
          'Gamelan merupakan alat musik tradisional yang telah digunakan sejak zaman kerajaan.',
      },
    ],
    didYouKnow:
      'Prasasti menjadi salah satu sumber penting untuk mengetahui sejarah kerajaan di Indonesia.',
  },
  6: {
    id: 'mat-6',
    pageNumber: 12,
    badge: 'Materi 6',
    title: 'Tradisi dan Budaya',
    icon: '🎭',
    overview:
      'Tradisi merupakan kebiasaan yang diwariskan secara turun-temurun dan masih dilestarikan hingga sekarang.',
    subsections: [
      {
        title: '🎉 Sekaten',
        description:
          'Perayaan budaya yang dilaksanakan di Yogyakarta dan Surakarta.',
      },
      {
        title: '🎭 Tari Saman',
        description:
          'Tarian tradisional dari Aceh yang dilakukan secara berkelompok dengan gerakan ritmis yang kompak.',
      },
      {
        title: '🥁 Tari Piring',
        description:
          'Tarian tradisional dari Sumatera Barat yang menggunakan piring sebagai properti utama.',
      },
    ],
    quote:
      'Tradisi dan budaya merupakan warisan bangsa yang harus dijaga agar tidak hilang.',
  },
  7: {
    id: 'mat-7',
    pageNumber: 13,
    badge: 'Materi 7',
    title: 'Naskah Kuno',
    icon: '📖',
    overview:
      'Naskah kuno merupakan tulisan yang dibuat pada masa lampau dan menjadi sumber sejarah berharga.',
    subsections: [
      {
        title: '📚 Negarakertagama',
        description:
          'Kitab yang ditulis oleh Mpu Prapanca pada masa Kerajaan Majapahit.',
      },
      {
        title: '📚 Babad Tanah Jawi',
        description:
          'Menceritakan sejarah silsilah raja dan kerajaan-kerajaan di Pulau Jawa.',
      },
      {
        title: '💡 Manfaat Naskah Kuno',
        examples: [
          'Mengetahui sejarah bangsa.',
          'Menambah pengetahuan.',
          'Melestarikan warisan budaya.',
        ],
      },
    ],
  },
  8: {
    id: 'mat-8',
    pageNumber: 14,
    badge: 'Materi 8',
    title: 'Peninggalan Masa Hindu dan Buddha',
    icon: '🏯',
    subsections: [
      {
        title: '🕉 Masa Hindu',
        examples: ['Candi Prambanan', 'Arca Siwa/Ganesha', 'Prasasti Ciaruteun'],
      },
      {
        title: '☸ Masa Buddha',
        examples: ['Candi Borobudur', 'Patung Buddha', 'Relief Karmawibhangga'],
      },
    ],
    conclusion:
      'Kerajaan Hindu dan Buddha meninggalkan banyak bangunan dan benda bersejarah yang masih dapat dipelajari hingga sekarang.',
  },
  9: {
    id: 'mat-9',
    pageNumber: 15,
    badge: 'Materi 9',
    title: 'Peninggalan Masa Islam dan Kolonial',
    icon: '🕌',
    subsections: [
      {
        title: '🕌 Peninggalan Masa Islam',
        examples: [
          'Masjid Agung Demak',
          'Keraton Kasultanan',
          'Seni Kaligrafi',
          'Tradisi Upacara Sekaten',
        ],
      },
      {
        title: '🏛 Peninggalan Masa Kolonial',
        examples: [
          'Benteng Pertahanan',
          'Gedung bersejarah masa lalu',
          'Lawang Sewu di Semarang',
          'Benteng Vredeburg di Yogyakarta',
        ],
      },
    ],
    conclusion:
      'Setiap masa sejarah meninggalkan warisan yang berbeda dan menjadi bagian dari identitas bangsa Indonesia.',
  },
  10: {
    id: 'mat-10',
    pageNumber: 16,
    badge: 'Materi 10',
    title: 'Mengapa Kita Harus Mempelajari Sejarah?',
    icon: '❤️',
    overview: 'Dengan mempelajari peninggalan sejarah, kita dapat:',
    points: [
      'Mengetahui kehidupan masyarakat masa lampau.',
      'Menumbuhkan rasa cinta tanah air.',
      'Menghargai perjuangan para pendahulu.',
      'Melestarikan budaya bangsa.',
      'Menjaga warisan sejarah Indonesia.',
    ],
    quote: 'Bangsa yang besar adalah bangsa yang menghargai sejarahnya.',
  },
};

export const LATIHAN_SINGKAT_QUESTIONS: QuizQuestion[] = [
  {
    id: 'lat-1',
    questionNumber: 1,
    question: 'Tempat tinggal raja disebut ....',
    options: ['Candi', 'Keraton', 'Arca', 'Prasasti'],
    correctIndex: 1,
  },
  {
    id: 'lat-2',
    questionNumber: 2,
    question: 'Bangunan tempat ibadah agama Buddha adalah ....',
    options: ['Keraton', 'Borobudur', 'Gamelan', 'Arca'],
    correctIndex: 1,
  },
  {
    id: 'lat-3',
    questionNumber: 3,
    question:
      'Masjid Agung Demak merupakan peninggalan sejarah pada masa ....',
    options: ['Hindu', 'Buddha', 'Islam', 'Kolonial'],
    correctIndex: 2,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    name: 'Candi Borobudur',
    icon: '🏯',
    kategori: 'bangunan',
    lokasi: 'Magelang, Jawa Tengah',
    fungsi: 'Tempat ibadah agama Buddha & ziarah suci',
    keunikan:
      'Candi Buddha terbesar di dunia, tersusun dari jutaan balok batu vulkanik tanpa semen berpola mandala yang megah.',
    deskripsi:
      'Dibangun sekitar abad ke-8 pada masa Dinasti Syailendra, dihiasi ribuan panel relief dan stupa.',
  },
  {
    id: 'gal-2',
    name: 'Candi Prambanan',
    icon: '🛕',
    kategori: 'bangunan',
    lokasi: 'Sleman, D.I. Yogyakarta',
    fungsi: 'Tempat pemujaan Trimurti (Siwa, Wisnu, Brahma) Hindu',
    keunikan:
      'Candi Hindu tercantik & tertinggi di Indonesia dengan relief kisah Ramayana yang legendaris.',
    deskripsi:
      'Dibangun oleh Raja Rakai Pikatan dari Kerajaan Mataram Kuno pada abad ke-9.',
  },
  {
    id: 'gal-3',
    name: 'Masjid Agung Demak',
    icon: '🕌',
    kategori: 'bangunan',
    lokasi: 'Demak, Jawa Tengah',
    fungsi: 'Tempat ibadah & pusat dakwah Walisongo',
    keunikan:
      'Memiliki tiang utama "tatal" buatan Sunan Kalijaga dan atap tumpang bertingkat tiga yang khas nusantara.',
    deskripsi:
      'Salah satu masjid tertua di Indonesia yang didirikan pada masa Kesultanan Demak.',
  },
  {
    id: 'gal-4',
    name: 'Keraton Yogyakarta',
    icon: '👑',
    kategori: 'bangunan',
    lokasi: 'Kota Yogyakarta, D.I. Yogyakarta',
    fungsi: 'Istana tempat tinggal Sultan & pusat pelestarian budaya Jawa',
    keunikan:
      'Arsitektur sarat filosofi garis imajiner dari Gunung Merapi hingga Pantai Selatan.',
    deskripsi:
      'Pusat kebudayaan Jawa yang masih hidup dan aktif menjalankan tradisi hingga kini.',
  },
  {
    id: 'gal-5',
    name: 'Prasasti Ciaruteun',
    icon: '🪨',
    kategori: 'benda',
    lokasi: 'Bogor, Jawa Barat',
    fungsi: 'Dokumentasi kekuasaan Raja Purnawarman',
    keunikan:
      'Memiliki cetakan sepasang telapak kaki Raja Purnawarman yang disamakan dengan kaki Dewa Wisnu.',
    deskripsi:
      'Peninggalan penting dari Kerajaan Tarumanegara yang ditulis dengan aksara Pallawa dan bahasa Sanskerta.',
  },
  {
    id: 'gal-6',
    name: 'Arca Ganesha',
    icon: '🗿',
    kategori: 'benda',
    lokasi: 'Berbagai Museum di Indonesia',
    fungsi: 'Simbol penghormatan dewa ilmu pengetahuan & penolak bala',
    keunikan:
      'Patung berkepala gajah dan berbadan manusia dengan pahatan khas masa klasik nusantara.',
    deskripsi:
      'Peninggalan masa Hindu yang menggambarkan Ganesha sebagai dewa kebijaksanaan dan pelindung.',
  },
  {
    id: 'gal-7',
    name: 'Gamelan',
    icon: '🎼',
    kategori: 'benda',
    lokasi: 'Jawa, Sunda, Bali',
    fungsi: 'Musik pengiring upacara adat, keraton, dan pertunjukan wayang',
    keunikan:
      'Ensembel instrumen perkusi logam perunggu yang diakui UNESCO sebagai Warisan Budaya Takbenda.',
    deskripsi:
      'Alat musik tradisional adiluhung yang telah mengalun sejak era kejayaan kerajaan nusantara.',
  },
  {
    id: 'gal-8',
    name: 'Kitab Negarakertagama',
    icon: '📖',
    kategori: 'naskah',
    lokasi: 'Perpustakaan Nasional RI',
    fungsi: 'Sumber sejarah primer kejayaan Kerajaan Majapahit',
    keunikan:
      'Naskah lontar karya Mpu Prapanca (1365 M) yang memuat semboyan persatuan nusantara.',
    deskripsi:
      'Naskah kuno bernilai sangat tinggi yang mencatat wilayah, hukum, dan tata kota Majapahit.',
  },
];

export const FAKTA_MENARIK_LIST = [
  'Borobudur merupakan candi Buddha terbesar di Indonesia.',
  'Prambanan merupakan candi Hindu terbesar di Indonesia.',
  'Gamelan telah dikenal sejak zaman kerajaan.',
  'Indonesia memiliki banyak peninggalan sejarah yang menjadi objek wisata.',
  'Menjaga peninggalan sejarah merupakan tanggung jawab seluruh masyarakat.',
];

export const MATCHING_GAME_ITEMS: MatchingItem[] = [
  { id: 'match-1', icon: '🏯', name: 'Candi' },
  { id: 'match-2', icon: '🗿', name: 'Arca' },
  { id: 'match-3', icon: '🪨', name: 'Prasasti' },
  { id: 'match-4', icon: '👑', name: 'Keraton' },
  { id: 'match-5', icon: '🕌', name: 'Masjid' },
  { id: 'match-6', icon: '🎼', name: 'Gamelan' },
];

/**
 * Crossword Grid Layout Specification (10 words from Storyboard):
 * Across (Mendatar):
 *  1: BOROBUDUR (9 letters)
 *  3: KERATON (7 letters)
 *  5: PRASASTI (8 letters)
 *  7: GAMELAN (7 letters)
 *  9: SAMAN (5 letters)
 *
 * Down (Menurun):
 *  2: CANDI (5 letters)
 *  4: ARCA (4 letters)
 *  6: MASJID (6 letters)
 *  8: PRAMBANAN (9 letters)
 *  10: SEJARAH (7 letters)
 */
export const CROSSWORD_CLUES: CrosswordClue[] = [
  // Across (Mendatar)
  {
    id: 'm-1',
    number: 1,
    orientation: 'across',
    answer: 'BOROBUDUR',
    clue: 'Candi Buddha terbesar di Indonesia.',
    startX: 0,
    startY: 0,
    length: 9,
  },
  {
    id: 'm-3',
    number: 3,
    orientation: 'across',
    answer: 'KERATON',
    clue: 'Tempat tinggal raja pada masa kerajaan.',
    startX: 1,
    startY: 4,
    length: 7,
  },
  {
    id: 'm-5',
    number: 5,
    orientation: 'across',
    answer: 'PRASASTI',
    clue: 'Tulisan pada batu.',
    startX: 0,
    startY: 8,
    length: 8,
  },
  {
    id: 'm-7',
    number: 7,
    orientation: 'across',
    answer: 'GAMELAN',
    clue: 'Alat musik tradisional Jawa.',
    startX: 3,
    startY: 6,
    length: 7,
  },
  {
    id: 'm-9',
    number: 9,
    orientation: 'across',
    answer: 'SAMAN',
    clue: 'Tarian tradisional dari Aceh.',
    startX: 4,
    startY: 10,
    length: 5,
  },

  // Down (Menurun)
  {
    id: 'd-2',
    number: 2,
    orientation: 'down',
    answer: 'CANDI',
    clue: 'Bangunan tempat ibadah Hindu dan Buddha.',
    startX: 2,
    startY: 2,
    length: 5,
  },
  {
    id: 'd-4',
    number: 4,
    orientation: 'down',
    answer: 'ARCA',
    clue: 'Patung peninggalan kerajaan.',
    startX: 0,
    startY: 6,
    length: 4,
  },
  {
    id: 'd-6',
    number: 6,
    orientation: 'down',
    answer: 'MASJID',
    clue: 'Tempat ibadah umat Islam.',
    startX: 5,
    startY: 5,
    length: 6,
  },
  {
    id: 'd-8',
    number: 8,
    orientation: 'down',
    answer: 'PRAMBANAN',
    clue: 'Candi Hindu terbesar di Indonesia.',
    startX: 7,
    startY: 1,
    length: 9,
  },
  {
    id: 'd-10',
    number: 10,
    orientation: 'down',
    answer: 'SEJARAH',
    clue: 'Peristiwa masa lampau yang dipelajari.',
    startX: 4,
    startY: 4,
    length: 7,
  },
];

export const CROSSWORD_GRID_DIMENSIONS = {
  rows: 11,
  cols: 10,
};

export const REFLECTION_OPTIONS: ReflectionOption[] = [
  {
    id: 'ref-1',
    label: 'Menjelaskan pengertian peninggalan sejarah.',
  },
  {
    id: 'ref-2',
    label: 'Menyebutkan jenis-jenis peninggalan sejarah.',
  },
  {
    id: 'ref-3',
    label: 'Menjelaskan manfaat peninggalan sejarah.',
  },
  {
    id: 'ref-4',
    label: 'Menyelesaikan Crossword Puzzle.',
  },
];

export const CHARACTER_MESSAGE_PLEDGES: CharacterMessagePledge[] = [
  { id: 'pledge-1', text: 'Menjaga kebersihan tempat bersejarah.' },
  { id: 'pledge-2', text: 'Tidak mencoret bangunan bersejarah.' },
  { id: 'pledge-3', text: 'Menghargai budaya Indonesia.' },
  { id: 'pledge-4', text: 'Melestarikan warisan bangsa.' },
];

export const FINAL_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'final-1',
    questionNumber: 1,
    question: 'Tempat tinggal raja disebut ....',
    options: ['Candi', 'Keraton', 'Arca', 'Prasasti'],
    correctIndex: 1,
  },
  {
    id: 'final-2',
    questionNumber: 2,
    question: 'Tulisan pada batu disebut ....',
    options: ['Arca', 'Prasasti', 'Gamelan', 'Keraton'],
    correctIndex: 1,
  },
  {
    id: 'final-3',
    questionNumber: 3,
    question: 'Mengapa kita harus menjaga peninggalan sejarah?',
    options: [
      'Agar tetap lestari.',
      'Agar cepat rusak.',
      'Agar dibuang.',
      'Agar dijual.',
    ],
    correctIndex: 0,
  },
];
