import { connect } from "react-redux";

import AllDesigns from "./AllDesigns";
import { requestOwnedDesigns } from "../../actions/design_actions";

const mapStateToProps = (state: any) => {
  const designs = Object.values(state.entities.designs);
  return {
    folder: { name: "Trash" },
    designs: designs.filter(
      // @ts-expect-error
      (design) => design.userId === state.session.id && design.trash
    ),
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  requestDesigns: () => dispatch(requestOwnedDesigns()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllDesigns);
