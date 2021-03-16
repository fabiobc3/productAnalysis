function renderAbout(about){
    return`
    <div class="row topMarg" id="about">
        <div class="col-12">
            <h1>${about.name}</h1>
        </div>
    </div>
    <!-- PICTURE AND ABOUT -->
    <div class="row">
        ${about.info}
    </div>`;
}

export {renderAbout};