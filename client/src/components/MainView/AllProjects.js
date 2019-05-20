import React, { Component } from 'react';
import FooterPage from "../../partial/components/footer";
import FixedNavbarExample from '../../partial/components/navbar'
import MediaCard from '../Cards/mediaCard';
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom'

const container={
    minHeight:'500px'
}

class AllProjects extends Component {
    render() {
        return (
            <div>
                <FixedNavbarExample />
                <div className="container project-view " style={container}>
                <Link className="btn btn-default btn-primary mb-4 " to='/add_update'>Add Project</Link>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 g-card">
                            <MediaCard />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 g-card">
                            <MediaCard />
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 g-card">
                            <MediaCard />
                        </div>
                    </div>
                </div>
                <FooterPage />
            </div>
        );
    }
}

export default AllProjects;