import { writeFileSync } from 'node:fs'
import sharp from 'sharp'

const IN = './public/logo.webp'
const OUT = './public/logo.webp'

const meta = await sharp(IN).metadata()
console.log(`Input: ${meta.width}x${meta.height} (${meta.format})`)

const trimmed = await sharp(IN).trim({ threshold: 10 }).toBuffer()
writeFileSync(OUT, trimmed)

const final = await sharp(OUT).metadata()
console.log(
  `Final: ${final.width}x${final.height} · aspect ${(final.width / final.height).toFixed(2)}:1`,
)
