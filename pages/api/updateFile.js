import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { filePath } = req.body;
      // Check if filePath exists
      if (!filePath) {
        return res.status(400).json({ error: `${filePath}` })
      }

    const fullPath = path.join(process.cwd(), filePath);

    // Read the file asynchronously
    fs.readFile(fullPath, 'utf8', (err, data) => {
      if (err) {
        // If there's an error, send a 500 response
        res.status(500).json({ error: 'Error reading the file' });
        return; // Make sure to return here to avoid continuing the function
      }

      // Modify the file content
      const updatedData = data + '\nNew content added';

      // Write the modified content back to the file
      fs.writeFile(fullPath, updatedData, 'utf8', (err) => {
        if (err) {
          // If there's an error, send a 500 response
          res.status(500).json({ error: 'Error writing to the file' });
          return; // Make sure to return here to avoid continuing the function
        }

        // If everything went well, send a 200 response
        res.status(200).json({ message: 'File updated successfully' });
      });
    });
  } else {
    // For other methods, send a 405 "Method Not Allowed"
    res.status(405).json({ message: 'Method not allowed' });
  }
}
