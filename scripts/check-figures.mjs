import {readFileSync, readdirSync, existsSync} from 'node:fs';
const figures=JSON.parse(readFileSync(new URL('../src/components/figures.json',import.meta.url),'utf8'));
for(const [name,figure] of Object.entries(figures)) {
 const file=new URL(`../static/img/screenshots/${figure.file}`,import.meta.url);
 if(!existsSync(file))throw new Error(`Missing screenshot: ${name} (${figure.file})`);
 if(!figure.marks.length)throw new Error(`Missing highlights: ${name}`);
 const bytes=readFileSync(file);
 if(bytes.toString('hex',0,2)!=='ffd8')throw new Error(`Expected JPEG: ${name}`);
 let dimensions;
 for(let offset=2;offset<bytes.length;){
  if(bytes[offset]!==255)throw new Error(`Invalid JPEG marker: ${name}`);
  const marker=bytes[offset+1];
  if([0xc0,0xc1,0xc2].includes(marker)){dimensions=[bytes.readUInt16BE(offset+7),bytes.readUInt16BE(offset+5)];break;}
  offset+=2+bytes.readUInt16BE(offset+2);
 }
 if(!dimensions || dimensions[0]!==figure.width || dimensions[1]!==figure.height)throw new Error(`Incorrect dimensions: ${name}`);
 for(const m of figure.marks)if(m.x<0||m.y<0||m.w<=0||m.h<=0||m.x+m.w>figure.width||m.y+m.h>figure.height)throw new Error(`Highlight outside screenshot: ${name}`);
}
for(const file of readdirSync(new URL('../docs/',import.meta.url)).filter(f=>f.endsWith('.md'))){
 const source=readFileSync(new URL(`../docs/${file}`,import.meta.url),'utf8');
 for(const match of source.matchAll(/<DocFigure name="([^"]+)"/g))if(!figures[match[1]])throw new Error(`Unknown figure ${match[1]} in ${file}`);
}
console.log(`Verified ${Object.keys(figures).length} annotated figures.`);
