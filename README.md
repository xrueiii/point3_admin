# Point3 Admin

A platform for managing and monitoring bookings and administrative tasks efficiently. This application provides role-based access for users and administrators, allowing seamless operation and robust management features.

## Features

- Role-based access for users and administrators.
- Efficient management of bookings and administrative operations.
- Integrated with PostgreSQL for secure and scalable data management.
- Built with modern web technologies like Next.js and TypeScript.

---

## Installation and Testing on localhost

Follow these steps to set up and test the **Point Admin** application locally:

### 1. Clone the Repository
```bash
git clone <repository_url>
cd <repository_folder>
```

### 2. Install Dependencies
Install the required dependencies by running:
```bash
yarn install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory of the project and add the following variables:

```bash
POSTGRES_URL=postgresql://HankWu37878:0pZn8WfrVqMI@ep-dawn-sun-82751177.ap-southeast-1.aws.neon.tech/point3?sslmode=required
NEXT_PUBLIC_BASE_URL=http://localhost:3001
AUTH_SECRET="Any string you want"
```

### 4. Run Database Migrations
Execute the following command to set up the database schema:
```bash
yarn migrate
```

### 5. Start the Application
Run the development server with:
```bash
yarn dev
```

The application will be available at [http://localhost:3001](http://localhost:3001).

---

## Deployment

The live version of the application can be accessed at:
[point3.vercel.app](https://point3.vercel.app)

---

## Technologies Used

- **Next.js** for the front-end framework with server-side rendering capabilities.
- **TypeScript** for type-safe development.
- **PostgreSQL** for database management.
- **Vercel** for deployment and hosting.

---

## Contributing

Contributions are welcome! Feel free to fork the repository, submit pull requests, or report issues.

## License

This project is licensed under the MIT License.
```

Make sure to replace `<repository_url>` and `<repository_folder>` with the actual URL and folder name of your repository. This version aligns with the context of a Point Admin project, highlighting its functionality and setup instructions.
