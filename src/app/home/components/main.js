import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import IconMenu from 'material-ui/IconMenu';

class App extends React.Component {

	state = {
		openDrawer: false
	}

	render(){
		return (
			<MuiThemeProvider>
			  	<div>
			  		<AppBar
					    title="Application Title"
					    onLeftIconButtonTouchTap={(e) => this.setState({openDrawer: this.state.openDrawer ? false : true}) }
					    iconElementRight={<IconMenu
									        iconButtonElement={
									        	<Avatar src="data:image/jpeg;base64,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" />
									        }
									        targetOrigin={{horizontal: 'right', vertical: 'top'}}
									        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
									      >
									        <MenuItem primaryText="Vincent De torres" style={{color: '#00bcd4'}}/>
									        <Divider />
									        <MenuItem primaryText="Help" />
									        <MenuItem primaryText="Sign out" onTouchTap={() => {
									        	sessionStorage.clear()
									        	location.href="/login"
									        }}/>
									      </IconMenu>}
					  />
				    <Drawer open={this.state.openDrawer}>
				    	<List>
					      <Subheader onClick={(e) => {
					      	e.preventDefault()
					      	this.setState({openDrawer: false})
					      }}>Menus</Subheader>
					      <ListItem primaryText="Sent mail"  />
					      <ListItem primaryText="Drafts" />
					      <ListItem
					        primaryText="Inbox"
					        initiallyOpen={true}
					        primaryTogglesNestedList={true}
					        nestedItems={[
					          <ListItem
					            key={1}
					            primaryText="Starred"
					          />,
					          <ListItem
					            key={2}
					            primaryText="Sent Mail"
					            disabled={true}
					            nestedItems={[
					              <ListItem key={1} primaryText="Drafts" />,
					            ]}
					          />,
					        ]}
					      />
					    </List>
				    </Drawer>
				    <div>
				    	{this.props.children}
				    </div>
			  	</div>
			  </MuiThemeProvider>
			)
	}
}

export default App