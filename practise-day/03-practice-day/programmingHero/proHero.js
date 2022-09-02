const loadProgramming = () =>{
    const url =
      "https://openapi.programming-hero.com/api/course/curriculum?fbclid=IwAR3A5IB6LRGl4Jp6TWCg72hwf4DSWWuFX6Ky2_7C7x4ANyjpLy7YZ4Fousc";
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayProgramming(data.data));
}
const displayProgramming = milestones => {
    // console.log(milestones);
    const milestoneContainer = document.getElementById("milestone-container");
    milestones.forEach(milestone => {
        // console.log(milestone);
        const milestoneDiv = document.createElement('div');
        milestoneDiv.classList.add('col');
        milestoneDiv.innerHTML = `
            <div class="card">
              <img src="${milestone.image}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${milestone.name}</h5>
                <p class="card-text">
                  ${
                    milestone.description
                      ? milestone.description
                      : "It is Not Found any descriptions"
                  }
                </p>
              </div>
              <div id="module-container"></div>
            </div>
        `;
        milestoneContainer.appendChild(milestoneDiv);
        milestone.modules.forEach(module =>{
            const moduleContainer = document.getElementById("module-container");
            console.log(module);
            moduleContainer.innerHTML = `
                <span>${module.name}</span>
            `
        })
    });
}
loadProgramming()