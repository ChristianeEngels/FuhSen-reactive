var SearchBar = React.createClass({
    render: function() {
        return (
            <form method="get" role="search" id="form-search" url="loadingResults">
                <label><span>Search_text_field</span></label>
                <input type="search" class="query" name="query" placeholder="Persons, Organizations or Products"/>
                <button type="submit">Go</button>
            </form>
        );
    }
});

React.render(<SearchBar />, document.getElementById('searchbar'));