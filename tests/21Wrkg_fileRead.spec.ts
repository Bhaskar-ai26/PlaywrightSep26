import { test, expect } from '@playwright/test';
import fs from 'fs';
import * as xlsx from 'xlsx';
import { x } from '../tsFoundation/reusemodules/rm1';

test('read file content', async () => {
  const content = fs.readFileSync('files/Readfile.txt', 'utf-8');
  console.log(content);
  expect(content).toBeDefined();
});

test('write file content', async () => {
  fs.writeFileSync('files/Writefile.txt', 'Hello, World!', 'utf-8');
  const content = fs.readFileSync('files/Writefile.txt', 'utf-8');
  console.log(content);
  expect(content).toBe('Hello, World!');
});

test('Append data', ()=>{
  fs.appendFileSync('files/WriteMore.txt', '\nAppending data in new line2','utf-8')
  const readApp = fs.readFileSync('files/WriteMore.txt', 'utf-8');
  console.log(readApp)
})

test('Read excel', ()=>{
  const workbook = xlsx.readFile('files/ReadExcel.xlsx');
  const sheetName =workbook.SheetNames[0]
  console.log(sheetName)
  const sheet = workbook.Sheets[sheetName]
  const data = xlsx.utils.sheet_to_json(sheet)
  console.log(data)
})

test('Read specific cell', ()=>{
  const workbook = xlsx.readFile('files/ReadExcel.xlsx');
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const cell = sheet['A1'];
  console.log(cell ? cell.v : undefined);
})

test('write into excel', ()=>{
  const workbook = xlsx.utils.book_new();
  const data =[
    {fname: "one", lanme: "1"},
    {fname: "two", lanme: "2"},
    {fname: "three", lanme: "3"}
  ]
  const sheet = xlsx.utils.json_to_sheet(data);
  xlsx.utils.book_append_sheet(workbook,sheet,"Sheet1")
  xlsx.writeFile(workbook,"files/WriteExcel.xlsx")
})

test('read Excel', () =>{
  const workbook = xlsx.readFile('testData/empdata.xlsx')
  const sheetName = workbook.SheetNames[0]
  const data = workbook.Sheets[sheetName]
  console.log(xlsx.utils.sheet_to_json(data))
})

test('Write', ()=>{
  const workbook = xlsx.utils.book_new();
  const data = [
    {Name: "one"},
    {Name: "two"},
    {Name: "three"}
  ]
  const sheet = xlsx.utils.json_to_sheet(data)
  xlsx.utils.book_append_sheet(workbook,sheet,"bhas");
  xlsx.writeFile(workbook,'testData/out1.xlsx')
})