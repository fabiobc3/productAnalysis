import {renderNavbar} from './navbar.js';
import {renderAbout} from './about.js';
import {renderProjects, handleProjectsFilter} from './projects.js';

function renderMainPage(data){
    document.querySelector('.container').innerHTML = `
    ${renderNavbar(data.navbar)}
    ${renderAbout(data.about)}
    ${renderProjects(data.projects)}
    `
    handleProjectsFilter(data);
}

export {renderMainPage};