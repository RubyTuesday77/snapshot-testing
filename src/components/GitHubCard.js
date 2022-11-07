import Card from 'react-bootstrap/Card'
import Cats from './Cats.jpeg'

function GitHubCard() {
    return (
        <Card style={{ width: "18rem", margin: "10px auto" }}>
            <Card.Img style={{ width: "200px", height: "150px" }} variant="top" src={ Cats } />
            <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>RubyTuesday77</Card.Title>
                <Card.Text>I love cats, music and coding!</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default GitHubCard