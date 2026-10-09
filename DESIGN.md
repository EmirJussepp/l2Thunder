---
name: L2Thunder
description: Servidor de Lineage II Interlude repensado, dicho como un códice inscripto en oro sobre piedra de noche, con una tormenta eléctrica de fondo.
colors:
  background: "#08090f"
  surface: "#0d1021"
  surface-2: "#141b36"
  border-soft: "#1e2540"
  foreground: "#dde4ff"
  muted: "#7484b8"
  gold: "#f0c040"
  accent-2: "#c89a28"
  accent: "#6cc8ff"
  danger: "#ff4d6d"
typography:
  display:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 900
    lineHeight: 1.11
    letterSpacing: "0.18em"
  headline:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: "normal"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: "0.18em"
  caption:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: "normal"
  button:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  coordinate:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  none: "0px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "56px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.background}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "12px 28px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.gold}"
    rounded: "{rounded.none}"
    padding: "12px 28px"
  button-ghost-hover:
    textColor: "{colors.foreground}"
  tab:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
    height: "44px"
  tab-active:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.background}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    rounded: "{rounded.none}"
    padding: "24px"
  stat-cell:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.gold}"
    typography: "{typography.title}"
    padding: "24px 16px"
  callout-info:
    backgroundColor: "rgba(108, 200, 255, 0.06)"
    textColor: "{colors.accent}"
    rounded: "{rounded.none}"
    padding: "20px"
  callout-warn:
    backgroundColor: "rgba(255, 77, 109, 0.06)"
    textColor: "{colors.danger}"
    rounded: "{rounded.none}"
    padding: "20px"
  callout-custom:
    backgroundColor: "rgba(240, 192, 64, 0.06)"
    textColor: "{colors.gold}"
    rounded: "{rounded.none}"
    padding: "20px"
---

# Design System: L2Thunder

## Overview

**Creative North Star: "El Códice de la Tormenta"**

L2Thunder se lee como un códice grabado en oro sobre piedra de noche, con una tormenta eléctrica detrás. Todo lo que informa es una tablilla plana de esquinas rectas (reglas, tablas, sets de armadura, guías); todo lo que llama a actuar o a leer primero es oro; y lo único que se mueve por gusto son brasas que suben y un destello ocasional en el escudo. No hay una sola sombra de elevación en el contenido: la jerarquía sale del color, del contraste y de la tipografía grabada (Cinzel), no de apilar capas.

La referencia es el propio juego (ventanas planas, marcos finos, iconos pequeños en recuadros) y la épica de Lineage II, sin kitsch: nada de pergaminos falsos, runas decorativas ni texturas de piedra. El sitio es denso en datos (rates, skills, bonus por set, coordenadas) y tiene que poder consultarse con una mano en el celular mientras se juega en la PC, así que la legibilidad, el contraste y el tamaño táctil mandan sobre el adorno.

El tono de voz es parte del sistema: español rioplatense con voseo ("jugás", "elegí", "tocá"), directo, con números concretos y sin hipérbole de marketing. Lo que es propio de L2Thunder frente al Interlude original se marca siempre, con el mismo aviso dorado.

**Key Characteristics:**
- Oscuro por completo: un solo tema, sin modo claro.
- Esquinas rectas en todo (0 px de radio) y bordes de 1 px; los paneles son planos.
- Oro para lo accionable y lo que se lee primero; bronce solo para rótulos chicos; cian solo para información.
- Títulos grabados en Cinzel en mayúsculas espaciadas; lectura en Geist.
- Movimiento escaso y ambiental (brasas, destello), siempre con alternativa para "reducir movimiento".
- Áreas táctiles de 44 px y columnas de lectura de unos 75 caracteres.

## Colors

Una paleta de noche azulada con una sola voz cálida: el oro del relámpago. Los neutros son todos fríos y tienen el mismo matiz (azul índigo) para que las superficies se lean como capas de la misma piedra.

### Primary
- **Oro del Trueno** (`colors.gold`, #f0c040): acción principal y dato que se lee primero: botón "Jugar la beta", pestaña activa, números de los stats, nombres de ítems, cuenta regresiva y el aviso "Propio de L2Thunder". Sobre el fondo da 11.7:1.

### Secondary
- **Bronce Bruñido** (`colors.accent-2`, #c89a28): exclusivamente para los rótulos de 12 px sobre los títulos ("Guía de sistema · Todos los niveles", "Características"). Es el oro con la mitad de la fuerza, para que anuncie sin competir con el título (7.7:1).

### Tertiary
- **Cian de Tormenta** (`colors.accent`, #6cc8ff): información y relámpago frío. Avisos informativos, el borde de las tarjetas-enlace al pasar el mouse (`hover:border-accent/50`), los números de los tres pasos de "Cómo empezar" y el segundo halo del brillo del título. Nunca para texto corrido ni para botones.
- **Rosa de Alarma** (`colors.danger`, #ff4d6d): solo avisos de cuidado ("No hay vuelta atrás", "La versión mágica dura una hora") y errores.

### Neutral
- **Vacío de Noche** (`colors.background`, #08090f): fondo de página y color del texto sobre botones dorados.
- **Piedra de Medianoche** (`colors.surface`, #0d1021): celdas de stats, bandas alternas y base de las tarjetas.
- **Panel Lapislázuli** (`colors.surface-2`, #141b36): inicio del degradé de las tarjetas, fondo de recuadros de iconos y filas de encabezado de tablas.
- **Regla del Crepúsculo** (`colors.border-soft`, #1e2540): todos los bordes de 1 px y los separadores de sección.
- **Tinta de Luna** (`colors.foreground`, #dde4ff): texto principal y títulos de tarjeta (15.7:1).
- **Pizarra Crepuscular** (`colors.muted`, #7484b8): el texto de lectura. Es el color del cuerpo en casi todo el sitio, no un "gris de apoyo" (5.4:1 sobre el fondo, 4.6:1 sobre el inicio de una tarjeta).

### Named Rules
**The One Gold Rule.** El oro marca lo que hay que tocar o leer primero. Nunca es texto corrido ni decoración, y no se usa para dos cosas distintas en la misma pantalla. Si todo es dorado, nada lo es.

**The Full Muted Floor Rule.** El texto secundario usa `text-muted` al 100 %. Nunca `text-muted/60` ni `/70`: bajan a 2.5–3.2:1 y fallan WCAG AA (4.5:1). Para crear jerarquía se baja el tamaño o se usa cursiva, no la opacidad.

**The Cyan Is Information Rule.** El cian y el rosa solo existen con significado (información, cuidado). Un acento "porque queda lindo" va en oro o en nada.

## Typography

**Display Font:** Cinzel (con Georgia, serif de respaldo), pesos 500, 700 y 900
**Body Font:** Geist (con system-ui, sans-serif de respaldo)
**Label/Mono Font:** Cinzel para rótulos; Geist Mono solo para coordenadas y códigos; Inter 700 exclusivamente en los botones de alto impacto

**Character:** Cinzel pone la voz de inscripción (capitales romanas, aire de lápida) y Geist hace de lectura neutra y técnica. Cinzel nunca lleva párrafos: son títulos, rótulos y números.

### Hierarchy
- **Display** (Cinzel 900, 2.25rem y 3rem desde 640 px, interlineado 1.11, espaciado 0.18em de la clase `.brand`; Cinzel dibuja las minúsculas como versalitas): el `h1` de cada página. En el hero llega a 3.75rem con el brillo `text-glow`.
- **Headline** (Cinzel 700, 1.875rem y 2.25rem desde 640 px, interlineado 1.2): títulos de sección de la home y de /donar.
- **Title** (Cinzel 700, 1.5rem y 1.875rem desde 640 px en pasos de guía; 1.125–1.25rem en tarjetas y nombres de ítem): subtítulos, nombres de set, número grande de los stats (Cinzel 900).
- **Body** (Geist 400, 0.875–1rem, interlineado 1.625, color `muted`): párrafos. Columna máxima de 38rem (unos 75 caracteres).
- **Label** (Cinzel 700, 0.75rem, espaciado 0.18em, mayúsculas): rótulos sobre títulos, encabezados de tabla y pestañas. El piso para cualquier texto funcional es 11 px; las frases van a 12 px o más.

### Named Rules
**The Inscription Rule.** Cinzel graba, Geist explica. Un párrafo en Cinzel o un título en Geist rompen el sistema.

**The Reading Column Rule.** Los párrafos y listas se limitan a 38rem; las tablas, los avisos y las capturas ocupan todo el contenedor de 56rem. Una línea de más de ~80 caracteres es un error.

## Layout

Un contenedor central de lectura (56rem, `max-w-4xl`) para guías, información de juego y la home; uno ancho (72rem, `max-w-6xl`) para los tres pasos de "Cómo empezar", /donar y el pie. Gutter lateral fijo de 24 px (`px-6`; el header usa 40 px desde 640 px). Las páginas internas arrancan con `pt-36` (144 px) para librar el header fijo de ~104 px y cierran con `pb-24`.

El ritmo vertical es de pocos pasos: 96 px entre secciones de la home (`py-24`), 48–64 px alrededor de cada afiche, 56 px entre bloques de una guía (`mt-14 border-t border-border-soft pt-14`), 24 px de separación en grillas de tarjetas (`gap-6`, 1 / 2 / 3 columnas en móvil / `sm` / `lg`). Dentro de bloques: 12–16 px entre párrafos (`space-y-3`/`space-y-4`).

Primero celular. Las tablas pasan de grilla a pila de "etiqueta + valor" por debajo de 640 px; las tarjetas de 5 columnas pasan a 2. Nada puede generar scroll horizontal a 390 px. Los breakpoints son los de Tailwind (640, 768, 1024, 1280). Todo elemento interactivo mide 44 px de alto como mínimo.

Hay tres capas fijas que no son contenido y no se tocan sin revisar el conjunto: el header (z-120), los badges de voto abajo a la izquierda (`bottom-4 left-4`, unos 78 px de alto) y la barra de Discord en celular, que va justo encima (`bottom-28`).

## Elevation & Depth

Plano y tonal. La profundidad sale de capas de color: fondo (#08090f) → superficie → tarjeta, que es un degradé vertical de `surface-2` a `surface` con un borde de 1 px. En reposo no hay ninguna sombra de caja en el contenido, y al pasar el mouse lo que cambia es el color del borde, no la altura.

Las únicas "luces" del sistema son decorativas y están cada una en su lugar: el brillo dorado y cian del título del hero, el halo del logo en la pantalla de carga, las brasas que suben, y el desenfoque del header al hacer scroll y del fondo del menú.

### Shadow Vocabulary
- **Brillo del título** (`text-shadow: 0 0 24px rgba(240,192,64,0.4), 0 0 48px rgba(108,200,255,0.2)`): solo el `h1` del hero.
- **Velo del menú** (`bg-black/70` con `backdrop-blur-sm`): detrás del panel lateral abierto. El panel suma `shadow-2xl`.
- **Header al scrollear** (`bg-background/85` con `backdrop-blur-md` y borde inferior): cuando la página baja del tope.

### Named Rules
**The Flat Tablet Rule.** Una tarjeta, una celda o un aviso nunca llevan sombra de caja. Si algo tiene que destacar, se le cambia el color del borde o el relleno, no la altura.

## Shapes

Esquinas rectas en todo el sitio (`rounded-none`, 0 px): tarjetas, botones, pestañas, tablas, iconos, imágenes y badges. Los bordes son de 1 px en `border-soft`; los botones principales tienen un borde de 2 px transparente que se enciende en dorado claro al pasar el mouse. La única excepción deliberada a "bordes parejos" es el aviso: un filete de 2 px a la izquierda más un tinte del 6 % del mismo color, que dice de qué tipo es. Los iconos de ítem van en recuadros cuadrados de 56 px con borde fino; los afiches y capturas, en un marco de tarjeta.

## Components

### Buttons
- **Shape:** cuadrado (0 px), `padding: 12px 28px` en el hero y 8px 16px en las tarjetas compactas.
- **Primary** (`.btn-impact`): relleno oro, texto `background`, Inter 700. Es plano a propósito, al estilo de los botones de Steam o Battle.net: sin sombra ni elevación.
- **Hover / Focus:** el borde transparente de 2 px pasa a #ffe28a en 150 ms y el relleno sube a `brightness(1.1)`. El foco es el del navegador; no se quita.
- **Ghost:** borde de 1 px dorado, texto dorado y Geist seminegrita; al pasar el mouse el borde se hunde a `border-soft` y el texto pasa a `foreground`.

### Tabs
Cinzel 700 en mayúsculas, 44 px de alto. Activa = relleno dorado con texto `background`; inactiva = borde `border-soft` y texto `muted`, con borde dorado al 60 % al pasar el mouse.

### Cards / Containers
- **Corner Style:** 0 px.
- **Background:** degradé vertical de `surface-2` a `surface` (`.card-surface`).
- **Shadow Strategy:** ninguna; ver Elevation & Depth.
- **Border:** 1 px `border-soft`. Si la tarjeta es un enlace, el borde pasa a cian al 50 % al pasar el mouse.
- **Internal Padding:** 20–24 px (`p-5`/`p-6`); 32–40 px en las tarjetas grandes (Fundador, vincular cuenta).

### Stat Grid
Bloque de 2 a 6 celdas pegadas por una rejilla de 1 px en `border-soft`. Cada celda: número en Cinzel 900 dorado (1.5–1.875rem), etiqueta en mayúsculas de 11 px y subetiqueta de 12 px, las dos en `muted`. Se usa para los datos clave al inicio de cada guía.

### Data Tables
Una sola pieza (`DataTable`) para toda tabla de texto: contenedor de tarjeta, fila de encabezado en `surface-2` al 60 % con rótulos de 12 px, celdas con 20 px de padding horizontal y 16 de vertical, la primera columna como encabezado de fila. Por debajo de 640 px cada fila es una pila de etiqueta + valor. Lleva roles ARIA de tabla porque no es un `<table>` real. Para datos con tres niveles por fila existe `SkillLevelTable`, y para comparar original contra L2Thunder, `ComparisonTable`.

### Callouts
Tres variantes con el mismo molde (filete izquierdo de 2 px, tinte del 6 %, título en `label`, cuerpo de 14 px en `muted`): **cuidado** en rosa, **información** en cian y **propio de L2Thunder** en oro. Esta última es la que marca lo que el servidor cambió respecto de Interlude, y se repite siempre con ese título.

### Guide Step
Número romano en un recuadro de 40–48 px con borde dorado al 60 % (Cinzel 900), título en Title, contenido a la derecha y un hilo vertical de 1 px que une los pasos. Los párrafos y listas del paso se limitan a 38rem.

### Accordions and Explorers
`ItemExplorer` combina pestañas, grupos plegables e ítems plegables con su icono de 56 px. El encabezado de cada fila es un botón con chevrón de 16 px que rota 180° en 300 ms; el panel anima el alto con `grid-template-rows` y queda `inert` cuando está cerrado. El nivel de los títulos es configurable para no saltar niveles. "Expandir todo" y "Contraer todo" miden 44 px de alto.

### Navigation
Header fijo con el escudo de 56 px a la izquierda y un botón de tres líneas finas de 1 px a la derecha (48 px). Al scrollear pasa a fondo semitransparente con desenfoque y un borde inferior. El menú es un panel sobre el lado derecho (ancho completo en celular, hasta 24rem) con los enlaces en Cinzel 900 de 1.5–1.875rem; el activo va dorado. Las redes (Facebook, Discord) van abajo con 44 px de alto.

### Posters and Screenshots
Los afiches de la home van a 896 px de ancho (3:2) en un marco de tarjeta, sin recompresión y sin ampliarse más de ~1.3× su tamaño real. Las capturas del juego en las guías usan `Screenshot`: marco de tarjeta y pie de 12 px. Todo texto que viva dentro de una imagen se repite en el `alt`.

### Crest (signature)
El escudo con el relámpago es el único elemento de marca. Aparece grande en el hero con un destello diagonal cada 4 s (`crest-shine`), a 56 px en el header y a 32 px en el pie. No se recolorea ni se redibuja.

## Do's and Don'ts

### Do:
- **Do** usar los tokens por nombre (`text-gold`, `bg-surface`, `border-border-soft`) y reutilizar `StatGrid`, `GuideStep`, `Callout`, `DataTable`, `Screenshot`, `LevelBands` e `ItemExplorer` antes de crear una pieza nueva.
- **Do** mantener esquinas rectas (`rounded-none`), bordes de 1 px y paneles planos.
- **Do** reservar el oro para la acción principal y el dato que se lee primero, y el bronce solo para rótulos de 12 px.
- **Do** limitar párrafos y listas a 38rem y dejar tablas, avisos e imágenes a todo el ancho del contenedor.
- **Do** dar 44 px de alto a cualquier botón o enlace de texto (`min-h-11`), incluso si el texto es de 12 px.
- **Do** marcar lo propio de L2Thunder con el aviso dorado "Propio de L2Thunder".
- **Do** escribir en voseo rioplatense, con números exactos y sin adjetivos de marketing.
- **Do** poner una alternativa a cada animación nueva con `prefers-reduced-motion`, y un `alt` que repita el texto de toda imagen que lo contenga.
- **Do** respetar la jerarquía de títulos: `h1` → `h2` → `h3`, sin saltos.

### Don't:
- **Don't** usar esquinas redondeadas, sombras de caja ni elevación en el contenido.
- **Don't** bajar la opacidad del texto secundario (`text-muted/60`, `/70`): falla el contraste.
- **Don't** poner texto funcional por debajo de 11 px ni frases por debajo de 12 px.
- **Don't** usar Cinzel en párrafos ni oro en texto corrido, y no sumar una quinta familia tipográfica.
- **Don't** hacer una tabla de `div`s a mano: usar `DataTable` o sus variantes, que ya traen los roles.
- **Don't** ampliar un afiche o una captura más de ~1.3× su tamaño original; si hace falta más grande, hay que pedir la imagen en mayor resolución.
- **Don't** agregar elementos fijos abajo en la pantalla sin revisar antes el stack de votos (`bottom-4`, ~78 px) y la barra de Discord (`bottom-28`).
- **Don't** abrir imágenes en otra pestaña ni en un visor sin botón de cerrar: en el celular no hay cómo volver.
