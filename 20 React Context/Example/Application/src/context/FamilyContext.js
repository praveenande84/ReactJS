import React from 'react'

/* -----> React Context <----- */
// Context is a mechanism that provides different Components and allows us to pass data without doing prop drilling.
// It returns an object with different properties to update and access values from the context.

const FamilyContext = React.createContext({
    activePerson: 'static react context',
    changePerson: () => {},
})

export default FamilyContext