/* -----> Third Party Packages <----- */
import {Component} from 'react' // Component is for creating class Components


/* -----> import External Components <----- */
import TabItem from '../TabItem'

/* -----> import styles <----- */
import './index.css'  // CSS File



/* -----> Dummy Data <----- */

const tabsList = [
    {tabId: 'STATIC', displayText: 'Static'},
    {tabId: 'RESPONSIVE', displayText: 'Responsive'},
    {tabId: 'DYNAMIC', displayText: 'Dynamic'},
]


/* -----> Creating Components <----- */

// class Component
class TabsList extends Component{

    // Initialization
    constructor(props) {
        console.log("TabsList Component")
        console.log("constructor")
        super(props);
        this.state = {activeTabId:tabsList[0].tabId}
    }

    // Methods
    onTabItem = (updatedTabId) => {
        console.log("onTabItem Method")
    console.log(updatedTabId)
    this.setState({activeTabId:updatedTabId})
}

    // Updating
    render(){
        console.log("render")

        // state object destructuring
        const {activeTabId} = this.state

        // Return JSX
        return (
            <div className="tab-list-component">
                <ul className="tabs-list-container">
                    {tabsList.map((eachTab) => <TabItem key={eachTab.tabId} tabDetails={eachTab} isActive={activeTabId === eachTab.tabId} onTabItem={this.onTabItem} /> )}
                </ul>
            </div>
        )
    }
}


/* -----> Default Export <----- */
export default TabsList;
