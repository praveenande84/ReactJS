
/* -----> import styles <----- */
import './index.css'

/* -----> Creating Components <----- */

// Functional Component
const TweetCard = (props) => {
    console.log("TweetCard Component")
    console.log(props)
    const {tweetDetails} = props
    const {tweet, likes, replies} = tweetDetails
    return (
        <li className="tweet-card-component">
            <div className="tweet-card-container">
                <p>{tweet}</p>
                <p>likes: {likes}</p>
                <p>replies: {replies}</p>
            </div>

        </li>
    )
}

/* -----> Default Props <----- */
TweetCard.defaultProps =  {
    tweet: "The Mornings...",
    likes: 0,
    replies: 0,
    dateTime: "Sun Jul 16 2023 19:16:26 GMT+0530 (India Standard Time)"
}

/* -----> Default Export <----- */
export default TweetCard
