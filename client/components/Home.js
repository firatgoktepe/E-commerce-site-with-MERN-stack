import { Component } from 'react';
import AppNavbar from './AppNavbar';
import { connect } from 'react-redux';
import { Card, CardText, CardBody ,CardTitle, CardSubtitle, Button, Container } from 'reactstrap' 
import PropTypes from 'prop-types';
import { getItems } from '../actions/itemActions';
import { addToCart } from '../actions/cartActions';

class Home extends Component {
    componentDidMount(){
        this.props.getItems();
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        addToCart: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired
    }
}