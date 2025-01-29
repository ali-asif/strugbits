// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from './header';
// import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from 'reactstrap';

// const Body = () => {
//   const [activeTab, setActiveTab] = useState('1');
//   const [recipes, setRecipes] = useState([]);

//   const getRecords = async () => {
//     try {
//       const response = await axios.get("https://dummyjson.com/recipes");
//       setRecipes(response.data.recipes);
//     } catch (error) {
//       console.error("Error fetching recipes:", error);
//     }
//   };

//   useEffect(() => {
//     getRecords();
//   }, []);

//   const toggleTab = (tab) => {
//     if (activeTab !== tab) setActiveTab(tab);
//   };

//   return (
//     <div>
//       <Header />

//       <style>
//         {`
//           .main-container {
//             max-width: 1200px;
//             margin: 0 auto;
//             padding: 20px;
//           }

//           .centered-tabs {
//             display: flex;
//             justify-content: center;
//             margin: 30px 0;
//             position: relative;
//           }

//           .nav-tabs {
//             border-bottom: none;
//             position: relative;
//             z-index: 1;
//           }

//           .nav-item {
//             margin: 0 15px;
//             position: relative;
//           }

//           .nav-link {
//             border: none !important;
//             background: transparent !important;
//             color: #6c757d !important;
//             font-size: 1.1rem;
//             padding: 15px 25px;
//             transition: all 0.3s ease;
//             position: relative;
//           }

//           .nav-link.active {
//             color: #dc3545 !important;
//             font-weight: 600;
//           }

//           .nav-link.active::after {
//             content: '';
//             position: absolute;
//             left: 0;
//             bottom: -2px;
//             width: 100%;
//             height: 3px;
//             background: #dc3545;
//             border-radius: 2px;
//             animation: underline 0.3s ease;
//           }

//           .nav-link:hover:not(.active) {
//             color: #dc3545 !important;
//           }

//           .recipe-card {
//             padding: 20px;
//             margin: 20px 0;
//             border-radius: 10px;
//             box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//             transition: transform 0.2s;
//           }

//           .recipe-card:hover {
//             transform: translateY(-3px);
//           }

//           @keyframes underline {
//             from { width: 0 }
//             to { width: 100% }
//           }
//         `}
//       </style>

//       <div className="main-container">
//         <div className="text-center mb-5">
//           <h2 className="display-5">Week Order</h2>
//           <p className="text-muted">Plan your meals for the week</p>
//         </div>

//         {/* Tabs Section */}
//         <div className="centered-tabs">
//           <Nav tabs>
//             <NavItem>
//               <NavLink
//                 active={activeTab === '1'}
//                 onClick={() => toggleTab('1')}
//               >
//                 All Meals
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink
//                 active={activeTab === '2'}
//                 onClick={() => toggleTab('2')}
//               >
//                 Week 1
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink
//                 active={activeTab === '3'}
//                 onClick={() => toggleTab('3')}
//               >
//                 Week 2
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink
//                 active={activeTab === '4'}
//                 onClick={() => toggleTab('4')}
//               >
//                 Week 3
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink
//                 active={activeTab === '5'}
//                 onClick={() => toggleTab('5')}
//               >
//                 Custom
//               </NavLink>
//             </NavItem>
//           </Nav>
//         </div>

//         {/* Tab Content */}
//         <TabContent activeTab={activeTab}>
//           <TabPane tabId="1">
//             <Row>
//               <Col>
//                 <div className="recipe-card">
//                   <h4>All Meals</h4>
//                   {recipes.map(recipe => (
//                     <div key={recipe.id} className="mb-4">
//                       <h5>{recipe.name}</h5>
//                       <p>{recipe.ingredients.join(', ')}</p>
//                     </div>
//                   ))}
//                 </div>
//               </Col>
//             </Row>
//           </TabPane>

//           <TabPane tabId="2">
//             <Row>
//               <Col>
//                 <div className="recipe-card">
//                   <h4>Week 1 Recipes</h4>
//                   {recipes.slice(0, 5).map(recipe => (
//                     <div key={recipe.id} className="mb-4">
//                       <h5>{recipe.name}</h5>
//                       <p>Prep: {recipe.prepTimeMinutes}min | Cook: {recipe.cookTimeMinutes}min</p>
//                     </div>
//                   ))}
//                 </div>
//               </Col>
//             </Row>
//           </TabPane>

//           {/* Add similar TabPane sections for other tabs */}

//         </TabContent>
//       </div>
//     </div>
//   );
// };

// export default Body;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './header';
import '../App.css'
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const Body = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [recipes, setRecipes] = useState([]);

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
                    </Nav>
                    <Button className='align-items-baseline' color='primary'>
                        Add Meal
                    </Button>
                </div>

                {/* Tab Content */}
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            {recipes.map((recipe) => (
                                <Col sm="4" key={recipe.id}>
                                    <Card className="recipe-card">
                                        <CardImg
                                            top
                                            width="100%"
                                            src={recipe.image || 'https://via.placeholder.com/300'}
                                            alt={recipe.name}
                                        />
                                        <CardBody>
                                            <CardTitle>{recipe.name}</CardTitle>
                                            <CardText>
                                                <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
                                            </CardText>
                                            <CardText>
                                                <strong>Prep Time:</strong> {recipe.prepTimeMinutes} min
                                            </CardText>
                                            <CardText>
                                                <strong>Cook Time:</strong> {recipe.cookTimeMinutes} min
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </TabPane>

                    <TabPane tabId="2">
                        <Row>
                            {recipes.slice(0, 5).map((recipe) => (
                                <Col sm="4" key={recipe.id}>
                                    <Card className="recipe-card">
                                        <CardImg
                                            top
                                            width="100%"
                                            src={recipe.image || 'https://via.placeholder.com/300'}
                                            alt={recipe.name}
                                        />
                                        <CardBody>
                                            <CardTitle>{recipe.name}</CardTitle>
                                            <CardText>
                                                <strong>Prep Time:</strong> {recipe.prepTimeMinutes} min
                                            </CardText>
                                            <CardText>
                                                <strong>Cook Time:</strong> {recipe.cookTimeMinutes} min
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    );
};

export default Body;
