class BasicComponent extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.name}
            </div>
        );
    }
}

ReactDOM.render(
    <BasicComponent name="LIZ"/>,
    document.getElementById('basic-example')
);