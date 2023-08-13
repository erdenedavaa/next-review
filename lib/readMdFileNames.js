import path from 'path'
import fs from 'fs'

export async function readMdFileNames(req, res) {
  // Find the absolute path of the content folder
  const fileDirectory = path.join(process.cwd(), 'content')
  // Read the md files from directory
  const reviewsDir = path.resolve(fileDirectory, 'reviews')
  const mdFileNames = await fs.readdirSync(reviewsDir)

  const onlyPureNames = mdFileNames.map((file) => {
    const fileNameWithoutExtension = file.split('.')[0]
    return fileNameWithoutExtension
  })

  // console.log(mdFileNames)
  return onlyPureNames
}
