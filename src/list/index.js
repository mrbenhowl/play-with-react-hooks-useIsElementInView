import React from 'react'
const bigEmptyArray = new Array(100)

const List = ({ itemToCheckInViewPort, listItemRef }) => (
  <ul>
    {[...bigEmptyArray.keys()].map(item => (
      <li
        ref={item === itemToCheckInViewPort ? listItemRef : undefined}
        key={item}
        style={{
          backgroundColor: item === itemToCheckInViewPort && 'lightpink'
        }}
      >
        <span>{item}</span>
      </li>
    ))}
  </ul>
)

export default List
