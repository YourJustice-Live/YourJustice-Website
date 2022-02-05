import fs from 'fs'
import { join } from 'path'

import { dataPath } from './consts'

export default function getAllFiles(path) {
  return fs
    .readdirSync(join(dataPath, path), { withFileTypes: true })
    .filter(dirEntry => dirEntry.isDirectory())
    .map(dirEntry => dirEntry.name)
}
