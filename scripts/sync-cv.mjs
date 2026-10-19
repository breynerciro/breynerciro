// Fuente única: cv/cv.tex → src/content/experience/es/*.md (fechas, cargo, empresa y logros).
// Solo regenera español; en/pt se traducen a mano. Uso: npm run sync:cv [-- --check]
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const MONTHS = { enero: 1, febrero: 2, marzo: 3, abril: 4, mayo: 5, junio: 6, julio: 7, agosto: 8, septiembre: 9, octubre: 10, noviembre: 11, diciembre: 12 };
const DIR = 'src/content/experience/es/';
const check = process.argv.includes('--check');

const clean = (s) =>
  s.replace(/\\textbf\{([^}]*)\}/g, '$1').replace(/\\textit\{([^}]*)\}/g, '$1')
    .replace(/\\%/g, '%').replace(/\$\\cdot\$/g, '·').replace(/\\&/g, '&').replace(/\s+/g, ' ').trim();

// "Octubre, 2026" | "2022" → [año, mes]
const parseDate = (s) => {
  const m = s.match(/(?:([A-Za-zé]+),\s*)?(\d{4})/);
  if (!m) throw new Error(`Fecha ilegible: ${s}`);
  return [Number(m[2]), m[1] ? MONTHS[m[1].toLowerCase()] : null];
};
const iso = ([y, mo], end) => {
  mo = mo ?? (end ? 12 : 1); // solo año: inicio en enero, fin en diciembre
  const d = end ? new Date(Date.UTC(y, mo, 0)) : new Date(Date.UTC(y, mo - 1, 1));
  return d.toISOString().slice(0, 10);
};

const tex = readFileSync('cv/cv.tex', 'utf8');
const section = tex.split('\\section*{Experiencia Profesional}')[1].split('\\section*{')[0];
const blocks = section.split('\\noindent').slice(1);

const files = readdirSync(DIR).filter((f) => f.endsWith('.md'));
let changed = 0;

for (const b of blocks) {
  const head = b.match(/\\textbf\{([^}]+)\}\s*\|\s*\\textit\{([^}]+)\}\s*\\hfill\s*([^\\\n]+)/);
  if (!head) throw new Error(`Bloque sin encabezado reconocible: ${b.slice(0, 80)}`);
  const [, company, role, range] = head;
  const [from, to] = range.split('–').map((x) => x.trim());
  const current = /actualidad/i.test(to);
  const bullets = [...b.matchAll(/\\item\s+([^\n]+)/g)].map((m) => clean(m[1]));

  const file = files.find((f) => readFileSync(DIR + f, 'utf8').includes(`company: '${clean(company)}`));
  if (!file) { console.warn(`Sin archivo para "${clean(company)}": créalo una vez a mano (frontmatter) y vuelve a correr.`); continue; }

  let md = readFileSync(DIR + file, 'utf8');
  const q = (s) => `'${s.replace(/'/g, "''")}'`;
  const set = (key, val) => { md = md.replace(new RegExp(`^${key}:.*$`, 'm'), `${key}: ${val}`); };
  set('title', q(clean(role)));
  set('role', q(clean(role)));
  set('startDate', iso(parseDate(from), false));
  if (current) { set('current', 'true'); md = md.replace(/^endDate:.*\n/m, ''); }
  else { set('current', 'false'); set('endDate', iso(parseDate(to), true)); }
  md = md.replace(/^highlights:\n(?:  - .*\n)+/m, `highlights:\n${bullets.map((x) => `  - ${q(x)}\n`).join('')}`);

  if (md !== readFileSync(DIR + file, 'utf8')) {
    changed++;
    console.log(`${check ? 'DESFASADO' : 'actualizado'}: ${file}`);
    if (!check) writeFileSync(DIR + file, md);
  }
}
if (check && changed) process.exit(1);
console.log(changed ? `${changed} archivo(s)` : 'Sin cambios: el sitio coincide con cv.tex');
