var HelloWorld = React.createClass({
    displayName: "Hello World!",
    render: function () {
        return React.createElement("div", null, "First App!");
    }
});

var HelloUser = React.createClass({
    displayName: "Hello User",
    getInitialState: function () {
        return {
            username: "nishars"
        };
    },
    handleChange: function (e) {
        this.setState({
            username: e.target.value
        });
    },
    render: function () {
        return React.createElement("div", null, "Hello ", 
                                   this.state.username,
                                   React.createElement("br"),
                                   "Change Name: ", 
                                   React.createElement("input", {type: "text", value: this.state.username, onChange: this.handleChange}));
    }
});

var FriendList = React.createClass({
    render: function () {
        var list_items =  this.props.friends.map(function (friend) {
            return React.DOM.li(null, friend);
        });

        return React.DOM.div(null, 
                             React.DOM.h3(null, "Friends"), 
                             React.createElement("ul", null, list_items));
    }
});

var AddFriend = React.createClass({
    getInitialState: function () {
        return {
            new_name: ""
        };
    },
    handleAdd: function (e) {
        this.setState({
            new_name: ""
        });
        this.props.addFriend(this.state.new_name);
    },
    newFriendName: function (e) {
        this.setState({
            new_name: e.target.value
        });
    },
    render: function () {
        var input_name = React.DOM.input({
            type: "text",
            value: this.state.new_name,
            onChange: this.newFriendName
        });

        return React.DOM.div(null, 
                             input_name,
                             React.DOM.button({
                                 onClick: this.handleAdd
                             }, "Add"));
    }
});

var FriendsContainer = React.createClass({
    getInitialState: function () {
        return {
            username: "nishars",
            friends: ["zbialecki", "akobren", "maljub"]
        };
    },
    addFriend: function (name) {
        console.log(name);
        var  state = this.state;
        state.friends = state.friends.concat([name]);
        this.setState(state);
    },
    render: function () {
        var child1 = React.DOM.span(null, "Hello ", this.state.username, React.DOM.br());

        var friend_list = React.createElement(FriendList, { 
            friends: this.state.friends
        });

        var add_friend = React.DOM.div(null, "Add Friend: ", 
                                       React.createElement(AddFriend, { addFriend: this.addFriend }));

        return React.createElement("div", null, 
                                   child1,
                                   friend_list,
                                   add_friend);
    }
});

var app = React.createElement(FriendsContainer);

React.render(app, document.getElementById("container"));
