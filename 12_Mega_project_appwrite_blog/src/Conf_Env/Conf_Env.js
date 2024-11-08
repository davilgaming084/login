const Conf_Env = {
    APPWRITE_ENDPOINT_ID: String(import.meta.env.VITE_APPWRITE_ENDPOINT_API),
    APPWRITE_PROJECT_ID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    APPWRITE_DATABASE_ID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    APPWRITE_COLLECTION_ID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    APPWRITE_BUCKET_ID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}
export default Conf_Env;