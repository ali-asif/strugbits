// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from './header';
// import '../App.css';
// import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// const Body = () => {
//     const [activeTab, setActiveTab] = useState('1');
//     const [recipes, setRecipes] = useState([]);
//     const [modalOpen, setModalOpen] = useState(false);
//     const [selectedMeal, setSelectedMeal] = useState(null); // state to store selected meal
//     const [selectedWeek, setSelectedWeek] = useState(null); // state to store selected week
//     const [weekMeals, setWeekMeals] = useState({
//         '2': [], // Week 1
//         '3': [], // Week 2
//         '4': [], // Week 3
//         '5': [], // Week 4
//     }); // state to store meals for each week

//     const getRecords = async () => {
//         try {
//             const response = await axios.get("https://dummyjson.com/recipes");
//             setRecipes(response.data.recipes);
//         } catch (error) {
//             console.error("Error fetching recipes:", error);
//         }
//     };

//     useEffect(() => {
//         getRecords();
//     }, []);

//     const toggleTab = (tab) => {
//         if (activeTab !== tab) setActiveTab(tab);
//     };

//     const toggleModal = () => setModalOpen(!modalOpen);

//     const handleCardClick = (meal) => {
//         setSelectedMeal(meal); // Set selected meal when a card is clicked
//     };
    

//     console.log(selectedMeal, 'meal')

//     const handleSaveMeal = () => {
//         if (selectedMeal && selectedWeek) {
//             setWeekMeals((prevMeals) => {
//                 const updatedMeals = { ...prevMeals };
//                 updatedMeals[selectedWeek].push(selectedMeal); // Add the selected meal to the selected week
//                 return updatedMeals;
//             });
//             setModalOpen(false); // Close the modal after saving
//         } else {
//             alert('Please select a meal and a week!');
//         }
//     };

//     const handleWeekSelection = (week) => {
//         setSelectedWeek(week); // Set selected week when a tab is clicked in the modal
//     };

//     return (
//         <div>
//             <Header />
//             <div className="main-container">
//                 <div className="text-center mb-5">
//                     <h2 className="display-5">Week Order</h2>
//                     <p className="text-muted">Plan your meals for the week</p>
//                 </div>

//                 {/* Tabs Section */}
//                 <div className="centered-tabs">
//                     <Nav tabs>
//                         <NavItem>
//                             <NavLink
//                                 active={activeTab === '1'}
//                                 onClick={() => toggleTab('1')}
//                             >
//                                 All Meals
//                             </NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink
//                                 active={activeTab === '2'}
//                                 onClick={() => toggleTab('2')}
//                             >
//                                 Week 1
//                             </NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink
//                                 active={activeTab === '3'}
//                                 onClick={() => toggleTab('3')}
//                             >
//                                 Week 2
//                             </NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink
//                                 active={activeTab === '4'}
//                                 onClick={() => toggleTab('4')}
//                             >
//                                 Week 3
//                             </NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink
//                                 active={activeTab === '5'}
//                                 onClick={() => toggleTab('5')}
//                             >
//                                 Week 4
//                             </NavLink>
//                         </NavItem>
//                     </Nav>
//                     <Button className='align-items-baseline' color='primary' onClick={toggleModal}>
//                         Add Meal
//                     </Button>
//                 </div>

//                 {/* Tab Content */}
//                 <TabContent activeTab={activeTab}>
//                     <TabPane tabId="1">
//                         <Row>
//                             {recipes.map((recipe) => (
//                                 <Col sm="4" key={recipe.id}>
//                                     <Card className="recipe-card" onClick={() => handleCardClick(recipe)}>
//                                         <CardBody>
//                                             <Container className='mt-3'>
//                                                 <CardImg
//                                                     top
//                                                     width="100%"
//                                                     src={recipe.image || 'https://via.placeholder.com/300'}
//                                                     alt={recipe.name}
//                                                 />
//                                                 <CardTitle className='mt-3' tag="h5">{recipe.name}</CardTitle>
//                                                 <CardText>
//                                                     <strong>Ingredients:</strong>
//                                                     <div>{recipe.ingredients}</div>
//                                                 </CardText>
//                                                 <CardText>
//                                                     <div className='d-flex justify-content-between'>
//                                                         <div className='d-flex gap-2 align-items-baseline'>
//                                                             <strong>Cuisine:</strong>
//                                                             <p>{recipe.cuisine}</p>
//                                                         </div>
//                                                         <div className='d-flex gap-2 align-items-baseline'>
//                                                             <strong>Rating:</strong>
//                                                             <p>{recipe.rating} ★</p>
//                                                         </div>
//                                                     </div>
//                                                 </CardText>
//                                             </Container>
//                                         </CardBody>
//                                     </Card>
//                                 </Col>
//                             ))}
//                         </Row>
//                     </TabPane>
//                     <TabPane tabId="2">
//                         <Row>
//                             {weekMeals['2'].map((recipe, index) => (
//                                 <Col sm="4" key={index}>
//                                     <Card className="recipe-card" onClick={() => handleCardClick(recipe)}>
//                                         <CardBody>
//                                             <Container className='mt-3'>
//                                                 <CardImg
//                                                     top
//                                                     width="100%"
//                                                     src={recipe.image || 'https://via.placeholder.com/300'}
//                                                     alt={recipe.name}
//                                                 />
//                                                 <CardTitle className='mt-3' tag="h5">{recipe.name}</CardTitle>
//                                                 <CardText>
//                                                     <strong>Ingredients:</strong>
//                                                     <div>{recipe.ingredients}</div>
//                                                 </CardText>
//                                                 <CardText>
//                                                     <div className='d-flex justify-content-between'>
//                                                         <div className='d-flex gap-2 align-items-baseline'>
//                                                             <strong>Cuisine:</strong>
//                                                             <p>{recipe.cuisine}</p>
//                                                         </div>
//                                                         <div className='d-flex gap-2 align-items-baseline'>
//                                                             <strong>Rating:</strong>
//                                                             <p>{recipe.rating} ★</p>
//                                                         </div>
//                                                     </div>
//                                                 </CardText>
//                                             </Container>
//                                         </CardBody>
//                                     </Card>
//                                 </Col>
//                             ))}
//                         </Row>
//                     </TabPane>
//                     <TabPane tabId="3">
//                         <Row>
//                             {weekMeals['3'].map((recipe, index) => (
//                                 <Col sm="4" key={index}>
//                                     <Card className="recipe-card" onClick={() => handleCardClick(recipe)}>
//                                         <CardBody>
//                                             <Container className='mt-3'>
//                                                 <CardImg
//                                                     top
//                                                     width="100%"
//                                                     src={recipe.image || 'https://via.placeholder.com/300'}
//                                                     alt={recipe.name}
//                                                 />
//                                                 <CardTitle className='mt-3' tag="h5">{recipe.name}</CardTitle>
//                                                 <CardText>
//                                                     <strong>Ingredients:</strong>
//                                                     <div>{recipe.ingredients}</div>
//                                                 </CardText>
//                                                 <CardText>
//                                                     <div className='d-flex justify-content-between'>
//                                                         <div className='d-flex gap-2 align-items-baseline'>
//                                                             <strong>Cuisine:</strong>
//                                                             <p>{recipe.cuisine}</p>
//                                                         </div>
//                                                         <div className='d-flex gap-2 align-items-baseline'>
//                                                             <strong>Rating:</strong>
//                                                             <p>{recipe.rating} ★</p>
//                                                         </div>
//                                                     </div>
//                                                 </CardText>
//                                             </Container>
//                                         </CardBody>
//                                     </Card>
//                                 </Col>
//                             ))}
//                         </Row>
//                     </TabPane>
//                     <TabPane tabId="4">
//                         <Row>
//                             {weekMeals['4'].map((recipe, index) => (
//                                 <Col sm="4" key={index}>
//                                     <Card className="recipe-card" onClick={() => handleCardClick(recipe)}>
//                                         <CardBody>
//                                             <Container className='mt-3'>
//                                                 <CardImg
//                                                     top
//                                                     width="100%"
//                                                     src={recipe.image || 'https://via.placeholder.com/300'}
//                                                     alt={recipe.name}
//                                                 />
//                                                 <CardTitle className='mt-3' tag="h5">{recipe.name}</CardTitle>
//                                                 <CardText>
//                                                     <strong>Ingredients:</strong>
//                                                     <div>{recipe.ingredients}</div>
//                                                 </CardText>
//                                                 <CardText>
//                                                     <div className='d-flex justify-content-between'>
//                                                         <div className='d-flex gap-2 align-items-baseline'>
//                                                             <strong>Cuisine:</strong>
//                                                             <p>{recipe.cuisine}</p>
//                                                         </div>
//                                                         <div className='d-flex gap-2 align-items-baseline'>
//                                                             <strong>Rating:</strong>
//                                                             <p>{recipe.rating} ★</p>
//                                                         </div>
//                                                     </div>
//                                                 </CardText>
//                                             </Container>
//                                         </CardBody>
//                                     </Card>
//                                 </Col>
//                             ))}
//                         </Row>
//                     </TabPane>
//                     <TabPane tabId="5">
//                         <Row>
//                             {weekMeals['5'].map((recipe, index) => (
//                                 <Col sm="4" key={index}>
//                                     <Card className="recipe-card" onClick={() => handleCardClick(recipe)}>
//                                         <CardBody>
//                                             <Container className='mt-3'>
//                                                 <CardImg
//                                                     top
//                                                     width="100%"
//                                                     src={recipe.image || 'https://via.placeholder.com/300'}
//                                                     alt={recipe.name}
//                                                 />
//                                                 <CardTitle className='mt-3' tag="h5">{recipe.name}</CardTitle>
//                                                 <CardText>
//                                                     <strong>Ingredients:</strong>
//                                                     <div>{recipe.ingredients}</div>
//                                                 </CardText>
//                                                 <CardText>
//                                                     <div className='d-flex justify-content-between'>
//                                                         <div className='d-flex gap-2 align-items-baseline'>
//                                                             <strong>Cuisine:</strong>
//                                                             <p>{recipe.cuisine}</p>
//                                                         </div>
//                                                         <div className='d-flex gap-2 align-items-baseline'>
//                                                             <strong>Rating:</strong>
//                                                             <p>{recipe.rating} ★</p>
//                                                         </div>
//                                                     </div>
//                                                 </CardText>
//                                             </Container>
//                                         </CardBody>
//                                     </Card>
//                                 </Col>
//                             ))}
//                         </Row>
//                     </TabPane>
//                 </TabContent>
//             </div>

//             {/* Modal for adding meal */}
//             <Modal size='lg' isOpen={modalOpen} toggle={toggleModal}>
//                 <ModalHeader toggle={toggleModal}>Add a Meal</ModalHeader>
//                 <ModalBody>
//                     {/* Tabs in the Modal */}
//                     <Nav tabs>
//                         <div className='d-flex gap-5'>
//                             <NavItem>
//                                 <NavLink
//                                     active={selectedWeek === '2'}
//                                     onClick={() => handleWeekSelection('2')}
//                                 >
//                                     Week 1
//                                 </NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink
//                                     active={selectedWeek === '3'}
//                                     onClick={() => handleWeekSelection('3')}
//                                 >
//                                     Week 2
//                                 </NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink
//                                     active={selectedWeek === '4'}
//                                     onClick={() => handleWeekSelection('4')}
//                                 >
//                                     Week 3
//                                 </NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink
//                                     active={selectedWeek === '5'}
//                                     onClick={() => handleWeekSelection('5')}
//                                 >
//                                     Week 4
//                                 </NavLink>
//                             </NavItem>
//                         </div>
//                     </Nav>
//                 </ModalBody>
//                 <ModalFooter>
//                     <Button color="secondary" onClick={toggleModal}>Cancel</Button>
//                     <Button color="primary" onClick={handleSaveMeal}>Save Meal</Button>
//                 </ModalFooter>
//             </Modal>
//         </div>
//     );
// };

// export default Body;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './header';
import '../App.css';
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Body = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [recipes, setRecipes] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMeal, setSelectedMeal] = useState(null); // state to store selected meal
    const [selectedWeek, setSelectedWeek] = useState(null); // state to store selected week
    const [weekMeals, setWeekMeals] = useState({
        '2': [], // Week 1
        '3': [], // Week 2
        '4': [], // Week 3
        '5': [], // Week 4
    });


    console.log(weekMeals, 'ssss')

    const getRecords = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/recipes");
            setRecipes(response.data.recipes);
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };

    useEffect(() => {
        getRecords();
    }, []);

    const toggleTab = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const toggleModal = () => setModalOpen(!modalOpen);

    const handleCardClick = (meal) => {
        setSelectedMeal(meal); // Set selected meal when a card is clicked
    };

    const handleSaveMeal = () => {
        if (selectedMeal && selectedWeek) {
            const alreadyAdded = weekMeals[selectedWeek].some(meal => meal.id === selectedMeal.id); // Check if the meal already exists

            if (alreadyAdded) {
                alert('This meal is already added to the selected week!');
                return;
            }

            setWeekMeals((prevMeals) => {
                const updatedMeals = { ...prevMeals };
                updatedMeals[selectedWeek].push(selectedMeal); // Add the selected meal to the selected week
                return updatedMeals;
            });
            setModalOpen(false); // Close the modal after saving
        } else {
            alert('Please select a meal and a week!');
        }
    };

    const handleWeekSelection = (week) => {
        setSelectedWeek(week); // Set selected week when a tab is clicked in the modal
    };

    return (
        <div>
            <Header />
            <div className="main-container">
                <div className="text-center mb-5">
                    <h2 className="display-5">Week Order</h2>
                    <p className="text-muted">Plan your meals for the week</p>
                </div>

                {/* Tabs Section */}
                <div className="centered-tabs">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                active={activeTab === '1'}
                                onClick={() => toggleTab('1')}
                            >
                                All Meals
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={activeTab === '2'}
                                onClick={() => toggleTab('2')}
                            >
                                Week 1
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={activeTab === '3'}
                                onClick={() => toggleTab('3')}
                            >
                                Week 2
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={activeTab === '4'}
                                onClick={() => toggleTab('4')}
                            >
                                Week 3
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={activeTab === '5'}
                                onClick={() => toggleTab('5')}
                            >
                                Week 4
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Button className='align-items-baseline' color='primary' onClick={toggleModal}>
                        Add Meal
                    </Button>
                </div>

                {/* Tab Content */}
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            {recipes.map((recipe) => (
                                <Col sm="4" key={recipe.id}>
                                    <Card 
                                        className={`recipe-card ${selectedMeal?.id === recipe.id ? 'selected' : ''}`} 
                                        onClick={() => handleCardClick(recipe)}
                                    >
                                        <CardBody>
                                            <Container className='mt-3'>
                                                <CardImg
                                                    top
                                                    width="100%"
                                                    src={recipe.image || 'https://via.placeholder.com/300'}
                                                    alt={recipe.name}
                                                />
                                                <CardTitle className='mt-3' tag="h5">{recipe.name}</CardTitle>
                                                <CardText>
                                                    <strong>Ingredients:</strong>
                                                    <div>{recipe.ingredients}</div>
                                                </CardText>
                                                <CardText>
                                                    <div className='d-flex justify-content-between'>
                                                        <div className='d-flex gap-2 align-items-baseline'>
                                                            <strong>Cuisine:</strong>
                                                            <p>{recipe.cuisine}</p>
                                                        </div>
                                                        <div className='d-flex gap-2 align-items-baseline'>
                                                            <strong>Rating:</strong>
                                                            <p>{recipe.rating} ★</p>
                                                        </div>
                                                    </div>
                                                </CardText>
                                            </Container>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </TabPane>

                    {/* Week Tabs - similar for all the weeks */}
                    <TabPane tabId="2">
                        <Row>
                            {weekMeals['2'].map((recipe, index) => (
                                <Col sm="4" key={index}>
                                    <Card className="recipe-card" onClick={() => handleCardClick(recipe)}>
                                        <CardBody>
                                            <Container className='mt-3'>
                                                <CardImg
                                                    top
                                                    width="100%"
                                                    src={recipe.image || 'https://via.placeholder.com/300'}
                                                    alt={recipe.name}
                                                />
                                                <CardTitle className='mt-3' tag="h5">{recipe.name}</CardTitle>
                                                <CardText>
                                                    <strong>Ingredients:</strong>
                                                    <div>{recipe.ingredients}</div>
                                                </CardText>
                                                <CardText>
                                                    <div className='d-flex justify-content-between'>
                                                        <div className='d-flex gap-2 align-items-baseline'>
                                                            <strong>Cuisine:</strong>
                                                            <p>{recipe.cuisine}</p>
                                                        </div>
                                                        <div className='d-flex gap-2 align-items-baseline'>
                                                            <strong>Rating:</strong>
                                                            <p>{recipe.rating} ★</p>
                                                        </div>
                                                    </div>
                                                </CardText>
                                            </Container>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            {weekMeals['3'].map((recipe, index) => (
                                <Col sm="4" key={index}>
                                    <Card className="recipe-card" onClick={() => handleCardClick(recipe)}>
                                        <CardBody>
                                            <Container className='mt-3'>
                                                <CardImg
                                                    top
                                                    width="100%"
                                                    src={recipe.image || 'https://via.placeholder.com/300'}
                                                    alt={recipe.name}
                                                />
                                                <CardTitle className='mt-3' tag="h5">{recipe.name}</CardTitle>
                                                <CardText>
                                                    <strong>Ingredients:</strong>
                                                    <div>{recipe.ingredients}</div>
                                                </CardText>
                                                <CardText>
                                                    <div className='d-flex justify-content-between'>
                                                        <div className='d-flex gap-2 align-items-baseline'>
                                                            <strong>Cuisine:</strong>
                                                            <p>{recipe.cuisine}</p>
                                                        </div>
                                                        <div className='d-flex gap-2 align-items-baseline'>
                                                            <strong>Rating:</strong>
                                                            <p>{recipe.rating} ★</p>
                                                        </div>
                                                    </div>
                                                </CardText>
                                            </Container>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </TabPane>
                    <TabPane tabId="4">
                        <Row>
                            {weekMeals['4'].map((recipe, index) => (
                                <Col sm="4" key={index}>
                                    <Card className="recipe-card" onClick={() => handleCardClick(recipe)}>
                                        <CardBody>
                                            <Container className='mt-3'>
                                                <CardImg
                                                    top
                                                    width="100%"
                                                    src={recipe.image || 'https://via.placeholder.com/300'}
                                                    alt={recipe.name}
                                                />
                                                <CardTitle className='mt-3' tag="h5">{recipe.name}</CardTitle>
                                                <CardText>
                                                    <strong>Ingredients:</strong>
                                                    <div>{recipe.ingredients}</div>
                                                </CardText>
                                                <CardText>
                                                    <div className='d-flex justify-content-between'>
                                                        <div className='d-flex gap-2 align-items-baseline'>
                                                            <strong>Cuisine:</strong>
                                                            <p>{recipe.cuisine}</p>
                                                        </div>
                                                        <div className='d-flex gap-2 align-items-baseline'>
                                                            <strong>Rating:</strong>
                                                            <p>{recipe.rating} ★</p>
                                                        </div>
                                                    </div>
                                                </CardText>
                                            </Container>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </TabPane>
                </TabContent>
            </div>

            {/* Modal for adding meal */}
            <Modal size='lg' isOpen={modalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Add a Meal</ModalHeader>
                <ModalBody>
                    {/* Tabs in the Modal */}
                    <Nav tabs>
                        <div className='d-flex gap-5'>
                            <NavItem>
                                <NavLink
                                    active={selectedWeek === '2'}
                                    onClick={() => handleWeekSelection('2')}
                                >
                                    Week 1
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    active={selectedWeek === '3'}
                                    onClick={() => handleWeekSelection('3')}
                                >
                                    Week 2
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    active={selectedWeek === '4'}
                                    onClick={() => handleWeekSelection('4')}
                                >
                                    Week 3
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    active={selectedWeek === '5'}
                                    onClick={() => handleWeekSelection('5')}
                                >
                                    Week 4
                                </NavLink>
                            </NavItem>
                        </div>
                    </Nav>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                    <Button color="primary" onClick={handleSaveMeal}>Save Meal</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Body;
