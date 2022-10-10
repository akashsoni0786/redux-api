import {
    TopBar,
    ActionList,
    Icon,
    VisuallyHidden,
    Frame,
  } from '@shopify/polaris';
  import {ArrowLeftMinor, QuestionMarkMajor} from '@shopify/polaris-icons';
  import {useState, useCallback} from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { mapDispatchtoprops, mapStatetoprops } from './redux/mapstatedispatch';
  
  function Dashboard(props) {
    const navigate = useNavigate()
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
  
    const loggingout =()=>{
      props.logout_user()
      navigate("/");
      sessionStorage.clear();
    }
    const toggleIsUserMenuOpen = useCallback(
      () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
      [],
    );
  console.log(props)
    const toggleIsSecondaryMenuOpen = useCallback(
      () => setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen),
      [],
    );
  
    const handleSearchResultsDismiss = useCallback(() => {
      setIsSearchActive(false);
      setSearchValue('');
    }, []);
  
    const handleSearchChange = useCallback((value) => {
      setSearchValue(value);
      setIsSearchActive(value.length > 0);
    }, []);
  
    const handleNavigationToggle = useCallback(() => {
      console.log('toggle navigation visibility');
    }, []);
  
    const logo = {
      width: 124,
      topBarSource:
        'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
      url: 'http://jadedpixel.com',
      accessibilityLabel: 'Jaded Pixel',
    };
  
    const userMenuMarkup = (
      <TopBar.UserMenu
        actions={[
          {
            items: [{content: 'Back to Shopify', icon: ArrowLeftMinor}],
          },
          {
            items: [{content: 'Logout',onAction:loggingout}],
          },
        ]}
        name={sessionStorage.getItem("customer_name")}
        detail={sessionStorage.getItem("customer_name")}
        initials={sessionStorage.getItem("customer_name")[0]}
        open={isUserMenuOpen}
        onToggle={toggleIsUserMenuOpen}
      />
    );
  
    const searchResultsMarkup = (
      <ActionList
        items={[{content: 'Shopify help center'}, 
        {content: 'Community forums'}]}
      />
    );
  
    const searchFieldMarkup = (
      <TopBar.SearchField
        onChange={handleSearchChange}
        value={searchValue}
        placeholder="Search"
        showFocusBorder
      />
    );
  
    const secondaryMenuMarkup = (
      <TopBar.Menu
        activatorContent={
          <span>
            <Icon source={QuestionMarkMajor} />
            <VisuallyHidden>Secondary menu</VisuallyHidden>
          </span>
        }
        open={isSecondaryMenuOpen}
        onOpen={toggleIsSecondaryMenuOpen}
        onClose={toggleIsSecondaryMenuOpen}
        actions={[
          {
            items: [{content: 'Community forums'}],
          },
        ]}
      />
    );
  
    const topBarMarkup = (
      <TopBar
        showNavigationToggle
        userMenu={userMenuMarkup}
        secondaryMenu={secondaryMenuMarkup}
        searchResultsVisible={isSearchActive}
        searchField={searchFieldMarkup}
        searchResults={searchResultsMarkup}
        onSearchResultsDismiss={handleSearchResultsDismiss}
        onNavigationToggle={handleNavigationToggle}
      />
    );
  
    return (
      <div style={{height: '250px'}}>
        <Frame topBar={topBarMarkup} logo={logo} />
      </div>
    );
  }
  export default connect(mapStatetoprops,mapDispatchtoprops)(Dashboard)