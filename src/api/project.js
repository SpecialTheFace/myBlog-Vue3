import request from "./index.js";

export async function getProjects () {
    return await request.get ( "/api/project" );
}
