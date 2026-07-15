/* ============================================================
   data.js — LadyGowi Fanart Archive
   ✏️ ESTE ARCHIVO ES GESTIONADO POR EL PANEL ADMIN
   No lo reemplaces por completo — solo el admin lo edita.
   Si necesitas cambiar algo manual, edita solo las líneas
   correspondientes usando github.dev
   ============================================================ */

/* ============================
   ⚙️ CONFIGURACIÓN GENERAL
   ============================ */
const TWITCH_CHANNEL = "ladygowi";   // nombre de usuario en Twitch
const BDAY_MONTH     = 7;            // mes del cumpleaños (7 = Julio)
const BDAY_DAY       = 9;            // día del cumpleaños
const CHIBI_EGG      = "✨ Shhh… sólo tú sabes esto: Eres mi persona favorita!! 🤫💜✨";

/* ============================
   🏷️ CATEGORÍAS DE FANARTS
   ============================ */
const CATEGORIES = ["fanart","emotes","memes"];

/* ============================
   📖 LORE
   ============================ */
const LORE = {
  quien: "LadyGowi es una vtuber de habla hispana, conocida por su personalidad tierna y sus cuernos de oveja. Su comunidad, los \"Gowitos\", la acompañan en cada stream con mucho cariño.",
  metas: [
    { ico:"🎯", txt:"Próximamente..." },
    { ico:"✨", txt:"Próximamente..." },
    { ico:"🐑", txt:"Próximamente..." },
  ]
};

/* ============================
   🎵 CANCIONES
   ============================ */
const CANCIONES = [
  { titulo:"LadyGowi — música 1", youtubeId:"QLHMhVonF-s" },
];

/* ============================
   🐑 SONIDOS
   tipo: "chibi" = suena al tocar la chibi (random)
         "campana" = suena al tocar el título/campana (random)
   peso: número — más alto = sale más seguido
   ============================ */
const SONIDOS = [
  { tipo:"campana", nombre:"Campanita1", archivo:"sonidos/1783110064354-campanita1.mp3", peso:1 },
  { tipo:"chibi", nombre:"Oveja seria", archivo:"sonidos/1783110049122-ovejita-seria.mp3", peso:1 },
  { tipo:"chibi", nombre:"Oveja chillona", archivo:"sonidos/1783110036092-ovejita-chillona.mp3", peso:1 },
  { tipo:"chibi", nombre:"Oveja chikita", archivo:"sonidos/1783110024397-ovejita-chikita.mp3", peso:1 },
];

/* ============================
   💬 FRASES DE LA CHIBI
   peso: número — más alto = sale más seguido
   ============================ */
const CHIBI_FRASES = [
  { texto:"¡Hola! 💜", peso:1 },
  { texto:"¡Gracias por venir a verme! 🌸", peso:1 },
  { texto:"¿Qué dice una cereza cuando se ve al espejo? ¿Seré esa? 🍒 ¡¡JAJA!!", peso:1 },
  { texto:"Shhh… no hagas ruido, mis corderitos duermen 🐑💤", peso:1 },
  { texto:"¡Espero verte en mi stream! 🎀", peso:1 },
  { texto:"🎈 wekito", peso:1 },
];

/* ============================
   🖼️ IMÁGENES / FANARTS
   ============================ */
const IMAGENES = [
      { src:"imagenes/1784079154623-af8dcd97-fb63-4071-89d6-73de46d27f01.webp", titulo:"Imagen de testeo 3", artista:"coso", categoria:"fanart", fecha:"2026-07-15", placeholder:"🎨", nota:"coso", destacado:true },
      { src:"imagenes/1784079132265-meme-gowi.webp", titulo:"imagen de testeo 2", artista:"coso", categoria:"fanart", fecha:"2026-07-15", placeholder:"🎨", nota:"coso", destacado:true },
      { src:"imagenes/1784079080862-proyecto-gowi-1.webp", titulo:"Imagen de testeo", artista:"coso", categoria:"fanart", fecha:"2026-07-15", placeholder:"🎨", nota:"coso", destacado:false },
];

/* ============================
   🎮 ICONOS DE OVEJA (calificaciones de juegos)
   ============================ */
const OVEJA_IMGS = [
  "imagenes/ovejas/1783109845458-oveja4.png",
  "imagenes/ovejas/1783109831228-oveja3.png",
  "imagenes/ovejas/1783109818446-oveja2.png",
  "imagenes/ovejas/1783109805290-oveja1.png",
];

/* ============================
   🎮 JUEGOS
   nota: 1-5 | rec: "si" / "no" / "tal"
   imagen: ruta de la portada (opcional)
   ============================ */
const JUEGOS = [
  { titulo:"Minecraft", nota:5, rec:"si", nota_texto:"Pulentosky", imagen:"imagenes/juegos/1784079476167-homepage-discover-our-games-mc-vanilla-keyart-864x864.jpg" },
  { titulo:"League of legends", nota:5, rec:"no", nota_texto:"Relación toxica de amor y odio", imagen:"imagenes/juegos/1784079378868-images-5-.jpg" },
  /* ejemplo — borra esta línea y agrega tus juegos:
  */
];
