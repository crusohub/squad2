/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// core components
import HeaderProject from 'components/Headers/HeaderProject';
import ProjetoDataService from 'services/ProjetoDataService';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
	Table
} from 'reactstrap';

const Tables = () => {
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

	const retrieveProject = () => {
		ProjetoDataService.getAll()
			.then((response) => {
				setProjects(response.data);
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
									{projects.map((value, index) => (
										<tr>
											<th scope='row'>
												<Media className='align-items-center'>
													<a
														className='avatar rounded-circle mr-3'
														href='#pablo'
														onClick={(e) =>
															e.preventDefault()
														}
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
												<Badge
													color=''
													className='badge-dot mr-4'
												>
													<i className='bg-warning' />
													{value.status}
												</Badge>
											</td>
											<td>
												<div className='d-flex align-items-center'>
													<span className='mr-2'>
														{value.completed}
													</span>
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
												<Link
													to={
														'/admin/project/editproject/' +
														value.id
													}
													className='btn btn-warning'
												>
													{' '}
													Edit
												</Link>
											</td>
											<td>
												<Link
													onClick={() =>
														deleteProject(value.id)
													}
													className='btn btn-danger'
												>
													{' '}
													Delete
												</Link>
											</td>
										</tr>
									))}
								</tbody>
							</Table>
							<CardFooter className='py-4'>
								<nav aria-label='...'>
									<Pagination
										className='pagination justify-content-end mb-0'
										listClassName='justify-content-end mb-0'
									>
										<PaginationItem className='disabled'>
											<PaginationLink
												href='#pablo'
												onClick={(e) =>
													e.preventDefault()
												}
												tabIndex='-1'
											>
												<i className='fas fa-angle-left' />
												<span className='sr-only'>
													Previous
												</span>
											</PaginationLink>
										</PaginationItem>
										<PaginationItem className='active'>
											<PaginationLink
												href='#pablo'
												onClick={(e) =>
													e.preventDefault()
												}
											>
												1
											</PaginationLink>
										</PaginationItem>
										<PaginationItem>
											<PaginationLink
												href='#pablo'
												onClick={(e) =>
													e.preventDefault()
												}
											>
												2{' '}
												<span className='sr-only'>
													(current)
												</span>
											</PaginationLink>
										</PaginationItem>
										<PaginationItem>
											<PaginationLink
												href='#pablo'
												onClick={(e) =>
													e.preventDefault()
												}
											>
												3
											</PaginationLink>
										</PaginationItem>
										<PaginationItem>
											<PaginationLink
												href='#pablo'
												onClick={(e) =>
													e.preventDefault()
												}
											>
												<i className='fas fa-angle-right' />
												<span className='sr-only'>
													Next
												</span>
											</PaginationLink>
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
