
/* -----> import styles <----- */
import './index.css'  // CSS File
import {Container, Heading, Paragraph, CustomButton, OutlineButton} from './styledComponents'  // CSS-in JS

/* -----> Creating Components <----- */

// Functional Component
const Card = () => {
    console.log("Card Component")
    return (
        <div className="card-component">
            <div className="card-container">
                <Container>
                    <Heading>Heading</Heading>
                    <Paragraph>Button Elements displayed based on condition</Paragraph>
                    <CustomButton type="button" outline={false}>Click</CustomButton>
                    <OutlineButton type="button" outline={true}>Click</OutlineButton>
                </Container>
            </div>
        </div>
    )
}



/* -----> Default Export <----- */
export default Card
