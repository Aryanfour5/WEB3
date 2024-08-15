# NFT Fetcher Web Application

This is a simple web application built with React that allows users to fetch and display NFTs from different blockchains. The application uses Axios to communicate with a backend Express server, which in turn interacts with the Moralis API to fetch NFTs. The user can specify the contract address and blockchain to retrieve NFTs from.

## Table of Contents

- [NFT Fetcher Web Application](#nft-fetcher-web-application)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Project Structure](#project-structure)
  - [Environment Variables](#environment-variables)
  - [Usage](#usage)
  - [Responsive Design](#responsive-design)
  - [Backend Server](#backend-server)
  - [Screenshots](#screenshots)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- Fetch NFTs from a given contract address on different blockchains.
- Supports multiple blockchains like Ethereum, BSC, Polygon, and Avalanche.
- Load more NFTs using pagination (cursor-based).
- Responsive design for mobile and desktop devices.
- Easy-to-use interface.

## Technologies Used

- **Frontend:** React, CSS
- **Backend:** Express, Node.js
- **API Integration:** Moralis SDK
- **HTTP Client:** Axios

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/nft-fetcher-app.git
cd nft-fetcher-app
