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
