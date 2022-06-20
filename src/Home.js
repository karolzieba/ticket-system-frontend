import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Home = ({ loggedIn, userData }) => {
	const agencyElements = (
		<NavDropdown title='Panel agencyjny' id='collasible-nav-ddropdown'>
			<LinkContainer to='/agency/event/creator'>
				<NavDropdown.Item>Dodawanie wydarzeń</NavDropdown.Item>
			</LinkContainer>
			<LinkContainer to='/agency/changedata'>
				<NavDropdown.Item>Zarządzanie kontem</NavDropdown.Item>
			</LinkContainer>
			<LinkContainer to='/agency/event/update'>
				<NavDropdown.Item>Zarządzanie wydarzeniami</NavDropdown.Item>
			</LinkContainer>
		</NavDropdown>
	);

	const clientElements = (
		<NavDropdown title='Konto' id='collasible-nav-ddropdown'>
			<LinkContainer to='/client/orders'>
				<NavDropdown.Item>Moje zamówienia</NavDropdown.Item>
			</LinkContainer>
			<LinkContainer to='/client/changedata'>
				<NavDropdown.Item>Zarządzanie kontem</NavDropdown.Item>
			</LinkContainer>
		</NavDropdown>
	);

	const moderatorElements = (
		<NavDropdown title='Panel moderatora' id='collasible-nav-ddropdown'>
			<LinkContainer to='/moderator/event/management'>
				<NavDropdown.Item>Zarządzanie wydarzeniami</NavDropdown.Item>
			</LinkContainer>
			<LinkContainer to='/moderator/order/management'>
				<NavDropdown.Item>Zarządzanie zamówieniami</NavDropdown.Item>
			</LinkContainer>
			<LinkContainer to="/moderator/account/management">
				<NavDropdown.Item>Zarządzanie użytkownikami</NavDropdown.Item>
			</LinkContainer>
			<LinkContainer to='/moderator/changedata'>
				<NavDropdown.Item>Zarządzanie kontem</NavDropdown.Item>
			</LinkContainer>
		</NavDropdown>
	);

	return (
		<div>
			<Navbar collapseOnSelect expand='lg' id='navigatorHeader'>
				<Navbar.Brand>
					<Link id='logo' to='/'>
						TwójBilecik
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'>
						<NavDropdown title='Koncerty' id='collasible-nav-dropdown'>
							<LinkContainer to='/koncerty/pop'>
								<NavDropdown.Item>Pop</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to='/koncerty/rap'>
								<NavDropdown.Item>Rap</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to='/koncerty/rock'>
								<NavDropdown.Item>Rock</NavDropdown.Item>
							</LinkContainer>
						</NavDropdown>
						<NavDropdown
							title='Wydarzenia sportowe'
							id='collasible-nav-dropdown'>
							<LinkContainer to='/wydarzeniasportowe/pilkanozna'>
								<NavDropdown.Item>Piłka nożna</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to='/wydarzeniasportowe/MMA'>
								<NavDropdown.Item>MMA</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to='/wydarzeniasportowe/tennis'>
								<NavDropdown.Item>Tenis</NavDropdown.Item>
							</LinkContainer>
						</NavDropdown>
						<NavDropdown title='Teatr' id='collasible-nav-dropdown'>
							<LinkContainer to='/teatr/komedia'>
								<NavDropdown.Item>Komedia</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to='/teatr/musicale'>
								<NavDropdown.Item>Musical</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to='/teatr/dramat'>
								<NavDropdown.Item>Dramat</NavDropdown.Item>
							</LinkContainer>
						</NavDropdown>
					</Nav>

					{loggedIn === true &&
						userData.role === 'ROLE_CLIENT_FACEBOOK' &&
						userData.hasSetBirthday === 'false' && (
							<Link to='/client/changedata'>
								Aby kupować bilety uzupełnij swoje dane!
							</Link>
						)}
					{loggedIn === true &&
						userData.role === 'ROLE_AGENCY' &&
						agencyElements}
					{loggedIn === true &&
						(userData.role === 'ROLE_CLIENT' ||
							userData.role === 'ROLE_CLIENT_FACEBOOK') &&
						clientElements}
					{loggedIn === true &&
						userData.role === 'ROLE_MODERATOR' &&
						moderatorElements}
					{loggedIn === false && <Link to='/login'>Zaloguj się</Link>}
					{loggedIn === true && <Link to='/logout'>Wyloguj się</Link>}
				</Navbar.Collapse>
			</Navbar>

			<Outlet />
		</div>
	);
};

export default Home;
