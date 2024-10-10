/*
! Styling DOM Elements

* Via style property:
  Directly targets individual CSS styles (on the element)
  Controls styles as inline styles on the element
  Style property names are based on CSS properties but have adjusted, camelCase names

* Via className
  Directly set the CSS classes assigned to the element
  Set / Control all classes at once
  You can also control the id or other properties

* Via classList
  Conveniently add, remove, or toggle CSS classes
  Fine-grained control over classes that are added
  Can be used with className (with care)

! Creating & Inserting Elements

* HTML String
  innerHTML
    - The allows us to add HTML directly, tags and all!
      example.innerHTML = '<h2>Example Text</h2>'
  add (render) HTML string
  insertAdjacentHTML()
    - Allows us to target a position and choose what we want to insert.
      example.insertAdjacementHTML('beforeend', '<p>Some Text</p>')
  Add (render) HTML string in specific position

* createElement()
  ! For use only on document
  document.createElement('tagName');
    const newLi = document.createElement('li');
    example.appendChild(newLi)
    newLi.textContet = 'Item #';

  appendChild / append()
  * append() is a little different, it just adds a text node with your chosen text inside.
  
  prepend(), before(), after(), afterend(), insertBefore()
  * These allow us greater flexibility to where we can insert an element.
    list.lastElementChild.before(newLi)
    list.lastElementChild.after(newLi)

  replaceChild(), replaceWith()
  Replace existing DOM element / node with a new one

! Cloning DOM Nodes
* Copying an element is possible with cloneNode() taking one argument (optional), a boolean, specifying if children elements should also be cloned.
  const newLi2 = newLi.cloneNode(true)
  list.append(newLi, newLi2)

! Removing Elements
* To simply get rid of an element:
const list = document.querySelector('ul')
list.remove();
OR
list.parentElement.removeChild(list) -- If above is not available due to browser restrictions
*/