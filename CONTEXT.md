# Contexto del Proyecto:

## 1. Descripción General

Wanderlust Explorer es una aplicación web interactiva construida con React y Next.js que permite explorar, buscar, filtrar y guardar experiencias de viaje alrededor del mundo.

El objetivo principal es crear un MVP multipágina para una startup travel-tech ficticia llamada Wanderlust Labs. Los usuarios pueden descubrir experiencias como tours gastronómicos, aventuras al aire libre, actividades culturales, retiros wellness y recorridos por la naturaleza.

El usuario final es una persona interesada en viajar, descubrir experiencias únicas y guardar sus favoritas para revisarlas más tarde.

La aplicación debe sentirse moderna, limpia y profesional, inspirada en interfaces reales como Airbnb, GetYourGuide y TripAdvisor, pero sin copiarlas directamente.

---

## 2. Stack Tecnológico

* **Frontend:** React + Next.js + TypeScript
* **Estilos:** Tailwind CSS
* **Estado/Herramientas:**

  * `useState` para manejar favoritos a nivel superior.
  * Query parameters de la URL para manejar búsqueda y filtros.
  * Dataset local en TypeScript con 100 experiencias.
  * Navegación con rutas de Next.js.
* **Diseño:** Mobile-first

  * Viewport objetivo inicial: 375px.
  * Luego adaptar a tablet y desktop con responsive design.

---

## 3. Mapa de Vistas / Páginas

### `/` — Home

Página inicial de presentación.

Debe incluir:

* Hero section atractiva.
* Mensaje principal relacionado con descubrir experiencias únicas.
* Breve descripción del producto.
* Botón CTA que navega a `/experiences`.
* Diseño limpio, visual y mobile-first.

Referencia visual principal: Airbnb.

---

### `/experiences` — Explorador de Experiencias

Página principal del MVP.

Debe incluir:

* Listado completo de experiencias en formato de cards.
* Barra de búsqueda.
* Filtro por categoría.
* Filtro por destino.
* Query parameters en la URL para reflejar filtros activos.

Ejemplo de URL esperada:

```txt
/experiences?search=vela&category=Adventure&destination=Split%2C%20Croatia
```

Comportamiento esperado:

* La búsqueda debe filtrar experiencias por coincidencia en el título.
* La búsqueda debe usar regex case-insensitive.
* Los filtros de categoría y destino deben funcionar de forma independiente.
* La búsqueda y los filtros deben combinarse entre sí.
* Si la página carga con query parameters, los inputs deben aparecer prerrellenos.
* No debe recargarse la página al buscar o filtrar.

Referencia visual principal: GetYourGuide.

---

### `/experiences/[id]` — Detalle de Experiencia

Página individual de una experiencia.

Debe incluir:

* Imagen principal.
* Título.
* Categoría.
* Destino.
* Descripción completa.
* Precio.
* Rating.
* Botón o icono para agregar/quitar de favoritos.
* Navegación clara para volver al explorador.

Referencia visual principal: Airbnb Experience Detail.

---

### `/favorites` — Favoritos

Página que muestra las experiencias marcadas como favoritas.

Debe incluir:

* Título de página.
* Lista de experiencias favoritas.
* Cards reutilizadas desde el explorador.
* Estado vacío si no hay favoritos guardados.
* Los favoritos se guardan en estado de componente, sin persistencia por ahora.

---

### `/profile` — Perfil

Página estática de usuario simulado.

Debe incluir:

* Avatar o iniciales del usuario.
* Nombre ficticio.
* Breve descripción del perfil.
* Resumen del número de favoritos guardados.
* Datos simulados como país, estilo de viaje favorito o cantidad de experiencias exploradas.

---

## 4. Guía de Estilos (Design Tokens Básicos)

### Colores principales

* **Primary:** `#FF385C`
  Inspirado en experiencias modernas de travel-tech. Usar para CTAs, elementos activos, corazones de favoritos y acentos importantes.

* **Secondary:** `#00A699`
  Usar para detalles positivos, badges secundarios o elementos relacionados con exploración.

* **Background:** `#F7F7F7`
  Fondo general suave para páginas y secciones.

* **Surface:** `#FFFFFF`
  Fondo de cards, formularios y contenedores principales.

* **Text:** `#222222`
  Texto principal.

* **Muted Text:** `#717171`
  Texto secundario, metadata, subtítulos y detalles.

* **Border:** `#DDDDDD`
  Bordes suaves para inputs, cards y separadores.

---

### Tipografía

* **Fuente principal:** Inter, system-ui, sans-serif.
* **Base:** `16px`
* **Small:** `14px`
* **Heading mobile:** `28px - 36px`
* **Heading desktop:** `40px - 56px`
* **Body:** `16px`
* **Card title:** `18px - 20px`

La tipografía debe ser clara, moderna y fácil de leer.

---

### Estilo visual general

La interfaz debe ser:

* Limpia.
* Mobile-first.
* Visualmente atractiva.
* Con cards protagonistas.
* Con buena jerarquía visual.
* Con espacios generosos.
* Con bordes redondeados.
* Con sombras suaves.
* Sin saturar la pantalla de información.

---

### Componentes esperados

Crear componentes reutilizables cuando tenga sentido:

* `Navbar`
* `Hero`
* `ExperienceCard`
* `SearchBar`
* `FilterSelect`
* `ExperienceGrid`
* `FavoriteButton`
* `EmptyState`
* `ProfileCard`

---

### Reglas importantes para agentes IA

* No usar librerías de componentes preconstruidas.
* No copiar directamente Airbnb, GetYourGuide ni TripAdvisor.
* Usarlas solo como inspiración visual.
* Mantener el diseño mobile-first desde 375px.
* Priorizar código simple, legible y mantenible.
* Usar TypeScript correctamente.
* Mantener el dataset en un archivo local separado.
* Los filtros deben vivir en la URL usando query parameters.
* Los favoritos deben manejarse con `useState` de nivel superior.
* Reutilizar componentes antes de duplicar código.
* Evitar lógica compleja innecesaria.
* Cuidar accesibilidad básica: labels, botones semánticos, textos alternativos e indicadores visuales claros.

---

## Especificación de Componentes

### Vista `/` — Home (Mobile 375px)

### HomePage
- **Descripción:** Contenedor raíz de la pantalla Home en mobile, orquesta header, chips de categoría, carruseles y navegación inferior.
- **Props:**
  - `recentItems` (object[], requerido): Colección para la sección Consultados recientemente.
  - `popularStays` (object[], requerido): Colección para la sección de alojamientos populares.
  - `activeTab` (string, requerido): Identificador de la tab activa del menú inferior.
  - `onTabChange` (function, requerido): Callback para cambiar la ruta/tab activa.
- **Layout/Estructura:** Parent principal. Distribución vertical con Flexbox (`flex-col`), separación visual por bloques (`gap` estimado 20-28px), fondo gris claro y contenido desplazable.
- **Estado (Si aplica):** No obligatorio si delega estado; opcional para manejar `isLoading` general de la vista.

### MobileTopSearchHeader
- **Descripción:** Bloque superior que contiene el buscador principal con estilo píldora.
- **Props:**
  - `placeholder` (string, opcional): Texto del input.
  - `value` (string, opcional): Valor actual de búsqueda.
  - `onChange` (function, opcional): Callback de cambio de texto.
  - `onSubmit` (function, opcional): Acción al ejecutar búsqueda.
  - `leadingIcon` (object, opcional): Ícono de búsqueda.
- **Layout/Estructura:** Child de `HomePage`. Fila centrada, ancho casi completo, padding lateral estimado 16-24px, borde redondeado alto.
- **Estado (Si aplica):** `isFocused` para variantes visuales del input.

### CategoryChipScroller
- **Descripción:** Lista horizontal de chips de categoría (Alojamientos, Experiencias, Servicios) con desplazamiento lateral.
- **Props:**
  - `items` (object[], requerido): Elementos con `id`, `label`, `icon`.
  - `activeCategory` (string, opcional): Categoría seleccionada.
  - `onSelect` (function, requerido): Callback de selección.
- **Layout/Estructura:** Child de `HomePage`. Contenedor horizontal con `overflow-x-auto`, chips con separación estimada 8-12px.
- **Estado (Si aplica):** Puede ser stateless; opcional `dragging` para mejorar UX en scroll táctil.

### SectionHeader
- **Descripción:** Encabezado reutilizable para secciones con título y acción circular a la derecha.
- **Props:**
  - `title` (string, requerido): Título de la sección.
  - `actionIcon` (object, opcional): Ícono de flecha.
  - `onActionClick` (function, opcional): Acción del botón lateral.
- **Layout/Estructura:** Child reutilizable dentro de cada bloque de contenido. Fila con `justify-between` y alineación central.
- **Estado (Si aplica):** No requiere estado local.

### HorizontalCardCarousel
- **Descripción:** Carrusel horizontal reutilizable para filas de cards de experiencias o alojamientos.
- **Props:**
  - `items` (object[], requerido): Data a renderizar.
  - `renderItem` (function, requerido): Render prop para cada card.
  - `snap` (boolean, opcional): Activa snap al desplazar.
  - `showControls` (boolean, opcional): Mostrar controles de navegación (si aplica).
- **Layout/Estructura:** Parent intermedio de cards. `display: flex` horizontal con `overflow-x-auto`, separación estimada 10-14px.
- **Estado (Si aplica):** `activeIndex` opcional para indicar card visible o prefetch de imágenes vecinas.

### RecentExperienceCard
- **Descripción:** Card compacta para la sección de consultados recientemente con imagen, corazón, título truncado y metadata (duración/rating).
- **Props:**
  - `id` (string, requerido): Identificador del item.
  - `title` (string, requerido): Título principal.
  - `imageUrl` (string, requerido): Imagen de portada.
  - `durationLabel` (string, opcional): Duración textual.
  - `rating` (number, opcional): Valoración.
  - `isFavorite` (boolean, requerido): Estado actual de favorito.
  - `onToggleFavorite` (function, requerido): Acción para marcar/desmarcar favorito.
  - `onClick` (function, opcional): Navegación a detalle.
- **Layout/Estructura:** Child de `HorizontalCardCarousel`. Estructura vertical; miniatura arriba y texto abajo; ancho fijo estimado 120-140px.
- **Estado (Si aplica):** No requiere estado local si recibe `isFavorite` por props.

### PopularStayCard
- **Descripción:** Card de alojamiento con etiqueta flotante, imagen amplia, botón de favorito y datos de precio/rating.
- **Props:**
  - `id` (string, requerido): Identificador del alojamiento.
  - `title` (string, requerido): Nombre del alojamiento.
  - `priceLabel` (string, requerido): Precio por estadía.
  - `rating` (number, opcional): Puntuación.
  - `imageUrl` (string, requerido): Imagen principal.
  - `badgeText` (string, opcional): Texto de recomendación.
  - `isFavorite` (boolean, requerido): Estado favorito.
  - `onToggleFavorite` (function, requerido): Toggle de favorito.
  - `onClick` (function, opcional): Navegación a detalle.
- **Layout/Estructura:** Child de `HorizontalCardCarousel`. Card más ancha que `RecentExperienceCard`, overlay para badge y acción de favorito.
- **Estado (Si aplica):** Sin estado local obligatorio.

### BottomTabBar
- **Descripción:** Navegación inferior fija con cinco tabs (Explorar, Favoritos, Viajes, Mensajes, Perfil).
- **Props:**
  - `items` (object[], requerido): Tabs con `id`, `label`, `icon`, `route`.
  - `activeTab` (string, requerido): Tab activa.
  - `onTabChange` (function, requerido): Callback de navegación.
- **Layout/Estructura:** Child de `HomePage`, fija en el borde inferior (`position: sticky` o `fixed` según implementación). Distribución en fila con ancho uniforme por ítem.
- **Estado (Si aplica):** No requiere estado local si depende del router.

---

### Vista `/` — Home (Desktop de referencia visual)

### DesktopTopNavBar
- **Descripción:** Barra superior con logo, tabs de modo (Todo, Alojamientos, Experiencias, Servicios), acciones de cuenta y menú.
- **Props:**
  - `logo` (object, requerido): Configuración del logo.
  - `navItems` (object[], requerido): Opciones principales del navbar.
  - `activeItem` (string, requerido): Ítem activo.
  - `onItemSelect` (function, requerido): Acción de selección.
  - `onHostClick` (function, opcional): Acción de Hazte anfitrión.
  - `onMenuClick` (function, opcional): Acción del menú de usuario.
- **Layout/Estructura:** Parent de la cabecera desktop; fila con áreas izquierda, centro y derecha, alineación vertical centrada.
- **Estado (Si aplica):** `activeItem`, `isUserMenuOpen`.

### DesktopSearchPanel
- **Descripción:** Buscador segmentado por campos (Destino, Fechas, Viajeros) con botón de búsqueda destacado.
- **Props:**
  - `destination` (string, opcional): Valor destino.
  - `datesLabel` (string, opcional): Texto de fechas.
  - `guestsLabel` (string, opcional): Texto de viajeros.
  - `onDestinationClick` (function, opcional): Acción campo destino.
  - `onDatesClick` (function, opcional): Acción campo fechas.
  - `onGuestsClick` (function, opcional): Acción campo viajeros.
  - `onSearch` (function, requerido): Ejecuta búsqueda.
- **Layout/Estructura:** Child del bloque superior desktop. Contenedor tipo cápsula, distribución horizontal en 3 segmentos + CTA circular.
- **Estado (Si aplica):** `activeSegment`, `isExpanded` (si implementa modo avanzado).

### DesktopCarouselControls
- **Descripción:** Controles laterales para navegar cada carrusel en desktop.
- **Props:**
  - `canGoPrev` (boolean, requerido): Habilita botón anterior.
  - `canGoNext` (boolean, requerido): Habilita botón siguiente.
  - `onPrev` (function, requerido): Acción anterior.
  - `onNext` (function, requerido): Acción siguiente.
- **Layout/Estructura:** Child de secciones con carrusel, posición alineada a la derecha del `SectionHeader`.
- **Estado (Si aplica):** No requiere estado local si recibe flags del parent.

---

### Vista `/experiences` — Explorador de Experiencias

#### Desktop

### ExperiencesPageDesktop
- **Descripción:** Contenedor raíz de la vista en desktop; compone header, barra de filtros, resumen de resultados y área principal con mapa + grilla.
- **Props:**
  - `experiences` (object[], requerido): Lista de experiencias filtradas para renderizar.
  - `searchValue` (string, opcional): Valor actual del buscador.
  - `activeFilters` (object, opcional): Estado serializado de filtros activos.
  - `onSearchChange` (function, requerido): Callback para actualizar búsqueda.
  - `onOpenFilter` (function, opcional): Abre panel/modal de filtros avanzados.
- **Layout/Estructura:** Parent principal. Flujo vertical con bloques apilados; en contenido principal usa Grid de 2 columnas (mapa fijo a la izquierda + listado a la derecha), con separación visual estimada de 20-24px.
- **Estado (Si aplica):** `isFilterPanelOpen`, `isMapExpanded`.

### ExperiencesTopBarDesktop
- **Descripción:** Barra superior con logo, buscador principal y acciones de navegación (Explorar, Favoritos, Carrito, idioma, Perfil).
- **Props:**
  - `logo` (object, requerido): Configuración visual y enlace del logo.
  - `searchValue` (string, opcional): Texto del input.
  - `onSearchChange` (function, requerido): Actualiza input de búsqueda.
  - `onSearchSubmit` (function, requerido): Ejecuta búsqueda.
  - `navItems` (object[], requerido): Acciones rápidas de la derecha.
  - `cartCount` (number, opcional): Cantidad de items en carrito para badge.
- **Layout/Estructura:** Child de `ExperiencesPageDesktop`. Flex horizontal con tres zonas: izquierda (marca), centro (search pill), derecha (acciones). Alineación central y padding horizontal generoso.
- **Estado (Si aplica):** `isSearchFocused`.

### SearchBarPill
- **Descripción:** Input de búsqueda estilo píldora con ícono inicial y botón de acción Buscar.
- **Props:**
  - `value` (string, requerido): Valor actual.
  - `placeholder` (string, opcional): Texto guía.
  - `onChange` (function, requerido): Callback de cambio.
  - `onSubmit` (function, requerido): Callback de envío.
  - `buttonLabel` (string, opcional): Etiqueta del botón.
- **Layout/Estructura:** Child reutilizable dentro de top bar desktop (y potencialmente tablet). Flex horizontal con input flexible + botón fijo a la derecha.
- **Estado (Si aplica):** `isFocused`.

### ActionNavDesktop
- **Descripción:** Grupo de accesos directos con ícono + etiqueta y badge de notificación en Perfil.
- **Props:**
  - `items` (object[], requerido): Elementos de navegación con `id`, `label`, `icon`, `href`.
  - `activeItem` (string, opcional): Ítem activo.
  - `notificationCount` (number, opcional): Contador para badge.
  - `onItemClick` (function, requerido): Callback al seleccionar acción.
- **Layout/Estructura:** Child de `ExperiencesTopBarDesktop`. Flex horizontal con distribución uniforme y separación estimada de 20-28px.
- **Estado (Si aplica):** `activeIndex` (si no depende de router).

### FilterChipRail
- **Descripción:** Carril horizontal de chips de filtros (Filtros, Dates, Paseos en barco, Museos, etc.) con desplazamiento lateral.
- **Props:**
  - `chips` (object[], requerido): Configuración de chips visibles.
  - `activeChipIds` (object[], opcional): Identificadores activos.
  - `onChipClick` (function, requerido): Callback de selección.
  - `showNextControl` (boolean, opcional): Muestra control de avance al final.
- **Layout/Estructura:** Child de `ExperiencesPageDesktop`. Contenedor horizontal con `overflow-x-auto`, separación entre chips de 8-12px.
- **Estado (Si aplica):** `scrollPosition`, `canScrollNext`.

### ResultCountBar
- **Descripción:** Línea de contexto con cantidad de resultados y destino activo.
- **Props:**
  - `totalResults` (number, requerido): Número total encontrado.
  - `destinationLabel` (string, requerido): Destino buscado.
  - `onInfoClick` (function, opcional): Acción del ícono informativo.
- **Layout/Estructura:** Child de `ExperiencesPageDesktop`. Fila simple debajo de chips, alineada a la izquierda.
- **Estado (Si aplica):** No requiere estado local.

### ExperiencesContentSplit
- **Descripción:** Sección principal en desktop que divide mapa lateral y grilla de cards.
- **Props:**
  - `map` (object, requerido): Datos/config para bloque de mapa.
  - `experiences` (object[], requerido): Colección a renderizar en cards.
  - `onCardSelect` (function, opcional): Acción al seleccionar card.
- **Layout/Estructura:** Parent intermedio. Grid de 2 columnas: columna izquierda de ancho fijo (mapa) y columna derecha fluida (cards en 2-3 columnas según breakpoint).
- **Estado (Si aplica):** `hoveredCardId` (para sincronización mapa/lista).

### MapPreviewPanel
- **Descripción:** Tarjeta de mapa lateral con mini mapa y CTA Mostrar en el mapa.
- **Props:**
  - `mapImageUrl` (string, opcional): Imagen estática del mapa.
  - `ctaLabel` (string, opcional): Texto del botón.
  - `onOpenMap` (function, requerido): Acción para abrir vista de mapa completa.
- **Layout/Estructura:** Child de `ExperiencesContentSplit` (columna izquierda). Card vertical con borde redondeado y botón flotante/centrado sobre el mapa.
- **Estado (Si aplica):** `isHovered` (opcional para elevar CTA).

### ExperienceCard
- **Descripción:** Tarjeta principal de experiencia con imagen, badge, favorito, título, metadata y precio.
- **Props:**
  - `id` (string, requerido): Identificador único.
  - `title` (string, requerido): Nombre de la experiencia.
  - `imageUrl` (string, requerido): Imagen de portada.
  - `badge` (string, opcional): Etiqueta superior (ej. Nuestra elección).
  - `durationLabel` (string, opcional): Duración textual.
  - `languageLabel` (string, opcional): Idioma disponible.
  - `rating` (number, opcional): Valoración.
  - `reviewsCount` (number, opcional): Número de reseñas.
  - `originalPrice` (number, opcional): Precio anterior.
  - `finalPrice` (number, requerido): Precio final.
  - `currency` (string, requerido): Moneda visible.
  - `isFavorite` (boolean, requerido): Estado de favorito.
  - `onToggleFavorite` (function, requerido): Toggle favorito.
  - `onClick` (function, opcional): Navegación a detalle.
- **Layout/Estructura:** Child de la grilla de resultados. Estructura vertical: media top, contenido textual, bloque inferior de rating + precio. En desktop ocupa 1 celda de grid.
- **Estado (Si aplica):** `imageLoaded` para placeholders progresivos.

### ExperienceCardGrid
- **Descripción:** Contenedor de cards de experiencias en desktop.
- **Props:**
  - `items` (object[], requerido): Lista de experiencias.
  - `onToggleFavorite` (function, requerido): Callback para favoritos.
  - `onCardClick` (function, opcional): Acción al abrir detalle.
- **Layout/Estructura:** Child de `ExperiencesContentSplit` (columna derecha). Grid responsivo, 2 columnas en desktop compacto y 3 en desktop ancho; gap estimado de 16-24px.
- **Estado (Si aplica):** `visibleCount` (si hay paginación incremental).

#### Mobile (375px)

### ExperiencesPageMobile
- **Descripción:** Contenedor raíz mobile de la vista de búsqueda; organiza header de iconos, acciones rápidas, resumen, mapa compacto y listado vertical.
- **Props:**
  - `experiences` (object[], requerido): Lista filtrada.
  - `activeFilters` (object, opcional): Estado de filtros activos.
  - `onFilterOpen` (function, requerido): Abre panel de filtros.
  - `onMapOpen` (function, requerido): Abre mapa completo.
- **Layout/Estructura:** Parent principal mobile. Flujo vertical con padding lateral aproximado 16px y separación entre bloques de 12-16px.
- **Estado (Si aplica):** `isFilterSheetOpen`, `isStickyActions`.

### ExperiencesTopBarMobile
- **Descripción:** Barra superior mobile con logo a la izquierda y grupo de iconos de navegación a la derecha.
- **Props:**
  - `logo` (object, requerido): Configuración de marca.
  - `actions` (object[], requerido): Acciones visibles (search, favoritos, carrito, idioma, perfil).
  - `cartCount` (number, opcional): Badge de carrito/perfil.
  - `onActionClick` (function, requerido): Callback de interacción.
- **Layout/Estructura:** Child de `ExperiencesPageMobile`. Flex horizontal con alineación central y separación corta entre iconos.
- **Estado (Si aplica):** No requiere estado local obligatorio.

### MobileQuickActionsRail
- **Descripción:** Banda horizontal con CTA Mostrar en el mapa y accesos de filtro en formato chip compacto.
- **Props:**
  - `mapButtonLabel` (string, opcional): Texto del botón principal.
  - `chips` (object[], requerido): Filtros de acceso rápido.
  - `onMapClick` (function, requerido): Acción del mapa.
  - `onChipClick` (function, requerido): Acción sobre chip.
  - `onMoreClick` (function, opcional): Acción del control de avance.
- **Layout/Estructura:** Child de `ExperiencesPageMobile`. Contenedor horizontal desplazable; el botón de mapa ocupa prioridad visual y puede convivir con chips secundarios.
- **Estado (Si aplica):** `scrollX`, `showShadowEdges`.

### MobileResultCount
- **Descripción:** Texto de contexto con cantidad de resultados y destino consultado.
- **Props:**
  - `totalResults` (number, requerido): Total visible.
  - `destinationLabel` (string, requerido): Destino activo.
  - `onInfoClick` (function, opcional): Acción del ícono info.
- **Layout/Estructura:** Child de `ExperiencesPageMobile`. Bloque textual simple entre acciones y contenido.
- **Estado (Si aplica):** No requiere estado local.

### MobileMapPreviewCard
- **Descripción:** Tarjeta de mapa compacta con CTA central Mostrar en el mapa.
- **Props:**
  - `mapImageUrl` (string, opcional): Imagen base del mapa.
  - `ctaLabel` (string, opcional): Texto de llamada a la acción.
  - `onOpenMap` (function, requerido): Abre mapa expandido.
- **Layout/Estructura:** Child de `ExperiencesPageMobile`. Card full-width con radio alto y botón superpuesto en el centro.
- **Estado (Si aplica):** `isPressed` (feedback táctil del CTA).

### ExperienceCardMobile
- **Descripción:** Variante mobile de card de experiencia con imagen amplia, badge superior, favorito flotante y bloque de texto/price.
- **Props:**
  - `id` (string, requerido): Identificador.
  - `title` (string, requerido): Título.
  - `imageUrl` (string, requerido): Imagen principal.
  - `badge` (string, opcional): Etiqueta promocional.
  - `durationLabel` (string, opcional): Duración.
  - `languageLabel` (string, opcional): Idioma.
  - `rating` (number, opcional): Puntuación.
  - `reviewsCount` (number, opcional): Cantidad de reseñas.
  - `originalPrice` (number, opcional): Precio tachado.
  - `finalPrice` (number, requerido): Precio vigente.
  - `currency` (string, requerido): Moneda.
  - `isFavorite` (boolean, requerido): Estado favorito.
  - `onToggleFavorite` (function, requerido): Toggle favorito.
  - `onClick` (function, opcional): Abrir detalle.
- **Layout/Estructura:** Child de listado vertical mobile. Card de ancho completo, media dominante y texto con jerarquía alta para título.
- **Estado (Si aplica):** `imageLoaded`.

### ExperienceListMobile
- **Descripción:** Lista vertical de cards mobile para resultados de búsqueda.
- **Props:**
  - `items` (object[], requerido): Colección de experiencias.
  - `onCardClick` (function, opcional): Navegación a detalle.
  - `onToggleFavorite` (function, requerido): Toggle favorito.
- **Layout/Estructura:** Child de `ExperiencesPageMobile`. Contenedor en columna con separación entre cards de 12-16px.
- **Estado (Si aplica):** `isFetchingMore` (si se agrega carga incremental).

---

### Vista `/experiences/[id]` — Detalle de Experiencia

#### Mobile (375px)

### ExperienceDetailPageMobile
- **Descripción:** Contenedor raíz de la vista de detalle; orquesta header, galería hero, tabs, secciones de contenido, CTA sticky inferior e itinerario.
- **Props:**
  - `experience` (object, requerido): Entidad completa de la experiencia (texto, precio, rating, media, itinerario).
  - `activeTab` (string, requerido): Tab activa (`description`, `itinerary`, `operator`).
  - `onTabChange` (function, requerido): Callback para cambiar pestaña de contenido.
  - `onBack` (function, requerido): Navegación de regreso.
  - `onToggleFavorite` (function, requerido): Acción de favorito.
  - `onShare` (function, opcional): Acción de compartir/acción secundaria del header.
  - `onCheckAvailability` (function, requerido): CTA principal de disponibilidad.
- **Layout/Estructura:** Parent principal. Flujo vertical mobile-first en columna (`flex-col`), con zonas fijas: header superior y barra de compra sticky inferior; contenido scrolleable entre ambos.
- **Estado (Si aplica):** `activeTab`, `isStickyBarVisible`, `selectedDate`, `selectedTravelers`, `expandedAccordionIds`.

### DetailTopBarMobile
- **Descripción:** Barra superior compacta con botón volver e iconos de acción (favorito/edición o compartir).
- **Props:**
  - `showBack` (boolean, opcional): Muestra/oculta botón de retroceso.
  - `isFavorite` (boolean, requerido): Estado actual del favorito.
  - `onBack` (function, requerido): Acción del botón volver.
  - `onFavoriteClick` (function, requerido): Toggle favorito.
  - `onSecondaryAction` (function, opcional): Acción secundaria (editar/compartir).
- **Layout/Estructura:** Child directo de `ExperienceDetailPageMobile`; fila con `justify-between`, padding lateral estimado 16px y alto compacto.
- **Estado (Si aplica):** No obligatorio; opcional `isScrolled` para aplicar fondo/sombra al hacer scroll.

### PriceGuaranteeBadge
- **Descripción:** Badge textual de confianza (ej. precio más bajo garantizado).
- **Props:**
  - `label` (string, requerido): Texto del badge.
  - `variant` (string, opcional): Estilo visual (`outline`, `subtle`).
- **Layout/Estructura:** Child de `HeroSummaryBlock`, alineado al inicio antes del título.
- **Estado (Si aplica):** No requiere estado local.

### HeroSummaryBlock
- **Descripción:** Bloque de resumen inicial con título largo, rating, reviews, enlace a opiniones y recomendación.
- **Props:**
  - `title` (string, requerido): Título de la experiencia.
  - `rating` (number, requerido): Puntuación general.
  - `reviewCount` (number, requerido): Cantidad de reseñas.
  - `recommendationText` (string, opcional): Mensaje de confianza social.
  - `showReviewLink` (boolean, opcional): Control del enlace a opiniones.
  - `onReviewClick` (function, opcional): Acción al pulsar opiniones.
- **Layout/Estructura:** Child de `ExperienceDetailPageMobile`; composición vertical, jerarquía tipográfica alta, spacing entre bloques de 8-12px.
- **Estado (Si aplica):** Sin estado local.

### RatingRow
- **Descripción:** Fila reutilizable para mostrar rating numérico + dots/estrellas + enlace de opiniones.
- **Props:**
  - `rating` (number, requerido): Valor promedio.
  - `maxRating` (number, opcional): Escala máxima.
  - `reviewCount` (number, opcional): Número de reseñas.
  - `onReviewsClick` (function, opcional): Acción del enlace.
- **Layout/Estructura:** Child de `HeroSummaryBlock` y de `ReviewsSectionHeader`; fila horizontal con alineación centrada.
- **Estado (Si aplica):** No requiere estado local.

### HeroMediaGallery
- **Descripción:** Galería principal de imágenes de la experiencia con contador/etiqueta multimedia y CTA circular superpuesto.
- **Props:**
  - `images` (object[], requerido): Lista de media con `src`, `alt`, `type`.
  - `initialIndex` (number, opcional): Índice inicial mostrado.
  - `mediaCountLabel` (string, opcional): Texto del contador (ej. 2.116).
  - `onOpenGallery` (function, opcional): Acción para abrir galería completa.
  - `onNext` (function, opcional): Navegación entre imágenes.
- **Layout/Estructura:** Child de `ExperienceDetailPageMobile`; bloque full-width con imagen dominante y overlays absolutos.
- **Estado (Si aplica):** `activeImageIndex`, `isGalleryOpen`.

### DetailTabsNav
- **Descripción:** Navegación por pestañas del detalle (Descripción general, Itinerario, Operador).
- **Props:**
  - `tabs` (object[], requerido): Configuración de tabs con `id` y `label`.
  - `activeTab` (string, requerido): Identificador activo.
  - `onTabChange` (function, requerido): Cambio de tab.
  - `isSticky` (boolean, opcional): Activa comportamiento sticky al hacer scroll.
- **Layout/Estructura:** Child de `ExperienceDetailPageMobile`; fila horizontal con tabs de ancho automático, borde inferior y subrayado activo.
- **Estado (Si aplica):** `activeTab`; opcional `isStuck` para variante sticky.

### DescriptionTabPanel
- **Descripción:** Panel de contenido para la pestaña de descripción general.
- **Props:**
  - `aboutText` (string, requerido): Texto descriptivo principal.
  - `price` (number, requerido): Precio base por adulto.
  - `currency` (string, requerido): Moneda.
  - `bookingInfo` (object, opcional): Mensajes de cancelación y reserva flexible.
  - `highlights` (object[], opcional): Lista de highlights.
- **Layout/Estructura:** Child condicional de `ExperienceDetailPageMobile` cuando `activeTab=description`; columna con secciones y separadores.
- **Estado (Si aplica):** `isAboutExpanded` para controlar "Leer más".

### AboutSection
- **Descripción:** Sección "Acerca de" con texto truncable y enlace "Leer más".
- **Props:**
  - `title` (string, requerido): Título de sección.
  - `content` (string, requerido): Texto descriptivo.
  - `maxLines` (number, opcional): Líneas visibles antes de truncar.
  - `onReadMore` (function, opcional): Acción al expandir.
- **Layout/Estructura:** Child de `DescriptionTabPanel`; bloque vertical simple.
- **Estado (Si aplica):** `expanded`.

### PriceSummaryInline
- **Descripción:** Resumen de precio dentro del contenido principal (antes de formulario de fecha/viajeros).
- **Props:**
  - `price` (number, requerido): Precio principal.
  - `currency` (string, requerido): Moneda.
  - `unitLabel` (string, opcional): Sufijo (ej. por adulto).
  - `disclaimer` (string, opcional): Texto legal/variación.
- **Layout/Estructura:** Child de `DescriptionTabPanel`; bloque tipográfico con énfasis en precio.
- **Estado (Si aplica):** No requiere estado local.

### BookingFormCard
- **Descripción:** Tarjeta de interacción para seleccionar fecha y viajeros, más CTA de disponibilidad.
- **Props:**
  - `selectedDateLabel` (string, requerido): Fecha seleccionada visible.
  - `travelersLabel` (string, requerido): Resumen de viajeros.
  - `onDateClick` (function, requerido): Abre selector de fecha.
  - `onTravelersClick` (function, requerido): Abre selector de viajeros.
  - `ctaLabel` (string, requerido): Texto del botón principal.
  - `onSubmit` (function, requerido): Acción de consultar disponibilidad.
- **Layout/Estructura:** Child de `DescriptionTabPanel`; contenedor vertical con inputs tipo píldora apilados + botón full-width.
- **Estado (Si aplica):** `isDatePickerOpen`, `isTravelersPickerOpen`.

### ReservationNoticeBar
- **Descripción:** Mensaje contextual destacado en fondo verde claro (anticipación promedio de reserva).
- **Props:**
  - `icon` (object, opcional): Ícono de aviso.
  - `text` (string, requerido): Mensaje principal.
- **Layout/Estructura:** Child de `DescriptionTabPanel` y/o `SidebarBookingCard` en desktop; bloque de ancho completo con borde/redondeado suave.
- **Estado (Si aplica):** No requiere estado local.

### GuaranteeList
- **Descripción:** Lista de garantías de compra (cancelación gratuita, reservar ahora y pagar después).
- **Props:**
  - `items` (object[], requerido): Ítems con `id`, `title`, `description`, `icon`.
  - `onItemClick` (function, opcional): Acción en enlaces internos.
- **Layout/Estructura:** Child de `DescriptionTabPanel` o `SidebarBookingCard`; lista vertical con icono + texto.
- **Estado (Si aplica):** Sin estado local.

### ReviewsSection
- **Descripción:** Bloque de prueba social con encabezado de rating y carrusel horizontal de reseñas.
- **Props:**
  - `title` (string, requerido): Encabezado de sección.
  - `rating` (number, requerido): Promedio.
  - `reviewCount` (number, requerido): Total reseñas.
  - `reviews` (object[], requerido): Colección de reviews.
- **Layout/Estructura:** Child de `DescriptionTabPanel`; estructura vertical con `ReviewsCarousel` debajo del header.
- **Estado (Si aplica):** `activeReviewIndex`.

### ReviewCard
- **Descripción:** Card individual de reseña con autor, fecha y texto.
- **Props:**
  - `author` (string, requerido): Nombre del revisor.
  - `dateLabel` (string, requerido): Fecha resumida.
  - `rating` (number, requerido): Puntuación de la reseña.
  - `comment` (string, requerido): Comentario del usuario.
- **Layout/Estructura:** Child de `ReviewsCarousel`; card de ancho fijo en carrusel horizontal.
- **Estado (Si aplica):** No requiere estado local.

### ExperienceMetaList
- **Descripción:** Lista de atributos clave (edades, duración, idioma, entrada móvil, horario).
- **Props:**
  - `items` (object[], requerido): Metadatos con `icon`, `label`, `value`.
- **Layout/Estructura:** Child de `DescriptionTabPanel`; lista vertical con separación corta y alineación icono-texto.
- **Estado (Si aplica):** No requiere estado local.

### HighlightsLinkList
- **Descripción:** Bloque de "Puntos destacados" con enlaces rápidos (ej. Ver itinerario).
- **Props:**
  - `title` (string, requerido): Título del bloque.
  - `links` (object[], requerido): Enlaces con `label` y `href`.
  - `onLinkClick` (function, opcional): Intercepción para navegación interna.
- **Layout/Estructura:** Child de `DescriptionTabPanel`; lista de enlaces de bajo volumen.
- **Estado (Si aplica):** No requiere estado local.

### DetailAccordionGroup
- **Descripción:** Grupo de acordeones informativos (Qué está incluido, Qué esperar, Encuentro y recogida, etc.).
- **Props:**
  - `items` (object[], requerido): Paneles con `id`, `title`, `content`.
  - `allowMultiple` (boolean, opcional): Permite múltiples paneles abiertos.
  - `expandedIds` (object[], opcional): IDs abiertos controlados externamente.
  - `onToggle` (function, requerido): Cambio de estado por panel.
- **Layout/Estructura:** Child de `DescriptionTabPanel`; bloques en columna con divisores y botón de expansión a la derecha.
- **Estado (Si aplica):** `expandedIds` o `expandedId`.

### StickyBookingBarMobile
- **Descripción:** Barra fija inferior con precio resumido y CTA principal "Consultar disponibilidad".
- **Props:**
  - `price` (number, requerido): Precio mostrado.
  - `currency` (string, requerido): Moneda.
  - `unitLabel` (string, opcional): Unidad (ej. por adulto).
  - `ctaLabel` (string, requerido): Texto del botón.
  - `onCtaClick` (function, requerido): Acción principal.
- **Layout/Estructura:** Child de `ExperienceDetailPageMobile`, fijada al borde inferior (`position: fixed`), distribución en fila 2 columnas (precio + botón).
- **Estado (Si aplica):** `isVisible`, `isCollapsed` (ocultar/mostrar según scroll).

### ItineraryTabPanel
- **Descripción:** Panel de itinerario con mapa estático superior y timeline de paradas.
- **Props:**
  - `map` (object, requerido): Configuración de mapa/preview.
  - `stops` (object[], requerido): Lista ordenada de paradas del tour.
  - `onStopClick` (function, opcional): Acción al tocar una parada.
  - `onOpenMap` (function, opcional): Abrir mapa expandido.
- **Layout/Estructura:** Child condicional de `ExperienceDetailPageMobile` cuando `activeTab=itinerary`; columna con mapa y luego timeline vertical.
- **Estado (Si aplica):** `selectedStopId`, `expandedStopIds`.

### ItineraryMapCard
- **Descripción:** Tarjeta de mapa en la pestaña itinerario con viewport de zona y marcador contextual.
- **Props:**
  - `imageUrl` (string, opcional): Imagen estática/fallback.
  - `locationLabel` (string, requerido): Ciudad o área (ej. El Cairo).
  - `onOpenMap` (function, opcional): Abre mapa interactivo.
- **Layout/Estructura:** Child de `ItineraryTabPanel`; bloque rectangular con bordes redondeados.
- **Estado (Si aplica):** `isLoadingMap` (si integra mapa real).

### ItineraryTimeline
- **Descripción:** Línea temporal vertical de etapas del tour (punto de partida, paradas numeradas, regreso).
- **Props:**
  - `items` (object[], requerido): Etapas con `id`, `order`, `title`, `duration`, `details`, `type`.
  - `onItemClick` (function, opcional): Acción al abrir detalle/fotos.
- **Layout/Estructura:** Child de `ItineraryTabPanel`; layout vertical con columna izquierda para marcadores y línea punteada, y contenido textual a la derecha.
- **Estado (Si aplica):** `expandedItemId` (si hay expansión por parada).

### TimelineStopItem
- **Descripción:** Ítem de parada dentro del timeline, con número, título, metadatos y enlace de detalle.
- **Props:**
  - `index` (number, requerido): Posición en el recorrido.
  - `title` (string, requerido): Nombre del punto.
  - `durationLabel` (string, opcional): Duración/parada.
  - `notes` (string, opcional): Información extra (entrada incluida/no incluida).
  - `onDetailsClick` (function, opcional): Acción de ver detalles y fotos.
- **Layout/Estructura:** Child de `ItineraryTimeline`; fila compuesta (marcador + bloque de texto).
- **Estado (Si aplica):** No requiere estado local.

#### Desktop (referencia parcial observada)

### ExperienceDetailPageDesktop
- **Descripción:** Variante desktop del detalle con layout en dos columnas: contenido principal a la izquierda y tarjeta de reserva sticky a la derecha.
- **Props:**
  - `experience` (object, requerido): Datos completos de la experiencia.
  - `activeTab` (string, requerido): Tab activa del contenido.
  - `onTabChange` (function, requerido): Cambio de pestaña.
  - `onCheckAvailability` (function, requerido): CTA principal.
- **Layout/Estructura:** Parent desktop con Grid de 2 columnas (aprox. 65/35). Columna derecha sticky para compra, columna izquierda para contenido largo.
- **Estado (Si aplica):** `activeTab`, `expandedAccordionIds`.

### SidebarBookingCard
- **Descripción:** Tarjeta lateral sticky con precio, CTA, garantías de cancelación y ayuda de contacto.
- **Props:**
  - `price` (number, requerido): Precio principal.
  - `currency` (string, requerido): Moneda.
  - `ctaLabel` (string, requerido): Texto del botón principal.
  - `guarantees` (object[], opcional): Beneficios de reserva.
  - `support` (object, opcional): Información de contacto.
  - `onCheckAvailability` (function, requerido): Acción principal.
- **Layout/Estructura:** Child de `ExperienceDetailPageDesktop` en columna derecha; card sticky con bloques internos apilados y separadores.
- **Estado (Si aplica):** No requiere estado local.

### InlineBookingSelectorBar
- **Descripción:** Barra de selección integrada en desktop para fecha, viajeros, idioma y CTA final.
- **Props:**
  - `dateLabel` (string, requerido): Fecha seleccionada.
  - `travelersCount` (number, requerido): Cantidad de viajeros.
  - `languageLabel` (string, opcional): Idioma de guía.
  - `onDateClick` (function, requerido): Abrir selector de fecha.
  - `onTravelersClick` (function, requerido): Abrir selector de viajeros.
  - `onLanguageClick` (function, opcional): Abrir selector de idioma.
  - `onSubmit` (function, requerido): Consultar disponibilidad.
- **Layout/Estructura:** Child de `ExperienceDetailPageDesktop`; bloque horizontal full-width cercano al final del contenido principal.
- **Estado (Si aplica):** `isDatePickerOpen`, `isTravelersOpen`, `isLanguageOpen`.

---

### Vista `/favorites` — Favoritos

No hay evidencia visual directa en las capturas adjuntas para especificar componentes visibles de esta vista.

---

### Vista `/profile` — Perfil

No hay evidencia visual directa en las capturas adjuntas para especificar componentes visibles de esta vista.
