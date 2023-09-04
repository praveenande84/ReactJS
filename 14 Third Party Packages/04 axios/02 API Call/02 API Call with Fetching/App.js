
// import Component for creating class Components
import {Component} from 'react'

// import Loader
import Loader from 'react-loader-spinner'

// import CSS Files
import './App.css'

/* Making API Call
    In General we make API Calls inside componentDidMount(). So that it doesn't block render().
    fetch => fetch is a promise-based API which returns a response object. In backend, we use snake_case for naming conventions.
*/

// class Component 
class App extends Component{
    // state initialization
    state  = {isLoading:true, blogsData:[]}

    // component Mount
    componentDidMount(){
        this.getBlogDate()
    }

    getBlogDate = async () => {
        const url = 'https://apis.ccbp.in/blogs'
        const options = {
            method:"GET"
        }

        const response = await fetch(url, options) 
        console.log(response)

        const statusCode = await response.status
        console.log(statusCode)

        const data = await response.json()
        console.log(data)

        const formattedData = data.map(eachItem => ({
            id:eachItem.id,
            title:eachItem.title,
            imageUrl:eachItem.image_url,
            avatartUrl:eachItem.avatar_url,
            author:eachItem.author,
            topic:eachItem.topic
        }))
        this.setState({blogsData:formattedData, isLoading:false})

        
    }

    render(){
        const {blogsData, isLoading} = this.state
        console.log(isLoading)
        // Return JSX 
        return (
            <div>
                {isLoading ? <Loader type="TailSpin" color="#00BFFF" height={50} width={50} /> : 
                blogsData.map((eachItem) => (<p key={eachItem.id}>{eachItem.title}</p>))}
            </div>
        )
    }
}

        

export default App
