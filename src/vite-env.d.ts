/// <reference types="vite/client" />

interface  ImportMetaEnv{
    readonly VITE_RESEND_API_KEY: string;
    //add all your other VITE_ variable here later, e.g.
    //readonly VITE_API_BASE_URL: string;
}

interface ImportMeta{
    readonly env: ImportMetaEnv;
}