import {Component} from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: this.props.filter
    }
  }

  static getDerivedStateFromProps(props, prevState) {
    return {
      filter: props.filter
    }
  }

  render() {
    const { setFilter } = this.props;
    return (
      <div className="filter">
        <div onClick={()=>setFilter("NONE")} className={this.state.filter==="NONE"?"active":""}>All</div>
        <div onClick={()=>setFilter("COMPLETED")} className={this.state.filter==="COMPLETED"?"active":""}>Completed</div>
        <div onClick={()=>setFilter("INCOMPLETE")} className={this.state.filter==="INCOMPLETE"?"active":""}>Incomplete</div>
      </div>
    );
  }
}
 
export default Filter;