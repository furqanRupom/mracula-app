# Mracula - CSV File Downloader Website

Mracula is a simple website that allows users to create posts, display them in a table, and download the table data as a CSV file. It uses Next.js for the React framework, Tailwind CSS for styling, and `react-csv` for CSV file generation.

## Features

- Create posts and display them in a table.
- Download table data as a CSV file.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [README](#readme)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/mracula.git
   cd mracula
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   ```

   This command will start the React.js development server. You can view the website by visiting `http://localhost:5173` in your web browser.

## Usage

To use Mracula, follow these steps:

1. Open the website in your web browser.
2. Create posts using the provided form.
3. Posts will be displayed in a table.
4. To download the table data as a CSV file, click on the "Download CSV" button.

## Components

Mracula consists of the following main components:

- `PostForm`: Allows users to create posts.
- `PostTable`: Displays posts in a table format.
- `CSVDownloadButton`: Provides functionality to download table data as a CSV file.

## Project Structure

The project structure is organized as follows:

```
mracula/
├── components/        # React components
├── pages/             # React pages
├── public/            # Public assets
├── styles/            # CSS stylesheets
└── ...
```

## Contributing

Contributions are welcome! If you'd like to contribute to Mracula, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure they are working properly.
4. Commit your changes and push them to your fork.
5. Submit a pull request with a description of your changes.

## License

This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.

## README

This README file provides comprehensive documentation for the Mracula project, including installation instructions, usage guidelines, information about project components and structure, contribution guidelines, and licensing details. It aims to assist users and contributors in understanding and engaging with the project effectively.
