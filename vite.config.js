import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    // then run the server by this command ->  yarn dev -- --host=xx.xx.xx.xx
  },
});
