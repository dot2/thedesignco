FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Home'});
    }
});

FlowRouter.route('/collections', {
    name: 'collections',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Store'});
    }
});

FlowRouter.route('/how', {
    name: 'how',
    action() {
        BlazeLayout.render('MainLayout', {main: 'How'});
    }
});
