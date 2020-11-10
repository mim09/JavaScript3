export function selectionOverview(name, desc, fork, update) {
  let out = '';
  out += `
        <div class="repo-details"><span class='title'>Repository:</span><a href="https://github.com/HackYourFuture/${name}"
         target="_blank">${name}</a> </div>
				<div class="repo-details"><span class='title'>Description:</span><span class="repo-desc">${desc}</span></div>
				<div class="repo-details"><span class='title'>Forks:</span><span class="repo-name fork">${fork}</span></div>
				<div class="repo-details"><span class='title'>Updated:</span><span class="repo-update">${(update).replace('Z', '').replace('T', ' ')}</span></div>
			`;
  document.querySelector('.repo-section').innerHTML = out;
}