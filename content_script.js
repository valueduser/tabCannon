openAllHyperLinks();

function openAllHyperLinks(){
  let urls = [];

  for(let i = document.links.length; i-->0;){
    if (!urls.includes(document.links[i].href) && document.links[i].hostname !== location.href) {
      urls.push(document.links[i].href);
    }
  }

  for(let i = urls.length; i-->0;){
    window.open(urls[i], '_blank');
  }
}
