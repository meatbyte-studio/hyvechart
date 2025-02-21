# HyveChart

HyveChaid is a self-hosted, web-based diagramming and whiteboarding application powered by tldraw. It provides real-time, intuitive visual collaboration for teams who want full control over their data and a streamlined drawing experience.

## Running in Development Mode

To run the application in development mode, follow these steps:

1. **Install Dependencies**: Ensure you have all necessary dependencies installed by running:

```bash
npm install
```

2. **Start Development Server**: Start the development server with the following command:

```bash
npm run dev
```

3. **Open in Browser**: Open your browser and navigate to `http://localhost:3000` to see the application in action.

The development server supports hot reloading, so any changes you make to the code will be automatically reflected in the browser.

## Running Prisma Studio

To run Prisma Studio, use the following command:

```bash
npm run db:studio
```

Prisma Studio is a visual editor for the data in your database. It allows you to view and edit your data with ease. Make sure your database is running and properly configured in your Prisma schema file before starting Prisma Studio.

## Using shadcn/ui

**Add Components**: You can add components to your project using the following command:

```bash
npx shadcn@latest add component-name
```

Replace `component-name` with the name of the component you want to add. You can find a list of available components in the [shadcn/ui documentation](https://ui.shadcn.com/docs/components).
