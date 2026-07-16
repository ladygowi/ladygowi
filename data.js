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
  quien: "LadyGowi es una vtuber de habla hispana, conocida por su personalidad tierna y sus cuernos de oveja. Su comunidad, los \"Corderitos\", la acompañan en cada stream con mucho cariño.",
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
  { tipo:"chibi", nombre:"Ovejita seria", archivo:"sonidos/1784079808918-ovejita-seria.mp3", peso:1 },
  { tipo:"chibi", nombre:"Ovejita chillona", archivo:"sonidos/1784079778408-ovejita-chillona.mp3", peso:1 },
  { tipo:"chibi", nombre:"Ovejita chikita", archivo:"sonidos/1784079749060-ovejita-chikita.mp3", peso:1 },
  { tipo:"campana", nombre:"Campanita", archivo:"sonidos/1784079723458-campanita1.mp3", peso:1 },
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
   REGLAS DE LA COMUNIDAD
   ============================ */
const REGLAS = [
  { titulo:"Sin insultos ni toxicidad.", texto:"La secta debe ser un lugar agradable donde pertenecer. Trátenla con amor 💜", sub:"" },
  { titulo:"Sin contenido dañino.", texto:"No hagas posts promoviendo violencia, fraudes, gore o contenido +18 sin consentimiento de la Gow o Mods.", sub:"" },
  { titulo:"Sin spam ni publicidad.", texto:"No publiques stream/discord/página u otros links que te beneficien de alguna forma.", sub:"" },
  { titulo:"No Spoilear.", texto:"Si LadyGowi está jugando o viendo algo, guarda los spoilers para ti. 🤐", sub:"" },
  { titulo:"Sin coaching no solicitado.", texto:"Evita dar consejos no pedidos sobre cómo jugar, hablar o comportarse.", sub:"" },
  { titulo:"Sin comentarios románticos o sexuales.", texto:"Ni en el muro general ni por privado a la streamer.", sub:"⚠️ Se considerará acoso y será sancionado." },
  { titulo:"Problemas personales, en privado.", texto:"No traigan conflictos personales al servidor.", sub:"" },
  { titulo:"Respeto en el chat de voz.", texto:"No entren a gritar ni a interrumpir continuamente a propósito. 🎙️", sub:"" },
  { titulo:"Sin comentarios negativos.", texto:"No hagan comentarios innecesarios o negativos hacia otras comunidades, juegos o personas.", sub:"" },
  { titulo:"Sin abuso de comandos ni menciones.", texto:"Úsenlos con moderación y con propósito.", sub:"" },
  { titulo:"No entrar al chat de voz en estado de ebriedad.", texto:"", sub:"🍹 JUGOSOS — quédense en casa y duerman" },
  { titulo:"PROHIBIDO HABLAR DE HUEVITO REY* 🐣", texto:"", sub:"" },
  { titulo:"Sin parafilias ni contenido que promueva el daño.", texto:"(Zxxfilia, Pxdxfilia, Nxcrxfilia, etc.)", sub:"⚠️ Tampoco se permite promover el suicidio." },
  { titulo:"No transmitir cuando la Gow esté en directo en el canal.", texto:"Respeta su espacio y momento. 📡", sub:"" },
  { titulo:"NO a la AUTOINVITACIÓN EN STREAM.", texto:"", sub:"Siempre espera la invitación — nunca te autoinvites." },
];
/* ============================
   🎮 ICONOS DE OVEJA (calificaciones de juegos)
   ============================ */
const OVEJA_IMGS = [
  "imagenes/ovejas/1784079655877-oveja4.png",
  "imagenes/ovejas/1784079641263-oveja3.png",
  "imagenes/ovejas/1784079627273-oveja2.png",
  "imagenes/ovejas/1784079616567-oveja1.png",
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
