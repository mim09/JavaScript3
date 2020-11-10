export function basicLayOut() {
  const container = `<div id="container" class="container"> </div>
   <div class="page"></div>
                   <footer class="footer">HYF Repositories</footer>`;

  document.body.innerHTML = container;
  const selection = `<section class="header" 
                <h3>HYF Repositories</h3>
                <select name="select" id="selectOption" class="select" onchange="changeElement()">
      </select>
      </section>`;
  const mainContent = `<div class="main-content">
     <section class="repo-section common-feature">        
                </section>
              <section class="contributors-section ">
              <p class="contributors-title common-feature">Contributors</p>
              
            </section>
           </div>`;
  document.querySelector('.container').innerHTML = selection;
  document.querySelector('.container').innerHTML += mainContent;
}