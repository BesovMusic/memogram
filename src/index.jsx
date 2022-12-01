import { createRoot } from 'react-dom/client';
import { MemeProvider } from './providers/MemesContext';
import App from './App';
import FullCard from './routes/FullCard';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
]);
root.render(
    <MemeProvider>
        <RouterProvider router={router} />
    </MemeProvider>
);