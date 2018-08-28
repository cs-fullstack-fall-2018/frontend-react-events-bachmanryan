class AddStringByClass extends Component {
    constructor(props){
        super(props);
        this.state = {displayName: this.props.name}
    }

    buttonClick = () => {
        this.setState(
            {
                displayName: this.state.displayName + "blah"
            }
        )
    };

    render(){
        return(
            this.displayName.

        )
    }


}

