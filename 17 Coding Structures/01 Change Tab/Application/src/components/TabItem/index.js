
/* -----> import styles <----- */
import './index.css'  // CSS File


/* -----> Creating Components <----- */
// Functional Component

const TabItem = (props) => {
    console.log("tabItem Component")
    console.log(props)

    // props object destructuring
    const {tabDetails, isActive, onTabItem} = props
    const {tabId, displayText} = tabDetails

    const activeTabButtonClassName = isActive ? "active-tab-button" : ''

    // Event Handlers
    const onClickTabButton = () => {
        console.log("onClickTabButton Event Handler")
        onTabItem(tabId)
    }

   return (
       <li className="tab-item-component">
           <div className="tab-item-container">
               <button type="button" className={`tab-button ${activeTabButtonClassName}`} onClick={onClickTabButton}>
                   {displayText}
               </button>

           </div>

       </li>
   )
}


/* -----> Default Export <----- */
export default TabItem;
