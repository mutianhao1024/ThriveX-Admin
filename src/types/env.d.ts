interface ImportMetaEnv {
    readonly VITE_VERSION: string;

    readonly VITE_PROJECT_API: string;

    readonly VITE_BAIDU_TONGJI_SITE_ID: string;
    readonly VITE_BAIDU_TONGJI_ACCESS_TOKEN: string;

    readonly VITE_AI_APIPassword: string;
    readonly VITE_AI_MODEL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}