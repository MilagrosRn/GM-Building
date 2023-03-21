
export default () => {
    const viewHome = `
      
  <div class="alert alert-primary" role="alert">
  <strong>Primary!</strong> This is a primary alert—check it out!
</div>

<div class="alert alert-secondary" role="alert">
  <strong>Secondary!</strong> This is a secondary alert—check it out!
</div>

<div class="alert alert-info" role="alert">
  <strong>Info!</strong> This is a info alert—check it out!
</div>

<div class="alert alert-success" role="alert">
  <strong>Success!</strong> This is a success alert—check it out!
</div>

<div class="alert alert-danger" role="alert">
  <strong>Danger!</strong> This is a danger alert—check it out!
</div>

<div class="alert alert-warning" role="alert">
  <strong>Warning!</strong> This is a warning alert—check it out!
</div>


    `;


    const divElement = document.createElement('source');


    divElement.innerHTML = viewHome;
    return divElement;
}