import HeaderProject from "components/Headers/HeaderProject";
import { CurrentProjectContext } from "context/CurrentProjectContext";
import react, { useContext, useEffect, useState } from 'react'
import {
    Card,
    CardHeader,
    Container,
    Row,
    Col,
    CardBody,
    Form,
    FormGroup,
    Input,
    Button,
} from "reactstrap";
import ProjetoDataService from "services/ProjetoDataService";
const EditProject = (props) => {

    const [key, setKey] = useState(props.match.params.id);
    const {currentProject, setCurrentProject} = useContext(CurrentProjectContext);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentProject({ ...currentProject, [name]: value })
    }
    const updateProject = () => {
        ProjetoDataService.update(currentProject.id, currentProject)
            .then((response) => {
                setCurrentProject(response.data);
                props.history.push("/admin/projeto")
            })
            .catch(e => console.error(e));
    }
    useEffect(() => {
        ProjetoDataService.get(key)
            .then((response) => {
                setCurrentProject(response.data);
            })
            .catch((e) => { console.error(e) });

    }, [])
    return (
        <>
            <HeaderProject />
            <Container className="mt--7" fluid>
                <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                        {currentProject.image!==""?                    
                          <img
                            alt={currentProject.image}
                            className="rounded-circle mw-50"
                            src={currentProject.image}
                            />
                        :
                          <img className="rounded-circle" src="https://picsum.photos/id/1/200"/>
                        }
                    </div>
                  </Col>
                </Row>
                <Row className="align-items-center">
                  <Col xs="8">
                  <h6 className="heading-small text-muted mb-4">
                                Project : {currentProject.projectname}
                    </h6>
                  </Col>
                </Row>
              </CardHeader>
                    <CardBody className="m-5">
                        <Form>
                            
                            <div className="pl-lg-4">
                                <Row>
                                    <Col lg="6">
                                        <FormGroup>
                                            <label htmlFor="projectname" className="form-control-label">Project Name: </label>
                                            <Input type="text" id="projectname" name="projectname" className="form-control-alternative" value={currentProject.projectname} onChange={(e) => { handleChange(e) }} />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                        <FormGroup>
                                            <label htmlFor="image" className="form-control-label">Image: </label>
                                            <Input type="text" id="image" name="image" value={currentProject.image} className="form-control-alternative" onChange={(e) => { handleChange(e) }} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="6">
                                        <FormGroup>
                                            <label htmlFor="budget" className="form-control-label">Budget: </label>
                                            <Input type="text" id="budget" name="budget" value={currentProject.budget} className="form-control-alternative" onChange={(e) => { handleChange(e) }} />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                        <FormGroup>
                                            <label htmlFor="completed" className="form-control-label" >Completed: </label>
                                            <Input type="text" id="completed" name="completed" className="form-control-alternative" value={currentProject.completed} onChange={(e) => { handleChange(e) }} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="6">
                                        <FormGroup>
                                            <label htmlFor="status" className="form-control-label" >status: </label>
                                            <select id="status" name="status" className="form-control" tabindex="2" style={{ maxWidth: 300 }} onChange={(e) => { handleChange(e) }}>
                                                {
                                                    currentProject.status.includes("pending") ?
                                                        <option value="pending" selected >pending</option>
                                                        :
                                                        <option value="pending">pending</option>
                                                }
                                                {
                                                    currentProject.status.includes("completed") ?
                                                        <option value="completed" selected>completed</option>
                                                        :
                                                        <option value="completed">completed</option>
                                                }
                                                {
                                                    currentProject.status.includes("delayed") ?
                                                        <option value="delayed" selected>delayed</option>
                                                        :
                                                        <option value="delayed">delayed</option>
                                                }
                                                {
                                                    currentProject.status.includes("on schedule") ?
                                                        <option value="on schedule" selected>on schedule</option>
                                                        :
                                                        <option value="on schedule" >on schedule</option>
                                                }

                                            </select>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="6 d-flex align-items-center">
                                        <button type="button" className="btn btn-success " onClick={updateProject}>Update</button>
                                    </Col>
                                </Row>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}
export default EditProject;