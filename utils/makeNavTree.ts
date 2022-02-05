interface NavItem {
  id: string
  text: string
  subitems?: NavItem[]
}

interface MakeNavTreeState {
  navList?: NavItem[]
  nextItem?: NavItem
  nextItemLevel?: number
  nextItemElements?: HTMLElement[]
}

function getElementLevel(element: HTMLElement) {
  return element ? parseInt(element.tagName.slice(1), 10) : -1
}

function makeItem(element: HTMLElement) {
  return {
    id: element.getElementsByTagName('a')[0]?.id,
    text: element.innerText,
  }
}

function addItem(navList: NavItem[], nextItem: NavItem, elements: HTMLElement[]) {
  return elements.length > 0
    ? [...navList, { ...nextItem, subitems: makeNavTree(elements) }]
    : [...navList, nextItem]
}

export function makeNavTree(
  elements: HTMLElement[],
  iteration = 0,
  state: MakeNavTreeState = {}
): NavItem[] {
  const {
    navList = [],
    nextItem = null,
    nextItemLevel = 10,
    nextItemElements = [],
  } = state
  const currentElement = elements[iteration]
  const isSubElement = getElementLevel(currentElement) > nextItemLevel

  if (elements.length === 0) {
    return []
  }

  if (iteration === elements.length) {
    return addItem(navList, nextItem, nextItemElements)
  }

  return makeNavTree(elements, iteration + 1, {
    navList:
      isSubElement || !nextItem ? navList : addItem(navList, nextItem, nextItemElements),
    nextItem: isSubElement ? nextItem : makeItem(currentElement),
    nextItemLevel: isSubElement ? nextItemLevel : getElementLevel(currentElement),
    nextItemElements: isSubElement ? [...nextItemElements, currentElement] : [],
  })
}
