### Prerequisites

- Node.js and npm installed on your system.

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:a-str-o/Invoice.git  Invoice
   cd Invoice
   ```
2. Install dependencies
   
   ```bash
   npm install
   ```
3. Create an .env.local file with this content (This step is for sending pdf to email feature):
   ```env
   NODEMAILER_EMAIL=your_email@example.com
   NODEMAILER_PW=your_email_password
   ```
4. Start development server

    ```bash
    npm run dev
    ```
5. Open your web browser and access the application at [http://localhost:3000](http://localhost:3000)
