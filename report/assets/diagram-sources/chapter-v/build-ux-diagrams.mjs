import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const colors = {
  paper: '#f3efdf', white: '#fffefa', ink: '#202a23', forest: '#183326',
  green: '#244a37', muted: '#68736b', line: '#aab2a8', border: '#dedbd0',
  gold: '#d7ad38', paleGold: '#f8f0d7', paleGreen: '#e9eee6',
  paleRed: '#f9eeea', red: '#a64a40', paleBlue: '#edf1f2',
};

const escapeXml = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

function text(x, y, value, size = 18, fill = colors.ink, weight = 400, anchor = 'start') {
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="Arial, sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}">${escapeXml(value)}</text>`;
}

function lines(x, y, values, size = 16, fill = colors.muted, weight = 400, gap = 23, anchor = 'start') {
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="Arial, sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}">${values.map((value, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : gap}">${escapeXml(value)}</tspan>`).join('')}</text>`;
}

function base(title, subtitle, width, height, body) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(title)}</title><desc id="desc">${escapeXml(subtitle)}</desc>
  <defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="${colors.green}"/></marker><marker id="arrow-muted" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="${colors.muted}"/></marker></defs>
  <rect width="${width}" height="${height}" fill="${colors.paper}"/>
  ${body}
</svg>`;
}

function wireCard({ x, title: screenTitle, kind, label }) {
  const y = 220;
  const w = 330;
  const h = 322;
  let ui = '';
  const mx = x + 88;
  const mw = 220;
  const bar = (x0, y0, width, color = '#d8dbd5', height = 9) => `<rect x="${x0}" y="${y0}" width="${width}" height="${height}" rx="4" fill="${color}"/>`;
  const tile = (x0, y0, width, height, title = '') => `<rect x="${x0}" y="${y0}" width="${width}" height="${height}" rx="7" fill="#fbfaf6" stroke="${colors.border}"/>${title ? text(x0 + 10, y0 + 19, title, 10, colors.muted, 600) : ''}`;
  const row = (y0, title, state = 'Pendiente') => `${bar(mx + 9, y0, 92, '#c7ccc4', 8)}${bar(mx + 9, y0 + 14, 135, '#e1e2dc', 6)}<rect x="${mx + 160}" y="${y0 + 3}" width="48" height="17" rx="8" fill="${state === 'Atendida' ? colors.paleGreen : colors.paleGold}"/>${text(mx + 184, y0 + 15, state, 8, state === 'Atendida' ? colors.green : '#80641e', 600, 'middle')}`;

  if (kind === 'dashboard') {
    ui += tile(mx, 326, 62, 42, 'Animales') + tile(mx + 72, 326, 62, 42, 'Alertas') + tile(mx + 144, 326, 62, 42, 'Lotes');
    ui += tile(mx, 381, mw, 106, 'Resumen del hato') + row(414, 'Temperatura alta') + row(456, 'Fuera de zona');
  } else if (kind === 'alerts') {
    ui += tile(mx, 326, mw, 31, 'Filtros: tipo · estado · fecha') + tile(mx, 368, mw, 110, 'Alertas del hato') + row(400, 'Temperatura fuera de rango') + row(444, 'Actividad reducida');
  } else if (kind === 'response') {
    ui += text(mx, 333, 'Animal · fecha · señal', 11, colors.muted, 600);
    ui += tile(mx, 344, mw, 32, 'Detalle de la alerta') + text(mx + 8, 395, 'Hallazgo y acción tomada', 10, colors.muted, 600);
    ui += `<rect x="${mx}" y="405" width="${mw}" height="44" rx="5" fill="white" stroke="${colors.border}"/>`;
    ui += `<rect x="${mx}" y="461" width="94" height="24" rx="5" fill="${colors.gold}"/>${text(mx + 47, 477, 'Guardar', 10, colors.forest, 700, 'middle')}`;
  } else if (kind === 'done') {
    ui += `<circle cx="${mx + 110}" cy="355" r="24" fill="${colors.paleGreen}" stroke="#cddbc9"/>${text(mx + 110, 361, '✓', 22, colors.green, 700, 'middle')}`;
    ui += text(mx + 110, 397, 'Alerta atendida', 14, colors.forest, 700, 'middle') + tile(mx, 414, mw, 50, 'Hallazgo guardado · hora de respuesta');
  } else if (kind === 'animals') {
    ui += tile(mx, 326, mw, 31, 'Buscar por arete o nombre') + tile(mx, 368, mw, 110, 'Inventario de animales') + row(400, 'Arete · lote · estado') + row(444, 'Arete · lote · estado');
  } else if (kind === 'planning') {
    ui += tile(mx, 326, mw, 42, 'Campañas · seguimientos') + tile(mx, 380, mw, 100, 'Calendario del hato') + row(410, 'Campaña sanitaria') + row(452, 'Próximo recordatorio');
  } else if (kind === 'campaign') {
    ui += text(mx, 329, 'Nueva campaña sanitaria', 11, colors.muted, 700);
    ui += tile(mx, 341, mw, 27, 'Tipo · fecha') + tile(mx, 377, mw, 27, 'Lote · animales') + tile(mx, 413, mw, 30, 'Anticipación del aviso');
    ui += `<rect x="${mx}" y="457" width="110" height="24" rx="5" fill="${colors.gold}"/>${text(mx + 55, 473, 'Guardar campaña', 9, colors.forest, 700, 'middle')}`;
  } else if (kind === 'campaign-result') {
    ui += tile(mx, 326, mw, 54, 'Campaña · Programada') + tile(mx, 391, mw, 52, 'Lote · fecha · avance') + tile(mx, 454, mw, 32, 'Recordatorio y pendientes');
  } else if (kind === 'reports') {
    ui += tile(mx, 326, mw, 31, 'Periodo · lote') + tile(mx, 368, 63, 44, 'Animales') + tile(mx + 75, 368, 63, 44, 'Alertas') + tile(mx + 150, 368, 70, 44, 'Excluidos');
    ui += tile(mx, 426, mw, 55, 'Indicadores por periodo');
  } else if (kind === 'report-result') {
    ui += tile(mx, 326, mw, 32, 'Periodo: rango seleccionado') + tile(mx, 369, mw, 50, 'Indicadores · datos excluidos') + tile(mx, 432, mw, 37, 'CSV · impresión');
  } else if (kind === 'access-request') {
    ui += tile(mx, 326, mw, 45, 'Asesoría · unidad productiva') + tile(mx, 382, mw, 44, 'Motivo de solicitud') + `<rect x="${mx}" y="443" width="118" height="25" rx="5" fill="${colors.gold}"/>${text(mx + 59, 460, 'Solicitar acceso', 9, colors.forest, 700, 'middle')}`;
  } else if (kind === 'access-admin') {
    ui += tile(mx, 326, mw, 44, 'Solicitud veterinaria') + row(385, 'Profesional · motivo', 'Pendiente');
    ui += `<rect x="${mx}" y="435" width="82" height="24" rx="5" fill="${colors.paleGreen}"/>${text(mx + 41, 451, 'Aprobar', 9, colors.green, 700, 'middle')}<rect x="${mx + 94}" y="435" width="82" height="24" rx="5" fill="${colors.paleRed}"/>${text(mx + 135, 451, 'Rechazar', 9, colors.red, 700, 'middle')}`;
  } else if (kind === 'clinical') {
    ui += tile(mx, 326, mw, 42, 'Animal · lote · autorización') + tile(mx, 379, mw, 97, 'Lecturas · eventos · historial') + row(411, 'Intervención previa') + row(451, 'Periodo de retiro');
  } else if (kind === 'intervention') {
    ui += tile(mx, 326, mw, 28, 'Animal · tipo · fecha') + tile(mx, 363, mw, 28, 'Producto · dosis') + tile(mx, 400, mw, 38, 'Observación clínica') + `<rect x="${mx}" y="451" width="120" height="25" rx="5" fill="${colors.gold}"/>${text(mx + 60, 468, 'Guardar registro', 9, colors.forest, 700, 'middle')}`;
  }

  return `<g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${colors.white}" stroke="${colors.border}" stroke-width="2"/>
    ${text(x + 16, y + 30, label, 11, '#97751f', 700)}
    ${text(x + 16, y + 58, screenTitle, 20, colors.forest, 700)}
    <rect x="${x + 12}" y="${y + 72}" width="306" height="238" rx="8" fill="white" stroke="${colors.border}"/>
    <rect x="${x + 12}" y="${y + 72}" width="306" height="25" rx="8" fill="#efeee8"/>
    <circle cx="${x + 27}" cy="${y + 84}" r="3" fill="#c8c7bf"/><circle cx="${x + 39}" cy="${y + 84}" r="3" fill="#c8c7bf"/><circle cx="${x + 51}" cy="${y + 84}" r="3" fill="#c8c7bf"/>
    <rect x="${x + 13}" y="${y + 97}" width="62" height="212" fill="#f0efe9"/>
    <rect x="${x + 22}" y="${y + 111}" width="34" height="10" rx="4" fill="#d8d5c8"/>
    <rect x="${x + 21}" y="${y + 139}" width="44" height="8" rx="4" fill="${colors.paleGreen}"/><rect x="${x + 21}" y="${y + 158}" width="38" height="7" rx="3" fill="#d9d9d2"/><rect x="${x + 21}" y="${y + 177}" width="40" height="7" rx="3" fill="#d9d9d2"/>
    ${ui}
  </g>`;
}

function wireflowSvg(flow) {
  const xs = [55, 445, 835, 1225];
  const cards = flow.screens.map((screen, index) => wireCard({ ...screen, x: xs[index] })).join('\n');
  const arrows = flow.screens.slice(0, -1).map((screen, index) => {
    const x1 = xs[index] + 332;
    const x2 = xs[index + 1] - 4;
    return `<path d="M ${x1} 385 H ${x2}" fill="none" stroke="${colors.green}" stroke-width="3" marker-end="url(#arrow)"/>${text((x1 + x2) / 2, 365, flow.actions[index], 12, colors.green, 600, 'middle')}`;
  }).join('\n');
  const branchXs = [85, 835];
  const branches = flow.branches.map((branch, index) => {
    const x = branchXs[index];
    const sourceX = xs[branch.from] + 165;
    const cardCenter = x + 330;
    const connector = `<path d="M ${sourceX} 542 V 575 H ${cardCenter} V 612" fill="none" stroke="${colors.muted}" stroke-width="2.5" marker-end="url(#arrow-muted)"/>${text((sourceX + cardCenter) / 2, 567, branch.label, 12, colors.muted, 700, 'middle')}`;
    const screenX = xs[branch.from];
    const screenCenter = screenX + 165;
    const exitLeft = screenCenter < x + 330;
    const routeX = exitLeft
      ? (screenX + 330 <= x ? x - 45 : Math.min(x - 15, screenX - 15))
      : (screenX >= x + 660 ? x + 705 : Math.max(x + 705, screenX + 345));
    const targetX = routeX < screenX ? screenX : screenX + 330;
    const returnY = 450 + index * 50;
    const loop = branch.loop ? `<path d="M ${cardCenter} 790 V 835 H ${routeX} V ${returnY} H ${targetX}" fill="none" stroke="${colors.muted}" stroke-width="2" stroke-dasharray="7 7" marker-end="url(#arrow-muted)"/>` : '';
    return `${connector}${loop}<rect x="${x}" y="612" width="660" height="178" rx="12" fill="${branch.tone === 'error' ? colors.paleRed : colors.paleGold}" stroke="${branch.tone === 'error' ? '#e8d0c7' : '#e6d9ad'}" stroke-width="2"/>${text(x + 24, 646, branch.title, 18, branch.tone === 'error' ? colors.red : '#80641e', 700)}${lines(x + 24, 679, branch.lines, 15, colors.ink, 400, 23)}`;
  }).join('\n');
  const body = `<g transform="translate(0 -150)">${cards}${arrows}${branches}</g>`;
  return base(flow.title, `${flow.persona} · ${flow.stories}. Secuencia de pantallas con rutas alternativas conectadas.`, 1600, 740, body);
}

function flowNode(node) {
  const { x, y, w, h, type, title, detail = [] } = node;
  if (type === 'decision') {
    const points = `${x + w / 2},${y} ${x + w},${y + h / 2} ${x + w / 2},${y + h} ${x},${y + h / 2}`;
    return `<polygon points="${points}" fill="${colors.paleGold}" stroke="#c8a33d" stroke-width="2.5"/>${lines(x + w / 2, y + h / 2 - (detail.length ? 10 : -4), [title, ...detail], 15, colors.ink, 700, 21, 'middle')}`;
  }
  if (type === 'start' || type === 'end' || type === 'end-error') {
    const fill = type === 'end' ? colors.paleGreen : type === 'end-error' ? colors.paleRed : colors.white;
    const stroke = type === 'end' ? '#9cb49a' : type === 'end-error' ? '#e8d0c7' : colors.line;
    const ink = type === 'end-error' ? colors.red : colors.forest;
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${fill}" stroke="${stroke}" stroke-width="2.5"/>${text(x + w / 2, y + h / 2 - (detail.length ? 5 : -5), title, 16, ink, 700, 'middle')}${detail.length ? lines(x + w / 2, y + h / 2 + 18, detail, 12, colors.muted, 400, 17, 'middle') : ''}`;
  }
  const fill = type === 'system' ? colors.paleBlue : colors.white;
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="11" fill="${fill}" stroke="${colors.border}" stroke-width="2.5"/>${text(x + w / 2, y + 34, title, 16, colors.forest, 700, 'middle')}${detail.length ? lines(x + w / 2, y + 60, detail, 12.5, colors.muted, 400, 18, 'middle') : ''}`;
}

function edge(path, label = '', x = 0, y = 0, dashed = false) {
  return `<path d="${path}" fill="none" stroke="${colors.green}" stroke-width="3"${dashed ? ' stroke-dasharray="8 7"' : ''} marker-end="url(#arrow)"/>${label ? text(x, y, label, 13, colors.green, 700, 'middle') : ''}`;
}

function noteBox(x, y, w, h, title, detail, tone = 'error') {
  const fill = tone === 'success' ? colors.paleGreen : tone === 'warning' ? colors.paleGold : colors.paleRed;
  const stroke = tone === 'success' ? '#c9dac8' : tone === 'warning' ? '#e6d9ad' : '#e8d0c7';
  const titleColor = tone === 'success' ? colors.green : tone === 'warning' ? '#80641e' : colors.red;
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${fill}" stroke="${stroke}" stroke-width="2"/>${text(x + 15, y + 27, title, 14, titleColor, 700)}${lines(x + 15, y + 52, detail, 12, colors.ink, 400, 18)}`;
}

function userFlowSvg(flow) {
  const body = `<g transform="translate(0 -130)">${flow.lanes ?? ''}${flow.nodes.map(flowNode).join('\n')}${flow.edges.map((item) => edge(item.path, item.label, item.x, item.y, item.dashed)).join('\n')}${flow.notes.map((note) => noteBox(note.x, note.y, note.w, note.h, note.title, note.detail, note.tone)).join('\n')}</g>`;
  return base(flow.title, `${flow.persona} · ${flow.stories}. Flujo de usuario con decisiones, salidas y retornos explícitos.`, 1600, 630, body);
}

const wireflows = [
  {
    file: 'wireflow-alert-response.svg', title: 'Wireflow · atender una alerta', persona: 'Administrador ganadero · César Flores', stories: 'US-13 · US-16 · US-19',
    actions: ['Abrir alertas', 'Revisar detalle', 'Registrar respuesta'],
    screens: [
      { label: '01 · RESUMEN', title: 'Mi hato', kind: 'dashboard' },
      { label: '02 · LISTADO', title: 'Alertas', kind: 'alerts' },
      { label: '03 · FORMULARIO', title: 'Atender alerta', kind: 'response' },
      { label: '04 · CONFIRMACIÓN', title: 'Respuesta guardada', kind: 'done' },
    ],
    branches: [
      { from: 1, label: 'Sin resultados', title: 'No hay alertas para los filtros actuales', lines: ['Mostrar el estado vacío y conservar los filtros.', 'Limpiar filtros o seleccionar otro hato para volver a consultar.'], tone: 'warning', loop: true },
      { from: 2, label: 'Validación', title: 'La respuesta necesita hallazgo y acción', lines: ['Indicar el problema junto al campo y conservar el texto.', 'Corregir la nota y volver a guardar.'], tone: 'error', loop: true },
    ],
  },
  {
    file: 'wireflow-health-campaign.svg', title: 'Wireflow · programar una campaña sanitaria', persona: 'Administrador ganadero · César Flores', stories: 'US-07 · US-26 · US-27',
    actions: ['Abrir planificación', 'Crear campaña', 'Guardar y revisar'],
    screens: [
      { label: '01 · INVENTARIO', title: 'Animales', kind: 'animals' },
      { label: '02 · CALENDARIO', title: 'Planificación sanitaria', kind: 'planning' },
      { label: '03 · FORMULARIO', title: 'Nueva campaña', kind: 'campaign' },
      { label: '04 · RESULTADO', title: 'Campaña programada', kind: 'campaign-result' },
    ],
    branches: [
      { from: 2, label: 'Datos incompletos', title: 'Señalar campos por corregir', lines: ['Conservar lote, tipo y fecha ya ingresados.', 'No crear la campaña hasta que los datos sean válidos.'], tone: 'error', loop: true },
      { from: 2, label: 'Retiro vigente', title: 'Advertir animales afectados', lines: ['Mostrar producto, periodo y animales involucrados.', 'La advertencia acompaña la revisión antes de guardar.'], tone: 'warning', loop: false },
    ],
  },
  {
    file: 'wireflow-herd-report.svg', title: 'Wireflow · consultar y exportar un reporte', persona: 'Administrador ganadero · César Flores', stories: 'US-29 · US-31',
    actions: ['Abrir reportes', 'Elegir periodo', 'Revisar y exportar'],
    screens: [
      { label: '01 · INDICADORES', title: 'Reportes', kind: 'reports' },
      { label: '02 · FILTROS', title: 'Periodo y alcance', kind: 'reports' },
      { label: '03 · RESULTADOS', title: 'Indicadores del hato', kind: 'report-result' },
      { label: '04 · EXPORTACIÓN', title: 'Reporte generado', kind: 'report-result' },
    ],
    branches: [
      { from: 2, label: 'Sin datos', title: 'No se genera un archivo vacío', lines: ['Informar que el periodo no tiene datos.', 'Elegir otro rango para volver a consultar.'], tone: 'warning', loop: true },
      { from: 2, label: 'Datos parciales', title: 'Hacer visible la cobertura', lines: ['Indicar cuántos animales se excluyeron del cálculo.', 'Exportar conserva el periodo y la fecha de generación.'], tone: 'warning', loop: false },
    ],
  },
  {
    file: 'wireflow-veterinary-care.svg', title: 'Wireflow · autorización y atención veterinaria', persona: 'Médico veterinario · Leonardo Rosales / administrador ganadero', stories: 'US-04 · US-14 · US-23 · US-24 · US-39',
    actions: ['Solicitar acceso', 'Revisar solicitud', 'Abrir ficha clínica'],
    screens: [
      { label: '01 · VETERINARIO', title: 'Asesorías', kind: 'access-request' },
      { label: '02 · ADMINISTRADOR', title: 'Revisar acceso', kind: 'access-admin' },
      { label: '03 · CONSULTA', title: 'Historial clínico', kind: 'clinical' },
      { label: '04 · REGISTRO', title: 'Intervención clínica', kind: 'intervention' },
    ],
    branches: [
      { from: 1, label: 'Solicitud rechazada', title: 'Mantener los datos protegidos', lines: ['Informar el estado al veterinario.', 'No mostrar la ficha ni habilitar el registro clínico.'], tone: 'error', loop: false },
      { from: 3, label: 'Datos o retiro por revisar', title: 'Corregir antes de registrar', lines: ['Señalar campos requeridos y advertencias de retiro.', 'Conservar el formulario hasta que el profesional lo revise.'], tone: 'warning', loop: true },
    ],
  },
];

const userFlows = [
  {
    file: 'user-flow-alert-response.svg', title: 'User Flow · revisar y atender una alerta', persona: 'Administrador ganadero · César Flores', stories: 'US-13 · US-16 · US-19',
    nodes: [
      { x: 45, y: 270, w: 160, h: 82, type: 'start', title: 'Inicio', detail: ['Revisar el hato'] },
      { x: 245, y: 250, w: 205, h: 120, type: 'action', title: 'Consultar telemetría', detail: ['Abrir Mi hato /', 'Monitoreo'] },
      { x: 485, y: 250, w: 205, h: 120, type: 'action', title: 'Abrir alerta', detail: ['Ver valor, umbral', 'y hora de lectura'] },
      { x: 730, y: 235, w: 180, h: 150, type: 'decision', title: '¿Alerta abierta?', detail: [] },
      { x: 960, y: 250, w: 210, h: 120, type: 'action', title: 'Registrar respuesta', detail: ['Anotar hallazgo', 'y acción tomada'] },
      { x: 1210, y: 235, w: 180, h: 150, type: 'decision', title: '¿Nota válida?', detail: ['5–500 caracteres'] },
      { x: 1410, y: 275, w: 155, h: 82, type: 'end', title: 'Atendida', detail: ['Tiempo y nota guardados'] },
    ],
    edges: [
      { path: 'M 205 311 H 245' }, { path: 'M 450 311 H 485' }, { path: 'M 690 311 H 730' },
      { path: 'M 910 311 H 960', label: 'Sí', x: 936, y: 296 },
      { path: 'M 1170 311 H 1210' }, { path: 'M 1390 311 H 1410', label: 'Sí', x: 1400, y: 296 },
      { path: 'M 820 385 V 530 H 420', label: 'No', x: 842, y: 424, dashed: true },
      { path: 'M 1300 385 V 570 H 1120', label: 'No', x: 1320, y: 425, dashed: true },
      { path: 'M 1120 570 V 430 H 1065 V 370', label: 'Corregir', x: 1083, y: 418, dashed: true },
    ],
    notes: [
      { x: 235, y: 530, w: 370, h: 120, title: 'No hay una alerta abierta', detail: ['Volver al listado y revisar el estado.'], tone: 'warning' },
      { x: 920, y: 570, w: 400, h: 120, title: 'La nota no cumple la validación', detail: ['Mostrar el error junto al campo y conservar el texto.'], tone: 'error' },
    ],
  },
  {
    file: 'user-flow-health-campaign.svg', title: 'User Flow · programar una campaña sanitaria', persona: 'Administrador ganadero · César Flores', stories: 'US-07 · US-26 · US-27',
    nodes: [
      { x: 45, y: 270, w: 160, h: 82, type: 'start', title: 'Inicio', detail: ['Planificar atención'] },
      { x: 245, y: 250, w: 205, h: 120, type: 'action', title: 'Seleccionar lote', detail: ['Consultar animales', 'y disponibilidad'] },
      { x: 485, y: 250, w: 205, h: 120, type: 'action', title: 'Completar campaña', detail: ['Tipo · fecha · lote', 'y animales'] },
      { x: 730, y: 235, w: 180, h: 150, type: 'decision', title: '¿Datos válidos?', detail: [] },
      { x: 960, y: 235, w: 180, h: 150, type: 'decision', title: '¿Hay retiro vigente?', detail: [] },
      { x: 1190, y: 250, w: 205, h: 120, type: 'action', title: 'Guardar campaña', detail: ['Mostrar animales', 'afectados si aplica'] },
      { x: 1410, y: 270, w: 155, h: 82, type: 'end', title: 'Programada', detail: ['Recordatorio según fecha'] },
    ],
    edges: [
      { path: 'M 205 311 H 245' }, { path: 'M 450 311 H 485' }, { path: 'M 690 311 H 730' },
      { path: 'M 910 311 H 960', label: 'Sí', x: 935, y: 296 }, { path: 'M 1140 311 H 1190', label: 'No', x: 1165, y: 296 },
      { path: 'M 1395 311 H 1410' },
      { path: 'M 820 385 V 520 H 590', label: 'No', x: 842, y: 424, dashed: true },
      { path: 'M 1050 385 V 570 H 1030', label: 'Sí', x: 1072, y: 423, dashed: true },
      { path: 'M 1030 570 H 1290 V 370', label: 'Revisar advertencia', x: 1170, y: 555, dashed: true },
      { path: 'M 590 520 V 420 H 590 V 370', label: 'Corregir campos', x: 660, y: 414, dashed: true },
    ],
    notes: [
      { x: 390, y: 520, w: 400, h: 120, title: 'Faltan datos o existe un error', detail: ['Marcar el campo y conservar lo ingresado.'], tone: 'error' },
      { x: 850, y: 570, w: 360, h: 120, title: 'Periodo de retiro coincidente', detail: ['Revisar productos y animales afectados antes de continuar.'], tone: 'warning' },
    ],
  },
  {
    file: 'user-flow-herd-report.svg', title: 'User Flow · consultar indicadores y exportar', persona: 'Administrador ganadero · César Flores', stories: 'US-29 · US-31',
    nodes: [
      { x: 45, y: 270, w: 160, h: 82, type: 'start', title: 'Inicio', detail: ['Analizar el hato'] },
      { x: 245, y: 250, w: 205, h: 120, type: 'action', title: 'Abrir Reportes', detail: ['Elegir hato y', 'rango de fechas'] },
      { x: 485, y: 250, w: 205, h: 120, type: 'action', title: 'Consultar indicadores', detail: ['Revisar métricas', 'y cobertura de datos'] },
      { x: 730, y: 235, w: 180, h: 150, type: 'decision', title: '¿Hay datos?', detail: [] },
      { x: 960, y: 250, w: 205, h: 120, type: 'action', title: 'Revisar resultados', detail: ['Ver animales excluidos', 'si hay datos parciales'] },
      { x: 1200, y: 250, w: 205, h: 120, type: 'action', title: 'Solicitar exportación', detail: ['CSV o impresión', 'según la vista'] },
      { x: 1410, y: 270, w: 155, h: 82, type: 'end', title: 'Reporte listo', detail: ['Periodo y fecha incluidos'] },
    ],
    edges: [
      { path: 'M 205 311 H 245' }, { path: 'M 450 311 H 485' }, { path: 'M 690 311 H 730' },
      { path: 'M 910 311 H 960', label: 'Sí', x: 935, y: 296 }, { path: 'M 1165 311 H 1200' }, { path: 'M 1405 311 H 1410' },
      { path: 'M 820 385 V 550 H 550', label: 'No', x: 842, y: 425, dashed: true },
      { path: 'M 550 550 V 420 H 350 V 370', label: 'Cambiar periodo', x: 450, y: 536, dashed: true },
    ],
    notes: [
      { x: 350, y: 550, w: 410, h: 120, title: 'Periodo sin datos', detail: ['Explicar por qué no se genera el archivo.'], tone: 'warning' },
    ],
  },
  {
    file: 'user-flow-veterinary-care.svg', title: 'User Flow · acceso y atención veterinaria', persona: 'Médico veterinario · Leonardo Rosales / administrador ganadero', stories: 'US-04 · US-14 · US-23 · US-24 · US-39',
    lanes: `<rect x="42" y="190" width="1516" height="270" rx="12" fill="#f8f0d7" stroke="${colors.border}"/><rect x="42" y="485" width="1516" height="230" rx="12" fill="#efe5c5" stroke="#d8cda9"/>`,
    nodes: [
      { x: 80, y: 290, w: 170, h: 82, type: 'start', title: 'Inicio', detail: ['Consultar hato'] },
      { x: 300, y: 270, w: 185, h: 130, type: 'decision', title: '¿Acceso vigente?', detail: [] },
      { x: 530, y: 285, w: 210, h: 110, type: 'action', title: 'Abrir ficha clínica', detail: ['Telemetría · eventos', 'historial y retiros'] },
      { x: 790, y: 285, w: 210, h: 110, type: 'action', title: 'Registrar intervención', detail: ['Tipo · fecha · producto', 'dosis y observación'] },
      { x: 1050, y: 270, w: 180, h: 130, type: 'decision', title: '¿Datos válidos?', detail: [] },
      { x: 1325, y: 290, w: 190, h: 82, type: 'end', title: 'Historial actualizado', detail: ['Registro trazable'] },
      { x: 300, y: 555, w: 205, h: 105, type: 'action', title: 'Solicitar acceso', detail: ['Motivo y estado previo', 'Evitar duplicados (US-39)'] },
      { x: 570, y: 540, w: 180, h: 130, type: 'decision', title: '¿Solicitud aprobada?', detail: [] },
      { x: 820, y: 555, w: 190, h: 105, type: 'end-error', title: 'Acceso rechazado', detail: ['No exponer datos'] },
      { x: 1050, y: 555, w: 300, h: 105, type: 'action', title: 'Corregir o revisar retiro', detail: ['Volver al formulario clínico'] },
    ],
    edges: [
      { path: 'M 250 331 H 300' },
      { path: 'M 485 335 H 530', label: 'Sí', x: 507, y: 319 },
      { path: 'M 392 400 V 555', label: 'No', x: 414, y: 480, dashed: true },
      { path: 'M 505 607 H 570', label: 'Enviar solicitud', x: 538, y: 590 },
      { path: 'M 750 605 H 820', label: 'No', x: 801, y: 586 },
      { path: 'M 660 540 V 470 H 390 V 400', label: 'Sí · habilitar acceso', x: 522, y: 455, dashed: true },
      { path: 'M 740 340 H 790' }, { path: 'M 1000 340 H 1050' },
      { path: 'M 1230 335 H 1325', label: 'Sí', x: 1278, y: 319 },
      { path: 'M 1140 400 V 555', label: 'No', x: 1162, y: 480, dashed: true },
      { path: 'M 1200 660 V 690 H 770 V 365 H 790', label: 'Corregir', x: 980, y: 680, dashed: true },
    ],
    notes: [],
  },
];

mkdirSync(here, { recursive: true });
for (const flow of wireflows) {
  const path = resolve(here, flow.file);
  writeFileSync(path, wireflowSvg(flow), 'utf8');
}
for (const flow of userFlows) {
  const path = resolve(here, flow.file);
  writeFileSync(path, userFlowSvg(flow), 'utf8');
}
