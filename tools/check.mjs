import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
for(const file of ['art.js','tools/serve.mjs'])execFileSync(process.execPath,['--check',path.join(root,file)],{stdio:'inherit'});
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)){if(!fs.existsSync(path.join(root,match[1])))throw Error('缺少文件：'+match[1])}
for(const name of ['art-cover.png','art-1.png','art-2.png','art-3.png','art-4.png','art-5.png','cover-clean.png','ribbon-cutout.png','paper.png'])if(!fs.existsSync(path.join(root,'assets',name)))throw Error('缺少素材：'+name);
for(const file of ['index.html','art.js','art.css','style.css'])if(/(?:[A-Z]:[\\/]|file:\/\/\/|appgprj_)/.test(fs.readFileSync(path.join(root,file),'utf8')))throw Error('存在本机或旧站点路径：'+file);
const story=JSON.parse(fs.readFileSync(path.join(root,'story.json'),'utf8'));if(!story.photos||typeof story.memoryNote!=='string')throw Error('内容文件格式不正确');
console.log('通过：脚本语法、入口引用、图片素材、相对路径和内容文件。');
