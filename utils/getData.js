import fs from 'fs'
import {join} from 'path'

import {dataPath} from './consts'

export default function getData(path, name, locale) {
  const fullPath = join(dataPath, path, name)
  const data = fs.readFileSync(`${fullPath}/${locale}.md`, 'utf8')

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {data}
}
