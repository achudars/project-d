# Qwik + Vite

![Project Screenshot](./img.png)

## Qwik in CSR mode

This starter is using a pure CSR (Client Side Rendering) mode. This means, that the application is fully bootstrapped in the browser. Most of Qwik innovations however take advantage of SSR (Server Side Rendering) mode.

```ts
export default defineConfig({
  plugins: [
    qwikVite({
      csr: true,
    }),
  ],
});
```

Use `npm create qwik@latest` to create a full production ready Qwik application, using SSR and [QwikCity](https://qwik.builder.io/docs/qwikcity/), our server-side metaframwork.

## Usage

```bash
$ npm install # or pnpm install or yarn install
```

Learn more on the [Qwik Website](https://qwik.builder.io) and join our community on our [Discord](https://qwik.builder.io/chat)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
