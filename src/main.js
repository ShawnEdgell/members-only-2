import App from './App.svelte';
import './tailwind.css'; // Ensure you import Tailwind CSS

const app = new App({
  target: document.getElementById('app'),
});

export default app;
