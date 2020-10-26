import React from 'react';
import './DisplaySuggestions.css';

class DisplaySuggestions extends React.Component {
    render () {
        return (
            <div>
                <div className="modal fade" id="suggestionsModal" tabIndex="-1" aria-labelledby="suggestionsModal" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"/>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="button-container position-absolute">
                    <button className="btn" data-toggle="modal" data-target="#suggestionsModal">
                        <i className="fas fa-plus position-relative"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default DisplaySuggestions;
