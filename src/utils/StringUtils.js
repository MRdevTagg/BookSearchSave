// eslint-disable-next-line max-len
/* utility to clean strings to avoid the use of setDangerousinnerHTML and the endless chain of replace() methods */
function CleanString(str) {
  const div = document.createElement('div');
  div.innerHTML = str;
  return div.textContent || div.innerText || '';
}
export default CleanString;
