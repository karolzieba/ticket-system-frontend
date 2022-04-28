import React from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Front from './Front';
import EventCreator from './Agency/EventCreator';
import DetalisProducts from './DetalisProduct';
import Order from './Order';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { ReactComponent as Logo } from './logo.svg';
import './App.css';

function App() {
	return (
		<div>
			<Navbar collapseOnSelect expand='lg' id='navigatorHeader'>
				<Navbar.Brand href='/index'>
					<Logo
						alt=''
						width='30'
						height='30'
						className='d-inline-block align-top'
					/>
					TicketServer.pl
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'>
						<NavDropdown title='Koncerty' id='collasible-nav-dropdown'>
							<NavDropdown.Item href='/koncerty/pop'>Pop</NavDropdown.Item>
							<NavDropdown.Item href='/koncerty/rap'>Rap</NavDropdown.Item>
							<NavDropdown.Item href='/koncerty/rock'>Rock</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown
							title='Wydarzenia sportowe'
							id='collasible-nav-dropdown'>
							<NavDropdown.Item href='/wydarzeniasportowe/pilkanozna'>
								Piłka nożna
							</NavDropdown.Item>
							<NavDropdown.Item href='/wydarzeniasportowe/MMA'>
								MMA
							</NavDropdown.Item>
							<NavDropdown.Item href='/wydarzeniasportowe/tennis'>
								Tennis
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title='Teatr' id='collasible-nav-dropdown'>
							<NavDropdown.Item href='/teatr/komedia'>Komedia</NavDropdown.Item>
							<NavDropdown.Item href='/teatr/musicale'>
								Musicale
							</NavDropdown.Item>
							<NavDropdown.Item href='/teatr/dramat'>Dramat</NavDropdown.Item>
						</NavDropdown>
					</Nav>

					<Nav>
						<Nav.Link href='#'>O nas</Nav.Link>
						<Nav.Link eventKey={2} href='/login'>
							Wyloguj sie
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

			<Router>
				<Switch>
					<Route path='/login'>
						<Login />
					</Route>

					<Route path='/register'>
						<Register />
					</Route>

					<Route path='/index'>
						<Front />
					</Route>

					<Route path='/zamowienie'>
						<Order />
					</Route>
					<Route path='/agency/event/creator'>
						<EventCreator />
					</Route>
					<Route path='/koncerty/pop'>
						<DetalisProducts />
					</Route>
					<Route path='/koncerty/rap'>
						<DetalisProducts />
					</Route>
					<Route path='/koncerty/rock'>
						<DetalisProducts />
					</Route>
					<Route path='/wydarzeniasportowe/pilkanozna'>
						<DetalisProducts />
					</Route>
					<Route path='/wydarzeniasportowe/mma'>
						<DetalisProducts />
					</Route>
					<Route path='/wydarzeniasportowe/tennis'>
						<DetalisProducts />
					</Route>
					<Route path='/teatr/komedia'>
						<DetalisProducts />
					</Route>
					<Route path='/teatr/dramat'>
						<DetalisProducts />
					</Route>
					<Route path='/teatr/musicale'>
						<DetalisProducts />
					</Route>

					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</Router>

			<footer class='py-5 bg-dark'>
				<div class='container'>
					<p class='m-0 text-center text-white'>
						Copyright &copy; Daniel Rogowski, Damian Przytuła, Patryk Duda,
						Karol Zięba 2022
					</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
