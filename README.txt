Scalable AWS Web App with Node.js + MySQL (RDS)

This project is a fully deployed, scalable web application running on Amazon EC2, connected to a managed MySQL database on Amazon RDS, built with Node.js and Express.

It demonstrates how to provision AWS infrastructure, configure security groups, connect cloud services, and deploy a real-world app — all within the AWS Free Tier.

Features

Node.js + Express server hosted on EC2

MySQL database hosted on Amazon RDS

Proper IAM and security group configuration

Environment variable support with .env

Screenshots to verify live deployment

Designed to be free-tier eligible and cost-safe

Project Structure

aws-scalable-webapp/
├── index.js
├── package.json
├── .env.example
├── .gitignore
├── screenshots/
└── README.txt

Technologies Used

Node.js / Express

Amazon EC2

Amazon RDS (MySQL)

Security Groups / Inbound Rules

Git + GitHub for version control

Screenshots

Web App Running
(Include screenshot: browser showing app running)

EC2 Terminal Output
(Include screenshot: terminal with server running)

RDS Dashboard
(Include screenshot: AWS RDS console showing database)

Architecture

[ Browser ]
↓
[ EC2 Instance (Node.js App) ]
↓
[ Amazon RDS (MySQL DB) ]

Getting Started

Clone the repository

git clone https://github.com/yourusername/aws-scalable-webapp.git
cd aws-scalable-webapp

Install dependencies

npm install

Create a .env file with the following variables:

PORT=3000
DB_HOST=your-db-host.amazonaws.com
DB_USER=your-username
DB_PASSWORD=your-password
DB_NAME=your-database-name

Start the server

node index.js

Visit http://localhost:3000 in your browser.

AWS Cleanup Instructions

To avoid incurring charges, delete your AWS resources after use:

Terminate EC2 instance

Delete RDS database

Remove unused security groups and snapshots

