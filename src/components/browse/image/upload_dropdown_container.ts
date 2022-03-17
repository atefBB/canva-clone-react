import { connect } from "react-redux";

import ImageDropdown from "./ImageDropdown";
import {
  updateUpload,
  deleteUpload,
} from "../../../actions/uploaded_image_actions";

const mapDispatchToProps = (dispatch: any) => ({
  updateImage: (uploadedImage: any) => dispatch(updateUpload(uploadedImage)),
  deleteImage: (uploadedImageId: any) =>
    dispatch(deleteUpload(uploadedImageId)),
});

export default connect(null, mapDispatchToProps)(ImageDropdown);
