import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startLoader, stopLoader} from "../utils/loaderUtils";
import axios from 'axios';
import Header from "./Header";
import SortableTbl from "react-sort-search-table";
import Star from "./Star";
class PlanetDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: props.data, planetsData: [], rendered: false };
        this.handleResponse = this.handleResponse.bind(this);
    }

    componentWillMount() {
        startLoader();
        axios.get("https://swapi.co/api/planets").then(
            res => {
                this.handleResponse(res);
            }
        ).catch(error => {
            stopLoader();
        });

    }

    handleResponse(response) {
        let data = response.data.results;
        console.log(data);
        let tableData = [];
        data.map(function (row, i) {
            tableData.push({
                name: row.name,
                population: row.population,
                surface_water: row.surface_water,
                orbital_period : row.orbital_period,
                climate : row.climate
            });
        });
        this.setState({
            planetsData: tableData,
            rendered : true
        });
        stopLoader();
    }

    render() {

        let col = ["name", "population", "surface_water", "orbital_period", "climate"];
        let tHead = ["Name", "Population", "Surface Water", "Orbital Period", "Climate"];
        return (
            <div className="container">
                <Header {...this.props} />
                {this.state.rendered === true ? (<div className="row">
                    <article className="column">
                        <div className="box-container">
                            <h2 className="mt-10">Planets List</h2>
                            <div className="panel panel-default userPanleList">
                                <div className="panel-body">
                                    <SortableTbl tblData={this.state.planetsData} tHead={tHead}
                                        defaultCSS={false} customTd={[{ custd: Star, keyItem: "name" }]}
                                        dKey={col} />
                                </div>
                            </div>
                        </div>
                    </article>
                </div>) : null}

            </div>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {};
};

PlanetDetails.contextTypes = {
    store: PropTypes.object
};

export default connect(mapStateToProps)(PlanetDetails);
