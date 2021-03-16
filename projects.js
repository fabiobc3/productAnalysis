function renderProjects(projects){
    return`
    <!-- PROJECTS SECTION -->
    <!-- TITLE -->
    <div class="row" id="companies">
        <div class="col-12">
            <h2>Projects</h2>
        </div>
    </div>
    <div class="filter">
        <label>
            <input type="radio" name="filter" value="all" checked>
            All
        </label>
        <label>
            <input type="radio" name="filter" value="UberEats">
            UberEats
        </label>
        <label>
        <input type="radio" name="filter" value="Postmates">
            Postmates
        </label>
        <label>
            <input type="radio" name="filter" value="Drizly">
            Drizly
        </label>
        <label>
            <input type="radio" name="filter" value="GoPuff">
            GoPuff
        </label>
    </div>
    <!-- PROJECTS -->
    <div class="row" class="col-12">
        <ul id="renderProjectItems">
            ${renderProjectItems(projects)}
        </ul>
    </div>`;
}

function renderProjectItems(projects){
    return projects.map(d=>`
    <div id="projects">
        <h4>${d.name}</h4>
        <p>${d.info}</p>
    </div>
    `).join('');
}

function handleProjectsFilter(data){
    let buttons = document.querySelectorAll('input[name=filter]');
    buttons.forEach(cond=>cond.addEventListener('change', function(event){
        const val = cond.value;
        const isChecked = cond.checked;
        const filteredProjects = data.projects.filter(n => {
            if (isChecked){
                return n.tag.includes(val);
            }
        })
        const projectsSection = document.querySelector('#renderProjectItems');
        projectsSection.innerHTML = renderProjectItems(filteredProjects);
    }))
}

export {renderProjects, handleProjectsFilter};