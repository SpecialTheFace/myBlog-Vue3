import request from "./index.js";

export async function getAbout () {
    return await request.get ( "/api/about" );
}
