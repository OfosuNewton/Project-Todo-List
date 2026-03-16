export class buildProject {
    constructor(project) {
        this.project_title = project;
        this.Projectuuid = crypto.randomUUID()
    }
}

export const build_new_project = (project_title) => {
   const new_project = new buildProject(project_title);
    projectarray.push(new_project);
    console.log(projectarray);
}
export let projectarray = JSON.parse(localStorage.getItem('ProjectList')) || [];
export let updatedprojectarray = JSON.parse(localStorage.getItem('updated_ProjectList')) || [];