import {Component} from 'react';
import { setFilter } from '../redux/actions/actions'
import { connect } from 'react-redux'
class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: this.props.filter
    }
  }

  static getDerivedStateFromProps(props,state) {
    return {
      filter: props.filter
    }
  }

  render() {
    return (
      <div className="filter">
        <div onClick={()=>this.props.setFilter("NONE")} className={this.state.filter==="NONE"?"active":""}>All</div>
        <div onClick={()=>this.props.setFilter("COMPLETED")} className={this.state.filter==="COMPLETED"?"active":""}>Completed</div>
        <div onClick={()=>this.props.setFilter("INCOMPLETE")} className={this.state.filter==="INCOMPLETE"?"active":""}>Incomplete</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filter: state.todosReducer.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setFilter: filter => dispatch(setFilter(filter))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Filter);