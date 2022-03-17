import React from "react";
import styles from "./DesignTools.module.css";

class DesignTools extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { dropdown: null, selected: {}, selectedId: null };
    this.updateStuff = this.updateStuff.bind(this);
    this.deleteElement = this.deleteElement.bind(this);
  }

  componentDidUpdate(prevProps: any) {
    // @ts-expect-error
    const { element } = this.props;
    if (!prevProps.element && element) {
      this.setState({ selected: element });
    } else if (prevProps.element && !element) {
      this.setState({ selected: {} });
    } else if (
      prevProps.element &&
      element &&
      prevProps.element.id !== element.id
    ) {
      this.setState({ selected: element });
    }
  }

  changeValue(attr: any) {
    if (
      attr === "posX" ||
      attr === "posY" ||
      attr === "transparency" ||
      attr === "zIndex"
    ) {
      return (e: any) => {
        // @ts-expect-error
        const { selected } = this.state;
        selected[attr] = e.target.value;
        this.setState({ selected });
      };
    }
    return (e: any) => {
      // @ts-expect-error
      const { selected } = this.state;
      selected.elementableAttributes[attr] = e.target.value;
      this.setState({ selected });
    };
  }

  deleteElement() {
    // @ts-expect-error
    const { selected } = this.state;
    // @ts-expect-error
    const { receiveElement, setSelection } = this.props;
    receiveElement({ ...selected, _destroy: true });
    setSelection(null);
  }

  updateStuff(e: any) {
    e.preventDefault();
    // @ts-expect-error
    const { selected } = this.state;
    // @ts-expect-error
    const { receiveElement } = this.props;
    receiveElement({
      elementableAttributes: { color: selected.elementableAttributes.color },
    });
  }

  render() {
    // @ts-expect-error
    const { selected } = this.state;
    if (Object.keys(selected).length === 0) {
      return (
        <div className={styles.designTools}>
          <span className={styles.nothingSelected}>Nothing Selected</span>
        </div>
      );
    }
    return (
      <div className={styles.designTools}>
        <form className={styles.designForm} onChange={this.updateStuff}>
          <div className={styles.leftNav}>
            {(selected.elementableType === "Text" ||
              selected.elementableType === "Shape") && (
              <label
                className="btn-color"
                style={{
                  backgroundColor: selected.elementableAttributes.color,
                }}
              >
                <input
                  type="color"
                  className={styles.hidden}
                  size={selected.elementableAttributes.color.length + 1}
                  value={selected.elementableAttributes.color}
                  onChange={this.changeValue("color")}
                />
              </label>
            )}
            {selected.elementableType === "Text" ? (
              <React.Fragment>
                <span>Text:</span>
                <input
                  type="text"
                  className="input-attr"
                  size={selected.elementableAttributes.text.length + 1}
                  value={selected.elementableAttributes.text}
                  onChange={this.changeValue("text")}
                />
                <span>Size:</span>
                <input
                  type="text"
                  className="input-attr"
                  size={
                    selected.elementableAttributes.fontSize.toString().length +
                    1
                  }
                  value={selected.elementableAttributes.fontSize}
                  onChange={this.changeValue("fontSize")}
                />
                <span>Font:</span>
                <input
                  type="text"
                  className="input-attr"
                  size={
                    selected.elementableAttributes.fontFamily.toString()
                      .length + 1
                  }
                  value={selected.elementableAttributes.fontFamily}
                  onChange={this.changeValue("fontFamily")}
                />
                <span>Weight:</span>
                <input
                  id="attr-weight"
                  type="text"
                  className="input-attr"
                  size={
                    selected.elementableAttributes.fontWeight.toString()
                      .length + 1
                  }
                  value={selected.elementableAttributes.fontWeight}
                  onChange={this.changeValue("fontWeight")}
                />
              </React.Fragment>
            ) : (
              ""
            )}
          </div>
          <div className={styles.rightNav}>
            <span>Opacity:</span>
            <input
              type="text"
              className="input-attr"
              size={selected.transparency.toString().length + 1}
              value={selected.transparency}
              onChange={this.changeValue("transparency")}
            />
            <span>Order:</span>
            <input
              type="text"
              className="input-attr"
              size={selected.zIndex.toString().length + 1}
              value={selected.zIndex}
              onChange={this.changeValue("zIndex")}
            />
            <button
              type="button"
              className="btn-color"
              onClick={this.deleteElement}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default DesignTools;
