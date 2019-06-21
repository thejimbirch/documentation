import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby';
import './style.css';

const propTypes = {
  
}

function TopicGroup(props) {
  const { title, subTitle, docs } = props;
  return (
    <div className="col-md-6 topic-groups">
      {title && <h3>{title}</h3>}
      {subTitle && <p className="topic-info__description">{subTitle}</p>}
      <ul className="topic-docs">
        {docs && docs.map((doc)=>(<li>
          <Link to={doc.url}>
            {doc.icon && <i className={doc.icon}></i>} { doc.text }
          </Link>
        </li>))}
      </ul>
    </div>
  )
}

TopicGroup.propTypes = propTypes

export default TopicGroup