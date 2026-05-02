/// <reference types="vite/client" />

interface  ImportMetaEnv{
    readonly VITE_EMAILJS_SERVICE_ID: string;
    readonly VITE_EMAILJS_TEMPLATE_ID: string;
    readonly VITE_EMAILJS_PUBLIC_KEY: string;
    //add all your other VITE_ variable here later, e.g.
    //readonly VITE_API_BASE_URL: string;
}

interface ImportMeta{
    readonly env: ImportMetaEnv;
}