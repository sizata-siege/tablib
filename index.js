const _ = id => document.getElementById(id)
const __ = msg => console.log(msg)

// ============================== Config =============================== //
const linkSelector = 'tab-link'
const contentSelector = 'tab-content'
const defaultSelector = 'default'
const display = 'flex' // todo: maybe define in tab-link (data-target-display)

// =============================== Main ================================ //
window.tabLib = () =>
{
    __('Loading TabLib')

    // Get all tab-links (class)
    const links = Array.from(document.getElementsByClassName(linkSelector))
    const contents = Array.from(document.getElementsByClassName(contentSelector))

    const hideAll = elements => 
        elements.forEach(elem =>
        {
            elem.style.visibility = 'hidden'
            // store the current display to use later
            // elem['data-display'] = elem.style.display // could be elem.custom = value
            // elem.setAttribute('data-display', elem.style.display)
            elem.style.display = 'none'
        })
    
    const deactivateAll = elements =>
        elements.forEach(elem =>
        {
            elem.classList.remove('active')
        })

    const showTab = target =>
    {
        // Hide all tabs
        hideAll(contents)

        // Show target tab
        _(target).style.visibility = 'visible'
        _(target).style.display = _(target['data-display'])
    }

    // Hide all tab-contents (class)
    hideAll(contents)
    // deactivateAll(links)
    // __('Tabs are now hidden')

    // Connect tab-links to tab-content (data-content)
    links.forEach(link =>
    {
        __(link.getAttribute('data-content'))
        link.addEventListener('click', () =>
        {
            deactivateAll(links)
            showTab(link.getAttribute('data-content'))
            link.classList.add('active')
        })
    })
    // __('Listeners bind')

    // Click a tab-content by default
    links.forEach(link =>
    {
        if (link.classList.contains(defaultSelector))
            link.click()
    })
    // __('Default clicked')

    __('TabLib loaded successfully')
}






// todo: Use library standards in here & publish it in github
// todo: define tab groups so that tabs don't combine to gether
// there maybe more than 1 tab group ...
