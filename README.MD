# End-to-End Restaurant/Cafe Bill Generator

## Project Overview
This project is a comprehensive solution for restaurant and cafe billing, designed to streamline operations and enhance user experience. It caters to servers, restaurant admins, and project administrators by providing tools for efficient billing, insightful data analysis, and scalable management. 

### Features
- **User Authentication**: Unique login IDs and passwords for servers and restaurant admins.
- **Dynamic Bill Generation**:
  - Selection of table number, items, and quantity.
  - Auto-generated 8-digit bill codes.
  - Customizable templates with branding.
  - Integrated UPI payment options.
- **Online Bill Storage**: Bills accessible online for up to 2 years.
- **Admin Dashboards**:
  - Restaurant admin: View all bills, sales analytics, top-selling items, and customer insights.
  - Project admin: Manage multiple restaurants onboarded as clients.
- **POS Integration**: Potential for direct printing via POS systems.

## Tech Stack
### Front-End
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Pages**:
  - Landing page (completed).
  - Login pages for servers and admins.
  - Dashboards for server, restaurant admin, and project admin.
  - Bill generation page.

### Back-End
- **API Features**:
  - Secure user registration and login.
  - Role-based access control (servers, admins).
  - Bill generation with item sorting and price calculation.
  - Fraud detection (e.g., unusual login monitoring).

### Database
- **Type**: PostgreSQL
- **Schema**:
  - User tables (servers, admins, project admins).
  - Bill generation and storage tables.
  - Analytics tables for insights.

### Hosting & Tools
- **Front-End Hosting**: Vercel
- **Database Hosting**: Supabase
- **Password Security**: Bcrypt for hashing

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/username/restaurant-bill-generator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd restaurant-bill-generator
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file with the following variables:
     ```
     DATABASE_URL=your_database_url
     NEXT_PUBLIC_API_URL=your_api_url
     ```
5. Run the development server:
   ```bash
   npm run dev
   ```
6. Access the application at `http://localhost:3000`.

## Current Progress
- **Landing Page**: Completed.
- **Upcoming**: Development of dashboards and dynamic billing features.

## Future Scope
- Integration with POS systems for direct printing.
- Advanced fraud detection mechanisms.
- Expansion to support multi-location restaurants.

## License
This project is licensed under the MIT License.

---
Stay updated as we build this innovative solution for restaurant billing management!
