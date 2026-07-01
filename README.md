# Wanderlust Explorer

Aplicacion web de exploracion de experiencias de viaje construida con Next.js, React y TypeScript.

El proyecto permite:

- Buscar experiencias por titulo.
- Filtrar por categoria y destino usando query params en la URL.
- Ver detalle de cada experiencia.
- Marcar y desmarcar favoritos.
- Consultar una vista de perfil de usuario simulado.

## Objetivo

Construir un MVP multipagina con enfoque mobile-first para una startup travel-tech ficticia, priorizando:

- UI moderna y clara.
- Componentes reutilizables.
- Estructura escalable por responsabilidad.

## Stack

- Next.js 16.2.9
- React 19.2.4
- TypeScript 5
- Tailwind CSS 4
- lucide-react (iconografia)

## Vistas principales

- `/`: Home con hero y CTA hacia experiencias.
- `/experiences`: Explorador con buscador, filtros y grid de cards.
- `/experiences/[id]`: Detalle de experiencia con informacion ampliada y accion de favorito.
- `/favorites`: Lista de experiencias guardadas y estado vacio.
- `/profile`: Perfil estatico con metricas y secciones de cuenta/soporte.

## Funcionalidades clave

- Filtros en URL:
	- `search`
	- `category`
	- `destination`
- Filtrado combinado y reactivo sin recarga de pagina.
- Busqueda por regex case-insensitive (con escape seguro cuando aplica).
- Estado global de favoritos mediante provider con React context.
- Datos locales de experiencias (sin backend).

Ejemplo de URL con filtros:

```txt
/experiences?search=vela&category=Aventura&destination=Split%2C%20Croatia
```

## Estructura del proyecto

```txt
src/
	app/
		experiences/
		favorites/
		profile/
	components/
		experience/
		filters/
		layout/
		providers/
		ui/
	data/
	hooks/
	lib/
	types/
```

## Instalacion y ejecucion

1. Instalar dependencias:

```bash
npm install
```

2. Levantar entorno de desarrollo:

```bash
npm run dev
```

3. Abrir en navegador:

```txt
http://localhost:3000
```

## Scripts disponibles

- `npm run dev`: inicia servidor de desarrollo.
- `npm run build`: genera build de produccion.
- `npm run start`: sirve el build de produccion.
- `npm run lint`: ejecuta ESLint.

## Estado actual

- Favoritos en memoria (sin persistencia en localStorage o backend).
- Dataset local para prototipo.
- Flujo completo de exploracion y detalle implementado.

## Design References

- [Airbnb Experiences](https://www.airbnb.com/experiences) -> inspiracion general.
- [GetYourGuide](https://www.getyourguide.com/) -> cards.
- [TripAdvisor](https://www.tripadvisor.com/) -> presentacion de informacion.
