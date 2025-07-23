const expandRow = document.querySelector('.expand-row');
const expandButton = document.querySelector('#expand-button');
const charRow = document.querySelector('#p2-card-row');


/* MAIN
*/
{
    function setUnexpanded() {
        charRow.style.maxHeight = '300px';
        expandButton.style.transform = '';
    }
    function setExpanded() {
        charRow.style.maxHeight = '500px';
        expandButton.style.transform = 'rotate(90deg)';
    }

    /* Set defaults for the expanded text area.
        We want unexpanded by default */
    setUnexpanded();

    expandButton.addEventListener('click', (e) => {
        if (charRow.style.maxHeight !== '300px') {
            setUnexpanded();
        } else {
            setExpanded();
        }
    });
}