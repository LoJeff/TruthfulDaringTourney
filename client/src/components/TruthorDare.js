import React, {Component} from 'react';

class TruthorDare extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            "curTargets": null,
            "tarTODChoice": null,
            "isTarget": null,
            "playerList": []
        };

        // functions
        this.submitChoice = this.submitChoice.bind(this);
        this.setTODChoice = this.setTODChoice.bind(this);
    }

    setTODChoice(choice){
        this.setState((choice) => ({
            tarTODChoice: choice
        }))
    }

    componentDidMount(){
        this.props.handlers.updateReact(this);
    }

    submitChoice(){
        //setup emitter
        this.props.emitters.sendTarTODVote(this.state.tarTODChoice)

        // trigger page change
        this.props.triggerPageChange("performToD");
    }

    render(){

        const showUserSpecificScreen = () => {
            if ( this.state.isTarget ){
                return(
                    <div>
                        <p>I am a target wooo</p>
                            <div id="possible_truthordare_set">
                                //have more flushed out hover values?
                            <button className="popButton" onClick={this.setTODChoice("Truth")}>Confess
                            </button>
                            </div>
                            <button className="popButton" onClick={this.setTODChoice("Dare")}>Repent
                        </button>
                    </div> 
                )
            } else {
                return(
                    //figure out how im getting/in what form im getting cur targets
                <p>Sit tight! {this.state.curTargets} are in trial.</p>
                )
            }
        }

        return ( 
        <div>
            <div>
                <h1>TruthorDare</h1>
            </div>

            <div>
                {showUserSpecificScreen}
            </div>

            // TODO: add submit button visual modifiers in this div
            <div>
                <div id="submit_button_container">
					<button className="popButton" type="submit" onClick={this.submitChoice}>Submit
                    </button>
				</div>
            </div>

        </div>

        )
    }
}

export default TruthorDare;