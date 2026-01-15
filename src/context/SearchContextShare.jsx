import { createContext, useState } from "react"
// crreate context
export const searchContext = createContext('')
function SearchContextShare({children}) {
    // 2 create globale state
    const [ searchKey,setSearchKey]=useState('')
  return (
    // provide context to using provider 

    <searchContext.Provider value={{searchKey,setSearchKey}}>
        {
            children
        }
    </searchContext.Provider>
  )
}

export default SearchContextShare