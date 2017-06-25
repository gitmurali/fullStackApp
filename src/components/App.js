import * as React from "react";
import Header from "./Header";
import ContestPreview from "./ContestPreview";
import axios from 'axios';

class App extends React.Component {

    state = {
        pageHeader: 'Naming Contests',
        contests: []
    }

    componentDidMount() {
        //ajax
        axios.get('/api/contests').then(res => {
            this.setState({
                contests: res.data.contests
            })
        }).catch(
            console.error
        )
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <div>
                    {this.state.contests.map( contest =>
                            <ContestPreview key={contest.id} {...contest} />
                    )}
                </div>
            </div>
        );
    };
}

export default App;