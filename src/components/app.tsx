import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Switch, Route } from 'react-router-dom';
import BrowseContainer from './browse_container';
import EditorContainer from './editor/editor_container';
import ViewerContainer from './editor/viewer_container';
import ExternalImageModalContainer from './modal/external_image_modal_container';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'externalModal' does not exist on type 'R... Remove this comment to see the full error message
    const { externalModal, toggleModal } = this.props;
    return <>
      <div className="main">
        <Switch>
          <Route path="/design/:id" component={EditorContainer} />
          <Route path="/view/:id" component={ViewerContainer} />
          <Route path="/" component={BrowseContainer} />
        </Switch>
      </div>
      <ExternalImageModalContainer
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ active: any; toggleModal: (id: any) => any... Remove this comment to see the full error message
        active={externalModal}
        toggleModal={(id: any) => toggleModal('externalModal', id)}
        external
      />
    </>;
  }
}

export default App;
