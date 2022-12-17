import cpy from 'cpy'
import { resolve } from 'path'

const sourceDir = resolve(__dirname, '../src')
//lib文件
const targetLib = resolve(__dirname, '../lib/src')
//es文件
const targetEs = resolve(__dirname, '../es/src')
console.log(sourceDir);
const buildLess = async () => {
    await cpy(`${sourceDir}/**/*.css`, targetLib)
    await cpy(`${sourceDir}/**/*.css`, targetEs)
}
buildLess()