# Deploying a Next.js Project with Environment Variables on Vercel

This guide outlines the steps to deploy your Next.js project on Vercel, including instructions for managing environment variables using environment files and Yarn.

## Getting Started

### Installation
1. **Install Dependencies**: Navigate to the project directory and install dependencies using Yarn.
    ```bash
    cd <project-directory>
    yarn install
    ```

### Development

Run the development server locally to test your application.
```bash
yarn dev
```

The development server should start, and your application will be accessible at http://localhost:3000.

## Deployment to Vercel

### Environment Variables

Before deploying to Vercel, ensure your environment variables are properly configured.

1. **Create Environment File**: Create an environment file (e.g., .env.local) in the root directory of your project.

2. **Define Variables**: Add your environment variables to the environment file in the following format:
    ```plaintext
    VARIABLE_NAME=value
    ```

3. **Access Environment Variables**: In your Next.js project, access the environment variables using `process.env.VARIABLE_NAME`.

### Deployment

1. **Install Vercel CLI**: If you haven't already, install the Vercel CLI globally on your machine.
    ```bash
    npm install -g vercel
    ```

2. **Login to Vercel**: Log in to your Vercel account using the CLI.
    ```bash
    vercel login
    ```

3. **Deploy Project**: Deploy your Next.js project to Vercel.
    ```bash
    vercel
    ```

Follow the prompts to complete the deployment process. Once deployed, your application will be accessible via the provided Vercel URL.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
