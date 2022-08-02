import React, { FC } from 'react';
import { Link } from "react-router-dom";
import './Homepage.scss';

interface HomepageProps {}

const Homepage: FC<HomepageProps> = () => (
  <div className="Homepage">
    <div className="container">
    <div className="row">
        <div className="col-3 d-none d-md-block">
            <div className="sidebar">
                <div className="sidebar__title text-primary">Tools</div>
                <div className="sidebar__tools">
                    <ul>
                        <li>
                            <Link to={{pathname : "/ggb-editor"}}>Geogebra JS Editor</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col col-md-6">
            <div className="sidebar">
                <div className="sidebar__title text-secondary">Posts</div>
            </div>
        </div>
        <div className="col-3 d-none d-md-block">
            <div className="sidebar">
                <div className="sidebar__title text-success">News</div>
            </div>
        </div>
    </div>
</div>

  </div>
);

export default Homepage;
