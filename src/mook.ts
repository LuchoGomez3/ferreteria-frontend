export type Product = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
};

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Bosch 18V Hammer Drill/Driver HDH181BL",
    description:
      'Taladro inalámbrico Bosch 18 V con motor de 4 polos, mandril de metal de ½", diseño compacto y peso liviano (≈1.8 kg). Carcasa resistente y compatibilidad con batería L‑BOXX.',
    imageUrl:
      "https://imgs.search.brave.com/3gqYs9bNAFr0t5sFcZcVXitYsinLLPAHCat7aS6A2TU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFvNC1acXhvVkwu/anBn",
  },
  {
    id: 2,
    name: "Bosch 18V PROFACTOR Hammer Drill GSB18V‑1330C",
    description:
      'Taladro percutor Bosch 18 V PROFACTOR, diseñado para perforaciones grandes y atornillado fuerte. Mandril de ½", alta resistencia y compatibilidad con baterías 18 V (sistema AmpShare).',
    imageUrl:
      "https://imgs.search.brave.com/JIyKMy1Ui2-_e9nWzchz7IZc2c5wr08m0RxouD3raD4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFyd3ZpbWdyc0wu/anBn",
  },
  {
    id: 3,
    name: "Bosch 18V SDS‑Max Rotary Hammer GBH18V‑22",
    description:
      "Martillo rotatorio Bosch sin cable SDS‑Max 18 V BITURBO, 12,5 J de energía de impacto, control de vibración y tres modos: taladro, martillo y cincel.",
    imageUrl:
      "https://imgs.search.brave.com/MrGik9b_j89eS22guPBwmnB7VcFCIBs_slG1wmrq76Y/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtZXUuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxRWMyekQzYXhM/Ll9BQ19VTDE2NV9T/UjE2NSwxNjVfLmpw/Zw",
  },
  {
    id: 4,
    name: 'DeWalt 20V MAX 6‑1/2" Cordless Circular Saw DCS391B',
    description:
      'Sierra circular DeWalt 20 V MAX, cuchilla 6½", motor de 5150 RPM, zapata de magnesio, capacidad de bisel hasta 50°, compacta y ligera.',
    imageUrl:
      "https://imgs.search.brave.com/10QC1fc7g8nF6kaEI5ijIkK37omPIneRCK1YqxEApJE/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL2c0RUFB/T1N3REFwbk5kdUUv/cy1sMjI1LmpwZw",
  },
  {
    id: 5,
    name: "Bosch 18V SDS‑Max Rotary Hammer GBH18V‑22",
    description:
      "Martillo rotatorio Bosch sin cable SDS‑Max 18 V BITURBO, 12,5 J de energía de impacto, control de vibración y tres modos: taladro, martillo y cincel.",
    imageUrl:
      "https://imgs.search.brave.com/MrGik9b_j89eS22guPBwmnB7VcFCIBs_slG1wmrq76Y/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtZXUuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxRWMyekQzYXhM/Ll9BQ19VTDE2NV9T/UjE2NSwxNjVfLmpw/Zw",
  },
  {
    id: 6,
    name: "Bosch 18V Hammer Drill/Driver HDH181BL",
    description:
      'Taladro inalámbrico Bosch 18 V con motor de 4 polos, mandril de metal de ½", diseño compacto y peso liviano (≈1.8 kg). Carcasa resistente y compatibilidad con batería L‑BOXX.',
    imageUrl:
      "https://imgs.search.brave.com/3gqYs9bNAFr0t5sFcZcVXitYsinLLPAHCat7aS6A2TU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFvNC1acXhvVkwu/anBn",
  },
  {
    id: 7,
    name: 'DeWalt 20V MAX XR 7‑1/4" Brushless Circular Saw DCS570B',
    description:
      'Sierra circular inalámbrica DeWalt 20 V MAX XR, cuchilla de 7¼", motor brushless y tecnología POWERSTACK para mayor potencia y rendimiento.',
    imageUrl:
      "https://imgs.search.brave.com/NUef1By3W3vIqwt6nQWYSaBW7r-ap736J0mSxJXNno0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4x/MS5iaWdjb21tZXJj/ZS5jb20vcy1nZHkx/ZWh6L2ltYWdlcy9z/dGVuY2lsLzUwMHg2/NTkvcHJvZHVjdHMv/MzEzNTQwLzQ1MDc1/MS9EQ1A1ODBCXzFf/XzM1MTQxLjE2NzA2/MDYwNTEuanBnP2M9/Mg",
  },
  {
    id: 8,
    name: "Bosch 18V PROFACTOR Hammer Drill GSB18V‑1330C",
    description:
      'Taladro percutor Bosch 18 V PROFACTOR, diseñado para perforaciones grandes y atornillado fuerte. Mandril de ½", alta resistencia y compatibilidad con baterías 18 V (sistema AmpShare).',
    imageUrl:
      "https://imgs.search.brave.com/JIyKMy1Ui2-_e9nWzchz7IZc2c5wr08m0RxouD3raD4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFyd3ZpbWdyc0wu/anBn",
  },
  {
    id: 9,
    name: 'DeWalt 20V MAX XR 7‑1/4" Brushless Circular Saw DCS570B',
    description:
      'Sierra circular inalámbrica DeWalt 20 V MAX XR, cuchilla de 7¼", motor brushless y tecnología POWERSTACK para mayor potencia y rendimiento.',
    imageUrl:
      "https://imgs.search.brave.com/NUef1By3W3vIqwt6nQWYSaBW7r-ap736J0mSxJXNno0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4x/MS5iaWdjb21tZXJj/ZS5jb20vcy1nZHkx/ZWh6L2ltYWdlcy9z/dGVuY2lsLzUwMHg2/NTkvcHJvZHVjdHMv/MzEzNTQwLzQ1MDc1/MS9EQ1A1ODBCXzFf/XzM1MTQxLjE2NzA2/MDYwNTEuanBnP2M9/Mg",
  },
  {
    id: 10,
    name: 'DeWalt 20V MAX 6‑1/2" Cordless Circular Saw DCS391B',
    description:
      'Sierra circular DeWalt 20 V MAX, cuchilla 6½", motor de 5150 RPM, zapata de magnesio, capacidad de bisel hasta 50°, compacta y ligera.',
    imageUrl:
      "https://imgs.search.brave.com/10QC1fc7g8nF6kaEI5ijIkK37omPIneRCK1YqxEApJE/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nL2c0RUFB/T1N3REFwbk5kdUUv/cy1sMjI1LmpwZw",
  },
];
