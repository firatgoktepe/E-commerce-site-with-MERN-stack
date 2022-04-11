import { Component, Fragment } from 'react'
import { 
    Button,
    NavLink,
 } from 'reactstrap'
import { connect } from 'react-redux'
import { logout } from '../../actions/authActions'
import PropTypes from 'prop-types'

export class Logout extends Component {

    static propTypes = {
        logout: PropTypes.func.isRequired
    }

    render(){
        return(
            <div>
                <Fragment>
                    <Button color="danger" className="btn btn-sm">
                        <NavLink href="#" onClick={this.props.logout}><span className="text-light"><b>Logout</b></span></NavLink>
                    </Button>
                </Fragment>
            </div>
        )
    }
}

export default connect(null, { logout })(Logout)