# UniMedia-cmx

**UniMedia** is a Chrome extension that allows users to securely store and retrieve text, images, and voice data using a unique ID. With a simple user interface and local storage integration, users can easily manage multimedia data for future reference. This extension is built with Webpack, and utilizes `nanoid` for generating unique IDs for each data entry.

## Features

- **Store Data:** Users can input text, upload images, and voice recordings, which are then stored locally using a generated unique ID.
- **Retrieve Data:** Users can retrieve stored text, images, and voice recordings by providing their unique ID.
- **Secure and Efficient:** Data is stored locally using Chrome's local storage, ensuring privacy and security.

## Project Structure

```
UniMedia-cmx/
├── icons/
│   ├── icon128.png
│   ├── icon48.png
│   └── icon16.png
├── scripts/
│   ├── background.js
│   └── popup.js
├── styles/
│   └── popup.css
├── .gitignore
├── manifest.json
├── popup.html
├── webpack.config.js
└── README.md
```

## Getting Started

### Prerequisites

To run the UniMedia Chrome extension locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- Chrome browser

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mohitnandaniya-git/UniMedia-cmx.git
   cd UniMedia-cmx
   ```

2. Install the dependencies:

   ```bash
   npm init -y
   npm install nanoid --save
   npm install --save-dev webpack webpack-cli
   ```

3. Run Webpack to bundle the scripts:

   ```bash
   npx webpack
   ```

4. Optionally, you can run Webpack with a custom configuration file:

   ```bash
   npx webpack --config webpack.config.js
   ```

5. Load the extension into Chrome:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer mode** (top right corner).
   - Click **Load unpacked** and select the `UniMedia-cmx` directory.

### How to Use

1. Once the extension is loaded, open the popup by clicking the **UniMedia** icon.
2. **Store Data:**
   - Input text, select an image file, and/or a voice recording.
   - Click "Generate Unique ID" to store the data. The unique ID will be displayed.
3. **Retrieve Data:**
   - Input the unique ID in the "Retrieve Data" section.
   - Click "Retrieve" to fetch and display the stored text, image, and voice data.

### Screenshots

- **Store Data Interface**
<img width="340" alt="Screenshot 2024-10-22 at 11 31 49 PM" src="https://github.com/user-attachments/assets/651e78ef-840d-4237-925b-f1cf3c18d29f">

- **Retrieve Data Interface**
<img width="340" alt="Screenshot 2024-10-22 at 11 32 54 PM" src="https://github.com/user-attachments/assets/caa96ad7-bc54-4be4-9644-2d0b6878959a">

 

### Webpack Configuration

This extension uses Webpack to bundle JavaScript files. Below is the `webpack.config.js` file used for this project:

```javascript
const path = require('path');

module.exports = {
  entry: './scripts/popup.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
};


This `README.md` file is now fully formatted with markdown syntax and includes placeholders for images. You can add actual screenshots later by replacing the URLs in the image sections.
```
