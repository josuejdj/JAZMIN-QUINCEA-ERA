# Invitación de quinceañera — Jazmin

Sitio web estático desarrollado con HTML5, CSS3 y JavaScript puro.

## Estructura

- `index.html`: contenido y estructura semántica.
- `css/styles.css`: diseño, colores, animaciones y adaptación responsive.
- `js/script.js`: cuenta regresiva, animaciones, música y confirmación por WhatsApp.
- `assets/images/`: carpeta para fotografías propias.
- `assets/music/`: carpeta para el archivo de música.

## Cómo ejecutar

1. Descomprime el proyecto.
2. Abre la carpeta en Visual Studio Code.
3. Ejecuta `index.html` con la extensión Live Server, o abre el archivo directamente en el navegador.
4. Se necesita conexión a Internet para cargar las fuentes de Google Fonts y las imágenes de muestra.

## Personalización obligatoria antes de publicar

1. En `js/script.js`, cambia `519XXXXXXXX` por el número de WhatsApp real, con código de país y sin `+`, espacios ni guiones.
2. En `index.html`, reemplaza “Por confirmar” y “Dirección próximamente” por el nombre y la dirección reales del local.
3. Sustituye las tres imágenes de muestra por fotografías de Jazmin. Puedes guardar las imágenes dentro de `assets/images/` y actualizar los atributos `src` en `index.html`.
4. Para activar la música, coloca un archivo MP3 llamado `musica.mp3` dentro de `assets/music/`. La música solo empieza cuando el visitante pulsa el botón.
5. Si cambia la hora, actualiza `data-date` en el elemento `#countdown`. El ejemplo está configurado para las 7:00 p. m. en Perú (UTC-05:00).

## Publicación

Puedes subir esta carpeta a un servicio de hosting estático. Antes de compartir el enlace, prueba la web desde un teléfono y confirma que la dirección, la fecha, el WhatsApp y las imágenes sean correctos.

## Nota

Las imágenes enlazadas actualmente son fotografías de muestra alojadas en Unsplash; requieren conexión a Internet y deben reemplazarse por las imágenes autorizadas para la invitación final.
