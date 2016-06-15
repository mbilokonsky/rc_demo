import React from 'react'
import FilterLink from '../containers/FilterLink'
import SaveButton from '../containers/SaveButton'

const Footer = () => (
  <div>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
    <SaveButton />
  </div>
)

export default Footer