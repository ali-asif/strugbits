import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './header';
import { 
  Nav, NavItem, NavLink, TabContent, TabPane, 
  Row, Col, Card, CardImg, CardBody, 
  CardTitle, CardText, Button, Container, 
  Modal, ModalHeader, ModalBody, ModalFooter 
} from 'reactstrap';
import { toast } from 'react-toastify';

const Body = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [recipes, setRecipes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [weekMeals, setWeekMeals] = useState({
    '2': [], '3': [], '4': [], '5': []
  });

  const getRecords = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      setRecipes(response.data.recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => { getRecords(); }, []);

  const toggleTab = (tab) => activeTab !== tab && setActiveTab(tab);
  const toggleModal = () => setModalOpen(!modalOpen);

  const handleCardClick = (meal) => setSelectedMeal(meal);

  const handleSaveMeal = () => {
    if (!selectedMeal || !selectedWeek) return;
    
    const isDuplicate = weekMeals[selectedWeek].some(meal => meal.id === selectedMeal.id);
    if (isDuplicate) {
      toast.error('Meal already Exit! Try Different :)');
      return;
    }

    setWeekMeals(prev => ({
      ...prev,
      [selectedWeek]: [...prev[selectedWeek], selectedMeal]
    }));
    setModalOpen(false);
    toast.success("Meal Added Successfully");
  };

  const handleDelete = (week, mealId) => {
    setWeekMeals(prev => ({
      ...prev,
      [week]: prev[week].filter(meal => meal.id !== mealId)
    }));
    toast.success("Meal deleted successfully");
  };

  const renderWeekMeals = (week) => (
    weekMeals[week].map(recipe => (
      <Col xs={12} sm={6} md={3} lg={3} key={recipe.id}>
        <Card className="h-100 shadow-sm">
          <CardBody className="d-flex flex-column">
            <div style={{ 
              position: 'relative', 
              height: '200px', 
              overflow: 'hidden' 
            }}>
              <CardImg
                top
                src={recipe.image || 'https://via.placeholder.com/300'}
                alt={recipe.name}
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%'
                }}
              />
              <Button
                color="danger"
                className="position-absolute top-0 end-0 m-2"
                style={{ 
                  padding: '5px 10px',
                  fontSize: '0.8rem',
                  zIndex: 1
                }}
                onClick={() => handleDelete(week, recipe.id)}
              >
                Delete
              </Button>
            </div>
            <CardTitle className="mt-3 h5">{recipe.name}</CardTitle>
            <CardText className="flex-grow-1">
              <strong>Ingredients:</strong>
              <div className="text-truncate">
                {recipe.ingredients?.join(', ') || 'No ingredients listed'}
              </div>
            </CardText>
            <div className="d-flex justify-content-between small">
              <span>{recipe.cuisine}</span>
              <span>{recipe.rating} ★</span>
            </div>
          </CardBody>
        </Card>
      </Col>
    ))
  );

  return (
    <div className="bg-light">
      {/* <Header /> */}
      <Container fluid="lg" className="py-4">
        <div className="text-center mb-5">
          <h1 className="display-6 mb-2">Weekly Meal Planner</h1>
          <p className="text-muted">Organize your meals for the month</p>
        </div>

        {/* Navigation Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
          <Nav tabs className="flex-wrap">
            <NavItem>
              <NavLink active={activeTab === '1'} onClick={() => toggleTab('1')}>
                All Meals
              </NavLink>
            </NavItem>
            {[2, 3, 4, 5].map(week => (
              <NavItem key={week}>
                <NavLink 
                  active={activeTab === String(week)} 
                  onClick={() => toggleTab(String(week))}
                >
                  Week {week-1}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <Button 
            color="primary" 
            className="align-self-md-center"
            onClick={toggleModal}
          >
            Add Meal
          </Button>
        </div>

        {/* Main Content */}
        <TabContent activeTab={activeTab}>
          {/* All Meals Tab */}
          <TabPane tabId="1">
            <Row className="g-4">
              {recipes.map(recipe => (
                <Col xs={12} sm={6} md={3} lg={3} key={recipe.id}>
                  <Card 
                    className={`h-100 shadow-sm ${selectedMeal?.id === recipe.id ? 'border-primary' : ''}`}
                    onClick={() => handleCardClick(recipe)}
                  >
                    <CardBody className="d-flex flex-column">
                      <div style={{ 
                        height: '200px', 
                        overflow: 'hidden' 
                      }}>
                        <CardImg
                          src={recipe.image || 'https://via.placeholder.com/300'}
                          alt={recipe.name}
                          style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%'
                          }}
                        />
                      </div>
                      <CardTitle className="mt-3 h5">{recipe.name}</CardTitle>
                      <CardText className="flex-grow-1">
                        <strong>Ingredients:</strong>
                        <div className="text-truncate">
                          {recipe.ingredients?.join(', ') || 'No ingredients listed'}
                        </div>
                      </CardText>
                      <div className="d-flex justify-content-between small">
                        <span>{recipe.cuisine}</span>
                        <span>{recipe.rating} ★</span>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </TabPane>

          {/* Week Tabs */}
          {[2, 3, 4, 5].map(week => (
            <TabPane key={week} tabId={String(week)}>
              <Row className="g-4">
                {renderWeekMeals(String(week))}
              </Row>
            </TabPane>
          ))}
        </TabContent>

        {/* Add Meal Modal */}
        <Modal isOpen={modalOpen} toggle={toggleModal} centered>
          <ModalHeader toggle={toggleModal}>Select Week</ModalHeader>
          <ModalBody>
            <Nav className="gap-2">
              {[2, 3, 4, 5].map(week => (
                <NavItem key={week}>
                  <Button
                    color={selectedWeek === String(week) ? 'primary' : 'secondary'}
                    className="w-100"
                    onClick={() => setSelectedWeek(String(week))}
                  >
                    Week {week-1}
                  </Button>
                </NavItem>
              ))}
            </Nav>
          </ModalBody>
          <ModalFooter className="d-flex gap-2">
            <Button color="secondary" onClick={toggleModal} block>
              Cancel
            </Button>
            <Button color="primary" onClick={handleSaveMeal} block>
              Confirm Selection
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    </div>
  );
};

export default Body;