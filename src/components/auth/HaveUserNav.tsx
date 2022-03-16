import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import UserDropDown from './UserDropDown';
import styles from './HaveUserNav.module.css';
import CreateDropDownContainer from './create_drop_down_container';

class HaveUserNav extends React.Component {
  createWrapperRef: any;
  wrapperRef: any;
  constructor(props: any) {
    super(props);
    this.state = { dropDown: null };
    this.setUserWrapperRef = this.setUserWrapperRef.bind(this);
    this.setCreateWrapperRef = this.setCreateWrapperRef.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setUserWrapperRef(node: any) {
    this.wrapperRef = node;
  }

  setCreateWrapperRef(node: any) {
    this.createWrapperRef = node;
  }

  handleClickOutside(event: any) {
    if (this.wrapperRef
      && !this.wrapperRef.contains(event.target)
      && !this.createWrapperRef.contains(event.target)) {
      this.setState({ dropDown: null });
    }
  }

  toggleDropdown(card: any) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'dropDown' does not exist on type 'Readon... Remove this comment to see the full error message
    const { dropDown } = this.state;
    if (dropDown === card) {
      this.setState({ dropDown: null });
    } else {
      this.setState({ dropDown: card });
    }
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'currentUser' does not exist on type 'Rea... Remove this comment to see the full error message
    const { currentUser, logout } = this.props;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'dropDown' does not exist on type 'Readon... Remove this comment to see the full error message
    const { dropDown } = this.state;
    return (
      <>
        <a href="https://github.com/breakfasting" target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn-icon">
            <FiGithub />
          </button>
        </a>
        <a href="https://www.linkedin.com/in/waynesu-an/" target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn-icon">
            <FiLinkedin />
          </button>
        </a>
        <div className={styles.containerRef} ref={this.setCreateWrapperRef}>
          <button type="button" onClick={() => this.toggleDropdown('design')} className="btn-blue ml-8">
            <span className={styles.btnSpan}>Create a design</span>
          </button>
          {dropDown === 'design' ? <CreateDropDownContainer /> : ''}
        </div>
        <div className={`${styles.containerRef} ml-16`} ref={this.setUserWrapperRef}>
          <button type="button" className="btn-none" onClick={() => this.toggleDropdown('user')}>
            <img className={styles.profileImg} src="https://via.placeholder.com/40x40" alt="profile img" />
          </button>
          {dropDown === 'user' ? <UserDropDown currentUser={currentUser} logout={logout} /> : ''}
        </div>
      </>
    );
  }
}

export default HaveUserNav;
