const fs = require('fs')
const archiver = require('archiver')

// Create a writable stream for the output zip file
const output = fs.createWriteStream('MyData(1).zip')

// Create a zip archiver instance with compression level 7
const zipFile = archiver('zip', { zlib: { level: 7 } })

// Listen for when the zip operation is complete
output.on('close', () => {
  console.log(`Zip complete! Total bytes: ${zipFile.pointer()} bytes`)
})

// Handle any errors that occur
zipFile.on('error', (err) => {
  throw err
})

// Pipe the archiver's output to the file
zipFile.pipe(output)

// Add the "Data/" directory contents to the archive
zipFile.directory('Data/', false)

// Finalize the archive (must call this to finish)
zipFile.finalize()
