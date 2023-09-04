/* -----> Third Party Packages <----- */
import {Component} from 'react'  // Component is for creating class Components
import { BallTriangle } from 'react-loader-spinner';   // Loader
import Cookies from 'js-cookie'  // Cookies is used to store data on client-side with expiry duration.
import {v4 as uuidv4} from 'uuid'

/* -----> import External Components <----- */
import Header from "../Header";
import TweetCard from '../TweetCard'

/* -----> import styles <----- */
import './index.css'
import axios from "axios";  // CSS File

/* -----> Creating Components <----- */

// API Status Constants
const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}

// class Component
class Home extends Component{
    // Initialization
    constructor(props) {
        super(props);
        this.state = {tweetsList:[], apiStatus:apiStatusConstants.initial}
    }

    // Mounting
    componentDidMount() {
        this.getApiTweets()
    }

    // Methods
    getApiTweets =  async () => {
        this.setState({apiStatus:apiStatusConstants.loading})

        const jwtToken = Cookies.get("jwt_token");
        console.log(jwtToken)

        // Set  default configuration of API
        const API = axios.create({
            baseURL: 'http://localhost:5000/',  // Assuming the server is running on port 5000
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            }
        });

        try{
            const response = await API.get("/user/tweets/")
            console.log("API get data Success")
            console.log(response)
            const {data} = response
            console.log(data)
            const formattedData = data.map((eachTweet) => ({
                id:uuidv4(),
                tweet:eachTweet.tweet,
                likes:eachTweet.likes,
                replies:eachTweet.replies,
                dateTime:eachTweet.dateTime
            }))

            this.setState({tweetsList:formattedData, apiStatus:apiStatusConstants.success})

        }
        catch(error){
            console.log("API get data Failed")
            console.log(error)
            this.setState({apiStatus:apiStatusConstants.failure})
        }


    }

    loadingView = () => {
        console.log("loadingView")
        return (
            <BallTriangle/>
        )
    }
    successView = () => {
        console.log("successView")
        const {tweetsList} = this.state
        return (
            <ul className="tweets-list-container">
                {tweetsList.map((eachTweet) => <TweetCard key={eachTweet.id} tweetDetails={eachTweet}/>)}
            </ul>
        )
    }

    failureView = () => {
        console.log("failureView")
        return (
            <h1>Failure View</h1>
        )
    }


    renderHomeComponent = () => {
        const { apiStatus } = this.state;
        switch (apiStatus) {
            case apiStatusConstants.success:
                return this.successView();
            case apiStatusConstants.failure:
                return this.failureView();
            case apiStatusConstants.inProgress:
                return this.loadingView();
            default:
                return null;
        }
    }


    // Updating
    render(){
        // Return JSX
        return (
            <div className="home-component">
                <Header/>
                <div className="home-container">
                    {this.renderHomeComponent()}
                </div>
            </div>
        )
    }
}



/* -----> Default Export <----- */
export default Home
