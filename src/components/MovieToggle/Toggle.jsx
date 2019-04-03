import React from "react";
import { connect } from "react-redux";

const Toggle = ({ messageVisibility, dispatch }) => (
  <div>
    {messageVisibility && <p>test to see if redux is toggled</p>}
    <button
      onClick={() =>
        dispatch({
          type: "TOGGLE_MESSAGE"
        })
      }
    >
      Toggle ME
    </button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility
});
export default connect(mapStateToProps)(Toggle);
