
import HeaderProject from 'components/Headers/HeaderProject';
import ProjetoDataService from 'services/ProjetoDataService';
import { CurrentProjectContext } from 'context/CurrentProjectContext';
import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
// reactstrap components
import {
	Badge,
	Card,
	CardFooter,
	CardHeader,
	Container,
	Media,
	Pagination,
	PaginationItem,
	PaginationLink,
	Progress,
	Row,
	Table,
	Input,
	Col,
	CardBody,
	Button,
	FormGroup,
} from 'reactstrap';

const Tables = (props) => {
	const projectInitial = [
		{
			id: '1',
			image: 'Imagem Real 1 ',
			projectname: 'Projeto Real 1',
			status: 'on schedule',
			budget: 'Budget Real 1',
			completed: 'Completed Real 1',
		},
	];

	const [projects, setProjects] = useState(projectInitial);
	const { currentProject, setCurrentProject } = useContext(
		CurrentProjectContext,
	);
	const [searchProjectName, setSearchProjectName] = useState('');
	const [searchProjectStatus, setSearchProjectStatus] = useState('');
	const [maxPage, setMaxPage] = useState(0);
	const [pageCount, setPageCount] = useState(0);
	const [pageSize, setPageSize] = useState(10);
	const [currentPage, setCurrentPage] = useState(0);

	const handlePageClick = (e, index) => {
		e.preventDefault();
		setCurrentPage(index);
	};

	const handlePreviousClick = (e) => {
		e.preventDefault();
		setCurrentPage(currentPage - 1);
	}

	const handleNextClick = (e) => {
		e.preventDefault();
		setCurrentPage(currentPage + 1);
	}

	const retrieveProject = () => {
		ProjetoDataService.getAll()
			.then((response) => {
				setProjects(response.data);
				setPageCount(Math.ceil(response.data.length / pageSize))
			})
			.catch((e) => console.log(e));
	};

	useEffect(() => {
		retrieveProject();	
	}, []);

	const deleteProject = (id) => {
		ProjetoDataService.remove(id)
			.then(() => {
				retrieveProject();
			})
			.catch((e) => console.log(e));
	};

	const findByProjectName = () => {
		ProjetoDataService.findByProjectName(searchProjectName)
			.then((response) => {
				let data = response.data.filter((data) =>
					searchProjectStatus !== ''
						? data.status === searchProjectStatus
						: true,
				);
				setProjects(data);
			})
			.catch((e) => console.log(e));
	};

	const searchOnName = (e) => {
		const searchProjectName = e.target.value;
		setSearchProjectName(searchProjectName);
	};

	const searchOnStatus = (e) => {
		const searchProjectStatus = e.target.value;
		setSearchProjectStatus(searchProjectStatus);
	};

	return (
		<>
			<HeaderProject />
			{/* Page content */}
			<Container className='mt--7' fluid>
				{/* Table */}
				<Row>
					<div className='col'>
						<Card className='shadow'>
							<CardHeader className='border-0'>
								<h3 className='mb-0'>Projects table</h3>
							</CardHeader>
							<CardBody>
								<Row>
									<Col>
										<label
											className='form-control-label'
											htmlFor='currentPassword'
										>
											Project Name
										</label>
										<Input
											placeholder='Search by project name'
											className='form-control-alternative'
											onChange={searchOnName}
											value={searchProjectName}
										/>
									</Col>
									<Col lg='6'>
										<FormGroup>
											<label htmlFor='status' className='form-control-label'>
												Project Status{' '}
											</label>
											<select
												id='status'
												name='status'
												className='form-control'
												tabindex='2'
												onChange={searchOnStatus}
											>
												{currentProject.status.includes('pending') ? (
													<option value='pending' selected>
														pending
													</option>
												) : (
													<option value='pending'>pending</option>
												)}
												{currentProject.status.includes('completed') ? (
													<option value='completed' selected>
														completed
													</option>
												) : (
													<option value='completed'>completed</option>
												)}
												{currentProject.status.includes('delayed') ? (
													<option value='delayed' selected>
														delayed
													</option>
												) : (
													<option value='delayed'>delayed</option>
												)}
												{currentProject.status.includes('on schedule') ? (
													<option value='on schedule' selected>
														on schedule
													</option>
												) : (
													<option value='on schedule'>on schedule</option>
												)}
											</select>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col>
										<Button
											className='my-4'
											color='primary'
											type='submit'
											onClick={findByProjectName}
										>
											Pesquisar
										</Button>
									</Col>
								</Row>
								<Row>
									<Col>
										<Table
											className='align-items-center table-flush'
											responsive
										>
											<thead className='thead-light'>
												<tr>
													<th scope='col'>Project</th>
													<th scope='col'>Budget</th>
													<th scope='col'>Status</th>
													<th scope='col'>Completion</th>
													<th scope='col' />
													<th scope='col' />
												</tr>
											</thead>
											<tbody>
												{projects
												.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
												.map((value, index) => (
													<tr>
														<th scope='row'>
															<Media className='align-items-center'>
																<a
																	className='avatar rounded-circle mr-3'
																	href='#pablo'
																	onClick={(e) => e.preventDefault()}
																>
																	<img
																		alt='...'
																		src={
																			require('../../assets/img/theme/bootstrap.jpg')
																				.default
																		}
																	/>
																</a>
																<Media>
																	<span className='mb-0 text-sm'>
																		{value.projectname}
																	</span>
																</Media>
															</Media>
														</th>
														<td>{value.budget}</td>
														<td>
															<Badge color='' className='badge-dot mr-4'>
																<i className='bg-warning' />
																{value.status}
															</Badge>
														</td>
														<td>
															<div className='d-flex align-items-center'>
																<span className='mr-2'>{value.completed}</span>
																<div>
																	<Progress
																		max='100'
																		value='60'
																		barClassName='bg-danger'
																	/>
																</div>
															</div>
														</td>
														<td>
															<Button
																color='warning'
																href='#pablo'
																onClick={(event) => {
																	event.preventDefault();
																	props.history.push(
																		'/admin/project/editproject/' + value.id,
																	);
																}}
																size='sm'
															>
																Edit
															</Button>
														</td>
														<td>
															<Button
																color='danger'
																size='sm'
																onClick={() => deleteProject(value.id)}
															>
																Delete
															</Button>
														</td>
													</tr>
												))}
											</tbody>
										</Table>
									</Col>
								</Row>
							</CardBody>
							<CardFooter className='py-4'>
								<nav aria-label='...'>
									<Pagination
										className='pagination justify-content-end mb-0'
										listClassName='justify-content-end mb-0'
									>
										<PaginationItem disabled={currentPage <= 0}>
											<PaginationLink
												onClick={handlePreviousClick}
												previous
												href='#'
											/>
										</PaginationItem>

										{[...Array(pageCount)].map((page, i) => (
											<PaginationItem active={i === currentPage} key={i}>
												<PaginationLink
													onClick={(e) => handlePageClick(e, i)}
													href='#'
												>
													{i + 1}
												</PaginationLink>
											</PaginationItem>
										))}

										<PaginationItem disabled={currentPage == pageCount -1}>
											<PaginationLink
												onClick={handleNextClick}
												next
												href='#'
											/>
										</PaginationItem>
									</Pagination>
								</nav>
							</CardFooter>
						</Card>
					</div>
				</Row>
			</Container>
		</>
	);
};

export default Tables;
