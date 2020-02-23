import React from 'react';

class Search extends React.Component {
    state = {
        value: ''
    }

    handleChange = (e) => {
        this.setState ({ value: e.target.value});
    };

    handleSubmit = (e) => {
        console.log('submitted');
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Search;