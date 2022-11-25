import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/projImg1.png";
import projImg2 from "../../assets/img/projImg2.png";
import projImg3 from "../../assets/img/projImg3.png";
import projImg4 from "../../assets/img/board.png";
// import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title: "Sorting Algorithm",
      description: "A Sorting Algorithm is used to rearrange a given array or list of elements according to a comparison operator on the elements",
      imgUrl: projImg1,
      urlLink: '/sorting'
    },
    {
      title: "Binary Search",
      description: "Binary Search is a searching algorithm for finding an element's position in a sorted array.",
      imgUrl: projImg2,
      urlLink: '/binarySearch'
    },
    {
      title: "Sieve Algorithm",
      description: "The sieve of Eratosthenes is one of the most efficient ways to find all primes smaller than n when n is smaller than 10 million or so.",
      imgUrl: projImg3,
      urlLink: '/prime'
    },
    {
      title: "N-Queen Algorithm",
      description: "The N Queen is the problem of placing N chess queens on an N×N chessboard so that no two queens attack each other. ",
      imgUrl: projImg4,
      urlLink: '/nqueen'
    },
  
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>

                <h2 style={{color: 'white'}} >Algorithm Visualizer</h2>
                <p>Algorithm Visualizer is an interactive online platform that Visualising algorithms through animation</p>
                    <div eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </div>
  
          </Col>
        </Row>
      </Container>
    </section>
  )
}