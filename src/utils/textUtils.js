export function stripScripts(s) {
  const div = document.createElement('div');
  div.innerHTML = s;
  const scripts = div.getElementsByTagName('script');
  let i = scripts.length;
  while (i--) {
    scripts[i].parentNode.removeChild(scripts[i]);
  }
  return div.innerHTML;
}

export function stripTags(str) {
  if (str === null || str === '') return false;
  else str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, '');
}
